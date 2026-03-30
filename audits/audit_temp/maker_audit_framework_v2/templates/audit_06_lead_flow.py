"""
templates/audit_06_lead_flow.py  —  Maker Audit Framework V2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Lead Flow Playbook — The Revenue Builder System™, Document 6 of 8

Maps every channel a buyer uses before they call, scores each channel,
and builds a 90-day lead generation engine with outreach templates,
content calendar, and referral system.

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
    "cover_subtitle": "A complete lead generation engine — every channel, every touchpoint, every conversion path.",

    # ── Section 1: Lead Flow Audit ────────────────────────────────────────────
    "current_state": (
        "Empiria Labs currently has zero intentional lead generation infrastructure. "
        "There is no website content driving inbound traffic, no Google Business Profile optimized for discovery, "
        "no directory listings, no content marketing, no email capture, and no outbound outreach system. "
        "Every client the lab has acquired to date has come through personal relationships and word of mouth. "
        "That channel works — but it does not scale, it cannot be measured, and it disappears when the founder is unavailable."
    ),

    # ── Section 2: Channel Map ────────────────────────────────────────────────
    "channels": [
        ("Google Search (Organic)", "0/10", "CRITICAL", "Zero organic visibility. No service pages, no keywords targeted, no content indexed. Competitors own every relevant search query in South Texas."),
        ("Google Business Profile", "2/10", "CRITICAL", "Profile exists but is unoptimized — missing photos, services, posts, Q&A, and review responses. Not appearing in local pack for any testing-related query."),
        ("Website (Direct)", "1/10", "CRITICAL", "Site is a blank WordPress shell. No conversion mechanism, no service information, no credibility signals. Visitors leave immediately."),
        ("LinkedIn", "5/10", "MEDIUM", "Company page exists with accreditation posts. Jorge has professional presence. Under-leveraged for direct outreach to produce company QA managers."),
        ("Industry Directories", "0/10", "HIGH", "Not listed in A2LA public directory search results, LabCompare, SelectScience, or any laboratory-specific directories."),
        ("Referrals", "6/10", "MEDIUM", "Currently the primary lead source. Working but unmeasured, unstructured, and entirely dependent on founder availability."),
        ("Trade Shows / Events", "3/10", "MEDIUM", "Attended Hart Energy and Viva Fresh EDGE but no follow-up system, no lead capture at events, no post-event nurture sequence."),
        ("Email Marketing", "0/10", "HIGH", "No email list, no newsletter, no automated sequences. Zero ability to nurture leads who are not ready to buy today."),
        ("Social Media (Other)", "1/10", "LOW", "No Facebook, Instagram, Twitter, or YouTube presence. Low priority for B2B laboratory services but represents a gap in brand awareness."),
        ("Paid Advertising", "0/10", "LOW", "No Google Ads, no LinkedIn Ads. Not recommended until organic foundation is built — paid without a converting website wastes budget."),
    ],

    # ── Section 3: Ideal Client Profile ───────────────────────────────────────
    "icp_title": "Ideal Client Profile — Who We Are Targeting",
    "icp_boxes": [
        ("PRIMARY TARGET",
         "QA Manager or Owner at a mid-size produce company ($5M–$50M revenue) in the Rio Grande Valley or Northern Mexico. "
         "Currently shipping samples to Houston or San Antonio, losing 3–5 days of turnaround time. "
         "Needs pesticide residue, microbiological, and/or heavy metals testing for FSMA compliance or buyer requirements."),
        ("SECONDARY TARGET",
         "Cross-border produce importers moving product through the Pharr International Bridge or other RGV ports of entry. "
         "Need US-accredited testing results for customs clearance and retail buyer compliance. "
         "Time-sensitive — every day of delay costs money in perishable inventory."),
        ("TERTIARY TARGET",
         "Oil and gas exploration companies in South Texas and the Permian Basin needing petroleum geochemistry services "
         "(TOC, Pyrolysis, Rock Eval, biomarker analysis). Higher project values, less competition, leverages Jorge's PhD directly."),
    ],

    # ── Section 4: Outreach Templates ─────────────────────────────────────────
    "outreach_title": "Cold Outreach Templates — Ready to Send",
    "outreach_templates": [
        {
            "target": "Produce Company QA Manager",
            "subject": "Quick question about your testing turnaround time",
            "body": (
                "Hi [Name],\n\n"
                "I noticed [Company] ships produce through the RGV corridor. Quick question — are you currently sending samples to Houston or San Antonio for pesticide and micro testing?\n\n"
                "We're the only A2LA-accredited lab (ISO 17025, both chemistry and biological) actually located in the Valley. Most of our produce clients cut 3–5 days off their testing cycle just by dropping samples locally instead of shipping.\n\n"
                "If turnaround time ever costs you money on a shipment, I'd be happy to show you our capabilities. No pitch — just a facility tour and a conversation.\n\n"
                "Best,\nJorge Cortes, PhD\nScientific Director, Empiria Labs\n(956) XXX-XXXX"
            ),
        },
        {
            "target": "Cross-Border Importer",
            "subject": "A2LA-accredited testing in the RGV — same-day sample drop-off",
            "body": (
                "Hi [Name],\n\n"
                "I saw that [Company] imports produce through the Pharr bridge. We work with several importers who used to ship samples to Houston for compliance testing — until they realized we're 15 minutes from the bridge with the same A2LA accreditation.\n\n"
                "Dual-accredited under ISO 17025 for both chemistry and biological testing. Pesticide residue (LC/MS-MS, GC/MS-MS), micro (E. coli, Salmonella, Listeria), heavy metals (ICP/OES), and mycotoxins.\n\n"
                "Would a 10-minute call make sense to see if we can save you time on your next shipment?\n\n"
                "Best,\nJorge Cortes, PhD\nScientific Director, Empiria Labs"
            ),
        },
        {
            "target": "Oil & Gas Exploration Company",
            "subject": "Petroleum geochemistry lab in South Texas — TOC, Pyrolysis, Rock Eval",
            "body": (
                "Hi [Name],\n\n"
                "I'm reaching out because [Company] operates in the South Texas / Permian Basin region and I wanted to introduce our petroleum geochemistry capabilities.\n\n"
                "I hold a PhD in Geosciences with specialization in organic geochemistry. Our lab offers TOC, Pyrolysis, Rock Eval, and biomarker analysis with full A2LA accreditation under ISO 17025.\n\n"
                "Most operators in this region send samples out of state. We're local, accredited, and can turn results faster. Happy to discuss over a call if there's interest.\n\n"
                "Best,\nJorge Cortes, PhD\nScientific Director, Empiria Labs"
            ),
        },
    ],

    # ── Section 5: Content Calendar ───────────────────────────────────────────
    "content_title": "90-Day Content Calendar",
    "content_calendar": [
        ("Month 1", "Foundation Content", [
            "Blog: 'What Is A2LA Accreditation and Why Does It Matter for Your Produce?'",
            "Blog: 'FSMA Produce Safety Rule: What Texas Growers Need to Know in 2026'",
            "LinkedIn post: Lab tour video (60 seconds, show equipment and team)",
            "GBP post: 'Now accepting local sample drop-offs for RGV produce companies'",
        ]),
        ("Month 2", "Authority Content", [
            "Blog: 'Pesticide Residue Testing: LC/MS-MS vs GC/MS-MS — Which Method and When'",
            "Blog: 'How to Prepare Produce Samples for Laboratory Testing (Step-by-Step)'",
            "LinkedIn article: 'The Hidden Cost of Shipping Samples Out of the Valley'",
            "GBP post: Case study — turnaround time comparison (Empiria vs distant labs)",
        ]),
        ("Month 3", "Conversion Content", [
            "Blog: 'Heavy Metals in Produce: New FDA Action Levels and What They Mean for Growers'",
            "Blog: 'Mycotoxin Testing Requirements for Export Produce — 2026 Update'",
            "LinkedIn post: Team spotlight — Jorge's PhD background and what it means for accuracy",
            "Email newsletter launch: monthly testing industry updates to captured leads",
        ]),
    ],

    # ── Section 6: Referral System ────────────────────────────────────────────
    "referral_title": "Structured Referral System",
    "referral_system": (
        "Current referrals are informal and unmeasured. The structured system works in three layers:\n\n"
        "Layer 1 — Ask: After every completed project, send a 'How did we do?' email. If the response is positive, "
        "immediately ask: 'Is there anyone else in the industry who might benefit from local accredited testing?' "
        "Make the ask specific — not 'do you know anyone' but 'do you know a QA manager at another produce company in the Valley?'\n\n"
        "Layer 2 — Incentivize: Offer a 10% discount on the referrer's next testing order for every qualified referral that converts to a client. "
        "This is not a kickback — it is a standard business referral credit.\n\n"
        "Layer 3 — Track: Log every referral source in a simple spreadsheet. "
        "After 90 days, identify which clients generate the most referrals and prioritize those relationships. "
        "The top 3 referral sources should receive quarterly appreciation (handwritten note, small gift, priority scheduling)."
    ),

    # ── Closing ───────────────────────────────────────────────────────────────
    "closing_quote": (
        "Lead flow is not about being everywhere — it is about being exactly where your buyer looks, "
        "with exactly the message they need, at exactly the moment they are deciding. "
        "For Empiria Labs, that means Google, directories, and direct outreach to the 200 produce companies within 50 miles of your front door.",
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
    out_path = os.path.join(output_dir, f"06_Lead_Flow_Playbook_{slug}.pdf")

    cover_fn = make_cover_template(
        doc_type_label = "LEAD FLOW PLAYBOOK",
        client_name    = client_name,
        logo_path      = logo_path,
        headline1      = "LEAD FLOW",
        headline2      = "PLAYBOOK",
        subtitle       = C["cover_subtitle"],
        meta_items     = C["meta"],
    )
    cover_story = [sp(1)]
    interior_fn = make_interior_template(client_name, logo_path)
    S = []

    # ── Section 1: Current State ──────────────────────────────────────────────
    S.append(sp(20))
    S += section_header("01", "Current Lead Flow Assessment", C["current_state"])
    S.append(sp(12))

    # ── Section 2: Channel Map ────────────────────────────────────────────────
    S += section_header("02", "Channel-by-Channel Scorecard",
        "Every channel a buyer uses before they call — scored and prioritized.")
    S.append(sp(8))

    headers = ["CHANNEL", "SCORE", "PRIORITY", "ASSESSMENT"]
    rows = [(ch, sc, pr, det) for ch, sc, pr, det in C["channels"]]
    cw = [0.22*CONTENT_W, 0.08*CONTENT_W, 0.12*CONTENT_W, 0.58*CONTENT_W]
    S.append(four_col(headers, rows, cw=cw))
    S.append(PageBreak())

    # ── Section 3: Ideal Client Profile ───────────────────────────────────────
    S += section_header("03", C["icp_title"])
    S.append(sp(8))
    # Pad to 4 boxes if needed
    boxes = C["icp_boxes"]
    while len(boxes) < 4:
        boxes.append(("", ""))
    S += exec_summary_boxes(boxes)
    S.append(PageBreak())

    # ── Section 4: Outreach Templates ─────────────────────────────────────────
    S += section_header("04", C["outreach_title"],
        "Copy, customize, and send. Each template targets a specific buyer persona.")
    S.append(sp(8))

    for tmpl in C["outreach_templates"]:
        S.append(Paragraph(f"TARGET: {tmpl['target']}", sSmallBold))
        S.append(Paragraph(f"SUBJECT: {tmpl['subject']}", sBodyBold))
        S.append(sp(4))
        for line in tmpl["body"].split("\n"):
            if line.strip():
                S.append(Paragraph(line, sBody))
            else:
                S.append(sp(4))
        S.append(sp(6))
        S.append(hr())
        S.append(sp(6))

    S.append(PageBreak())

    # ── Section 5: Content Calendar ───────────────────────────────────────────
    S += section_header("05", C["content_title"],
        "Three months of content mapped to the buyer journey — from awareness to conversion.")
    S.append(sp(8))

    for month, theme, items in C["content_calendar"]:
        S.append(Paragraph(f"{month} — {theme}", sH3))
        S.append(sp(4))
        for item in items:
            S.append(bullet_item(item))
        S.append(sp(10))

    S.append(PageBreak())

    # ── Section 6: Referral System ────────────────────────────────────────────
    S += section_header("06", C["referral_title"],
        "Turn satisfied clients into a predictable referral engine.")
    S.append(sp(8))

    for para in C["referral_system"].split("\n\n"):
        if para.strip():
            S.append(Paragraph(para.strip(), sBody))
            S.append(sp(6))

    S.append(sp(12))
    S += pull_quote(*C["closing_quote"])

    # ── Render ────────────────────────────────────────────────────────────────
    build_pdf(out_path, cover_story, S, cover_fn, interior_fn,
              client_name, logo_path)
    return out_path
