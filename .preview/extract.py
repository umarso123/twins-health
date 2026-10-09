import base64
import re
from pathlib import Path

src = Path(r"D:\twins-health\src\assets\images")
out = Path(r"D:\twins-health\.preview")
out.mkdir(exist_ok=True)

pattern = re.compile(r'xlink:href="(data:image/(png|jpeg|jpg);base64,([^"]+))"')

for file in sorted(src.glob("*.svg")):
    text = file.read_text(encoding="utf-8", errors="ignore")
    images = pattern.findall(text)
    print(file.name, "images", len(images))
    for index, (_full, kind, payload) in enumerate(images):
        ext = "jpg" if "jp" in kind else "png"
        dest = out / f"{file.stem.replace(' ', '_')}_{index}.{ext}"
        dest.write_bytes(base64.b64decode(payload))
        print(" ", dest.name, dest.stat().st_size)
