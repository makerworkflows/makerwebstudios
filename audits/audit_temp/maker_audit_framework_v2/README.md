# Maker Web Studios — Audit Framework V2 (Original Style)

Reproduces the exact visual design of the original AMS audit PDFs:
full-bleed navy cover page with grid overlay, orange MAKER badge,
white headline, grey subtitle, interior pages with navy footer bar,
orange section labels, coloured PASS/WARN/FAIL audit badges, orange
OVERALL row in the scorecard, and the stacked-numeral blind spot layout.

---

## Folder Structure

```
maker_audit_framework_v2/
├── README.md
├── run_all_audits.py          ← configure CLIENT here, then run
├── lib/
│   └── design.py              ← all colours, fonts, layout — never edit per-client
├── templates/
│   ├── audit_01_digital_presence.py
│   ├── audit_02_blind_spot.py
│   ├── audit_03_market_forecast.py
│   ├── audit_04_growth_strategy.py
│   └── audit_05_sales_strategy.py
├── assets/
│   └── Maker_Logo_Official.png
└── output/
    └── (PDFs written here)
```

---

## Quick Start

### 1. Install dependencies (one time)
```bash
pip install reportlab pypdf
```

### 2. Configure the client
Edit the `CLIENT` block at the top of `run_all_audits.py`:
```python
CLIENT = {
    "name":     "Rio Grande Steel, Ltd.",
    "url":      "riograndesteel.com",
    "industry": "Fabricated Reinforcing Steel & Construction Supply",
    "location": "Rio Grande Valley, South Texas",
    "date":     "March 2026",
}
```

### 3. Fill in research
Open each `templates/audit_0X_*.py` file. Every field that needs
client-specific content is marked with `# ← FILL`. Replace the
placeholder text with real findings.

### 4. Run
```bash
python run_all_audits.py
```

Five branded PDFs appear in `output/`.

---

## Design System (lib/design.py)

All visual tokens are defined once in `lib/design.py`. Change here
and every template inherits automatically.

| Token         | Value      | Used for                                      |
|---------------|------------|-----------------------------------------------|
| `C_NAVY`      | `#0e172a`  | Cover bg, footer bar, table headers, badges   |
| `C_ORANGE`    | `#E8601C`  | PASS badge, section labels, CRITICAL, TOC #s  |
| `C_AMBER`     | `#E87722`  | WARN badge, HIGH badge                        |
| `C_RED`       | `#CC3333`  | FAIL badge                                    |
| `C_DKBLUE`    | `#1a1a2e`  | H1 / H2 heading text                          |
| `C_GREY`      | `#6B7B8F`  | Lead paragraph / subtitle text                |
| `C_LGRAY`     | `#F5F5F5`  | Alternating table rows, info boxes            |
| Body font     | Helvetica 9pt | All body copy                              |
| H1            | Helvetica-Bold 26pt | Section titles                      |
| Lead          | Helvetica 12pt `#6B7B8F` | Section subtitles              |

---

## Cover Page Layout

- Full-bleed `#0e172a` navy background
- Subtle grid overlay (lighter navy lines)
- Diagonal lighter navy panel, top-right corner
- Orange MAKER badge + logo, top-left
- Orange doc-type label below badge
- Optional client name line (playbooks only)
- White bold 40pt headline (2 lines)
- Grey 13pt subtitle
- Orange dot • bullet metadata row

## Interior Page Layout

- White page body
- Navy `#0e172a` footer bar, full-width
- MAKER badge in footer, left
- `www.makerwebstudios.com` footer, centre-left
- Confidential notice, footer centre
- Page number, footer right

---

## For Claude Code

Paste this prompt to populate a new client audit:

> "New client: [CLIENT NAME]. URL: [URL]. Industry: [INDUSTRY].
> Location: [CITY, STATE].
>
> Research the company and their website thoroughly. Then:
> 1. Update the CLIENT block in `maker_audit_framework_v2/run_all_audits.py`
> 2. Fill every `# ← FILL` field in all five template files under
>    `maker_audit_framework_v2/templates/`
> 3. Run `python maker_audit_framework_v2/run_all_audits.py`
> 4. Confirm all 5 PDFs are written to `output/`"
