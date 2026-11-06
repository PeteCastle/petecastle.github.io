#!/usr/bin/env python3
"""One-time crop of the suit headshot for the About tile.

The source (static/petecastle_frontpage.png, 1000x1000) is a photo baked into a
circle on a transparent background. The largest square inscribed in that
circle is the 704x704 box starting at (148, 148); cropping to it yields a
full-bleed square with no transparent corners.

Usage: python3 scripts/headshot.py [source.png] [out.jpg]
"""
import sys
from pathlib import Path

from PIL import Image

SRC = Path(sys.argv[1] if len(sys.argv) > 1 else "static/petecastle_frontpage.png")
OUT = Path(sys.argv[2] if len(sys.argv) > 2 else "src/assets/photos/headshot-square.jpg")
BOX = (148, 148, 852, 852)  # inscribed square of the 1000px circle

img = Image.open(SRC).convert("RGB")
if img.size != (1000, 1000):
    raise SystemExit(f"expected a 1000x1000 source, got {img.size}")
OUT.parent.mkdir(parents=True, exist_ok=True)
img.crop(BOX).save(OUT, "JPEG", quality=88, optimize=True, progressive=True)
print(f"wrote {OUT} ({OUT.stat().st_size // 1024} KB, {BOX[2]-BOX[0]}x{BOX[3]-BOX[1]})")
