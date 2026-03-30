"""
templates/audit_07_revenue_model.py  —  Maker Audit Framework V2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Revenue Model Playbook — The Revenue Builder System™, Document 7 of 8

Maps the complete revenue architecture: pricing strategy, service tiers,
recurring vs one-time revenue mix, client lifetime value, capacity planning,
and financial projections tied to specific growth milestones.

FILL INSTRUCTIONS: Replace every value marked  # ← FILL
"""

import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))
from lib.design import *

# ══════════════════════════════════════════════════════════════════════════════
# CLIENT CONTENT
# ══════════════════════════════════════════════════════════════════════════════
CONTENT = {
    "client_name": "Empiria Labs",
    "client_url":  "empirialabs.com",
    "industry":    "Analytical Testing & Laboratory Services",
    "date":        "March 2026",
    "meta": "The Revenue Builder System™  ●  March 2026  ●  Prepared by Maker Web Studios",
    "cover_subtitle": "The complete financial architecture — pricing, tiers, LTV, capacity, and projections.",

    # ── Section 1: Current Revenue Reality ────────────────────────────────────
    "current_revenue": (
        "Empiria Labs currently operates on a per-test pricing model with no structured tiers, "
        "no retainer relationships, and no recurring revenue contracts. Each client engagement is transactional — "
        "a sample arrives, it is tested, results are delivered, and payment is collected. There is no contractual "
        "obligation for the client to return. Revenue is entirely dependent on inbound volume, which fluctuates "
        "seasonally with produce harvests and unpredictably with petroleum project timelines."
    ),

    # ── Section 2: Service Tiers ──────────────────────────────────────────────
    "tiers_title": "Recommended Service Tier Architecture",
    "tiers": [
        ("STANDARD TESTING", "Per-Test Pricing", "$150–$500/test", [
            "Individual pesticide, micro, or heavy metals tests",
            "Standard 5–7 business day turnaround",
            "Results delivered via email PDF",
            "No volume commitment required",
            "Best for: first-time clients, small growers, one-off projects",
        ]),
        ("PRIORITY TESTING", "Per-Test + Rush Premium", "$250–$750/test", [
            "Same test menu with 48-hour guaranteed turnaround",
            "Dedicated sample intake priority",
            "Direct phone access to scientific director for questions",
            "Best for: importers with customs deadlines, seasonal surge periods",
        ]),
        ("TESTING PARTNERSHIP", "Monthly Retainer", "$2,000–$5,000/month", [
            "Pre-negotiated test pricing (15–25% below standard rates)",
            "Guaranteed 72-hour turnaround on all routine tests",
            "Monthly compliance summary report",
            "Quarterly trend analysis of results across all samples",
            "Priority scheduling during peak season",
            "Dedicated account contact",
            "Best for: mid-size produce companies with regular testing needs ($5M+ revenue)",
        ]),
        ("ENTERPRISE COMPLIANCE", "Annual Contract", "$25,000–$60,000/year", [
            "Unlimited routine testing within agreed scope",
            "24-hour rush turnaround included",
            "On-site sample collection available",
            "Full FSMA compliance documentation package",
            "Quarterly executive briefing on testing trends and regulatory changes",
            "Named as preferred laboratory in client's food safety plan",
            "Best for: large operations with weekly/daily testing volume",
        ]),
    ],

    # ── Section 3: Revenue Mix ────────────────────────────────────────────────
    "revenue_mix_title": "Target Revenue Mix — Year 2",
    "revenue_mix": [
        ("Standard Testing", "25%", "Transactional", "Entry point — converts to retainers over time"),
        ("Priority Testing", "15%", "Transactional + Premium", "High margin, serves urgent needs"),
        ("Testing Partnerships", "40%", "Recurring Monthly", "Core business — predictable MRR"),
        ("Enterprise Compliance", "15%", "Recurring Annual", "Anchor clients — highest LTV"),
        ("Petroleum Geochemistry", "5%", "Project-Based", "Niche — high value, low volume"),
    ],

    # ── Section 4: Client Lifetime Value ──────────────────────────────────────
    "ltv_title": "Client Lifetime Value by Tier",
    "ltv_table": [
        ("Standard", "$300 avg/test", "4 tests/year", "$1,200/year", "2 years", "$2,400"),
        ("Priority", "$500 avg/test", "6 tests/year", "$3,000/year", "2 years", "$6,000"),
        ("Partnership", "$3,500/month", "12 months", "$42,000/year", "3 years", "$126,000"),
        ("Enterprise", "$42,500/year", "1 contract", "$42,500/year", "5 years", "$212,500"),
    ],

    # ── Section 5: Capacity Planning ──────────────────────────────────────────
    "capacity_title": "Capacity Planning — What the Lab Can Handle",
    "capacity": (
        "Current instrumentation (LC/MS-MS, GC/MS-MS, ICP/OES, ASE-350) can support approximately "
        "40–60 samples per week at current staffing. With the addition of one laboratory technician, "
        "capacity increases to 80–100 samples per week. A second shift adds another 60–80 samples/week.\n\n"
        "At average revenue of $350/sample across the mix:\n"
        "• Current capacity: $14,000–$21,000/week → $728K–$1.09M/year\n"
        "• +1 technician: $28,000–$35,000/week → $1.46M–$1.82M/year\n"
        "• +second shift: $42,000–$49,000/week → $2.18M–$2.55M/year\n\n"
        "The lab is not capacity-constrained today — it is demand-constrained. "
        "The Revenue Builder System addresses demand generation; capacity scales in response."
    ),

    # ── Section 6: Financial Projections ──────────────────────────────────────
    "projections_title": "5-Year Revenue Projections",
    "projections": [
        ("Year 1", "5–8", "$180K–$300K", "Launch website, GBP, first partnerships. 2–3 retainer clients by Q4."),
        ("Year 2", "12–18", "$420K–$650K", "Content marketing driving inbound. 5–7 retainer clients. Priority testing established."),
        ("Year 3", "20–30", "$700K–$1.1M", "First enterprise contract. Petroleum geo contributing. +1 technician hired."),
        ("Year 4", "30–40", "$1.0M–$1.5M", "8–10 retainer clients. Second shift evaluation. Regional reputation established."),
        ("Year 5", "40–50+", "$1.3M–$2.0M", "Market leader in RGV food safety testing. Enterprise contracts with major distributors."),
    ],

    # ── Section 7: Key Metrics ────────────────────────────────────────────────
    "metrics_title": "Key Metrics to Track Monthly",
    "metrics": [
        ("Monthly Recurring Revenue (MRR)", "Sum of all retainer and partnership contracts. Target: 40% of total revenue by Year 2."),
        ("Client Acquisition Cost (CAC)", "Total marketing + sales spend ÷ new clients acquired. Target: under $500/client."),
        ("Average Revenue Per Client (ARPC)", "Total revenue ÷ active clients. Target: $3,000+/month for partnership tier."),
        ("Churn Rate", "Clients lost ÷ total clients per quarter. Target: under 5% quarterly."),
        ("Utilization Rate", "Samples processed ÷ capacity. Target: 70–85% (above 85% = hire)."),
        ("Turnaround Compliance", "% of tests delivered within promised timeframe. Target: 98%+."),
        ("Referral Rate", "% of new clients from referrals. Track to understand organic growth health."),
    ],

    # ── Closing ───────────────────────────────────────────────────────────────
    "closing_quote": (
        "Revenue is not a number — it is a system. The difference between a lab doing $200K and a lab doing $2M "
        "is not the equipment or the accreditation. It is the pricing architecture, the client tier structure, "
        "and the discipline to move transactional relationships into recurring contracts. "
        "Empiria Labs has the credentials. This playbook gives them the financial engine.",
        "Maker Web Studios — The Revenue Builder System™"
    ),
}


# ══════════════════════════════════════════════════════════════════════════════
# BUILD
# ══════════════════════════════════════════════════════════════════════════════
def build(client, logo_path, output_dir):
    C = CONTENT
    client_name = C["client_name"]
    slug = client["slug"]
    out_path = os.path.join(output_dir, f"07_Revenue_Model_Playbook_{slug}.pdf")

    cover_fn = make_cover_template(
        doc_type_label = "REVENUE MODEL PLAYBOOK",
        client_name    = client_name,
        logo_path      = logo_path,
        headline1      = "REVENUE MODEL",
        headline2      = "PLAYBOOK",
        subtitle       = C["cover_subtitle"],
        meta_items     = C["meta"],
    )
    cover_story = [sp(1)]
    interior_fn = make_interior_template(client_name, logo_path)
    S = []

    # ── Section 1: Current Revenue Reality ────────────────────────────────────
    S.append(sp(20))
    S += section_header("01", "Current Revenue Reality", C["current_revenue"])
    S.append(PageBreak())

    # ── Section 2: Service Tiers ──────────────────────────────────────────────
    S += section_header("02", C["tiers_title"],
        "Four tiers designed to capture every buyer — from first-time testers to enterprise compliance contracts.")
    S.append(sp(8))

    for tier_name, model, price, features in C["tiers"]:
        S.append(Paragraph(f"{tier_name}", sH3))
        S.append(Paragraph(f"<b>Model:</b> {model}  |  <b>Price:</b> {price}", sBody))
        S.append(sp(4))
        for feat in features:
            S.append(bullet_item(feat))
        S.append(sp(8))
        S.append(hr())
        S.append(sp(8))

    S.append(PageBreak())

    # ── Section 3: Revenue Mix ────────────────────────────────────────────────
    S += section_header("03", C["revenue_mix_title"],
        "The target mix shifts revenue from transactional to recurring over 24 months.")
    S.append(sp(8))

    headers = ["STREAM", "TARGET %", "TYPE", "NOTES"]
    rows = [(s, p, t, n) for s, p, t, n in C["revenue_mix"]]
    cw = [0.22*CONTENT_W, 0.12*CONTENT_W, 0.20*CONTENT_W, 0.46*CONTENT_W]
    S.append(four_col(headers, rows, cw=cw))
    S.append(PageBreak())

    # ── Section 4: Client Lifetime Value ──────────────────────────────────────
    S += section_header("04", C["ltv_title"],
        "Why retainer clients are worth 50x more than one-time testers.")
    S.append(sp(8))

    ltv_headers = ["TIER", "AVG REVENUE", "FREQUENCY", "ANNUAL", "AVG TENURE", "LIFETIME VALUE"]
    ltv_rows = C["ltv_table"]
    # Use a custom table since we have 6 columns
    header_cells = [Paragraph(f"<b>{h}</b>", sWhtBold) for h in ltv_headers]
    data_rows = []
    for row in ltv_rows:
        data_rows.append([Paragraph(cell, sSmall) for cell in row])

    ltv_cw = [0.13*CONTENT_W, 0.15*CONTENT_W, 0.15*CONTENT_W, 0.17*CONTENT_W, 0.15*CONTENT_W, 0.25*CONTENT_W]
    tbl = Table([header_cells] + data_rows, colWidths=ltv_cw, repeatRows=1)
    style_cmds = [
        ("BACKGROUND", (0, 0), (-1, 0), C_NAVY),
        ("TEXTCOLOR", (0, 0), (-1, 0), C_WHITE),
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("GRID", (0, 0), (-1, -1), 0.5, C_MGRAY),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
    ]
    for idx in range(1, len(data_rows) + 1):
        bg = C_WHITE if idx % 2 == 1 else C_LGRAY
        style_cmds.append(("BACKGROUND", (0, idx), (-1, idx), bg))
    tbl.setStyle(TableStyle(style_cmds))
    S.append(tbl)
    S.append(PageBreak())

    # ── Section 5: Capacity Planning ──────────────────────────────────────────
    S += section_header("05", C["capacity_title"])
    S.append(sp(8))
    for para in C["capacity"].split("\n\n"):
        if para.strip():
            # Handle bullet lines
            lines = para.strip().split("\n")
            for line in lines:
                if line.startswith("•"):
                    S.append(bullet_item(line[1:].strip()))
                else:
                    S.append(Paragraph(line, sBody))
                    S.append(sp(4))
            S.append(sp(6))

    S.append(PageBreak())

    # ── Section 6: Financial Projections ──────────────────────────────────────
    S += section_header("06", C["projections_title"],
        "Conservative-to-optimistic range based on the service tier adoption trajectory.")
    S.append(sp(8))

    proj_headers = ["YEAR", "ACTIVE CLIENTS", "REVENUE RANGE", "KEY MILESTONES"]
    proj_rows = [(y, c, r, m) for y, c, r, m in C["projections"]]
    proj_cw = [0.10*CONTENT_W, 0.15*CONTENT_W, 0.20*CONTENT_W, 0.55*CONTENT_W]
    S.append(four_col(proj_headers, proj_rows, cw=proj_cw))
    S.append(PageBreak())

    # ── Section 7: Key Metrics ────────────────────────────────────────────────
    S += section_header("07", C["metrics_title"],
        "Track these monthly. If any metric is off-target for two consecutive months, investigate immediately.")
    S.append(sp(8))

    met_headers = ["METRIC", "WHAT TO TRACK"]
    met_rows = [(m, d) for m, d in C["metrics"]]
    S.append(two_col(met_headers, met_rows))
    S.append(sp(16))

    # ── Closing ───────────────────────────────────────────────────────────────
    S += pull_quote(*C["closing_quote"])

    # ── Render ────────────────────────────────────────────────────────────────
    build_pdf(out_path, cover_story, S, cover_fn, interior_fn,
              client_name, logo_path)
    return out_path
