"""
templates/audit_06_master_checklist.py  —  Maker Audit Framework V2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Master Implementation Checklist — consolidates all action items from
the 5 audit documents into a phased 90-day roadmap with checkboxes.

FILL INSTRUCTIONS: Replace every value in CONTENT with client-specific data.
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
    "meta": "Master Implementation Checklist  ●  March 2026  ●  Prepared by Maker Web Studios",

    "intro": (
        "This checklist consolidates every critical action item identified across all five audit documents into a single, phased implementation roadmap. "
        "Each item is mapped to its source audit and prioritized by impact. Complete Phase 1 before moving to Phase 2 — the sequence matters because each phase builds the foundation for the next."
    ),

    "phases": [
        {
            "name": "FOUNDATION",
            "timeline": "Days 1–30",
            "description": "Build the digital infrastructure that everything else depends on. Without these, no other investment produces returns.",
            "items": [
                ("Build complete website with homepage, services, about, certifications, and contact pages", "Digital Presence"),
                ("Deploy A2LA accreditation badges (Chemistry 6041.01 + Biological 6041.02) on homepage hero, every page footer, and dedicated certifications page", "Blind Spot"),
                ("Build online sample submission / contact form as primary conversion tool", "Digital Presence"),
                ("Display phone number and email in header and footer of every page — click-to-call on mobile", "Blind Spot"),
                ("Set up Google Analytics 4 and Google Search Console", "Digital Presence"),
                ("Claim, verify, and fully optimize Google Business Profile with photos, services, hours, and description", "Digital Presence"),
                ("Add 'A2LA accredited' and 'ISO 17025' to homepage meta title and description", "Blind Spot"),
                ("Install SSL monitoring and uptime alerting", "Digital Presence"),
            ],
        },
        {
            "name": "CREDIBILITY",
            "timeline": "Days 31–60",
            "description": "Establish trust signals that convert visitors into leads. These items address the blind spots that cause qualified buyers to choose competitors.",
            "items": [
                ("Build individual service pages for Pesticide Residue, Microbiological Testing, Heavy Metals, and Mycotoxin Analysis", "Blind Spot"),
                ("Add analytical methods (LC/MS-MS, GC/MS-MS, ICP/OES), turnaround times, and sample requirements to each service page", "Blind Spot"),
                ("Build Team / About page with Jorge Cortes PhD credentials and Sarai Cortes business development background", "Blind Spot"),
                ("Include professional headshots and bios emphasizing technical qualifications", "Blind Spot"),
                ("Add conference appearances (Hart Energy, Viva Fresh EDGE) and industry recognition as credibility markers", "Blind Spot"),
                ("Commission professional laboratory photography — equipment, facility, team at work", "Digital Presence"),
                ("Add proximity advantage messaging: 'Local Sample Drop-Off' for RGV produce companies", "Blind Spot"),
                ("Create comparison content showing Empiria turnaround time vs shipping to Houston/San Antonio", "Blind Spot"),
                ("Register in laboratory directories (A2LA directory, LabCompare, SelectScience)", "Digital Presence"),
            ],
        },
        {
            "name": "GROWTH",
            "timeline": "Days 61–90",
            "description": "Drive inbound leads and begin outbound outreach. The foundation and credibility from Phases 1–2 make these efforts convert.",
            "items": [
                ("Optimize each service page for local search: 'Edinburg TX,' 'Rio Grande Valley,' 'South Texas,' 'RGV'", "Blind Spot"),
                ("Implement XML sitemap and robots.txt for proper search engine crawling", "Digital Presence"),
                ("Start content marketing: monthly articles on FSMA compliance, pesticide testing, import regulations", "Digital Presence"),
                ("Build direct relationships with produce association leaders in the RGV", "Growth Strategy"),
                ("Launch outreach to mid-size produce companies ($5M–$50M) in the RGV corridor", "Growth Strategy"),
                ("Target cross-border produce importers (Mexico to US) needing US regulatory expertise", "Growth Strategy"),
                ("Develop referral program for existing clients", "Growth Strategy"),
                ("Create 'Service Area' page with map showing proximity to major produce regions and border crossings", "Blind Spot"),
            ],
        },
        {
            "name": "SCALE",
            "timeline": "Days 91+",
            "description": "With infrastructure, credibility, and lead flow established, focus on offer optimization, recurring revenue, and market expansion.",
            "items": [
                ("Implement the named offer: 'The 72-Hour Certified Analysis Program for RGV Produce Companies'", "Sales Strategy"),
                ("Deploy the guarantee stack: facility visit guarantee (30 days) + turnaround guarantee (90 days)", "Sales Strategy"),
                ("Target organic produce growers seeking certification — premium testing, higher willingness to pay", "Growth Strategy"),
                ("Pursue retail supply chain auditors (Walmart, HEB, Kroger suppliers)", "Growth Strategy"),
                ("Explore petroleum geochemistry vertical leveraging Jorge's PhD", "Growth Strategy"),
                ("Publish educational content positioning Empiria as RGV authority: webinars, whitepapers, guides", "Sales Strategy"),
                ("Build case studies from first 5–10 clients showing turnaround savings and compliance outcomes", "Sales Strategy"),
                ("Evaluate second shift or weekend capacity to capture rush testing premium pricing", "Market Forecast"),
            ],
        },
    ],

    "closing": (
        "This checklist represents the complete roadmap from digital invisibility to market leadership. "
        "The items are sequenced so that each phase creates the conditions for the next to succeed. "
        "Phase 1 is non-negotiable — skip it and everything else underperforms. "
        "Execute with discipline and Empiria Labs will be the first lab a South Texas produce company finds, trusts, and calls."
    ),
}


# ══════════════════════════════════════════════════════════════════════════════
# BUILD
# ══════════════════════════════════════════════════════════════════════════════
def build(client, logo_path, output_dir):
    C = CONTENT
    client_name = C["client_name"]
    slug = client["slug"]
    out_path = os.path.join(output_dir, f"06_Master_Implementation_Checklist_{slug}.pdf")

    # ── Cover ─────────────────────────────────────────────────────────────────
    cover_fn = make_cover_template(
        doc_type_label = "MASTER CHECKLIST",
        client_name    = None,
        logo_path      = logo_path,
        headline1      = "SUCCESS",
        headline2      = "IMPLEMENTATION\nCHECKLIST",
        subtitle       = f"{client_name} — The Complete Action Roadmap",
        meta_items     = C["meta"],
    )
    cover_story = []

    # ── Interior ──────────────────────────────────────────────────────────────
    interior_fn = make_interior_template(client_name, logo_path)
    S = []

    # ── Intro page ────────────────────────────────────────────────────────────
    S.append(sp(20))
    S.append(Paragraph("HOW TO USE THIS CHECKLIST", sSecLabel))
    S.append(sp(4))
    S.append(Paragraph("Master Implementation Checklist", sH1))
    S.append(sp(4))
    S.append(Paragraph(C["intro"], sLead))
    S.append(sp(12))

    # Quick stats
    total_items = sum(len(p["items"]) for p in C["phases"])
    stats = [
        ("TOTAL", str(total_items), "Action Items"),
        ("PHASES", str(len(C["phases"])), "Phases"),
        ("TIMELINE", "90+", "Days"),
        ("SOURCES", "5", "Audits"),
    ]
    S.append(stat_tiles(stats))
    S.append(sp(20))

    # ── TOC ───────────────────────────────────────────────────────────────────
    toc_items = []
    for i, phase in enumerate(C["phases"], 1):
        toc_items.append((str(i).zfill(2), f"Phase {i}: {phase['name']}"))
    toc_items.append((str(len(C["phases"]) + 1).zfill(2), "Summary & Next Steps"))
    S.append(build_toc(toc_items))
    S.append(PageBreak())

    # ── Phase sections ────────────────────────────────────────────────────────
    for pi, phase in enumerate(C["phases"], 1):
        S += section_header(
            f"{pi:02d}",
            f"Phase {pi}: {phase['name']}",
            f"{phase['timeline']} — {phase['description']}"
        )
        S.append(sp(8))

        # Build checklist table
        headers = ["#", "ACTION ITEM", "SOURCE", "✓"]
        rows = []
        for idx, (task, source) in enumerate(phase["items"], 1):
            rows.append([str(idx), task, source, "☐"])

        cw = [0.06 * CONTENT_W, 0.58 * CONTENT_W, 0.24 * CONTENT_W, 0.12 * CONTENT_W]
        tbl = four_col(headers, rows, cw=cw)
        S.append(tbl)
        S.append(sp(8))

        # Item count
        S.append(Paragraph(
            f"<b>{len(phase['items'])} items</b> — Complete all before advancing to the next phase.",
            sSmallBold
        ))

        if pi < len(C["phases"]):
            S.append(PageBreak())

    # ── Closing ───────────────────────────────────────────────────────────────
    S.append(PageBreak())
    S += section_header(
        f"{len(C['phases']) + 1:02d}",
        "Summary & Next Steps",
        C["closing"]
    )
    S.append(sp(16))
    S += pull_quote(
        f"This checklist is your contract with yourself. {total_items} items. {len(C['phases'])} phases. 90 days. "
        f"The credentials are earned. The capability is proven. The only thing left is execution.",
        "Maker Web Studios"
    )

    # ── Render ────────────────────────────────────────────────────────────────
    build_pdf(out_path, cover_story, S, cover_fn, interior_fn,
              client_name, logo_path)
    return out_path
