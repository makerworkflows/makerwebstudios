#!/usr/bin/env python3
"""
Refresh public/og_image.png (1200x630) from public/logos/mws_logo_1536x768.png.
Run from project root: python execution/update_og_image.py

Use after replacing mws_logo_1536x768.png with a new version (e.g. spacing fix).
"""
import os
import sys

try:
    from PIL import Image
except ImportError:
    print("Install: pip install Pillow", file=sys.stderr)
    sys.exit(1)

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)
BANNER_PATH = os.path.join(PROJECT_ROOT, "public", "logos", "mws_logo_1536x768.png")
OG_PATH = os.path.join(PROJECT_ROOT, "public", "og_image.png")


def main():
    if not os.path.isfile(BANNER_PATH):
        print(f"Missing {BANNER_PATH}", file=sys.stderr)
        sys.exit(1)
    img = Image.open(BANNER_PATH).convert("RGBA")
    img.thumbnail((1200, 630), Image.Resampling.LANCZOS)
    canvas = Image.new("RGBA", (1200, 630), (255, 255, 255, 255))
    x = (1200 - img.width) // 2
    y = (630 - img.height) // 2
    canvas.paste(img, (x, y), img)
    canvas.convert("RGB").save(OG_PATH, "PNG")
    print(f"Updated {OG_PATH}")


if __name__ == "__main__":
    main()
