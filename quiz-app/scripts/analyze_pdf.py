"""Analyze PDF pages 28-32 for Q140-170 and image positions."""
import re
import fitz
from pathlib import Path

PDF = Path(__file__).resolve().parents[2] / "questions.pdf"
doc = fitz.open(PDF)

for i in range(27, 32):
    page = doc[i]
    text = page.get_text()
    print(f"\n=== Page {i+1} ===")
    print(text[:2000])
    print("--- images ---")
    for j, img in enumerate(page.get_images(full=True)):
        xref = img[0]
        info = doc.extract_image(xref)
        # get bbox from image blocks
        print(f"  {j}: {info['width']}x{info['height']} {info['ext']}")

    blocks = page.get_text("dict")["blocks"]
    for b in blocks:
        if b.get("type") == 1:  # image block
            print(f"  IMAGE BLOCK bbox: {b['bbox']}")
        elif b.get("type") == 0:
            for line in b.get("lines", []):
                txt = "".join(s["text"] for s in line["spans"])
                if re.search(r"\d+\.", txt):
                    print(f"  TEXT y={line['bbox'][1]:.0f}: {txt[:80]}")

doc.close()
