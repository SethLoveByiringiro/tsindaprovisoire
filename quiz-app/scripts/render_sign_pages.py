"""Render PDF pages as PNG for pages with signs but no extractable image objects."""
import json
from pathlib import Path
import fitz

ROOT = Path(__file__).resolve().parents[1]
PDF = ROOT.parent / "questions.pdf"
OUT_DIR = ROOT / "public" / "images" / "questions"
MAP_FILE = ROOT / "data" / "question-images.json"

# Pages suspected to hold sign-catalog content (1-indexed)
SIGN_PAGES: dict[int, list[int]] = {
    # Q140-170 gap: check if any page between 31-44 has visual-only signs
}

def main():
    doc = fitz.open(PDF)
    mapping = json.loads(MAP_FILE.read_text(encoding="utf-8"))
    questions = mapping["questions"]

    # Render pages 31-44 at 2x and attach to Q140-170 if not already mapped
    qid = 140
    for page_num in range(31, 45):
        page = doc[page_num - 1]
        if page.get_images():
            continue  # already has extractable images
        text = page.get_text().strip()
        if len(text) > 200:
            continue  # mostly text page
        pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))
        filename = f"q{qid}_page{page_num}.png"
        out = OUT_DIR / filename
        pix.save(str(out))
        rel = f"/images/questions/{filename}"
        questions.setdefault(str(qid), []).append(rel)
        print(f"Rendered page {page_num} -> Q{qid}")
        qid += 1
        if qid > 170:
            break

    mapping["questions"] = questions
    mapping["totalImages"] = sum(len(v) for v in questions.values())
    mapping["questionsWithImages"] = len(questions)
    MAP_FILE.write_text(json.dumps(mapping, indent=2), encoding="utf-8")
    doc.close()

if __name__ == "__main__":
    main()
