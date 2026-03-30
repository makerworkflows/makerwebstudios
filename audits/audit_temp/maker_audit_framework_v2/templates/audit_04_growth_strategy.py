"""
templates/audit_04_growth_strategy.py  —  Maker Audit Framework V2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Growth Strategy & Value Playbook — matches original AMS growth playbook:
  • Cover: client name line above the main headline (unique to playbooks)
  • Part 1: Current Position — service ranking table + strategic question boxes
  • Part 2: Top Capabilities (skill cards with demand/scarcity/scalable badges)
  • Part 3: Prospect Outreach Messages
  • Part 4: Client Onboarding Questionnaire
  • Part 5: Proposal Template
  • Part 6: Client Results & ROI document

FILL INSTRUCTIONS: Replace every value marked  # ← FILL
"""

import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))
from lib.design import *

CONTENT = {
    "client_name":  "Empiria Labs, LLC",
    "client_short": "Empiria Labs",
    "industry":     "Analytical Testing Laboratory — Food Safety & Petroleum Geochemistry",
    "date":         "March 2026",
    "meta": ["Prepared for Empiria Labs, LLC", "March 2026", "Prepared by Maker Web Studios"],
    "cover_subtitle": "Positioning, Prospecting, and Building a Testing Pipeline That Scales",
    "service_table": [
        ("Pesticide residue analysis (LC/MS-MS, GC/MS-MS)",  "QA managers, FSMA compliance officers at produce companies.", "HIGHEST — Core revenue driver. Every produce company shipping through the RGV needs this. Recurring, non-discretionary."),
        ("Microbiological testing (pathogens + indicators)",  "Food safety directors, produce company owners.",              "HIGHEST — Required for FSMA compliance and retailer audits. Often bundled with pesticide testing."),
        ("Heavy metals quantification (ICP/OES)",             "Organic producers, baby food suppliers, export companies.",   "HIGH — Growing demand from consumer awareness and tightening regulatory standards (Prop 65, FDA)."),
        ("Mycotoxin analysis",                                "Grain handlers, spice importers, produce companies.",         "MEDIUM — Specialized. Project-based during harvest or import cycles. Border crossing rush testing capability."),
        ("Petroleum geochemistry (TOC, Pyrolysis, Rock Eval)","Oil & gas exploration companies, geological survey firms.",   "MEDIUM — Separate revenue stream. Higher per-project value. Leverages Jorge Cortes' PhD directly."),
        ("Environmental monitoring program design",           "Produce facility QA managers and food safety directors.",      "HIGH — Consulting-adjacent. Relationship deepener. Recurring revenue from sampling plan management."),
    ],
    "strategic_q_title": "The Real Strategic Question: Lead With Food Safety or Lead With Full-Service Lab?",
    "strategic_boxes": [
        ("THE CASE FOR FOOD SAFETY LEADERSHIP",
         "Empiria's dual A2LA accreditation for both chemistry and biological testing is the credential that no other South Texas lab can match. Leading with food safety testing positions Empiria as THE accredited local lab for the RGV produce corridor — a $28B+ global market growing at 7.2% CAGR. RECOMMENDED FOCUS: Dual-accredited food safety testing authority for South Texas produce companies."),
        ("THE CASE FOR KEEPING ALL SEGMENTS",
         "Petroleum geochemistry provides natural diversification against agricultural sector volatility and leverages Jorge's PhD directly. Environmental monitoring deepens client relationships. VERDICT: Lead publicly with food safety testing and dual accreditation. Let petroleum geochemistry and environmental monitoring come through the improved website and Jorge's existing industry networks."),
    ],
    "roi_table": [
        ("#1", "Mid-size produce companies ($5M-$50M) in the RGV", "Highest volume, most testing frequency, strongest proximity advantage, recurring monthly contracts worth $2,000-$10,000+/month."),
        ("#2", "Cross-border produce importers (Mexico to US)", "Need both US and Latin American regulatory expertise. Empiria's bilingual capability and location near international bridges create a unique offering."),
        ("#3", "Organic produce growers seeking certification", "Premium testing requirements, willing to pay more for accredited results, growing market segment at 10%+ annually."),
        ("#4", "Retail supply chain auditors (Walmart, HEB, Kroger suppliers)", "Retailer requirements are tightening. Suppliers need accredited labs to maintain shelf access. Non-discretionary recurring testing."),
        ("#5", "Oil & gas exploration companies in South Texas", "Leverages Jorge's PhD directly, higher project values, less price-sensitive, but lower frequency. Natural revenue diversification."),
    ],
    "skills": [
        {
            "title":          "Pesticide Residue Analysis Using Multi-Residue LC/MS-MS and GC/MS-MS Methods",
            "demand":         "9/10",
            "scarcity":       "HIGH (dual-accredited pesticide testing is scarce in South Texas — national labs require shipping)",
            "scalable":       "YES",
            "who_pays": [
                "QA managers and food safety directors at produce companies who need accredited pesticide residue data to release shipments.",
                "FSMA compliance officers who need documented testing for regulatory audit readiness.",
                "Export compliance officers who need results that satisfy both US and international standards.",
            ],
            "problem_solved": "Growers currently ship samples to Houston and wait 5-7 days for results. During peak harvest, this delay can cost thousands in held inventory. Local accredited testing at Empiria cuts turnaround to 2-3 days with same-day sample acceptance — eliminating shipping time entirely.",
            "engagement_table": [
                ("Multi-residue pesticide screen (200+ compounds)", "Full LC/MS-MS and GC/MS-MS analysis with A2LA-accredited reporting.", "Pass/fail determination for FDA, USDA, and retailer limits."),
                ("Certificate of Analysis (CoA)",                   "Formal accredited results document suitable for regulatory submission.", "Regulatory-ready documentation for shipment release."),
                ("Quarterly compliance summary",                    "Trend analysis of testing results across all submissions.", "Early warning system for emerging contamination patterns."),
                ("Priority processing for recurring accounts",      "Dedicated account contact and expedited turnaround.", "Consistent results timing that aligns with shipping schedules."),
                ("Sample collection guidance",                      "Proper sampling protocols to ensure representative results.", "Reduces retesting costs from improperly collected samples."),
            ],
        },
        {
            "title":          "Microbiological Pathogen Detection and Indicator Organism Testing",
            "demand":         "9/10",
            "scarcity":       "HIGH (accredited micro testing in the RGV is extremely limited)",
            "scalable":       "YES",
            "who_pays":       [
                "Produce company owners and food safety managers who need pathogen clearance for fresh produce shipments.",
                "Export compliance officers who need Salmonella, Listeria, and E. coli testing for border crossing documentation.",
                "Facility QA managers who need environmental monitoring to prevent contamination events.",
            ],
            "problem_solved": "Salmonella, Listeria, and E. coli testing is mandatory for FSMA compliance. Delayed results mean delayed shipments — and during peak harvest, a single day of delay can cost thousands in spoilage risk. Local accredited testing eliminates the shipping variable that adds 3-5 days to every testing cycle.",
            "engagement_table": [
                ("Pathogen detection panel (Salmonella, Listeria, E. coli O157:H7)", "Validated methods per FDA BAM and ISO standards.", "Clear positive/negative results with turnaround commitment."),
                ("Indicator organism testing (Total Coliforms, Yeast & Mold, Staph)", "Quantitative results for process control and sanitation verification.", "Trend data to prevent contamination events before they occur."),
                ("Environmental monitoring program design",                            "Sampling plan, zone mapping, and corrective action triggers.", "Proactive contamination prevention system for the facility."),
                ("Rush testing for time-sensitive shipments",                          "Expedited processing for border crossing or retailer deadline situations.", "Same-day or next-day results when standard turnaround is not fast enough."),
                ("Sanitation verification testing",                                   "Post-cleaning swab analysis for processing environments.", "Documentation that sanitation procedures are effective."),
            ],
        },
        {
            "title":          "Digital Presence & Inbound Lead Generation — The Visibility Engine",
            "demand":         "10/10",
            "scarcity":       "CRITICAL (zero organic presence = every new client requires cold outreach or referral)",
            "scalable":       "YES — compounds permanently once built",
            "who_pays":       [
                "Empiria Labs itself — the lab is currently invisible to produce companies searching for its exact services.",
                "Every dollar invested in digital presence creates a permanent asset that generates inbound inquiries.",
                "This is the highest-ROI growth lever available to the lab right now.",
            ],
            "problem_solved": "Empiria currently ranks for zero service-related keywords. A QA manager searching 'pesticide testing Edinburg TX' or 'food safety lab RGV' does not find Empiria. This is not a market problem — it is a visibility problem. The accreditation, the instrumentation, the team, and the location advantage all exist. The work is making them visible in the format that Google and buyers reward.",
            "engagement_table": [
                ("Revenue Engine Website Build (8-10 pages)",        "Homepage with A2LA badges, 4 service pages, capabilities, certifications, team, contact/sample submission.", "Inbound leads from produce companies actively searching for testing."),
                ("Google Business Profile optimization",              "Full GBP with services, lab photos, hours, and regular posts.", "Immediate placement in local search and Google Maps results."),
                ("Online sample submission system",                  "Web form with company info, sample type, testing required, urgency.", "24/7 inquiry capture — growers can initiate testing outside office hours."),
                ("SEO-optimized service landing pages",              "Individual pages targeting 'pesticide testing Edinburg TX,' 'micro testing RGV,' etc.", "Organic search traffic from buyers researching before they call."),
                ("FSMA Compliance Content Pack (4 articles)",        "Educational articles on testing requirements, positioned as thought leadership.", "Builds topical authority and captures informational search traffic."),
            ],
        },
    ],
    "messages": [
        (
            "Message 1 — QA Manager at RGV Produce Company — Active Testing Need",
            "Hi [Name] -- I noticed [Company] ships produce through the Valley. Right now, most growers here send samples to Houston for pesticide and micro testing — which adds 3-5 days to every testing cycle. We are the only dual A2LA-accredited lab in South Texas (ISO 17025 for both chemistry and biology). Same-day sample drop-off in Edinburg. Would a 15-minute call make sense to see if we can cut your turnaround time in half? -- Empiria Labs",
        ),
        (
            "Message 2 — Food Safety Director — Turnaround Time Pain",
            "Hi [Name] -- I am reaching out because [Company] is listed as a produce grower in the RGV, and I wanted to ask: where are you currently sending your pesticide and food safety samples? Most growers we talk to are shipping to Houston and waiting a week for results. We are running accredited testing locally in Edinburg with 2-3 day turnaround. Worth a quick conversation? -- Empiria Labs",
        ),
        (
            "Message 3 — Retail Supplier — Audit Documentation Need",
            "Hi [Name] -- If [Company] supplies to HEB, Walmart, or any major retailer, your next food safety audit will require accredited testing documentation. We hold dual A2LA accreditation under ISO 17025 — the credential that auditors specifically look for. We are the only lab in South Texas with both chemistry and micro accreditation. Happy to send you our scope of accreditation if that would be useful. -- Empiria Labs",
        ),
        (
            "Message 4 — Cross-Border Importer — Bilingual Advantage",
            "Hi [Name] -- I know [Company] handles significant produce volume through the RGV corridor. I wanted to introduce Empiria Labs — we are the only dual A2LA-accredited laboratory in South Texas, offering pesticide residue, micro, heavy metals, and mycotoxin testing right here in Edinburg. No shipping. No transit delays. If you are evaluating testing partners, I would love to show you our facility. -- Empiria Labs",
        ),
        (
            "Message 5 — FSMA Compliance Urgency",
            "Hi [Name] -- With FSMA enforcement increasing, [Company] likely needs more third-party testing than ever. Most RGV growers do not know there is a dual-accredited lab right here in Edinburg. We handle pesticide residue, Salmonella, Listeria, E. coli, heavy metals, and mycotoxins — all under ISO 17025 accreditation. Can I send you our capabilities sheet? -- Empiria Labs",
        ),
    ],
    "questionnaire_sections": [
        ("Section A: Company & Testing Needs", [
            "Company name and primary contact (name, title, email, phone)?",
            "What types of products do you need tested (fresh produce, grains, spices, other)?",
            "What specific tests do you require (pesticide residue, microbiology, heavy metals, mycotoxins)?",
            "How frequently do you need testing (weekly, bi-weekly, monthly, project-based)?",
            "What is your typical sample volume per submission?",
        ]),
        ("Section B: Current Testing Situation", [
            "Who is your current testing laboratory?",
            "What is your current turnaround time from sample submission to results?",
            "Have you experienced any turnaround delays that impacted shipment timing?",
            "Are you currently shipping samples out of the RGV for testing?",
            "What is the most important factor in your lab selection: accreditation, turnaround, price, or proximity?",
        ]),
        ("Section C: Compliance & Regulatory", [
            "What regulatory frameworks apply to your products (FSMA, FDA, USDA, export certifications)?",
            "Do you supply to major retailers (HEB, Walmart, Kroger, Whole Foods) that require specific accreditation?",
            "Do you need testing documentation for third-party audits (SQF, GFSI, BRC)?",
            "Do you export products that require testing for international standards (EU MRLs, Codex)?",
            "Is there anything about your current testing process that you wish worked differently?",
        ]),
        ("Section D: Additional Needs", [
            "Do you need environmental monitoring services for your facility?",
            "Are you interested in a dedicated account with priority processing?",
            "Do you have upcoming harvest or shipping cycles that require immediate testing capacity?",
            "Is there anything else we should know before preparing your testing proposal?",
        ]),
    ],
    "proposal_instructions": [
        "Complete the testing needs questionnaire before drafting — this saves 30 minutes of back-and-forth and ensures accurate scoping.",
        "Replace all [bracket] fields with client-specific details (company name, products, testing types, volumes).",
        "Reference the specific regulatory requirements (FSMA, retailer audits) mentioned in discovery.",
        "Include the A2LA accreditation certificates (Chemistry 6041.01 and Biological Testing 6041.02) as attachments.",
        "Add one specific insight from your discovery conversation — their current turnaround pain, a recent audit finding, or a shipping delay they experienced.",
    ],
    "proposal_table": [
        ("Pesticide Residue Analysis",    "Multi-residue screen (200+ compounds) via LC/MS-MS and GC/MS-MS with A2LA-accredited CoA.", "Results within 2-3 business days of sample receipt"),
        ("Microbiological Testing Panel",  "Salmonella, Listeria, E. coli O157:H7, indicator organisms per FDA BAM and ISO methods.", "Results within 2-3 business days of sample receipt"),
        ("Heavy Metals Quantification",    "Pb, Cd, As, Hg via ICP/OES with method validation under ISO 17025.", "Results within 3-5 business days of sample receipt"),
        ("Certificate of Analysis",        "Formal A2LA-accredited results document suitable for regulatory submission and retailer audits.", "Included with all testing — regulatory-ready format"),
        ("Dedicated Account Contact",      "Named point of contact for all testing inquiries, results questions, and scheduling.", "Assigned upon account activation"),
    ],
    "proposal_why_bullets": [
        "Only dual A2LA-accredited laboratory in South Texas — ISO/IEC 17025:2017 for both Chemistry (Certificate 6041.01) and Biological Testing (Certificate 6041.02).",
        "Same-day sample acceptance in Edinburg — eliminates 3-5 days of shipping time to Houston or San Antonio.",
        "LC/MS-MS, GC/MS-MS, and ICP/OES instrumentation matching the analytical capability of the largest national laboratories.",
        "PhD-led scientific team with over 15 years of analytical experience in both food safety and petroleum geochemistry.",
        "Bilingual capability — serving both US produce companies and Latin American exporters with equal fluency.",
    ],
    "results_metrics": [
        ("Turnaround time (sample receipt to results)", "Current days", "Target 2-3 days", "Actual after 90 days"),
        ("Client satisfaction score (1-10)",             "N/A",          "9+",               "Actual"),
        ("Inbound inquiries per month via website",      "0",            "Target",            "Actual"),
        ("New testing accounts opened",                  "0",            "Target",            "Actual"),
        ("Repeat submission rate (monthly clients)",     "Baseline",     "Target",            "Actual"),
        ("Revenue from new digital-sourced clients",     "$0",           "Target",            "Actual"),
    ],
    "testimonial_script": "'[Name], it has been 90 days since we started handling your testing. Based on the turnaround times and the results we have been delivering, I wanted to check in. Would you be willing to write 2-3 sentences about your experience? Specifically: what your testing situation was before, what changed after working with Empiria, and whether you would recommend us to another grower in the Valley. I use it on our website and in proposals. Completely optional — but it makes a significant difference when I am talking to produce companies evaluating us for the first time.'",
    "final_steps": [
        "Step 1: Deploy the complete website within 30 days — homepage with A2LA badges, service pages, capabilities, certifications, team, and sample submission form.",
        "Step 2: Send outreach Messages 1 and 3 (QA Manager and Retail Supplier) to 10 target produce companies using LinkedIn and direct email.",
        "Step 3: Claim and fully optimize Google Business Profile with services, lab photos, hours, and 4 launch posts.",
        "Step 4: Close the first new testing account from digital outreach. Document the experience and ask for a Google review.",
        "Step 5: Publish the first 2 educational blog posts (FSMA testing requirements and ISO 17025 accreditation explained) to begin building organic search authority.",
    ],
    "final_advantages": [
        "Empiria Labs holds dual A2LA accreditation for both chemistry and biological testing under ISO/IEC 17025:2017 — a credential that took years to earn and cannot be replicated quickly. No other lab in South Texas holds both certificates. This is a competitive moat that every QA manager in the produce industry recognizes instantly.",
        "Empiria Labs sits at 6200 E. Ramseyer Rd in Edinburg, TX — directly in the heart of the Rio Grande Valley produce corridor. Within a 50-mile radius are the McAllen-Hidalgo International Bridge, Pharr International Bridge, and dozens of produce companies. No other dual-accredited lab exists within 300 miles. That is a geographic monopoly on convenience.",
        "Empiria Labs is led by Jorge Cortes, PhD in Geosciences and Organic Geochemistry — scientific depth that opens petroleum geochemistry as a second revenue stream entirely independent of food safety testing. This is natural revenue diversification that most food safety labs cannot offer.",
    ],
    "final_quote": (
        "The move: stop selling testing services. Start selling the certainty that the shipment clears regulatory review. A QA manager does not buy a pesticide residue analysis — they buy the confidence that their produce will pass FDA inspection. A food safety director does not buy microbiological testing — they buy the assurance that Salmonella will not shut down their operation. A produce exporter does not buy a Certificate of Analysis — they buy the documentation that clears the border crossing without delay. Price accordingly.",
        "Maker Web Studios Growth Strategy Recommendation",
    ),
}

# ══════════════════════════════════════════════════════════════════════════════
# SKILL CARD BUILDER
# ══════════════════════════════════════════════════════════════════════════════

def _skill_card(skill, part_num):
    """Render one capability/skill card matching the original AMS design."""
    elems = []

    # Title
    elems.append(Paragraph(f"SKILL {part_num}: {skill['title']}", sH2))
    elems.append(sp(4))

    # Demand/scarcity/scalable badge row
    def _stat(label, val):
        s_lbl = make_style(f"sk_lbl_{label[:4]}", fontSize=7, leading=9,
                   fontName="Helvetica-Bold", textColor=C_ORANGE)
        s_val = make_style(f"sk_val_{label[:4]}", fontSize=8, leading=11,
                   fontName="Helvetica-Bold", textColor=C_WHITE)
        return [Paragraph(label.upper(), s_lbl), sp(2), Paragraph(val, s_val)]

    badge_row = [[
        _stat("MARKET DEMAND", skill["demand"]),
        _stat("SCARCITY", skill["scarcity"]),
        _stat("SCALABLE", skill["scalable"]),
    ]]
    badge_t = Table(badge_row, colWidths=[CONTENT_W*0.22, CONTENT_W*0.46, CONTENT_W*0.22])
    badge_t.setStyle(TableStyle([
        ("BACKGROUND",    (0,0),(-1,-1), C_NAVY),
        ("TOPPADDING",    (0,0),(-1,-1), 8),
        ("BOTTOMPADDING", (0,0),(-1,-1), 8),
        ("LEFTPADDING",   (0,0),(-1,-1), 10),
        ("RIGHTPADDING",  (0,0),(-1,-1), 10),
        ("INNERGRID",     (0,0),(-1,-1), 0.5, C_NAVY2),
        ("VALIGN",        (0,0),(-1,-1), "TOP"),
    ]))
    elems.append(badge_t)
    elems.append(sp(10))

    # Who pays | Problem solved (2 col)
    who_items = [Paragraph("Who Pays for This?", sBodyBold), sp(4)]
    for b in skill["who_pays"]:
        who_items.append(Paragraph(f"• {b}", sSmall))
        who_items.append(sp(2))

    prob_items = [
        Paragraph("What Problem Does It Solve?", sBodyBold), sp(4),
        Paragraph(skill["problem_solved"], sSmall),
    ]

    col_row = [[who_items, prob_items]]
    col_t   = Table(col_row, colWidths=[(CONTENT_W-8)/2]*2)
    col_t.setStyle(TableStyle([
        ("BACKGROUND",    (0,0),(-1,-1), C_LGRAY),
        ("BOX",           (0,0),(-1,-1), 0.5, C_MGRAY),
        ("INNERGRID",     (0,0),(-1,-1), 0.5, C_MGRAY),
        ("VALIGN",        (0,0),(-1,-1), "TOP"),
        ("TOPPADDING",    (0,0),(-1,-1), 10),
        ("BOTTOMPADDING", (0,0),(-1,-1), 10),
        ("LEFTPADDING",   (0,0),(-1,-1), 12),
        ("RIGHTPADDING",  (0,0),(-1,-1), 12),
    ]))
    elems.append(col_t)
    elems.append(sp(10))

    # Engagement table
    elems.append(Paragraph("What a $4,500-$22,500 Engagement Looks Like:", sBodyBold))
    elems.append(sp(6))
    elems.append(three_col(
        ["DELIVERABLE","WHAT IT INCLUDES","VALUE TO CLIENT"],
        skill["engagement_table"],
        cw=[CONTENT_W*0.24, CONTENT_W*0.40, CONTENT_W*0.36],
    ))
    return elems

# ══════════════════════════════════════════════════════════════════════════════
# BUILDER
# ══════════════════════════════════════════════════════════════════════════════

def build(client, logo_path, output_dir):
    C           = CONTENT
    client_name = client["name"]
    slug        = client["slug"]
    out_path    = os.path.join(output_dir, f"04_Growth_Strategy_{slug}.pdf")

    # Playbook cover has client name line above headline
    cover_fn = make_cover_template(
        doc_type_label = "GROWTH STRATEGY & VALUE PLAYBOOK",
        client_name    = client_name,     # shown as line above headline
        logo_path      = logo_path,
        headline1      = "GROWTH STRATEGY",
        headline2      = "& VALUE PLAYBOOK",
        subtitle       = C["cover_subtitle"],
        meta_items     = C["meta"],
    )
    cover_story = [sp(1)]
    interior_fn = make_interior_template(client_name, logo_path)
    S = []

    # ── Part 1: Current Position ──────────────────────────────────────────────
    S.append(sp(20))
    S.append(Paragraph("PART 1: CURRENT POSITION — HONEST ASSESSMENT", sSecLabel))
    S.append(sp(4))
    S.append(Paragraph(
        f"What {client_name} Offers — and Who Pays for It", sH2))
    S.append(sp(6))
    S.append(Paragraph(
        "After a thorough review of the laboratory and its service portfolio, here is what "
        "the business actually has to offer. This is the foundation for every strategic "
        "recommendation that follows.", sBody))
    S.append(sp(10))
    S.append(three_col(
        ["SERVICE CATEGORY","BUYER PROFILE","REVENUE POTENTIAL"],
        C["service_table"],
        cw=[CONTENT_W*0.28, CONTENT_W*0.34, CONTENT_W*0.38],
    ))
    S.append(sp(14))

    # Strategic question boxes
    S.append(Paragraph(C["strategic_q_title"], sH3))
    S.append(sp(8))
    S += exec_summary_boxes(C["strategic_boxes"] + [("",""),("","")]
                            if len(C["strategic_boxes"]) == 2
                            else C["strategic_boxes"])

    # ROI Ranking
    S.append(PageBreak())
    S.append(Paragraph("ROI Ranking: Where to Spend Sales Energy", sH3))
    S.append(sp(6))
    S.append(three_col(
        ["RANK","CLIENT TYPE","WHY IT WINS"],
        C["roi_table"],
        cw=[CONTENT_W*0.08, CONTENT_W*0.30, CONTENT_W*0.62],
    ))

    # ── Part 2: Skill Cards ───────────────────────────────────────────────────
    S.append(PageBreak())
    S.append(Paragraph("PART 2: HIGHEST-VALUE CAPABILITIES BY MARKET DEMAND", sSecLabel))
    S.append(sp(4))
    S.append(Paragraph(
        f"What {client_name} Offers — Positioned for Premium Pricing", sH2))
    S.append(sp(4))
    S.append(Paragraph(
        "These are not generic service listings — they are differentiated capabilities "
        "that the market undervalues when positioned generically and overpays for when "
        "positioned correctly.", sBody))
    S.append(sp(12))

    for i, skill in enumerate(C["skills"], 1):
        S += _skill_card(skill, i)
        S.append(PageBreak())

    # ── Part 3: Outreach Messages ─────────────────────────────────────────────
    S.append(Paragraph("PART 3: OUTREACH MESSAGES", sSecLabel))
    S.append(sp(4))
    S.append(Paragraph("Prospect-Specific Messages That Lead With Their Problem", sH2))
    S.append(sp(4))
    S.append(Paragraph(
        "Each message leads with the prospect's pain point, positions the lab's "
        "credential as the exact solution, and ends with the lowest-friction next step. "
        "Personalize the [brackets] before sending.", sBody))
    S.append(sp(12))

    for i, (subject, body) in enumerate(C["messages"], 1):
        S.append(Paragraph(f"Message {i} — {subject}", sH3))
        S.append(sp(4))
        S.append(Paragraph(body, sBody))
        S.append(sp(12))

    # ── Part 4: Questionnaire ─────────────────────────────────────────────────
    S.append(PageBreak())
    S.append(Paragraph("PART 4: CLIENT ONBOARDING QUESTIONNAIRE", sSecLabel))
    S.append(sp(4))
    S.append(Paragraph("Send Before the First Discovery Call", sH2))
    S.append(sp(4))
    S.append(Paragraph(
        "This saves 30+ minutes of discovery, helps customize every proposal, "
        "and signals professionalism before the work even starts.", sBody))
    S.append(sp(10))

    for sec_title, questions in C["questionnaire_sections"]:
        S.append(Paragraph(sec_title, sH3))
        S.append(sp(4))
        q_rows = [(q, "") for q in questions]
        S.append(two_col(["QUESTION","CLIENT RESPONSE"], q_rows))
        S.append(sp(10))

    # ── Part 5: Proposal Template ──────────────────────────────────────────────
    S.append(PageBreak())
    S.append(Paragraph("PART 5: TEMPLATED DELIVERABLE — PROPOSAL TEMPLATE", sSecLabel))
    S.append(sp(4))
    S.append(Paragraph("The Primary Proposal Document for New Clients", sH2))
    S.append(sp(4))
    S.append(Paragraph("HOW TO USE THIS TEMPLATE", sBodyBold))
    for i, instr in enumerate(C["proposal_instructions"], 1):
        S.append(Paragraph(f"{i}. {instr}", sBody))
    S.append(sp(10))
    S.append(Paragraph("[CLIENT COMPANY NAME] — PARTNERSHIP PROPOSAL", sH3))
    S.append(sp(4))
    S.append(Paragraph(
        "Prepared by: [Your Company] | Prepared for: [Client Name], [Title] | "
        "Date: [Date] | Proposal Version: 1.0", sSmall))
    S.append(sp(10))
    S.append(Paragraph("Recommended Package", sBodyBold))
    S.append(sp(4))
    S.append(three_col(
        ["DELIVERABLE","SCOPE","TIMELINE"],
        C["proposal_table"],
        cw=[CONTENT_W*0.28, CONTENT_W*0.46, CONTENT_W*0.26],
    ))
    S.append(sp(10))
    S.append(Paragraph("Why Choose Us", sBodyBold))
    S.append(sp(4))
    for b in C["proposal_why_bullets"]:
        S.append(Paragraph(f"• {b}", sBullet))
    S.append(sp(10))
    # Pull-quote style proposal note
    S += pull_quote(
        "Before sending: (1) Read the proposal aloud once. "
        "(2) Make sure at least one paragraph references something specific from your "
        "discovery call. (3) Add one credential reference that matches their industry. "
        "These three things are the difference between a proposal that gets filed and one that gets signed.",
        "Maker Web Studios Proposal Personalization Reminder"
    )

    # ── Part 6: Results & ROI ──────────────────────────────────────────────────
    S.append(PageBreak())
    S.append(Paragraph("PART 6: CLIENT RESULTS & ROI DOCUMENT", sSecLabel))
    S.append(sp(4))
    S.append(Paragraph("Complete at 30 and 90 Days Post-Launch", sH2))
    S.append(sp(4))
    S.append(Paragraph(
        "Use it to retain clients, generate testimonials, and build case studies "
        "that close the next 10 prospects.", sBody))
    S.append(sp(10))
    S.append(four_col(
        ["METRIC","BEFORE","TARGET","AFTER (90 DAYS)"],
        C["results_metrics"],
        cw=[CONTENT_W*0.34, CONTENT_W*0.22, CONTENT_W*0.22, CONTENT_W*0.22],
    ))
    S.append(sp(10))
    S.append(Paragraph("Testimonial Request Script", sH3))
    S.append(sp(4))
    S.append(Paragraph(C["testimonial_script"], sBody))

    # ── Final Notes ───────────────────────────────────────────────────────────
    S.append(PageBreak())
    S.append(Paragraph("FINAL NOTES: THE ADVANTAGE", sSecLabel))
    S.append(sp(4))
    S.append(Paragraph("Recommended First 90 Days:", sH3))
    S.append(sp(6))
    for i, step in enumerate(C["final_steps"], 1):
        S.append(Paragraph(f"{i}  {step}", sBody)); S.append(sp(4))
    S.append(sp(10))
    S.append(Paragraph("What Most Competitors Cannot Replicate:", sH3))
    S.append(sp(6))
    for adv in C["final_advantages"]:
        S.append(Paragraph(f"■  {adv}", sBody)); S.append(sp(6))
    S += pull_quote(*C["final_quote"])

    build_pdf(out_path, cover_story, S, cover_fn, interior_fn,
              client_name, logo_path)
    return out_path
