"""
templates/audit_02_blind_spot.py  —  Maker Audit Framework V2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Blind Spot Audit — matches original AMS design:
  • Cover: same full-bleed navy with "BLIND SPOT AUDIT" label
  • Intro page: "What Is a Blind Spot Audit?" + pull quote
  • Each blind spot: large stacked orange numerals, bold title, grey tag,
    inline badge row (Critical Revenue Risk | Impact | Fix Complexity),
    2-column THE BLIND SPOT | THE FIX box
  • Closing: "What They Have. What They Need." strategic page

FILL INSTRUCTIONS: Replace every value marked  # ← FILL
"""

import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))
from lib.design import *

# ══════════════════════════════════════════════════════════════════════════════
# CLIENT CONTENT
# ══════════════════════════════════════════════════════════════════════════════
CONTENT = {
    "client_name":    "Empiria Labs, LLC",
    "client_short":   "Empiria Labs",
    "industry":       "Analytical Testing Laboratory — Food Safety & Petroleum Geochemistry",
    "date":           "March 2026",
    "meta": ["Deep Research Audit","March 2026","Prepared by Maker Web Studios"],
    "cover_subtitle": "Empiria Labs — The Strategic Gaps South Texas's Only Dual-Accredited Lab Cannot Afford",
    "intro_about_title": "About Empiria Labs, LLC",
    "intro_about_body": "Empiria Labs, LLC is an analytical testing laboratory founded in 2019 in Edinburg, TX, specializing in pesticide residue analysis (LC/MS-MS, GC/MS-MS), microbiological testing (E. coli, Salmonella, Listeria), heavy metals (ICP/OES), and mycotoxin analysis for the fruits and vegetables industry. The lab also performs petroleum geochemistry including TOC, Pyrolysis, Rock Eval, and biomarker analysis. Led by Jorge Cortes, PhD (Scientific Director) and Sarai Cortes (Operations/Business Development), Empiria holds dual A2LA accreditation under ISO/IEC 17025:2017 for both Chemistry (Certificate 6041.01) and Biological Testing (Certificate 6041.02) — making it the only dual-accredited food safety testing laboratory in South Texas.",
    "intro_quote": (
        "Empiria Labs has earned its accreditation through rigorous method validation, proficiency testing, and independent audit. In a South Texas produce corridor that processes billions of pounds of fresh produce annually, the laboratory that becomes the trusted local testing partner will build a revenue stream that compounds for years. Empiria is not yet winning that race — because the market does not know it exists.",
        "Maker Web Studios Blind Spot Finding",
    ),
    "blind_spots": [
        {
            "number": "0\n1",
            "title":        "Your Most Powerful Credential Is Invisible to Every Buyer Online",
            "tag":          "Trust blind spot — dual A2LA accreditation under ISO 17025 appears nowhere on the website or in search results",
            "risk_label":   "Critical Revenue Risk",
            "impact_label": "High Trust Impact",
            "fix_label":    "Low Fix Complexity",
            "risk_color":   "CRITICAL",
            "gap_text": "Empiria Labs achieved something most regional laboratories never will: dual A2LA accreditation under ISO/IEC 17025:2017 for both chemistry and biological testing. This credential is the single most important trust signal in the analytical testing industry — it tells a QA manager that your results will hold up under regulatory scrutiny, that your methods are validated, and that your lab has been independently audited to international standards. Yet this credential appears nowhere on your website. Not on the homepage. Not in a badge. Not on a dedicated certifications page. Not in the meta description. A produce company QA manager searching for an accredited lab in South Texas will never discover this through your digital presence. Every week, produce companies in the RGV ship samples to Houston because they cannot verify that a local accredited option exists.",
            "fix_bullets": [
                "→ Add A2LA accreditation badges (Chemistry Certificate 6041.01 and Biological Testing Certificate 6041.02) to the homepage hero section, visible within 2 seconds of landing.",
                "→ Create a dedicated Certifications & Quality page with downloadable PDF copies of both A2LA certificates, scope of accreditation documents, and a plain-language explanation of what ISO/IEC 17025:2017 means for the client.",
                "→ Add the A2LA badge to the footer of every page on the site so accreditation is persistently visible during any browsing session.",
                "→ Include 'A2LA accredited' and 'ISO 17025' in the homepage meta title and description so this credential appears in Google search results before a prospect even clicks.",
            ],
        },
        {
            "number": "0\n2",
            "title":        "Produce Growers Cannot Find Your Services Because They Don't Exist Online",
            "tag":          "Visibility blind spot — core testing services are not described anywhere on the website",
            "risk_label":   "Critical Revenue Risk",
            "impact_label": "High Pipeline Impact",
            "fix_label":    "Medium Fix Complexity",
            "risk_color":   "CRITICAL",
            "gap_text": "Empiria Labs offers pesticide residue analysis (organochlorine, phosphorous, carbamates, dithiocarbamates), microbiological testing (E. coli, Salmonella, Listeria, Staph, Yeast & Mold), heavy metals, and mycotoxin analysis. These are precisely the tests that produce growers need to clear FSMA requirements, satisfy retail buyer audits, and meet export certifications. None of these services are described anywhere on the website. A produce company searching for 'pesticide residue testing Edinburg TX' or 'Salmonella testing RGV' finds nothing from Empiria because there is nothing to find. The services page does not exist. The tests are not named. The methodologies are not described. The turnaround times are not listed. This is not a marketing problem — it is a visibility problem. The services exist. The capability exists. The demand exists. The connection between buyer and seller is broken because the information is not published.",
            "fix_bullets": [
                "→ Build individual service pages for each major testing category: Pesticide Residue Analysis, Microbiological Testing, Heavy Metals Analysis, and Mycotoxin Testing.",
                "→ On each service page, list the specific tests offered, the analytical methods used (LC/MS-MS, GC/MS-MS, ICP/OES), turnaround times, and sample submission requirements.",
                "→ Optimize each service page for local search queries by including geographic modifiers: 'Edinburg TX,' 'Rio Grande Valley,' 'South Texas,' and 'RGV.'",
                "→ Add a clear 'Request Testing' CTA button on every service page linking directly to the sample submission form.",
            ],
        },
        {
            "number": "0\n3",
            "title":        "Zero Conversion Pathway — Interested Buyers Have No Way to Become Clients",
            "tag":          "Conversion blind spot — no contact form, no phone number, no sample submission, no CTA of any kind",
            "risk_label":   "Critical Revenue Risk",
            "impact_label": "High Conversion Impact",
            "fix_label":    "Low Fix Complexity",
            "risk_color":   "CRITICAL",
            "gap_text": "A website's fundamental job is to convert visitors into leads. Empiria's website has zero conversion mechanisms. No contact form. No phone number displayed. No email address visible. No sample submission portal. No 'Request a Quote' button. No chat widget. Nothing. This means that even if a prospect discovers Empiria Labs through LinkedIn, a referral, or a conference encounter and visits the website to take the next step — they hit a dead end. The only option is to leave the site and try to find contact information elsewhere, or simply move on to a competitor whose website makes it easy to initiate a conversation. For a laboratory where the buyer journey often starts with 'I need testing done this week,' the absence of any conversion pathway is not a minor oversight — it is a complete break in the revenue pipeline.",
            "fix_bullets": [
                "→ Build a sample submission request form as the primary conversion tool. Fields: company name, contact info, sample type, testing required, urgency level, and preferred turnaround time.",
                "→ Display the lab phone number and email address in the header and footer of every page. Make the phone number click-to-call on mobile.",
                "→ Add a persistent 'Submit a Sample' or 'Request Testing' CTA button in the main navigation bar, visible on every page.",
                "→ Implement a simple contact form on a dedicated Contact page with the lab address, phone, email, hours of operation, and a Google Maps embed showing the facility location.",
            ],
        },
        {
            "number": "0\n4",
            "title":        "Your Proximity Advantage Is Not Being Leveraged Against Distant Competitors",
            "tag":          "Positioning blind spot — the RGV produce corridor location advantage is completely untold",
            "risk_label":   "High Revenue Risk",
            "impact_label": "High Competitive Impact",
            "fix_label":    "Low Fix Complexity",
            "risk_color":   "HIGH",
            "gap_text": "The RGV is one of the highest-volume produce import corridors in the United States. Produce companies here currently ship samples to Bureau Veritas in Houston, Eurofins in San Antonio, or SGS at various regional offices — adding shipping costs and 3-5 days of transit time to every testing cycle. Empiria Labs sits directly in this corridor. A grower in Edinburg, McAllen, or Mission could drop off samples in the morning and have results faster than any competitor can match. This is an enormous competitive advantage — but the website says nothing about it. No mention of local sample drop-off. No comparison of turnaround times versus shipping to Houston. No language about serving the RGV produce corridor specifically. The proximity story — which is one of the most compelling reasons to choose Empiria — is entirely untold.",
            "fix_bullets": [
                "→ Add a 'Local Sample Drop-Off' section to the homepage highlighting same-day sample acceptance for RGV produce companies.",
                "→ Create a comparison chart showing Empiria's turnaround time versus the time required when shipping samples to Houston or San Antonio (sample prep + shipping + transit + lab processing).",
                "→ Build a 'Service Area' page or section with a map showing Empiria's location relative to major produce growing regions and border crossings in the RGV.",
                "→ Include testimonials or case examples from local growers who benefit from reduced turnaround times (as these become available).",
            ],
        },
        {
            "number": "0\n5",
            "title":        "Your Team's Scientific Authority Is Hidden from the Market",
            "tag":          "Credibility blind spot — PhD leadership and industry engagement are invisible on the website",
            "risk_label":   "Medium Revenue Risk",
            "impact_label": "High Trust Impact",
            "fix_label":    "Low Fix Complexity",
            "risk_color":   "HIGH",
            "gap_text": "Jorge Cortes holds a PhD in Geosciences and Organic Geochemistry from Universidad Nacional de Colombia, with experience in petroleum geochemistry at Petromarkers Inc. and Antek S.A. Sarai Cortes has been recognized by industry organizations and actively mentors at events like Viva Fresh EDGE. This is a team with genuine scientific authority and industry engagement. Yet neither person appears on the website. No team page. No bios. No credentials. No photos. In an industry where buyers are entrusting a laboratory with samples that will determine regulatory compliance, product release, and public safety — knowing who runs the operation matters. The national labs invest heavily in presenting their scientific leadership online. Empiria's team has the credentials to compete at that level — they just are not showing them.",
            "fix_bullets": [
                "→ Build a Team / About page featuring Jorge Cortes' PhD credentials, research background, and analytical expertise, and Sarai Cortes' business development and industry involvement.",
                "→ Include professional headshots and brief bios that emphasize technical qualifications and years of experience.",
                "→ Mention conference appearances (Hart Energy, Viva Fresh EDGE) and industry recognition (Corporate Muse) as credibility markers.",
                "→ Link to team members' LinkedIn profiles to provide additional social proof and professional validation.",
            ],
        },
    ],
    "strategic_para1": "Empiria Labs is not a startup trying to prove itself — it is an established, dual-accredited laboratory with advanced instrumentation and scientific leadership that happens to have no digital presence. The five blind spots identified in this audit share a common root cause: the market does not know what Empiria Labs is, what it offers, or how to engage with it.",
    "strategic_para2": "The fix is not complex. It is a matter of making visible what already exists: the accreditation, the services, the team, the location advantage, and a clear way for buyers to take action. The competitive window is open — no other dual-accredited lab operates in this corridor — but it will not stay open indefinitely. National labs are expanding their Texas footprints, and digital visibility is how they will do it. The companies that should be Empiria's clients are already searching. They just cannot find you yet.",
    "strategic_quote": (
        "The credentials are earned. The capability is proven. The only thing standing between Empiria Labs and a full testing pipeline is a website that tells the truth about what this lab actually is.",
        "Maker Web Studios Blind Spot Finding",
    ),
}

# ══════════════════════════════════════════════════════════════════════════════
# BLIND SPOT CARD BUILDER
# ══════════════════════════════════════════════════════════════════════════════

def _blind_spot_card(bs):
    """Render one full blind spot entry matching the original AMS design."""
    elems = []

    # ── Large stacked orange number + bold title ──────────────────────────────
    num_style = make_style(f"bsnum_{bs['number'][:1]}", fontSize=40, leading=44,
                   fontName="Helvetica-Bold", textColor=C_ORANGE)
    title_style = make_style(f"bstit_{bs['title'][:6]}", fontSize=20, leading=26,
                     fontName="Helvetica-Bold", textColor=C_DKBLUE)
    tag_style   = make_style(f"bstag_{bs['title'][:6]}", fontSize=10, leading=14,
                     fontName="Helvetica", textColor=C_GREY)

    num_para   = Paragraph(bs["number"].replace("\n", "<br/>"), num_style)
    title_para = Paragraph(bs["title"], title_style)
    tag_para   = Paragraph(bs["tag"],   tag_style)

    header_row = [[num_para, [title_para, sp(3), tag_para]]]
    header_t   = Table(header_row, colWidths=[CONTENT_W*0.08, CONTENT_W*0.92])
    header_t.setStyle(TableStyle([
        ("VALIGN",       (0,0),(-1,-1),"TOP"),
        ("TOPPADDING",   (0,0),(-1,-1),0),
        ("BOTTOMPADDING",(0,0),(-1,-1),0),
        ("LEFTPADDING",  (0,0),(0,0),  0),
        ("LEFTPADDING",  (1,0),(1,0),  8),
        ("RIGHTPADDING", (0,0),(-1,-1),0),
    ]))
    elems.append(header_t)
    elems.append(sp(8))

    # ── Inline badge row ──────────────────────────────────────────────────────
    risk_col   = BADGE_COLOURS.get(bs["risk_color"], C_ORANGE)
    mid_col    = C_AMBER
    fix_col    = C_NAVY

    def _badge(text, bg):
        s = make_style(f"bdg_{text[:4]}", fontSize=7.5, leading=10,
               fontName="Helvetica-Bold", textColor=C_WHITE, alignment=TA_CENTER)
        return Paragraph(text, s), bg

    b1_p, b1_c = _badge(bs["risk_label"],   risk_col)
    b2_p, b2_c = _badge(bs["impact_label"], mid_col)
    b3_p, b3_c = _badge(bs["fix_label"],    fix_col)

    badge_row = [[b1_p, b2_p, b3_p]]
    badge_cw  = [CONTENT_W*0.28, CONTENT_W*0.28, CONTENT_W*0.28]
    badge_t   = Table(badge_row, colWidths=badge_cw)
    badge_t.setStyle(TableStyle([
        ("BACKGROUND",    (0,0),(0,0), b1_c),
        ("BACKGROUND",    (1,0),(1,0), b2_c),
        ("BACKGROUND",    (2,0),(2,0), b3_c),
        ("TOPPADDING",    (0,0),(-1,-1),5),
        ("BOTTOMPADDING", (0,0),(-1,-1),5),
        ("LEFTPADDING",   (0,0),(-1,-1),8),
        ("RIGHTPADDING",  (0,0),(-1,-1),8),
        ("ALIGN",         (0,0),(-1,-1),"CENTER"),
    ]))
    elems.append(badge_t)
    elems.append(sp(10))

    # ── 2-column gap | fix box ────────────────────────────────────────────────
    gap_label_s = make_style("bsgaplbl", fontSize=7.5, leading=10,
                     fontName="Helvetica-Bold", textColor=C_ORANGE)
    fix_label_s = make_style("bsfixlbl", fontSize=7.5, leading=10,
                     fontName="Helvetica-Bold", textColor=C_ORANGE)

    fix_items = []
    for bullet in bs["fix_bullets"]:
        fix_items.append(Paragraph(bullet, sBody))
        fix_items.append(sp(4))

    gap_cell = [
        Paragraph("THE BLIND SPOT", gap_label_s), sp(6),
        Paragraph(bs["gap_text"], sBody),
    ]
    fix_cell = [
        Paragraph("THE FIX", fix_label_s), sp(6),
    ] + fix_items

    body_row = [[gap_cell, fix_cell]]
    body_cw  = [(CONTENT_W - 12) / 2] * 2
    body_t   = Table(body_row, colWidths=body_cw)
    body_t.setStyle(TableStyle([
        ("BOX",           (0,0),(-1,-1), 0.5, C_MGRAY),
        ("INNERGRID",     (0,0),(-1,-1), 0.5, C_MGRAY),
        ("BACKGROUND",    (0,0),(-1,-1), C_LGRAY),
        ("VALIGN",        (0,0),(-1,-1), "TOP"),
        ("TOPPADDING",    (0,0),(-1,-1), 12),
        ("BOTTOMPADDING", (0,0),(-1,-1), 12),
        ("LEFTPADDING",   (0,0),(-1,-1), 12),
        ("RIGHTPADDING",  (0,0),(-1,-1), 12),
    ]))
    elems.append(body_t)
    return elems

# ══════════════════════════════════════════════════════════════════════════════
# BUILDER
# ══════════════════════════════════════════════════════════════════════════════

def build(client, logo_path, output_dir):
    C           = CONTENT
    client_name = client["name"]
    slug        = client["slug"]
    out_path    = os.path.join(output_dir, f"02_BlindSpot_Audit_{slug}.pdf")

    cover_fn = make_cover_template(
        doc_type_label = "BLIND SPOT AUDIT",
        client_name    = None,
        logo_path      = logo_path,
        headline1      = "BLIND SPOT",
        headline2      = "AUDIT",
        subtitle       = C["cover_subtitle"],
        meta_items     = C["meta"],
    )
    cover_story = [sp(1)]

    interior_fn = make_interior_template(client_name, logo_path)
    S = []

    # ── Intro page ────────────────────────────────────────────────────────────
    S.append(sp(20))
    S.append(Paragraph("WHAT IS A BLIND SPOT AUDIT?", sSecLabel))
    S.append(sp(4))
    S.append(Paragraph("Beyond the Website", sH1))
    S.append(sp(6))
    S.append(Paragraph(
        "A Blind Spot Audit goes deeper than SEO checklists. It identifies the strategic, "
        "behavioral, and market-positioning gaps that cost a company leads, loyalty, and "
        "long-term market share — the things that don't show up in a standard audit but "
        "compound in ways that are painful and preventable.", sLead))
    S.append(sp(14))
    S.append(Paragraph(f"About {client_name}", sH3))
    S.append(sp(4))
    S.append(Paragraph(C["intro_about_body"], sBody))
    S += pull_quote(*C["intro_quote"])

    # ── Blind spot listing page ────────────────────────────────────────────────
    S.append(PageBreak())
    S.append(Paragraph("THE BLIND SPOTS", sSecLabel))
    S.append(sp(4))
    S.append(Paragraph(f"{C['client_short']}'s Five Biggest Blind Spots", sH1))
    S.append(sp(4))
    S.append(Paragraph(
        "These are not website fixes. These are business-level strategic gaps "
        "with compounding revenue consequences.", sLead))
    S.append(sp(14))

    for bs in C["blind_spots"]:
        S += _blind_spot_card(bs)
        S.append(PageBreak())

    # ── Strategic Opportunity ─────────────────────────────────────────────────
    S.append(Paragraph("STRATEGIC OPPORTUNITY", sSecLabel))
    S.append(sp(4))
    S.append(Paragraph("What They Have. What They Need.", sH1))
    S.append(sp(10))
    S.append(Paragraph(C["strategic_para1"], sBody))
    S.append(sp(6))
    S.append(Paragraph(C["strategic_para2"], sBody))
    S += pull_quote(*C["strategic_quote"])

    build_pdf(out_path, cover_story, S, cover_fn, interior_fn,
              client_name, logo_path)
    return out_path
