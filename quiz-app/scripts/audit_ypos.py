"""Audit Y-positions of text and images on PDF pages."""
import re
import fitz
from pathlib import Path

PDF = Path(__file__).resolve().parents[2] / "questions.pdf"


def audit_page(doc, pn):
    page = doc[pn - 1]
    print(f"\n=== PAGE {pn} ===")
    items = []
    for block in page.get_text("dict")["blocks"]:
        if block.get("type") == 0:
            for line in block.get("lines", []):
                text = "".join(s["text"] for s in line["spans"]).strip()
                if text:
                    items.append(("T", line["bbox"][1], text[:70]))
        elif block.get("type") == 1:
            w = block["bbox"][2] - block["bbox"][0]
            h = block["bbox"][3] - block["bbox"][1]
            items.append(("I", block["bbox"][1], f"img {w:.0f}x{h:.0f}"))
    items.sort(key=lambda x: x[1])
    for t, y, s in items:
        print(f"  y={y:6.1f} [{t}] {s}")


def main():
    doc = fitz.open(PDF)
    for p in [51, 73, 102, 65, 70]:
        audit_page(doc, p)
    doc.close()


if __name__ == "__main__":
    main()
