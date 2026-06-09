import re, fitz
from pathlib import Path
PDF = Path(__file__).resolve().parents[2] / "questions.pdf"
doc = fitz.open(PDF)
for p in [39, 41, 42, 44, 56, 57, 72, 101, 105]:
    page = doc[p-1]
    print(f"\n=== PAGE {p} RAW ===")
    print(page.get_text()[:1500])
doc.close()
