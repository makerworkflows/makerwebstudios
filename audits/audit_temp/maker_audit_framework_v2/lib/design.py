import uuid
"""
lib/design.py  —  Maker Web Studios Audit Framework V2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Exact visual reproduction of the original AMS audit design system.

Design tokens extracted from pixel-accurate inspection of the original PDFs:

COVER PAGE
  • Full-page navy background  #0e172a  with subtle grid overlay
  • Lighter navy diagonal panel  ~#16253d  top-right corner
  • Orange "MAKER" badge  #E8601C  top-left, white bold text 9pt
  • Orange label text below badge  #E8601C  Helvetica-Bold 9pt
  • Large white bold headline  Helvetica-Bold 42pt  ~60% page width
  • Grey subtitle  #9BA8BB  Helvetica 14pt
  • Orange bullet dots + metadata line  9pt
  • Confidential bar at very bottom  white 7pt centered

INTERIOR PAGES
  • White page background
  • Bottom bar: navy rectangle  #0e172a  height ~28pt
    – "MAKER" badge (orange box, white bold text) left side
    – "www.makerwebstudios.com" white 7pt
    – confidential text white 7pt
    – page number right white 7pt

TYPOGRAPHY
  • Section label: "SECTION 01" → orange Helvetica-Bold 8pt
  • H1: Helvetica-Bold 28pt, black  #1a1a2e  (near-black, very dark navy)
  • Lead paragraph: Helvetica 13pt, #6B7B8F (muted blue-grey)
  • Body: Helvetica 9pt, #333333
  • Bold body: Helvetica-Bold 9pt

COLOURS
  NAVY   #0e172a  — cover bg, table headers, footer bar, priority number cells
  ORANGE #E8601C  — PASS badge, section labels, CRITICAL/HIGH badges, TOC numbers, bullet dots
  AMBER  #E87722  — WARN badge
  RED    #CC3333  — FAIL badge  (dark red, not orange)
  LGRAY  #F5F5F5  — alternating table rows, exec summary boxes
  MGRAY  #E0E0E0  — table borders, horizontal rules
  DKBLUE #1a1a2e  — H1 colour
  GREY   #6B7B8F  — lead / subtitle text

AUDIT ITEM ROWS (PASS/WARN/FAIL)
  • 2-col table, no outer border lines visible (light border #E0E0E0)
  • Left col ~13%: coloured pill badge, rounded corners via fill rect
  • Right col: bold title then em-dash then detail, Helvetica 9pt

PRIORITY TABLE ROWS
  • 3 cols: number cell (navy bg, white bold), badge cell (coloured bg white bold), detail text
  • Left two cells are narrow; detail takes most of the width

SCORECARD TABLE
  • Header row: full navy bg, white text Helvetica-Bold 9pt
  • Data rows: alternating white/LGRAY
  • OVERALL row at bottom: orange bg (#E8601C), white bold text
  • Outer border: 1pt #CCCCCC

QUOTE BLOCK
  • Navy bg (#0e172a) full-width, 12pt padding
  • Left orange 4pt accent bar
  • White italic 11pt quote text
  • Attribution in orange 8pt below

TOC
  • "TABLE OF CONTENTS" label: orange Helvetica-Bold 9pt
  • 2-column grid of items
  • Number: orange bold; Title: normal black
  • Subtle box border around each cell

BLIND SPOT PAGE (special layout)
  • Large "0 / 1" stacked orange numerals left margin
  • Bold H2 title
  • Muted subtitle / tag line in grey
  • Three coloured badges inline: Critical/High/Medium + Impact labels
  • 2-column box below: THE BLIND SPOT | THE FIX

GROWTH PLAYBOOK
  • Same cover but adds client name line above main title
  • Interior uses same styles; tables use same navy header
  • Skill cards use a "MARKET DEMAND: X/10" badge block
"""

import os, math
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    HRFlowable, PageBreak, KeepTogether, KeepInFrame,
)
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT
from reportlab.pdfgen import canvas as rl_canvas
from reportlab.lib.utils import ImageReader

def _make_qr_png(url, size_px=80):
    """Generate a QR code PNG in memory for the given URL."""
    import qrcode
    from io import BytesIO
    qr = qrcode.QRCode(version=1, error_correction=qrcode.constants.ERROR_CORRECT_M,
                       box_size=4, border=1)
    qr.add_data(url)
    qr.make(fit=True)
    img = qr.make_image(fill_color="white", back_color=(14, 23, 42))  # white on navy
    buf = BytesIO()
    img.save(buf, format="PNG")
    buf.seek(0)
    return ImageReader(buf)


# ── Page geometry ─────────────────────────────────────────────────────────────
PAGE_W, PAGE_H = letter
MAR_L = MAR_R = 0.65 * inch
MAR_T = 0.65 * inch
MAR_B = 0.55 * inch
CONTENT_W = PAGE_W - MAR_L - MAR_R

# ── Colour palette ────────────────────────────────────────────────────────────
C_NAVY   = colors.HexColor("#0e172a")
C_NAVY2  = colors.HexColor("#16253d")   # lighter panel on cover
C_ORANGE = colors.HexColor("#E8601C")
C_AMBER  = colors.HexColor("#E87722")
C_RED    = colors.HexColor("#CC3333")
C_DKBLUE = colors.HexColor("#1a1a2e")
C_GREY   = colors.HexColor("#6B7B8F")
C_LGRAY  = colors.HexColor("#F5F5F5")
C_MGRAY  = colors.HexColor("#E0E0E0")
C_BODY   = colors.HexColor("#333333")
C_WHITE  = colors.white
C_BLACK  = colors.black

BADGE_COLOURS = {
    "PASS":     C_ORANGE,
    "WARN":     C_AMBER,
    "FAIL":     C_RED,
    "CRITICAL": C_ORANGE,
    "HIGH":     C_AMBER,
    "MEDIUM":   C_NAVY,
}

# ── Base styles ───────────────────────────────────────────────────────────────
_base = getSampleStyleSheet()

def _S(name, **kw):
    parent = kw.pop("parent", "Normal")
    # Unique suffix prevents style registry collisions in multi-section docs
    unique = name + '_' + uuid.uuid4().hex[:8]
    return ParagraphStyle(unique, parent=_base[parent], **kw)

# Public alias for templates
make_style = _S

sSecLabel  = _S("sSecLabel", fontSize=8,  leading=10, fontName="Helvetica-Bold",
                 textColor=C_ORANGE, spaceBefore=0, spaceAfter=2)
sH1        = _S("sH1",       fontSize=26, leading=32, fontName="Helvetica-Bold",
                 textColor=C_DKBLUE, spaceBefore=4, spaceAfter=4)
sH2        = _S("sH2",       fontSize=18, leading=24, fontName="Helvetica-Bold",
                 textColor=C_DKBLUE, spaceBefore=4, spaceAfter=4)
sH3        = _S("sH3",       fontSize=12, leading=16, fontName="Helvetica-Bold",
                 textColor=C_DKBLUE, spaceBefore=6, spaceAfter=3)
sLead      = _S("sLead",     fontSize=12, leading=17, fontName="Helvetica",
                 textColor=C_GREY,   spaceBefore=0, spaceAfter=10)
sBody      = _S("sBody",     fontSize=9,  leading=13, fontName="Helvetica",
                 textColor=C_BODY,   spaceBefore=3, spaceAfter=3)
sBodyBold  = _S("sBodyBold", fontSize=9,  leading=13, fontName="Helvetica-Bold",
                 textColor=C_BODY,   spaceBefore=3, spaceAfter=3)
sSmall     = _S("sSmall",    fontSize=8,  leading=11, fontName="Helvetica",
                 textColor=C_BODY,   spaceBefore=2, spaceAfter=2)
sSmallBold = _S("sSmallB",   fontSize=8,  leading=11, fontName="Helvetica-Bold",
                 textColor=C_BODY,   spaceBefore=2, spaceAfter=2)
sSmallI    = _S("sSmallI",   fontSize=8,  leading=11, fontName="Helvetica-Oblique",
                 textColor=C_BODY,   spaceBefore=2, spaceAfter=2)
sCenter    = _S("sCenter",   fontSize=9,  leading=13, fontName="Helvetica",
                 textColor=C_BODY,   alignment=TA_CENTER)
sCenterBold= _S("sCenterB",  fontSize=9,  leading=13, fontName="Helvetica-Bold",
                 textColor=C_BODY,   alignment=TA_CENTER)
sWhtBold   = _S("sWhtBold",  fontSize=9,  leading=13, fontName="Helvetica-Bold",
                 textColor=C_WHITE,  alignment=TA_CENTER)
sWhtSmall  = _S("sWhtSmall", fontSize=7,  leading=10, fontName="Helvetica",
                 textColor=C_WHITE)
sOrgBold   = _S("sOrgBold",  fontSize=8,  leading=11, fontName="Helvetica-Bold",
                 textColor=C_ORANGE)
sPhase     = _S("sPhase",    fontSize=8,  leading=10, fontName="Helvetica-Bold",
                 textColor=C_ORANGE, spaceBefore=10, spaceAfter=2)
sBullet    = _S("sBullet",   fontSize=9,  leading=13, fontName="Helvetica",
                 textColor=C_BODY,   leftIndent=12, firstLineIndent=-10)

# ── Common helpers ────────────────────────────────────────────────────────────
def sp(h=6):   return Spacer(1, h)
def hr(c=C_MGRAY, thick=0.5):
    return HRFlowable(width="100%", thickness=thick, color=c,
                      spaceBefore=4, spaceAfter=4)

def section_header(num_str, title, lead=None):
    """Orange 'SECTION 01' label, bold H1, optional lead paragraph."""
    out = [
        Paragraph(f"SECTION {num_str}", sSecLabel),
        Paragraph(title, sH1),
    ]
    if lead:
        out.append(Paragraph(lead, sLead))
    return out

def bullet_item(text):
    return Paragraph(f"• {text}", sBullet)

def phase_block(label, title, items):
    """Phase header + bullet list for roadmap."""
    out = [
        Paragraph(label, sPhase),
        Paragraph(title, sH3),
    ]
    for it in items:
        out.append(bullet_item(it))
    out.append(sp(8))
    return out


# ── Table factory helpers ─────────────────────────────────────────────────────
def _tbl_style_base():
    return TableStyle([
        ("BACKGROUND",    (0,0), (-1,0), C_NAVY),
        ("TEXTCOLOR",     (0,0), (-1,0), C_WHITE),
        ("FONTNAME",      (0,0), (-1,0), "Helvetica-Bold"),
        ("FONTSIZE",      (0,0), (-1,0), 8),
        ("ROWBACKGROUNDS",(0,1), (-1,-1), [C_WHITE, C_LGRAY]),
        ("INNERGRID",     (0,0), (-1,-1), 0.5, C_MGRAY),
        ("BOX",           (0,0), (-1,-1), 0.5, C_MGRAY),
        ("TOPPADDING",    (0,0), (-1,-1), 6),
        ("BOTTOMPADDING", (0,0), (-1,-1), 6),
        ("LEFTPADDING",   (0,0), (-1,-1), 8),
        ("RIGHTPADDING",  (0,0), (-1,-1), 8),
        ("VALIGN",        (0,0), (-1,-1), "TOP"),
        ("FONTNAME",      (0,1), (-1,-1), "Helvetica"),
        ("FONTSIZE",      (0,1), (-1,-1), 8),
        ("TEXTCOLOR",     (0,1), (-1,-1), C_BODY),
    ])

def _make_tbl(headers, rows, col_widths):
    hdr  = [Paragraph(h, sWhtBold) for h in headers]
    data = [hdr] + [[Paragraph(str(c), sSmall) for c in r] for r in rows]
    t = Table(data, colWidths=col_widths, repeatRows=1)
    t.setStyle(_tbl_style_base())
    return t

def two_col(headers, rows, cw=None):
    cw = cw or [CONTENT_W*0.30, CONTENT_W*0.70]
    return _make_tbl(headers, rows, cw)

def three_col(headers, rows, cw=None):
    cw = cw or [CONTENT_W/3]*3
    return _make_tbl(headers, rows, cw)

def four_col(headers, rows, cw=None):
    cw = cw or [CONTENT_W/4]*4
    return _make_tbl(headers, rows, cw)


# ── Scorecard table (with special OVERALL row) ────────────────────────────────
def scorecard_table(rows, overall_score, overall_note):
    """
    rows = list of (category, score_str, notes)
    overall_score = float, computed automatically or passed in
    """
    hdr = [Paragraph(h, sWhtBold) for h in ["CATEGORY","SCORE","NOTES"]]
    data = [hdr]
    for cat, score, note in rows:
        data.append([
            Paragraph(cat, sSmall),
            Paragraph(score, _S(f"sc_{cat}", fontSize=8, leading=11,
                                fontName="Helvetica-Bold", alignment=TA_CENTER,
                                textColor=C_BODY)),
            Paragraph(note, sSmall),
        ])
    # OVERALL row
    data.append([
        Paragraph("OVERALL", _S("ov_cat", fontSize=9, leading=13,
                                fontName="Helvetica-Bold", textColor=C_WHITE)),
        Paragraph(f"{overall_score:.1f}/10", _S("ov_sc", fontSize=9, leading=13,
                                fontName="Helvetica-Bold", alignment=TA_CENTER,
                                textColor=C_WHITE)),
        Paragraph(overall_note, _S("ov_n", fontSize=8, leading=11,
                                fontName="Helvetica-Bold", textColor=C_WHITE)),
    ])
    cw = [CONTENT_W*0.24, CONTENT_W*0.10, CONTENT_W*0.66]
    t = Table(data, colWidths=cw, repeatRows=1)
    ts = _tbl_style_base()
    ts.add("BACKGROUND",   (0,-1), (-1,-1), C_ORANGE)
    ts.add("TEXTCOLOR",    (0,-1), (-1,-1), C_WHITE)
    ts.add("FONTNAME",     (0,-1), (-1,-1), "Helvetica-Bold")
    ts.add("ALIGN",        (1, 0), (1, -1), "CENTER")
    t.setStyle(ts)
    return t


# ── Audit item row (PASS / WARN / FAIL) ───────────────────────────────────────
def audit_item(status, title, detail):
    """Coloured pill badge on left, bold title + detail on right."""
    badge_col = BADGE_COLOURS.get(status, C_NAVY)
    icons = {"PASS": "✓ PASS", "WARN": "■ WARN", "FAIL": "✗ FAIL"}
    label = icons.get(status, status)
    badge_style = _S(f"badge_{status}", fontSize=8, leading=10,
                     fontName="Helvetica-Bold", textColor=C_WHITE,
                     alignment=TA_CENTER)
    row = [[
        Paragraph(label, badge_style),
        Paragraph(f"<b>{title}</b> — {detail}", sBody),
    ]]
    t = Table(row, colWidths=[CONTENT_W*0.11, CONTENT_W*0.89])
    t.setStyle(TableStyle([
        ("BACKGROUND",    (0,0), (0,0), badge_col),
        ("BACKGROUND",    (1,0), (1,0), C_WHITE),
        ("BOX",           (0,0), (-1,-1), 0.5, C_MGRAY),
        ("INNERGRID",     (0,0), (-1,-1), 0.5, C_MGRAY),
        ("VALIGN",        (0,0), (-1,-1), "MIDDLE"),
        ("TOPPADDING",    (0,0), (-1,-1), 6),
        ("BOTTOMPADDING", (0,0), (-1,-1), 6),
        ("LEFTPADDING",   (0,0), (0,0),  4),
        ("RIGHTPADDING",  (0,0), (0,0),  4),
        ("LEFTPADDING",   (1,0), (1,0),  8),
        ("RIGHTPADDING",  (1,0), (1,0),  8),
    ]))
    return [t, sp(4)]


# ── Priority fix table ────────────────────────────────────────────────────────
def priority_section_header(badge, label):
    """Orange/amber/navy pill + bold text for section dividers."""
    badge_col = BADGE_COLOURS.get(badge, C_NAVY)
    row = [[
        Paragraph(f"<b>{badge}</b>",
                  _S(f"ph_{badge}", fontSize=8, leading=10,
                     fontName="Helvetica-Bold", textColor=C_WHITE,
                     alignment=TA_CENTER)),
        Paragraph(f"<b>{label}</b>",
                  _S(f"pl_{badge}", fontSize=11, leading=14,
                     fontName="Helvetica-Bold", textColor=C_BODY)),
    ]]
    t = Table(row, colWidths=[CONTENT_W*0.14, CONTENT_W*0.86])
    t.setStyle(TableStyle([
        ("BACKGROUND",    (0,0), (0,0), badge_col),
        ("VALIGN",        (0,0), (-1,-1), "MIDDLE"),
        ("TOPPADDING",    (0,0), (-1,-1), 6),
        ("BOTTOMPADDING", (0,0), (-1,-1), 6),
        ("LEFTPADDING",   (0,0), (0,0),  6),
        ("LEFTPADDING",   (1,0), (1,0),  10),
    ]))
    return [t, sp(8)]

def priority_row(num, badge, detail):
    """Single priority fix row: number cell | badge cell | detail."""
    badge_col = BADGE_COLOURS.get(badge, C_NAVY)
    num_style  = _S(f"pn_{num}", fontSize=11, leading=14,
                    fontName="Helvetica-Bold", textColor=C_WHITE,
                    alignment=TA_CENTER)
    badge_style= _S(f"pb_{badge}", fontSize=8, leading=10,
                    fontName="Helvetica-Bold", textColor=C_WHITE,
                    alignment=TA_CENTER)
    row = [[
        Paragraph(str(num), num_style),
        Paragraph(badge, badge_style),
        Paragraph(detail, sBody),
    ]]
    cw = [CONTENT_W*0.06, CONTENT_W*0.10, CONTENT_W*0.84]
    t = Table(row, colWidths=cw)
    t.setStyle(TableStyle([
        ("BACKGROUND",    (0,0), (0,0), C_NAVY),
        ("BACKGROUND",    (1,0), (1,0), badge_col),
        ("BOX",           (0,0), (-1,-1), 0.5, C_MGRAY),
        ("INNERGRID",     (0,0), (-1,-1), 0.5, C_MGRAY),
        ("VALIGN",        (0,0), (-1,-1), "MIDDLE"),
        ("TOPPADDING",    (0,0), (-1,-1), 7),
        ("BOTTOMPADDING", (0,0), (-1,-1), 7),
        ("LEFTPADDING",   (0,0), (1,0),  4),
        ("LEFTPADDING",   (2,0), (2,0),  8),
        ("RIGHTPADDING",  (2,0), (2,0),  8),
    ]))
    return [t, sp(4)]


# ── Executive summary 2×2 box grid ───────────────────────────────────────────
def exec_summary_boxes(quad):
    """
    quad = [(label, text), (label, text), (label, text), (label, text)]
    Renders as 2x2 grid of grey boxes. Uses Paragraph-only cells (no nested lists).
    """
    cw  = [(CONTENT_W - 8) / 2] * 2

    def _cell(label, text):
        # Combine label+text into a single paragraph with a line break to avoid list-cell issues
        lbl_s = _S(f"ec_lbl_{label[:4]}", fontSize=8, leading=11,
                   fontName="Helvetica-Bold", textColor=C_BODY)
        txt_s = _S(f"ec_txt_{label[:4]}", fontSize=8, leading=13,
                   fontName="Helvetica", textColor=C_BODY, spaceBefore=3)
        return [Paragraph(label, lbl_s), Paragraph(text, txt_s)]

    def _row_ts():
        return TableStyle([
            ("BACKGROUND",    (0,0), (-1,-1), C_LGRAY),
            ("BOX",           (0,0), (-1,-1), 0.5, C_MGRAY),
            ("INNERGRID",     (0,0), (-1,-1), 0.5, C_MGRAY),
            ("VALIGN",        (0,0), (-1,-1), "TOP"),
            ("TOPPADDING",    (0,0), (-1,-1), 10),
            ("BOTTOMPADDING", (0,0), (-1,-1), 10),
            ("LEFTPADDING",   (0,0), (-1,-1), 12),
            ("RIGHTPADDING",  (0,0), (-1,-1), 12),
        ])

    t1 = Table([[_cell(*quad[0]), _cell(*quad[1])]], colWidths=cw)
    t1.setStyle(_row_ts())
    t2 = Table([[_cell(*quad[2]), _cell(*quad[3])]], colWidths=cw)
    t2.setStyle(_row_ts())
    return [t1, sp(4), t2]


# ── Pull quote block ──────────────────────────────────────────────────────────
def pull_quote(text, attribution):
    """Navy background, left orange accent bar, white italic quote.
    Uses Paragraph-only cells to avoid negative-width errors with list cells."""
    q_style = _S("pq_q", fontSize=11, leading=16,
                  fontName="Helvetica-Oblique", textColor=C_WHITE)
    a_style = _S("pq_a", fontSize=8, leading=11,
                  fontName="Helvetica", textColor=C_ORANGE, spaceBefore=4)
    # Right column: two stacked paragraphs (no sp() inside table cell)
    right_cell = [Paragraph(f'"{text}"', q_style), Paragraph(f"— {attribution}", a_style)]
    row = [[Paragraph(""), right_cell]]
    cw = [4, CONTENT_W - 4]
    t = Table(row, colWidths=cw)
    t.setStyle(TableStyle([
        ("BACKGROUND",    (0,0), (-1,-1), C_NAVY),
        ("BACKGROUND",    (0,0), (0,0),   C_ORANGE),
        ("VALIGN",        (0,0), (-1,-1), "TOP"),
        ("TOPPADDING",    (0,0), (-1,-1), 14),
        ("BOTTOMPADDING", (0,0), (-1,-1), 14),
        ("LEFTPADDING",   (1,0), (1,0),   14),
        ("RIGHTPADDING",  (1,0), (1,0),   14),
        ("LEFTPADDING",   (0,0), (0,0),   0),
        ("RIGHTPADDING",  (0,0), (0,0),   0),
    ]))
    return [sp(8), t, sp(8)]


# ── Market context stat tiles row ────────────────────────────────────────────
def stat_tiles(stats):
    """stats = list of (label_top, value_big, label_bottom) — 2-3 tiles.
    Uses Paragraph-only cells to avoid nested-list table errors."""
    n  = len(stats)
    cw = [CONTENT_W / n] * n

    cells = []
    for top, val, bot in stats:
        top_p = Paragraph(top, _S(f"st_top_{top[:4]}", fontSize=7, leading=9,
                           fontName="Helvetica-Bold", textColor=C_ORANGE))
        val_p = Paragraph(val, _S(f"st_val_{val[:4]}", fontSize=11, leading=14,
                           fontName="Helvetica-Bold", textColor=C_DKBLUE,
                           spaceBefore=3))
        bot_p = Paragraph(bot, _S(f"st_bot_{bot[:4]}", fontSize=7, leading=9,
                           fontName="Helvetica", textColor=C_GREY, spaceBefore=3))
        cells.append([top_p, val_p, bot_p])

    t = Table([cells], colWidths=cw)
    t.setStyle(TableStyle([
        ("BACKGROUND",    (0,0), (-1,-1), C_LGRAY),
        ("BOX",           (0,0), (-1,-1), 0.5, C_MGRAY),
        ("INNERGRID",     (0,0), (-1,-1), 0.5, C_MGRAY),
        ("VALIGN",        (0,0), (-1,-1), "TOP"),
        ("TOPPADDING",    (0,0), (-1,-1), 10),
        ("BOTTOMPADDING", (0,0), (-1,-1), 10),
        ("LEFTPADDING",   (0,0), (-1,-1), 10),
        ("RIGHTPADDING",  (0,0), (-1,-1), 10),
    ]))
    return t


# ── TOC ──────────────────────────────────────────────────────────────────────
def build_toc(items):
    """
    items = list of (num_str, title_str)
    Renders as 2-column grid matching original design.
    """
    # Pair items into rows of 2
    rows = []
    for i in range(0, len(items), 2):
        left  = items[i]
        right = items[i+1] if i+1 < len(items) else ("", "")
        def _cell(n, t):
            if not n:
                return Paragraph("", sSmall)
            return [
                Paragraph(
                    f'<font color="#E8601C"><b>{n}</b></font>  {t}',
                    _S(f"toc_{n}", fontSize=9, leading=13,
                       fontName="Helvetica", textColor=C_BODY)),
            ]
        rows.append([_cell(*left), _cell(*right)])
    cw = [(CONTENT_W - 8) / 2] * 2
    t = Table(rows, colWidths=cw)
    t.setStyle(TableStyle([
        ("BOX",           (0,0), (-1,-1), 0.5, C_MGRAY),
        ("INNERGRID",     (0,0), (-1,-1), 0.5, C_MGRAY),
        ("TOPPADDING",    (0,0), (-1,-1), 8),
        ("BOTTOMPADDING", (0,0), (-1,-1), 8),
        ("LEFTPADDING",   (0,0), (-1,-1), 10),
        ("RIGHTPADDING",  (0,0), (-1,-1), 10),
        ("VALIGN",        (0,0), (-1,-1), "MIDDLE"),
    ]))
    return t


# ── Page templates ────────────────────────────────────────────────────────────
def _draw_grid(c, bg=C_NAVY, cols=10, rows=14):
    """Draw the subtle grid overlay used on cover pages."""
    cw = PAGE_W / cols
    rh = PAGE_H / rows
    c.setStrokeColor(colors.HexColor("#1a2d45"))
    c.setLineWidth(0.3)
    for i in range(1, cols):
        c.line(i*cw, 0, i*cw, PAGE_H)
    for j in range(1, rows):
        c.line(0, j*rh, PAGE_W, j*rh)

def _draw_logo_badge(c, x, y, logo_path, size=26):
    """Draw the logo image directly. Orange rect fallback only if no logo file."""
    if logo_path and os.path.exists(logo_path):
        try:
            img = ImageReader(logo_path)
            c.drawImage(img, x, y, width=size, height=size,
                        preserveAspectRatio=True, mask="auto")
            return
        except Exception:
            pass
    # Fallback: orange rect + MAKER text
    c.setFillColor(C_ORANGE)
    c.rect(x, y, size + 12, size + 4, fill=1, stroke=0)
    c.setFillColor(C_WHITE)
    c.setFont("Helvetica-Bold", 8)
    c.drawString(x + 4, y + 10, "MAKER")

def make_cover_template(doc_type_label, client_name, logo_path,
                        headline1, headline2,
                        subtitle, meta_items):
    """Returns a cover page draw function for use with SimpleDocTemplate."""
    def _draw(c, doc):
        c.saveState()
        # Full page navy background
        c.setFillColor(C_NAVY)
        c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
        # Grid
        _draw_grid(c)
        # Lighter diagonal panel top-right ~40% of page
        p = c.beginPath()
        p.moveTo(PAGE_W*0.45, PAGE_H)
        p.lineTo(PAGE_W, PAGE_H)
        p.lineTo(PAGE_W, PAGE_H*0.40)
        p.close()
        c.setFillColor(C_NAVY2)
        c.drawPath(p, fill=1, stroke=0)
        # Logo badge
        _draw_logo_badge(c, MAR_L, PAGE_H - 1.12*inch, logo_path, size=32)
        # Doc type label (orange text)
        c.setFillColor(C_ORANGE)
        c.setFont("Helvetica-Bold", 8)
        c.drawString(MAR_L, PAGE_H - 1.45*inch, doc_type_label.upper())
        # Client line (for playbooks)
        if client_name:
            c.setFillColor(C_WHITE)
            c.setFont("Helvetica-Bold", 11)
            c.drawString(MAR_L, PAGE_H - 1.70*inch, client_name.upper())
            headline_y = PAGE_H - 2.25*inch
        else:
            headline_y = PAGE_H - 1.90*inch
        # Big bold headline
        c.setFillColor(C_WHITE)
        c.setFont("Helvetica-Bold", 40)
        c.drawString(MAR_L, headline_y,        headline1)
        c.drawString(MAR_L, headline_y - 0.58*inch, headline2)
        # Subtitle
        c.setFont("Helvetica", 13)
        c.setFillColor(C_GREY)
        c.drawString(MAR_L, headline_y - 1.05*inch, subtitle)
        # Meta dots row
        dot_y = headline_y - 1.35*inch
        x = MAR_L
        for item in meta_items:
            c.setFillColor(C_ORANGE)
            c.circle(x + 4, dot_y + 4, 3.5, fill=1, stroke=0)
            c.setFillColor(C_WHITE)
            c.setFont("Helvetica", 9)
            c.drawString(x + 12, dot_y, item)
            x += c.stringWidth(item, "Helvetica", 9) + 36
        # Confidential bar at very bottom
        c.setFillColor(C_WHITE)
        c.setFont("Helvetica", 6.5)
        conf = f"CONFIDENTIAL — PREPARED EXCLUSIVELY FOR {client_name.upper() if client_name else 'THE CLIENT'}"
        c.drawCentredString(PAGE_W / 2, 18, conf)
        c.restoreState()
    return _draw

# Pre-render QR code once per document build (cached per URL)
_qr_cache = {}

def _get_qr(url):
    if url not in _qr_cache:
        _qr_cache[url] = _make_qr_png(url)
    return _qr_cache[url]

QR_URL = "https://www.makerwebstudios.com"   # ← change to your preferred landing URL

def make_interior_template(client_name, logo_path):
    """Returns the interior page footer draw function with logo left, URL centre, QR right."""
    def _draw(c, doc):
        c.saveState()
        bar_h = 28                           # slightly taller to fit QR
        logo_size = 22

        # Navy bar
        c.setFillColor(C_NAVY)
        c.rect(0, 0, PAGE_W, bar_h, fill=1, stroke=0)

        # ── Logo — left, no orange box ──────────────────────────────────────
        logo_y = (bar_h - logo_size) / 2     # vertically centred
        _draw_logo_badge(c, MAR_L, logo_y, logo_path, size=logo_size)

        # ── QR code — right side ────────────────────────────────────────────
        qr_size = bar_h - 2                  # nearly full bar height
        qr_x = PAGE_W - MAR_R - qr_size
        try:
            qr_img = _get_qr(QR_URL)
            c.drawImage(qr_img, qr_x, 1, width=qr_size, height=qr_size,
                        preserveAspectRatio=True, mask="auto")
        except Exception:
            pass

        # ── Text block — centred between logo and QR ─────────────────────────
        text_left  = MAR_L + logo_size + 8
        text_right = qr_x - 6
        text_cx    = (text_left + text_right) / 2
        text_y_top = bar_h - 9
        text_y_bot = 5

        c.setFillColor(C_WHITE)
        c.setFont("Helvetica-Bold", 6.5)
        c.drawCentredString(text_cx, text_y_top, "www.makerwebstudios.com")

        conf = f"CONFIDENTIAL — PREPARED EXCLUSIVELY FOR {client_name.upper()}"
        c.setFont("Helvetica", 5.5)
        c.drawCentredString(text_cx, text_y_bot, conf)

        c.restoreState()
    return _draw


# ── Document builder ──────────────────────────────────────────────────────────
def build_pdf(output_path, cover_story, interior_story,
              cover_fn, interior_fn, client_name, logo_path):
    """
    Build a PDF with a full-bleed cover page followed by standard interior pages.
    cover_story    : list of flowables for page 1 (drawn over the cover canvas)
    interior_story : list of flowables for pages 2+
    """
    os.makedirs(os.path.dirname(output_path), exist_ok=True)

    # We use a two-pass approach: cover page has zero margins (full bleed),
    # interior pages have standard margins.
    # SimpleDocTemplate doesn't support per-page margins natively, so we
    # build cover and interior as separate PDFs then merge.

    import tempfile
    from pypdf import PdfWriter, PdfReader

    # ── Cover ─────────────────────────────────────────────────────────────
    cover_path = output_path + "_cover_tmp.pdf"
    doc_cover = SimpleDocTemplate(
        cover_path, pagesize=letter,
        leftMargin=MAR_L, rightMargin=MAR_R,
        topMargin=MAR_T, bottomMargin=0.25*inch,
        title="Cover",
    )
    doc_cover.build(
        cover_story if cover_story else [sp(1)],
        onFirstPage=cover_fn,
        onLaterPages=cover_fn,
    )

    # ── Interior ──────────────────────────────────────────────────────────
    interior_path = output_path + "_interior_tmp.pdf"
    doc_int = SimpleDocTemplate(
        interior_path, pagesize=letter,
        leftMargin=MAR_L, rightMargin=MAR_R,
        topMargin=MAR_T, bottomMargin=0.55*inch,
        title="Interior",
    )
    doc_int.build(
        interior_story,
        onFirstPage=interior_fn,
        onLaterPages=interior_fn,
    )

    # ── Merge ─────────────────────────────────────────────────────────────
    writer = PdfWriter()
    for path in [cover_path, interior_path]:
        reader = PdfReader(path)
        for page in reader.pages:
            writer.add_page(page)
    with open(output_path, "wb") as f:
        writer.write(f)

    # Cleanup
    for tmp in [cover_path, interior_path]:
        try: os.remove(tmp)
        except: pass

    print(f"  ✓  {output_path}")
    return output_path
