"""
run_all_audits.py  —  The Revenue Builder System™ by Maker Web Studios
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
USAGE:
  1. Fill the CLIENT block below.
  2. Fill the CONTENT dict in each templates/audit_0X_*.py file.
  3. python run_all_audits.py
  4. Collect PDFs from output/

DEPENDENCY:  pip install reportlab pypdf qrcode
"""

import os, sys, re

# ══════════════════════════════════════════════════════════════════════════════
# CLIENT — edit this block for every new client
# ══════════════════════════════════════════════════════════════════════════════
CLIENT = {
    "name":     "Empiria Labs",
    "url":      "empirialabs.com",
    "industry": "Analytical Testing & Laboratory Services",
    "location": "Edinburg, TX — Rio Grande Valley",
    "date":     "March 2026",
}

LOGO_PATH  = os.path.join(os.path.dirname(__file__), "assets", "Maker_Logo_Official.png")
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "output")

# ══════════════════════════════════════════════════════════════════════════════
def _slug(name):
    return re.sub(r"[\s]+", "_", re.sub(r"[^\w\s-]", "", name).strip())

def _check():
    try:
        import reportlab, pypdf
    except ImportError as e:
        print(f"\n  ✗  Missing dependency: {e}\n     Run: pip install reportlab pypdf qrcode\n")
        sys.exit(1)
    if not os.path.exists(LOGO_PATH):
        print(f"\n  ⚠  Logo not found: {LOGO_PATH}\n     PDFs will render without the logo.\n")
        return None
    return LOGO_PATH

def main():
    logo = _check()
    client = {**CLIENT, "slug": _slug(CLIENT["name"])}
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    print(f"\n{'='*62}")
    print(f"  The Revenue Builder System™ by Maker Web Studios")
    print(f"  Client : {client['name']}")
    print(f"  URL    : {client['url']}")
    print(f"  Output : {OUTPUT_DIR}/")
    print(f"{'='*62}\n")

    template_dir = os.path.join(os.path.dirname(__file__), "templates")
    sys.path.insert(0, template_dir)
    sys.path.insert(0, os.path.dirname(__file__))

    templates = [
        ("audit_01_digital_presence", "01 — Digital Presence Audit"),
        ("audit_02_blind_spot",       "02 — Blind Spot Audit"),
        ("audit_03_market_forecast",  "03 — Market Analysis & 5-Year Forecast"),
        ("audit_04_revenue_growth",   "04 — Revenue Growth Playbook"),
        ("audit_05_revenue_builder",  "05 — Revenue Builder Playbook"),
        ("audit_06_lead_flow",        "06 — Lead Flow Playbook"),
        ("audit_07_revenue_model",    "07 — Revenue Model Playbook"),
        ("audit_08_master_plan_roadmap", "08 — Master Plan Roadmap"),
    ]

    results, errors = [], []
    for module_name, label in templates:
        print(f"  Building: {label}...")
        try:
            if module_name in sys.modules:
                del sys.modules[module_name]
            mod = __import__(module_name)
            out = mod.build(client, logo, OUTPUT_DIR)
            results.append(out)
        except Exception as e:
            import traceback
            errors.append((label, str(e)))
            print(f"  ✗  FAILED: {label}")
            traceback.print_exc()

    print(f"\n{'='*62}")
    if results:
        print(f"  ✓  {len(results)} PDF(s) written to output/")
        for r in results: print(f"       {os.path.basename(r)}")
    if errors:
        print(f"\n  ✗  {len(errors)} error(s):")
        for l, e in errors: print(f"       {l}: {e}")
    print(f"{'='*62}\n")

if __name__ == "__main__":
    main()
