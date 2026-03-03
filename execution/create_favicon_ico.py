#!/usr/bin/env python3
"""
Create favicon.ico from the MWS favicon PNG.
Run from project root: python execution/create_favicon_ico.py

Expects public/mws-favicon-256.png to exist (copy from Cursor assets if needed).
Output: public/favicon.ico (multi-size 16, 32, 48, 64, 256).
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
PNG_PATH = os.path.join(PROJECT_ROOT, "public", "mws-favicon-256.png")
ICO_PATH = os.path.join(PROJECT_ROOT, "public", "favicon.ico")


def main():
    if not os.path.isfile(PNG_PATH):
        print(f"Missing {PNG_PATH}", file=sys.stderr)
        print("Place the MWS favicon PNG (256x256) there, or copy from Cursor assets.", file=sys.stderr)
        sys.exit(1)
    img = Image.open(PNG_PATH).convert("RGBA")
    sizes = [(16, 16), (32, 32), (48, 48), (64, 64), (256, 256)]
    img.save(ICO_PATH, format="ICO", sizes=sizes)
    print(f"Created {ICO_PATH}")


if __name__ == "__main__":
    main()
