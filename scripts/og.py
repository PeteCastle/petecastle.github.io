#!/usr/bin/env python3
"""Renders public/og_image.png (1200x630): the hero's white sheet on the Night
canvas, in the site's own faces.

Fonts: pass a directory holding the OFL TrueType files from google/fonts
(BigShouldersDisplay[wght].ttf, Barlow-Medium.ttf, Barlow-SemiBold.ttf), e.g.

    python3 scripts/og.py /path/to/ttf-dir

The output is committed; the site build never runs this.
"""
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

FONT_DIR = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("fonts")
OUT = Path(sys.argv[2]) if len(sys.argv) > 2 else Path("public/og_image.png")

W, H = 1200, 630
NIGHT = (20, 20, 20)
WHITE = (255, 255, 255)
INK_INV = (51, 51, 51)
INK_2 = (89, 89, 89)
SIGNAL = (204, 0, 51)
CUT = 24  # chamfer on the sheet (OG scale of the 16px chamfer-3)

def display(size, weight=800):
    f = ImageFont.truetype(str(FONT_DIR / "BigShouldersDisplay[wght].ttf"), size)
    try:
        f.set_variation_by_axes([weight])
    except Exception:
        f.set_variation_by_name("ExtraBold" if weight >= 800 else "Bold")
    return f

def text_font(size, weight="SemiBold"):
    return ImageFont.truetype(str(FONT_DIR / f"Barlow-{weight}.ttf"), size)

def tracked_width(draw, text, font, tracking):
    return sum(draw.textlength(ch, font=font) for ch in text) + tracking * (len(text) - 1)

def draw_tracked(draw, xy, text, font, fill, tracking, **kw):
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=font, fill=fill, **kw)
        x += draw.textlength(ch, font=font) + tracking

img = Image.new("RGB", (W, H), NIGHT)
d = ImageDraw.Draw(img)

# The sheet: 56px inset, chamfered top-right and bottom-left.
x0, y0, x1, y1 = 56, 56, W - 56, H - 56
d.polygon([(x0, y0), (x1 - CUT, y0), (x1, y0 + CUT), (x1, y1), (x0 + CUT, y1), (x0, y1 - CUT)], fill=WHITE)

pad = 56
cx = x0 + pad
y = y0 + pad

# Eyebrow: crimson rule + tracked label.
eyebrow = "MAKATI, PHILIPPINES  //  PORTFOLIO"
ef = text_font(20, "SemiBold")
d.rectangle([cx, y + 9, cx + 48, y + 12], fill=SIGNAL)
draw_tracked(d, (cx + 64, y), eyebrow, ef, INK_INV, tracking=20 * 0.16)
y += 64

# Name: the largest display size that fits the sheet's inner width on one line.
name = "FRANCIS MARK CAYCO"
inner = (x1 - pad) - cx
size = 170
while size > 96:
    nf = display(size, 800)
    bb = d.textbbox((0, 0), name, font=nf)
    tracking = size * 0.01
    if tracked_width(d, name, nf, tracking) <= inner:
        break
    size -= 2
# Draw aligned to the glyph top.
draw_tracked(d, (cx - bb[0], y - bb[1]), name, nf, INK_INV, tracking)
y += (bb[3] - bb[1]) + 22

# Role line, outlined: fill in the sheet colour, 2px ink stroke.
role = "DATA SCIENTIST · ETL DEVELOPER"
rsize = int(size * 0.5)
rf = display(rsize, 800)
rb = d.textbbox((0, 0), role, font=rf)
draw_tracked(d, (cx - rb[0], y - rb[1]), role, rf, WHITE, rsize * 0.01, stroke_width=2, stroke_fill=INK_INV)

# Bottom row: the FM tile (the sheet's one crimson spot) and the domain.
ts = 56
tx, ty = cx, y1 - pad - ts
s = ts / 48
d.polygon([(tx, ty), (tx + 32 * s, ty), (tx + 48 * s, ty + 16 * s), (tx + 48 * s, ty + 48 * s), (tx + 16 * s, ty + 48 * s), (tx, ty + 32 * s)], fill=SIGNAL)
ms = 0.28571 * s
mx, my = tx + 6.0 * s, ty + 5.714 * s
def mono(points):
    d.polygon([(mx + px * ms, my + py * ms) for px, py in points], fill=WHITE)
mono([(8, 8), (48, 8), (56, 16), (56, 28), (32, 28), (32, 46), (42, 46), (42, 66), (32, 66), (32, 92), (16, 92), (8, 84)])
mono([(50, 36), (74, 36), (74, 120), (58, 120), (50, 112)])
mono([(94, 36), (110, 36), (118, 44), (118, 120), (94, 120)])
mono([(54, 36), (74, 36), (84, 64), (94, 36), (114, 36), (94, 92), (74, 92)])

df = text_font(24, "Medium")
domain = "franciscayco.com"
dw = d.textlength(domain, font=df)
d.text((x1 - pad - dw, ty + ts / 2 - 14), domain, font=df, fill=INK_2)

OUT.parent.mkdir(parents=True, exist_ok=True)
img.save(OUT, "PNG", optimize=True)
print(f"wrote {OUT} ({OUT.stat().st_size // 1024} KB), name at {size}px")
