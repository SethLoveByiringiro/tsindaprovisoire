"""Sync hasImage flags in questions.ts with question-images.json."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
QUESTIONS = ROOT / "data" / "questions.ts"
MAP = json.loads((ROOT / "data" / "question-images.json").read_text(encoding="utf-8"))["questions"]
MAPPED = {int(k) for k in MAP.keys()}

text = QUESTIONS.read_text(encoding="utf-8")
blocks = re.split(r"(?=\n  \{)", text)
out: list[str] = []
changed = 0

for block in blocks:
    m = re.search(r"id:\s*(\d+)", block)
    if not m:
        out.append(block)
        continue
    qid = int(m.group(1))
    has_img = qid in MAPPED
    has_flag = "hasImage: true" in block

    if has_img and not has_flag:
        new_block, n = re.subn(
            r"(correctAnswer: '[^']+',?)(\n\s*\})",
            r"\1,\n    hasImage: true\2",
            block,
            count=1,
        )
        if n:
            block = new_block
            changed += 1
    elif not has_img and has_flag:
        block = re.sub(r"\n\s*hasImage: true,?\n", "\n", block)
        changed += 1

    out.append(block)

QUESTIONS.write_text("".join(out), encoding="utf-8")
print(f"Updated {changed} hasImage flags. Mapped questions: {len(MAPPED)}")
