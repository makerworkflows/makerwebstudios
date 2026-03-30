"""
templates/audit_05_sales_strategy.py  —  Maker Audit Framework V2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Sales Strategy & Irresistible Offer Playbook — same visual design.

FILL INSTRUCTIONS: Replace every value marked  # ← FILL
"""

import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))
from lib.design import *

CONTENT = {
    "client_name":  "Empiria Labs, LLC",
    "industry":     "Analytical Testing Laboratory — Food Safety & Petroleum Geochemistry",
    "date":         "March 2026",
    "meta": ["Prepared for Empiria Labs, LLC","March 2026","Prepared by Maker Web Studios"],
    "cover_subtitle": "Selling on Value, Structuring Offers That Cannot Be Compared",
    "commodity_paras": [
        "Empiria Labs currently presents itself with the generic positioning: 'analytical testing services for the fruits and vegetables industry.' This language is interchangeable with any of the 500+ testing labs in the United States. It says nothing about dual accreditation, nothing about local turnaround advantage, nothing about the specific instrumentation or methodologies that separate Empiria from a basic testing outfit. The website itself reinforces this commodity positioning by showing nothing at all — literally an empty page.",
        "Empiria Labs is the only laboratory in South Texas holding dual A2LA accreditation for both chemical and biological testing under ISO/IEC 17025:2017. They operate LC/MS-MS, GC/MS-MS, and ICP/OES instrumentation with advanced extraction capabilities (ASE-350, QuEChERS, SPE) — the same analytical toolkit used by the largest national laboratories. They are led by a PhD geochemist with over 15 years of analytical experience and an operations director actively embedded in the produce industry through Viva Fresh and regional business networks. They sit in the heart of one of America's busiest produce import corridors. They are not a startup — they are a credentialed, equipped, accredited laboratory that the market simply cannot see yet.",
    ],
    "actual_sells": [
        ("Dual A2LA-accredited pesticide residue analysis",   "Shipment release confidence. Results that hold up under FDA, USDA, and retailer audits without question."),
        ("Accredited microbiological pathogen detection",      "The assurance that Salmonella, Listeria, or E. coli will not shut down a produce operation or trigger a recall."),
        ("Same-day sample acceptance in Edinburg",             "3-5 days eliminated from every testing cycle. During peak harvest, this means thousands saved in held inventory and spoilage risk."),
        ("ISO/IEC 17025:2017 Certificate of Analysis",        "Regulatory-ready documentation that satisfies FDA, USDA, retailer audits, and export certifications — no questions asked."),
        ("PhD-led scientific oversight",                       "The buyer's confidence that the analytical methods are validated and the results are defensible under regulatory scrutiny."),
        ("Bilingual service capability",                       "Seamless communication with both US produce companies and Latin American exporters navigating cross-border testing requirements."),
    ],
    "value_eq": [
        ("Dream Outcome",                     "Increase", "Every produce shipment clears regulatory review and retailer audit with accredited test results — on time, every time."),
        ("Perceived Likelihood of Achievement","Increase", "Dual A2LA accreditation, ISO 17025, PhD scientific director, LC/MS-MS and GC/MS-MS instrumentation matching national lab capability."),
        ("Time Delay",                        "Decrease", "Same-day sample acceptance in Edinburg vs. 3-5 days shipping to Houston. Results in 2-3 days vs. 5-7 through distant competitors."),
        ("Effort and Sacrifice",              "Decrease", "Local sample drop-off, dedicated account contact, online sample submission, bilingual service. The buyer does less work."),
    ],
    "value_note": "The goal is to maximize the numerator — the dream outcome and the buyer's confidence it will happen — and minimize the denominator — the time between sample submission and results, and the effort the QA manager has to invest. A lab that accepts samples the same day, provides accredited results in 2-3 days, and handles all documentation eliminates every step of the buyer's job except delivering the sample. That is not a commodity testing service. That is a compliance partner.",
    "avatar_description": "A QA Manager or Food Safety Director at a mid-size produce company ($5M-$50M revenue) in the Rio Grande Valley or South Texas border region. Responsible for FSMA compliance, retailer audit documentation, and managing third-party testing relationships. Currently shipping samples to Houston or San Antonio and losing 3-5 days per testing cycle. Under pressure from retail buyers (HEB, Walmart, Kroger) to provide accredited test results with faster turnaround. Bilingual (English/Spanish) and connected to the cross-border produce supply chain.",
    "avatar_table": [
        ("Currently shipping samples out of the RGV for testing",  "This buyer has lived the pain of shipping delays, transit damage risk, and 5-7 day turnaround times. Empiria's same-day acceptance directly eliminates their primary frustration."),
        ("Under pressure from retailer food safety audits",        "HEB, Walmart, and Kroger suppliers face tightening accreditation requirements. A2LA and ISO 17025 are the specific credentials auditors look for — and Empiria holds both."),
        ("Managing $50K-$100K+ annual testing budget",             "This buyer has budget authority and recurring testing needs. A well-served account compounds in value as testing frequency increases with regulatory pressure."),
        ("Bilingual and connected to cross-border supply chain",   "Empiria's Colombian-American leadership and Spanish fluency create instant rapport and practical communication advantage that English-only national labs cannot replicate."),
    ],
    "market_indicators": [
        ("Massive Pain",      "Produce growers face mounting FSMA enforcement, retailer audit requirements, and export certification demands. Testing is not optional — it is a cost of doing business. Growers who cannot get fast, accredited results risk shipment delays, rejected loads, and regulatory action. The pain is real, recurring, and expensive."),
        ("Purchasing Power",  "Produce companies spend $2,000-$10,000+ per month on testing services. A mid-size grower with multiple crops and shipping cycles may spend $50,000-$100,000+ annually on laboratory testing. These are established budget line items, not discretionary spending."),
        ("Easy to Target",    "Produce companies in the RGV are concentrated, identifiable, and reachable. They attend Viva Fresh, they are listed in USDA directories, they advertise at border crossings, and they are searchable through produce association memberships. Empiria already has relationships in this community."),
        ("Growing Market",    "Food safety testing is growing at 7.2% CAGR driven by FSMA enforcement, consumer demand for transparency, retailer requirements, and cross-border trade growth. The RGV corridor specifically is expanding as nearshoring drives more produce through South Texas."),
    ],
    "named_offers": [
        ("Generic (old)",                                       "'We provide analytical testing services for the fruits and vegetables industry.'"),
        ("The 90-Day Lab Visibility System (new — for MWS)",    "'The 90-Day Lab Visibility System for South Texas Testing Laboratories — a complete digital front door that puts your dual A2LA accreditation in front of every QA manager searching for testing in the RGV. Website, sample submission, Google presence, and inbound lead infrastructure. Delivered in 30 days. Backed by a 90-day inbound inquiry guarantee.'"),
        ("The RGV Testing Assurance Program (new — for clients)","'The Empiria Labs RGV Testing Assurance Program — dual A2LA-accredited pesticide, micro, heavy metal, and mycotoxin testing with same-day sample acceptance in Edinburg and 2-3 day turnaround. The only dual-accredited lab in South Texas, right in the heart of the produce corridor.'"),
    ],
    "naming_note": "Each named version calls out the specific buyer, speaks to the outcome they want, and describes a complete experience rather than a product category. A QA manager who fits the description immediately recognizes this was built for them — and stops comparing it to a generic testing quote from a distant lab that requires shipping.",
    "offer_stack": [
        ("Revenue Engine Website Build (8-10 pages)",            "The lab has no digital presence. This is the foundation for everything.",                              "Very High — the anchor deliverable."),
        ("A2LA accreditation deployment across entire site",     "'Are they accredited?' — answered instantly on every page.",                                             "Very High — the #1 trust signal for lab buyers."),
        ("Online sample submission system",                      "'How do I start testing?' — answered with a form, not a dead end.",                                     "High — converts visitors into clients."),
        ("South Texas Lab Authority SEO Blueprint ($2,500 val)", "'Will anyone find this lab on Google?' — keyword research and 12-month content plan.",                  "High — the roadmap for sustained organic visibility."),
        ("FSMA Compliance Content Pack ($1,500 val)",            "'What do I need to know about testing requirements?' — 4 articles positioning Empiria as expert.",      "High — captures informational search traffic."),
        ("Laboratory Digital Trust Kit ($1,000 val)",            "'Can I see the lab, the team, the certificates?' — photography, bios, downloadable A2LA PDFs.",         "Medium — visual credibility that builds buyer confidence."),
    ],
    "pricing_weak":   "'We charge $X per test. Let me know if you want to send samples.'",
    "pricing_strong": "'We are the only dual A2LA-accredited food safety testing laboratory in South Texas. Our LC/MS-MS and GC/MS-MS instrumentation screens 200+ pesticide compounds per sample with accredited results you can defend under any regulatory audit. Same-day sample acceptance right here in Edinburg — no shipping, no transit delays, no 5-day wait for results that should take 2. Let me walk you through what a testing partnership looks like for your operation — then we can talk about the numbers.'",
    "pricing_note":   "The strong framing communicates accreditation, instrumentation, proximity, and turnaround advantage before the price lands. By the time the buyer hears the number, they have already mentally accounted for what they are buying — and what it costs them NOT to switch from a distant lab. The price does not feel arbitrary — it feels earned. This is the only framing that produces value-based decisions rather than forcing a race to the lowest per-test bid.",
    "guarantees": [
        ("Layer 1 — 30-Day Satisfaction Guarantee",
         "'If the completed website does not match the approved design and scope, we will redesign any page at no additional charge. You own the code, the content, and the domain from day one. No lock-in, no proprietary builders, no hostage situations.' Removes the quality objection entirely. The buyer knows exactly what they will receive."),
        ("Layer 2 — 90-Day Inbound Inquiry Guarantee",
         "'If Empiria Labs does not receive at least one qualified inbound inquiry through the website within 90 days of launch, we will continue optimizing, publishing content, and refining the site at no additional cost until you do. We are betting on our own work.' Removes the ROI objection. The buyer's primary fear is paying for a website that generates zero business — this guarantee eliminates that fear."),
        ("Layer 3 — Accredited Results Defensibility",
         "'Your results are A2LA-accredited and defensible under regulatory audit — guaranteed. If we cannot meet your turnaround commitment, we expedite at no charge.' This guarantee applies to Empiria's own testing service offering — it communicates confidence in the accreditation and turnaround promise that should be central to every client conversation."),
    ],
    "urgency": [
        ("FSMA enforcement is accelerating",                    "'FSMA enforcement actions increased 40% year-over-year. More produce growers need accredited testing right now. The companies that should be your clients are already searching for labs online — and finding your competitors.' State this in proposals and outreach."),
        ("National labs are expanding Texas footprints",         "'Bureau Veritas and Eurofins are both expanding their Texas operations. The competitive window for establishing Empiria as the dominant local lab brand is open now, but national players are actively working to close it.' Creates real competitive urgency."),
        ("Peak harvest seasons create testing demand spikes",   "'Q4 and Q1 are peak testing periods for RGV produce. QA managers setting up testing relationships now are the ones who will have capacity locked when volume peaks.' Educates the buyer about seasonal planning."),
        ("Every week without a website is revenue lost",        "'Every week without a functioning website, produce companies in the RGV are choosing competitors by default — not because they are better, but because they are findable. The opportunity cost compounds daily.' Frame the cost of delay, not just the cost of action."),
    ],
    "referral_para": "The highest-ROI business development activity in the analytical testing industry is a QA manager who received accredited results on time, used them to clear a regulatory audit, and tells the food safety director at the next Viva Fresh conference which lab they used. That conversation — 'Call Empiria Labs, they are the only dual-accredited lab in the Valley, and they do same-day sample acceptance' — is the most valuable marketing event the laboratory can generate.",
    "referral_table": [
        ("Testing results delivered on-time and used for regulatory clearance", "Personal call or email from the account contact. 'Glad the results supported your audit. If any of your colleagues need a local accredited lab, please send them our way.' Include a link to the sample submission form."),
        ("Successful FSMA audit using Empiria's CoA documentation",             "Follow-up email: 'Great to hear the audit went smoothly. Would you be willing to write 2-3 sentences about your experience? We use client references when talking to produce companies evaluating testing partners for the first time.'"),
        ("Conference encounter (Viva Fresh, Hart Energy, industry events)",     "Sarai or Jorge personally introduces the lab's capabilities. 'If you know any growers in the Valley who are still shipping samples to Houston, we would love to show them our facility.' Conference presence creates warm referral pathways."),
        ("Cross-border testing completion for Mexican exporter",                "Bilingual follow-up: 'If any of your export partners need US-accredited testing for border crossing documentation, we are the only dual-accredited option in South Texas.' Leverage the bilingual advantage for referral generation."),
    ],
    "acceleration": [
        ("Day 1-30",   "Website deployed with A2LA badges, service pages, sample submission form. Google Business Profile verified and optimized. GA4 and Search Console connected.",     "Immediate credibility uplift. First inbound inquiries from digital visibility. GBP drives local search traffic.",                  "MWS + Empiria"),
        ("Day 30-60",  "Service landing pages optimized for local SEO. First 2 blog posts published. Directory listings submitted. Outreach to 10 target produce companies initiated.", "Organic search rankings begin climbing. First new testing accounts engaged through outreach and improved visibility.",             "MWS + Empiria sales"),
        ("Day 60-90",  "Additional blog content published. GBP posting schedule active. Referral ask systematized. First client testimonial collected.",                                  "SEO flywheel gaining momentum. Social proof building. Referral pipeline beginning to produce warm leads.",                        "MWS + Empiria"),
        ("Month 4-6",  "Content marketing cadence established (1 article/month). Cross-border testing outreach expanded. Petroleum geochemistry page added.",                            "Organic search leads arriving consistently. Multiple revenue streams visible to different buyer segments.",                         "Empiria marketing"),
        ("Month 6-12", "Full digital presence operational. Referral pipeline active. Google reviews accumulating. Inbound inquiries sustaining without paid advertising.",                "Digital presence generating consistent monthly leads. Empiria established as the default testing partner for RGV produce companies.","Empiria team"),
    ],
}

def build(client, logo_path, output_dir):
    C           = CONTENT
    client_name = client["name"]
    slug        = client["slug"]
    out_path    = os.path.join(output_dir, f"05_Sales_Strategy_{slug}.pdf")

    cover_fn = make_cover_template(
        doc_type_label = "SALES STRATEGY PLAYBOOK",
        client_name    = client_name,
        logo_path      = logo_path,
        headline1      = "SALES STRATEGY",
        headline2      = "PLAYBOOK",
        subtitle       = C["cover_subtitle"],
        meta_items     = C["meta"],
    )
    cover_story = [sp(1)]
    interior_fn = make_interior_template(client_name, logo_path)
    S = []

    # TOC
    S.append(sp(20))
    S.append(Paragraph("TABLE OF CONTENTS", sOrgBold))
    S.append(sp(8))
    S.append(build_toc([
        ("01","The Commodity Problem and the Reframe"),
        ("02","What You Actually Sell"),
        ("03","The Value Equation"),
        ("04","Define the Niche Precisely"),
        ("05","Verify Market Conditions — The Four Indicators"),
        ("06","Name the Offer"),
        ("07","Build the Offer Stack"),
        ("08","Pricing and Framing Strategy"),
        ("09","Guarantees That Build Trust"),
        ("10","Real Urgency That Already Exists"),
        ("11","The Referral Engine"),
        ("12","The 30-60-90 Revenue Acceleration Path"),
    ]))

    # S01
    S.append(PageBreak())
    S += section_header("01","The Commodity Problem and the Reframe")
    for p in C["commodity_paras"]:
        S.append(Paragraph(p, sBody)); S.append(sp(6))

    # S02
    S.append(PageBreak())
    S += section_header("02","What You Actually Sell",
        f"{client_name} does not sell tests in isolation. "
        "It sells the outcome, the certainty, and the regulatory confidence those results create for the buyer.")
    S.append(sp(10))
    S.append(two_col(["WHAT YOU DELIVER","THE REAL OUTCOME FOR THE BUYER"],
                     C["actual_sells"]))

    # S03
    S.append(PageBreak())
    S += section_header("03","The Value Equation",
        "Value is determined by four factors. The real competitive advantage is "
        "not making bigger promises — it is reducing friction, time, and effort for the buyer.")
    S.append(sp(10))
    S.append(three_col(["VALUE DRIVER","GOAL","CLIENT APPLICATION"],
                       C["value_eq"]))
    S.append(sp(8))
    S.append(Paragraph(C["value_note"], sBody))

    # S04
    S.append(PageBreak())
    S += section_header("04","Define the Niche Precisely",
        "The more precisely the ideal client is described, the faster those "
        "clients self-identify and reach out.")
    S.append(sp(8))
    S.append(Paragraph("RECOMMENDED PRIMARY AVATAR", sSecLabel))
    S.append(sp(4))
    S.append(Paragraph(C["avatar_description"], sBody))
    S.append(sp(10))
    S.append(two_col(["AVATAR CHARACTERISTIC","WHY IT MATTERS FOR SALES"],
                     C["avatar_table"]))

    # S05
    S.append(PageBreak())
    S += section_header("05","Verify Market Conditions — The Four Indicators")
    S.append(sp(8))
    S.append(two_col(["INDICATOR","CLIENT REALITY CHECK"],
                     C["market_indicators"],
                     cw=[CONTENT_W*0.22, CONTENT_W*0.78]))

    # S06
    S.append(PageBreak())
    S += section_header("06","Name the Offer",
        "A named offer is more memorable, more referable, and more differentiated "
        "than a generic service description. Formula: magnetic reason + specific buyer + "
        "outcome + timeframe + container word.")
    S.append(sp(10))
    S.append(two_col(["OFFER TYPE","NAMED VERSION"], C["named_offers"]))
    S.append(sp(8))
    S.append(Paragraph(C["naming_note"], sBody))

    # S07
    S.append(PageBreak())
    S += section_header("07","Build the Offer Stack",
        "A bundle of components addressing specific buyer objections is more compelling "
        "than a single listing. Each addition should remove a real hesitation.")
    S.append(sp(10))
    S.append(three_col(["OFFER COMPONENT","OBSTACLE IT ADDRESSES","PERCEIVED VALUE"],
                       C["offer_stack"]))

    # S08
    S.append(PageBreak())
    S += section_header("08","Pricing and Framing Strategy",
        "The pricing conversation is won or lost before the price is stated — "
        "in how the service is described.")
    S.append(sp(10))
    S.append(two_col(
        ["FRAMING TYPE","EXAMPLE"],
        [("Weak — price-first", C["pricing_weak"]),
         ("Strong — value-first", C["pricing_strong"])],
    ))
    S.append(sp(8))
    S.append(Paragraph(C["pricing_note"], sBody))

    # S09
    S.append(PageBreak())
    S += section_header("09","Guarantees That Build Trust Without Creating Risk")
    S.append(sp(8))
    for g_title, g_body in C["guarantees"]:
        S.append(Paragraph(g_title, sH3))
        S.append(Paragraph(g_body, sBody))
        S.append(sp(8))

    # S10
    S.append(PageBreak())
    S += section_header("10","Real Urgency That Already Exists",
        "Artificial urgency destroys credibility with sophisticated buyers. "
        "These are the authentic urgency drivers in this market.")
    S.append(sp(10))
    S.append(two_col(["URGENCY DRIVER","HOW TO USE IT"], C["urgency"]))

    # S11
    S.append(PageBreak())
    S += section_header("11","The Referral Engine")
    S.append(Paragraph(C["referral_para"], sBody))
    S.append(sp(10))
    S.append(two_col(["REFERRAL TRIGGER","ACTION TO TAKE"], C["referral_table"]))

    # S12
    S.append(PageBreak())
    S += section_header("12","The 30-60-90 Revenue Acceleration Path")
    S.append(sp(8))
    S.append(four_col(
        ["MILESTONE","ACTION","REVENUE IMPACT","OWNER"],
        C["acceleration"],
        cw=[CONTENT_W*0.12, CONTENT_W*0.34, CONTENT_W*0.34, CONTENT_W*0.20],
    ))

    build_pdf(out_path, cover_story, S, cover_fn, interior_fn,
              client_name, logo_path)
    return out_path
