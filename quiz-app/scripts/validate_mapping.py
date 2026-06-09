"""Compare hasImage flags in questions.ts with question-images.json."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
QUESTIONS = ROOT / "data" / "questions.ts"
MAP = json.loads((ROOT / "data" / "question-images.json").read_text(encoding="utf-8"))["questions"]

text = QUESTIONS.read_text(encoding="utf-8")
has_image_ids = {int(m.group(1)) for m in re.finditer(r"id:\s*(\d+)[\s\S]*?hasImage:\s*true", text)}
mapped_ids = {int(k) for k in MAP.keys()}

print("hasImage=true but NO extracted images:", sorted(has_image_ids - mapped_ids))
print("Has images but hasImage NOT set:", sorted(mapped_ids - has_image_ids))
print(f"\nhasImage count: {len(has_image_ids)}, mapped count: {len(mapped_ids)}")
