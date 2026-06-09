"""
Extract images from questions.pdf and map them to question IDs by layout zones.
Outputs to public/images/questions/ and data/question-images.json
"""
import json
import re
import hashlib
from pathlib import Path

import fitz

ROOT = Path(__file__).resolve().parents[1]
PDF = ROOT.parent / "questions.pdf"
OUT_DIR = ROOT / "public" / "images" / "questions"
MAP_FILE = ROOT / "data" / "question-images.json"

# Pages with images but no question OCR — assign images to these IDs in top-to-bottom order
PAGE_QUESTION_FALLBACK: dict[int, list[int]] = {
    69: [304, 305],
    71: [308],
    80: [337],
}

# Override entire page when OCR produces bogus question numbers (e.g. "8." instead of 409)
PAGE_FORCE_MAPPING: dict[int, list[int]] = {
    105: [409, 410, 411],
}

# Questions whose option-image grids span pages (carry pending to next page)
OPTION_GRID_CARRY = {224, 235, 236, 249, 266}


def parse_question_id(text: str) -> int | None:
    text = text.strip()
    m = re.match(r"^(\d{1,3})\.\s*", text) or re.match(r"^(\d{1,3})\.", text)
    if not m:
        return None
    qid = int(m.group(1))
    return qid if 1 <= qid <= 433 else None


def is_page_header(qid: int, y: float, text: str) -> bool:
    """Skip page numbers like '44' at top of page (no dot, short line)."""
    if "." in text[:6]:
        return False
    return y < 50 and len(text.strip()) <= 4


def question_blocks(page: fitz.Page, page_num: int) -> list[dict]:
    items: list[dict] = []
    seen_at_y: set[tuple[int, int]] = set()

    for block in page.get_text("dict")["blocks"]:
        if block.get("type") != 0:
            continue
        for line in block.get("lines", []):
            text = "".join(s["text"] for s in line["spans"]).strip()
            if not text:
                continue
            qid = parse_question_id(text)
            if qid is None:
                continue
            if is_page_header(qid, line["bbox"][1], text):
                continue
            y_key = (qid, int(line["bbox"][1] // 10))
            if y_key in seen_at_y:
                continue
            seen_at_y.add(y_key)
            items.append({"id": qid, "y": line["bbox"][1]})

    items.sort(key=lambda x: x["y"])

    if items:
        high = [q["id"] for q in items if q["id"] >= 200]
        if high:
            items = [q for q in items if q["id"] >= 50 or q["id"] in high]

    return items


def image_blocks(page: fitz.Page, doc: fitz.Document) -> list[dict]:
    """One entry per image placement (supports multiple rects for the same xref)."""
    items: list[dict] = []
    seen_keys: set[tuple] = set()

    def add_placement(xref, y: float, x: float, info: dict) -> None:
        w, h = info["width"], info["height"]
        if w < 60 or h < 60:
            return
        key = (xref, round(y), round(x))
        if key in seen_keys:
            return
        seen_keys.add(key)
        items.append({
            "xref": xref,
            "y": y,
            "x": x,
            "width": w,
            "height": h,
            "ext": info["ext"],
            "bytes": info["image"],
        })

    for block in page.get_text("dict")["blocks"]:
        if block.get("type") != 1:
            continue
        xref = block.get("image")
        if xref is None:
            continue
        try:
            info = doc.extract_image(xref)
        except Exception:
            continue
        bbox = block["bbox"]
        add_placement(xref, bbox[1], bbox[0], info)

    for xref, *_ in page.get_images(full=True):
        try:
            info = doc.extract_image(xref)
        except Exception:
            continue
        rects = page.get_image_rects(xref)
        if not rects:
            continue
        for r in rects:
            add_placement(xref, r.y0, r.x0, info)

    return sorted(items, key=lambda x: (x["y"], x["x"]))


def assign_zone(q_blocks: list[dict], img: dict) -> int:
    """Image belongs to the last question whose text starts at or above the image."""
    assigned = q_blocks[0]["id"]
    for q in q_blocks:
        if q["y"] <= img["y"] + 25:
            assigned = q["id"]
        else:
            break
    return assigned


def assign_images(
    q_blocks: list[dict],
    imgs: list[dict],
    page_num: int,
    prev_pending_qid: int | None,
    prev_last_qid: int | None,
) -> tuple[list[tuple[int, dict]], int | None]:
    """Return (pairs, pending_qid for next page)."""
    if not imgs:
        return [], prev_pending_qid

    imgs = sorted(imgs, key=lambda x: (x["y"], x["x"]))

    if page_num in PAGE_FORCE_MAPPING:
        forced = PAGE_FORCE_MAPPING[page_num]
        pairs = [(forced[i], img) for i, img in enumerate(imgs) if i < len(forced)]
        return pairs, None

    if not q_blocks:
        fallback = PAGE_QUESTION_FALLBACK.get(page_num, [])
        pairs = [(fallback[i], img) for i, img in enumerate(imgs) if i < len(fallback)]
        return pairs, None

    pairs: list[tuple[int, dict]] = []
    first_q_y = q_blocks[0]["y"]

    for img in imgs:
        # Continuation from previous page: images above the first question on this page
        if img["y"] < first_q_y - 10 and img["y"] < 250:
            carry = prev_pending_qid or prev_last_qid
            if carry:
                pairs.append((carry, img))
                continue

        qid = assign_zone(q_blocks, img)
        pairs.append((qid, img))

    last_q = q_blocks[-1]["id"]
    last_q_y = q_blocks[-1]["y"]
    last_img_y = imgs[-1]["y"]
    count_for_last = sum(1 for q, _ in pairs if q == last_q)

    if last_q in OPTION_GRID_CARRY and count_for_last > 0 and last_img_y > last_q_y - 30:
        pending = last_q
    elif prev_pending_qid and any(
        img["y"] < first_q_y - 10 and img["y"] < 250 for img in imgs
    ):
        pending = None
    else:
        pending = None

    return pairs, pending


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for f in OUT_DIR.glob("*"):
        f.unlink()

    doc = fitz.open(PDF)
    mapping: dict[str, list[str]] = {}
    hash_to_path: dict[str, str] = {}
    pending_qid: int | None = None
    prev_last_qid: int | None = None

    for page_idx in range(doc.page_count):
        page = doc[page_idx]
        page_num = page_idx + 1
        q_blocks = question_blocks(page, page_num)
        imgs = image_blocks(page, doc)
        carry_qid = prev_last_qid

        if not imgs:
            if q_blocks:
                prev_last_qid = q_blocks[-1]["id"]
            elif not q_blocks:
                pending_qid = None
            continue

        pairs, pending_qid = assign_images(
            q_blocks, imgs, page_num, pending_qid, carry_qid
        )

        if q_blocks:
            prev_last_qid = q_blocks[-1]["id"]

        for qid, img in pairs:
            content_hash = hashlib.md5(img["bytes"]).hexdigest()[:12]
            key = str(qid)

            if content_hash in hash_to_path:
                rel_path = hash_to_path[content_hash]
            else:
                ext = img["ext"] if img["ext"] in ("png", "jpg", "jpeg", "webp") else "png"
                if ext == "jpeg":
                    ext = "jpg"
                existing = mapping.get(key, [])
                suffix = f"_{len(existing)}" if existing else ""
                filename = f"q{key}{suffix}.{ext}"
                (OUT_DIR / filename).write_bytes(img["bytes"])
                rel_path = f"/images/questions/{filename}"
                hash_to_path[content_hash] = rel_path

            paths = mapping.setdefault(key, [])
            if rel_path not in paths:
                paths.append(rel_path)
            print(
                f"Page {page_num}: {rel_path.split('/')[-1]} -> Q{qid} "
                f"({img['width']}x{img['height']})"
            )

    doc.close()

    output = {
        "questions": mapping,
        "totalImages": sum(len(v) for v in mapping.values()),
        "questionsWithImages": len(mapping),
    }
    MAP_FILE.write_text(json.dumps(output, indent=2), encoding="utf-8")
    print(f"\nDone: {output['totalImages']} images for {output['questionsWithImages']} questions")


if __name__ == "__main__":
    main()
