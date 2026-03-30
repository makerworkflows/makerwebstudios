"""
templates/audit_01_digital_presence.py  —  Maker Audit Framework V2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Digital Presence Audit — exact reproduction of the original AMS design.

FILL INSTRUCTIONS: Replace every value marked  # ← FILL
"""

import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))
from lib.design import *

# ══════════════════════════════════════════════════════════════════════════════
# CLIENT CONTENT
# ══════════════════════════════════════════════════════════════════════════════
CONTENT = {
    "client_name": "Empiria Labs, LLC",
    "client_url":  "empirialabs.com",
    "industry":    "Analytical Testing Laboratory — Food Safety & Petroleum Geochemistry",
    "date":        "March 2026",
    "meta": ["Deep Research Audit", "March 2026", "Prepared by Maker Web Studios"],

    "exec_boxes": [
        ("THE COMPANY",
         "Empiria Labs, LLC is an analytical testing laboratory founded in 2019, located at 6200 E. Ramseyer Rd in Edinburg, TX. The lab specializes in pesticide residue analysis, microbiological testing, heavy metals, and mycotoxin analysis for the fruits and vegetables industry. They also perform petroleum geochemistry work including TOC, Pyrolysis, Rock Eval, and biomarker analysis. The company has 6 employees and is led by Jorge Cortes, PhD (Scientific Director) and Sarai Cortes (Operations/Business Development)."),
        ("THE CREDENTIALS",
         "A2LA accredited under ISO/IEC 17025:2017 for Chemistry (Certificate 6041.01) and Biological Testing (Certificate 6041.02). This dual accreditation makes Empiria the only lab in South Texas offering both chemistry and microbiology services under ISO 17025. They utilize LC/MS-MS, GC/MS-MS, and ICP/OES instrumentation, with extraction capabilities including ASE-350, QuEChERS, and Solid Phase Extraction."),
        ("THE PLATFORM",
         "WordPress CMS running Divi Theme v4.27.4 by Elegant Themes. No CDN detected. No analytics detected. Site was last modified April 11, 2025. The site uses Outfit and Roboto fonts via Google Fonts. Page structure is minimal — effectively a blank template with no substantive content deployed."),
        ("THE MARKET REALITY",
         "The food safety testing market is dominated by multinational players: Bureau Veritas (Houston), Eurofins Scientific (multiple Texas locations), and SGS SA. These competitors have comprehensive websites with online sample submission portals, accreditation badges prominently displayed, and detailed service catalogs. However, none of them are physically located in the RGV — Empiria's proximity advantage is significant for produce growers who need fast turnaround."),
    ],
    "exec_quote": (
        "The gap between what Empiria Labs IS — the only dual A2LA-accredited food safety testing lab in South Texas — and what its website SHOWS — an empty page with an 'About Us' heading — is the defining strategic opportunity. The competitive window is open, but national labs are actively expanding their Texas footprints to close it.",
        "Maker Web Studios Audit Finding",
    ),

    "scorecard": [
        ("Design & UX",         "1.5/10", "WordPress/Divi shell with only an 'About Us' heading. No visual hierarchy, no laboratory imagery, no navigation structure. Professional font selection (Outfit) and responsive framework are the only positives."),
        ("On-Page SEO",         "1.5/10", "Page title present ('Home - Empiria labs') and basic organization schema detected. Zero keyword targeting, no H1/H2 content structure, no internal linking. Site is invisible to search engines for any service-related query."),
        ("Technical SEO",       "2.0/10", "SSL certificate active and WordPress core updated. No Google Analytics, no Search Console, no sitemap, no CDN or caching. Zero measurement capability."),
        ("Content Quality",     "1.5/10", "Clean professional domain name and active LinkedIn presence with accreditation posts. Zero service descriptions, no capabilities page, no case studies, no blog. Website contributes nothing to buyer education."),
        ("Conversion",          "1.0/10", "Website is live and professional email domain exists. No phone number displayed, no sample submission form, no contact form, no CTA of any kind. Complete conversion infrastructure failure."),
        ("Trust & Credibility", "1.5/10", "Real physical location and LinkedIn accreditation posts provide some trust foundation. No A2LA badges on website, no team page, no certifications page, no client logos or testimonials."),
        ("Digital Presence",    "2.0/10", "LinkedIn company page is complete with regular posting. Domain has baseline history. No Google organic visibility, no directory listings, no review presence, unoptimized Google Business Profile."),
    ],
    "overall_note": "The site technically renders but functionally communicates nothing. Empiria holds dual A2LA accreditation that most labs cannot match, yet the website presents as if the business does not exist. Massive upside opportunity.",

    "market_tiles": [
        ("Founded", "2019", "Edinburg, TX"),
        ("A2LA Certificates", "2", "Chemistry + Biological Testing"),
        ("Overall Audit Score", "1.6/10", "Critical — Complete Rebuild Required"),
        ("Employees", "6", "PhD-Led Scientific Team"),
        ("Food Safety Testing CAGR", "7.2%", "Through 2031"),
        ("Global Market Size", "$28B+", "Food Safety Testing"),
    ],
    "competitors": [
        ("Bureau Veritas (Houston)", "Comprehensive website with full service catalog, online sample submission portal, global brand recognition, extensive accreditation scope.", "Dominant digital presence. Empiria advantage: 350+ miles closer to RGV produce corridor, eliminating 3-5 days of sample shipping time."),
        ("Eurofins Scientific (San Antonio)", "Industry-leading digital presence with detailed service pages, client portals, educational content library, and dominant SEO rankings.", "Strongest online competitor. Empiria advantage: no physical RGV presence, corporate pricing, impersonal client experience vs. local lab."),
        ("SGS SA (Regional Offices)", "Global reputation, extensive accreditation portfolio, multi-industry capabilities, well-optimized website with case studies.", "Generalist positioning dilutes food safety specialization. Empiria advantage: dedicated food safety focus and RGV proximity."),
        ("Empiria Labs, LLC", "Only dual A2LA-accredited lab in South Texas. LC/MS-MS, GC/MS-MS, ICP/OES instrumentation. PhD-led. Same-day sample acceptance.", "Strongest operational credentials in the region — but digitally invisible. The gap is entirely addressable with a professional website build."),
    ],
    "market_quote": (
        "The three largest competitors — Bureau Veritas, Eurofins, and SGS — all invest heavily in digital visibility, yet none have a physical presence in the RGV. Empiria holds the geographic advantage but is digitally invisible, allowing distant competitors to capture local clients by default.",
        "Maker Web Studios Audit Finding",
    ),

    "design_ux": [
        ("PASS", "Professional Font Selection", "The site uses Outfit, a modern geometric sans-serif that reads well at all sizes. This is a strong typographic foundation that can carry a professional lab identity when content is added."),
        ("PASS", "Responsive Framework", "The Divi theme provides a mobile-responsive grid system out of the box. The underlying structural CSS is properly configured for device scaling."),
        ("WARN", "No Visual Hierarchy", "With only an 'About Us' heading visible, there is no visual hierarchy guiding visitors through services, credentials, or next steps. A first-time visitor has zero orientation."),
        ("FAIL", "Empty Homepage", "The homepage contains effectively no content. No hero section, no service overview, no value proposition, no imagery. A visitor landing here would assume the business is closed or not yet operational."),
        ("FAIL", "No Laboratory Imagery", "Testing laboratories sell trust through visual credibility — clean rooms, instrumentation, sample handling. Empiria's site has zero imagery showing their facility, equipment, or team."),
        ("FAIL", "No Navigation Structure", "There is no visible menu or navigation system allowing visitors to explore services, certifications, or contact information. The site is a single dead-end page."),
    ],
    "onpage_seo": [
        ("PASS", "Page Title Present", "The homepage does have a title tag ('Home - Empiria labs') which allows basic indexing by search engines."),
        ("PASS", "Schema Markup Detected", "Basic organization schema is present in the page source, providing search engines with the company name and logo reference."),
        ("WARN", "Poor Meta Description", "The meta description appears to only contain 'ABOUT US' — far too short and non-descriptive. This is the text that appears in Google search results and currently communicates nothing about what Empiria does."),
        ("FAIL", "Zero Keyword Targeting", "No service-related keywords appear anywhere on the site. Terms like 'pesticide testing Edinburg TX,' 'food safety lab RGV,' or 'ISO 17025 laboratory South Texas' are completely absent."),
        ("FAIL", "No H1/H2 Content Structure", "Beyond the 'About Us' heading, there is no heading hierarchy organizing content by service, capability, or industry. Search engines have nothing to index."),
        ("FAIL", "No Internal Linking", "With only one page of content, there are no internal links creating topical authority or guiding search engine crawlers through a site architecture."),
    ],
    "technical_seo": [
        ("PASS", "SSL Certificate Active", "The site is served over HTTPS, which is a baseline requirement for Google ranking and visitor trust."),
        ("PASS", "WordPress Core Updated", "The CMS appears to be running a reasonably current version, reducing immediate security vulnerabilities."),
        ("WARN", "No Sitemap Detected", "Without an XML sitemap, search engines must discover pages through crawling alone, which slows indexing — especially critical when new content pages are added."),
        ("FAIL", "No Google Analytics", "No analytics tracking was detected. Empiria has zero visibility into who visits their site, where they come from, or what they do. No data to inform business decisions."),
        ("FAIL", "No Google Search Console", "Without Search Console connected, Empiria cannot see which search queries trigger impressions, identify crawl errors, or submit new pages for indexing."),
        ("FAIL", "No CDN or Caching", "No content delivery network is configured. While the site is too empty to have performance issues now, this will become critical once imagery and content are added."),
    ],
    "content": [
        ("PASS", "Domain Name", "empirialabs.com is a clean, professional domain that accurately represents the brand. Easy to spell, easy to remember, and matches the company name exactly."),
        ("PASS", "LinkedIn Presence Active", "Empiria Labs maintains an active LinkedIn profile with posts about their A2LA accreditation, conference appearances, and team recognition. Content creation capability exists — it just has not been deployed to the website."),
        ("WARN", "Zero Service Descriptions", "The core services — pesticide residue analysis, microbiological testing, heavy metals, mycotoxins — are not described anywhere on the website. A produce grower researching testing options will find nothing."),
        ("FAIL", "No Capabilities Page", "For a laboratory, a capabilities page is the equivalent of a product catalog. Equipment lists (LC/MS-MS, GC/MS-MS, ICP/OES), testing methodologies (QuEChERS, ASE-350, SPE), and turnaround times are expected by buyers and completely absent."),
        ("FAIL", "No Case Studies or Industry Context", "Empiria works with produce growers navigating FSMA compliance, yet the website provides no educational content about regulatory requirements, testing protocols, or why third-party accredited testing matters."),
        ("FAIL", "No Blog or Resource Section", "Zero content marketing infrastructure exists. In a market where produce growers search for information about pesticide testing requirements, Empiria could capture significant organic traffic with even basic educational articles."),
    ],
    "conversion": [
        ("PASS", "Website is Live", "The domain resolves and the site loads. This is the bare minimum, but it means the technical infrastructure exists to build on immediately."),
        ("PASS", "Professional Email Domain", "Empiria uses their company domain for email, which supports brand credibility in all external communications."),
        ("WARN", "No Phone Number Visible", "The most basic conversion element for a laboratory — a phone number — is not displayed anywhere on the website."),
        ("FAIL", "No Sample Submission Form", "The primary conversion action for a testing laboratory is sample submission. There is no form, no portal, no instructions for how a prospective client initiates testing."),
        ("FAIL", "No Contact Form of Any Kind", "There is no way for a website visitor to reach Empiria Labs through the website. No form, no email link, no chat widget, no phone number. Complete conversion failure."),
        ("FAIL", "No Call-to-Action Anywhere", "Zero CTAs exist on the site. No 'Request a Quote,' no 'Submit a Sample,' no 'Schedule a Consultation.' A visitor who wants to become a client has no pathway to do so."),
    ],
    "trust": [
        ("PASS", "Real Physical Location", "Empiria operates from a verifiable physical address at 6200 E. Ramseyer Rd, Edinburg, TX. This is important for laboratory credibility — buyers need to know where their samples are going."),
        ("PASS", "Active LinkedIn with Accreditation Posts", "The November 2024 LinkedIn post announcing dual A2LA accreditation demonstrates the company actively communicates its credentials — just not on its website."),
        ("WARN", "No Accreditation Badges on Website", "The A2LA accreditation badges — the single most important trust signal for a testing laboratory — are nowhere on the website. This credential should be the first thing every visitor sees."),
        ("FAIL", "No Team Page", "For a laboratory handling regulated testing, buyers want to know who is running the operation. Jorge Cortes' PhD and extensive geochemistry background, and Sarai's industry involvement, are invisible on the site."),
        ("FAIL", "No Certifications Page", "ISO/IEC 17025:2017 dual accreditation is a significant achievement. There is no dedicated page, no downloadable certificates, and no explanation of what this accreditation means for client confidence in test results."),
        ("FAIL", "No Client Logos or Testimonials", "Social proof is completely absent. No industry affiliations, no client references, no regulatory body relationships are displayed."),
    ],
    "digital_presence": [
        ("PASS", "LinkedIn Profile Complete", "The LinkedIn company page has a full description, location, employee count, and regular posting activity. This is the strongest element of Empiria's current digital presence."),
        ("PASS", "Domain Authority Potential", "The empirialabs.com domain has been registered and active, building baseline domain history that will support future SEO efforts."),
        ("WARN", "No Google Business Profile Optimization", "If a Google Business Profile exists, it is not optimized with services, photos, hours, or posts. This is critical for local 'lab near me' searches."),
        ("FAIL", "Zero Google Organic Visibility", "With no content on the website, Empiria Labs ranks for effectively zero keywords related to their services. Searches for 'pesticide testing Edinburg TX' or 'food safety lab RGV' do not surface Empiria."),
        ("FAIL", "No Directory Listings", "Empiria does not appear in key laboratory directories, industry association listings, or local business directories that produce growers and QA managers use to find testing partners."),
        ("FAIL", "No Review Presence", "No Google reviews, no Yelp presence, no industry platform reviews. For a service business where trust is paramount, the absence of third-party validation is a significant gap."),
    ],

    "doing_right": [
        ("Dual A2LA Accreditation Under ISO/IEC 17025:2017", "Holding both chemistry and biological testing accreditation is a genuine competitive moat. Most regional labs hold one or the other. This credential immediately qualifies Empiria for contracts that competitors cannot bid on."),
        ("Only Dual-Accredited Lab in South Texas", "Geographic monopoly on this specific credential means any produce company in the RGV requiring both chemical and microbiological testing under ISO 17025 has exactly one local option."),
        ("Advanced Instrumentation", "LC/MS-MS, GC/MS-MS, and ICP/OES represent serious analytical capability. ASE-350 and QuEChERS extraction methods are industry-standard for pesticide residue work at the highest level."),
        ("Proximity to RGV Produce Corridor", "The RGV is one of the highest-volume produce import corridors in the United States. Empiria sits directly in the supply chain path where testing demand is concentrated."),
        ("Bilingual Capability", "With Colombian roots and RGV location, Empiria can serve both US produce companies and Latin American exporters who need testing before crossing the border — a bilingual advantage most national labs cannot match."),
        ("Scientific Leadership", "Jorge Cortes' PhD in Geosciences and Organic Geochemistry, combined with petroleum industry experience, brings analytical rigor that elevates the lab's credibility beyond typical food safety testing operations."),
        ("Active LinkedIn Presence", "Regular LinkedIn posts about A2LA accreditation, conference appearances (Hart Energy, Viva Fresh EDGE), and Corporate Muse recognition demonstrate content creation capability that has not yet been deployed to the website."),
        ("Clean Professional Domain", "empirialabs.com is easy to spell, easy to remember, and matches the company name exactly — a solid brand foundation."),
        ("Conference and Industry Engagement", "Appearances at Hart Energy, Viva Fresh EDGE, and Corporate Muse recognition show the team is actively embedded in industry networks — just not communicating it digitally."),
        ("Petroleum Geochemistry as Second Revenue Stream", "TOC, Pyrolysis, Rock Eval, and biomarker analysis capabilities create a completely separate revenue stream from food safety testing — natural diversification."),
    ],

    "critical": [
        (1, "CRITICAL", "Build Complete Website Content. The site needs a homepage, services pages (pesticide testing, micro testing, heavy metals, mycotoxins), capabilities page, certifications page, about/team page, and contact page. This is not an update — it is a ground-up content build. Without it, the business is invisible online."),
        (2, "CRITICAL", "Deploy A2LA Accreditation Front and Center. Add accreditation badges to the homepage hero, create a dedicated certifications page with downloadable A2LA certificates, and include the badge in the footer of every page. This is the #1 trust differentiator and it is completely missing."),
        (3, "CRITICAL", "Build a Sample Submission / Contact System. Implement an online sample submission request form as the primary conversion tool. Include a general contact form, phone number, and email on every page. Currently there is zero way to convert a website visitor into a client."),
    ],
    "high": [
        (4,  "HIGH", "Set Up Google Analytics 4 and Search Console. Connect GA4 for traffic tracking and GSC for search performance monitoring. Without these, every marketing dollar spent is unmeasurable."),
        (5,  "HIGH", "Optimize Google Business Profile. Claim, verify, and fully optimize the GBP with services, photos of the lab and equipment, hours, and regular posts. This drives local search visibility immediately."),
        (6,  "HIGH", "Create Service-Specific Landing Pages. Build individual pages for pesticide residue analysis, microbiological testing, heavy metals, and mycotoxins. Each page should target specific search queries that produce growers use."),
        (7,  "HIGH", "Add Laboratory Photography. Commission professional photos of the facility, instrumentation, sample handling, and team. Visual credibility is non-negotiable for a laboratory selling trust."),
        (8,  "HIGH", "Build Team / About Page. Feature Jorge Cortes' PhD credentials and Sarai Cortes' business development background. Include conference appearances and industry recognition."),
        (9,  "HIGH", "Add A2LA Badges to Homepage Meta Tags. Include 'A2LA accredited' and 'ISO 17025' in the homepage meta title and description so this credential appears in Google search results."),
    ],
    "medium": [
        (10, "MEDIUM", "Implement XML Sitemap and Robots.txt. Ensure proper crawl directives are in place so search engines can efficiently index all new content as it is published."),
        (11, "MEDIUM", "Build Directory Listings. Register Empiria in laboratory directories, A2LA's public directory, local business directories, and produce industry association listings."),
        (12, "MEDIUM", "Start Content Marketing. Publish monthly articles about FSMA compliance, pesticide testing requirements, and food safety best practices. This builds topical authority and captures informational search traffic."),
        (13, "MEDIUM", "Implement Structured Data Markup (LocalBusiness, Laboratory). Enhanced search result appearance and eligibility for Google rich results."),
        (14, "MEDIUM", "Build a Service Area Page. Map showing Empiria's location relative to major produce growing regions and border crossings in the RGV."),
        (15, "MEDIUM", "Create Turnaround Time Comparison Content. Chart showing Empiria's 2-3 day results vs. 5-7 days when shipping to Houston — the proximity advantage quantified."),
    ],

    "roadmap": [
        ("PHASE 1",
         "Days 1-30: Foundation",
         [
             "Deploy complete website with all core pages: homepage, 4 service pages (pesticide, micro, heavy metals, mycotoxins), capabilities, certifications, team, and contact/sample submission.",
             "Connect Google Analytics 4 and Search Console. Establish baseline traffic and implement conversion tracking on all forms.",
             "Claim and fully optimize Google Business Profile with services, lab photos, hours, and first 4 posts.",
             "Add A2LA badges (Chemistry Certificate 6041.01 and Biological Testing Certificate 6041.02) across the entire site — hero, certifications page, and footer.",
             "Display phone number and email in header and footer of every page. Make phone number click-to-call on mobile.",
             "Generate and submit XML sitemap to Google Search Console.",
             "Implement LocalBusiness and Laboratory structured data markup site-wide.",
         ]),
        ("PHASE 2",
         "Days 31-60: Content & Trust",
         [
             "Publish 4 service-specific landing pages optimized for local search queries (pesticide testing, micro testing, heavy metals, mycotoxins + 'Edinburg TX' / 'RGV' / 'South Texas').",
             "Write and publish 2 educational blog posts: 'What Produce Growers Need to Know About FSMA Testing Requirements' and 'Why ISO 17025 Accreditation Matters for Your Test Results.'",
             "Build out capabilities page with full equipment list (LC/MS-MS, GC/MS-MS, ICP/OES, ASE-350), methodologies, and turnaround time commitments.",
             "Register in 5+ laboratory directories and industry listings with consistent NAP (Name, Address, Phone) information.",
             "Add downloadable A2LA certificate PDFs and scope of accreditation documents to the certifications page.",
             "Create team bios with professional headshots, PhD credentials, conference appearances, and LinkedIn profile links.",
         ]),
        ("PHASE 3",
         "Days 61-90: Lead Generation & SEO Flywheel",
         [
             "Publish 2 additional blog posts targeting long-tail keywords in the produce testing space.",
             "Launch Google Business Profile posting schedule (2x/month) with lab updates, team highlights, and industry insights.",
             "Implement FAQ schema on service pages to enable rich results in Google SERPs.",
             "Begin backlink outreach to produce industry associations, RGV business organizations, and A2LA's directory for referral traffic.",
             "Build a 'Local Sample Drop-Off' section highlighting same-day sample acceptance for RGV produce companies.",
             "Review Google Business Profile analytics to confirm impressions, calls, and direction requests.",
             "Audit Core Web Vitals via Google Search Console and address any page speed issues on image-heavy pages.",
         ]),
    ],

    "strategic": [
        "Empiria Labs sits in an extraordinary position: the only dual A2LA-accredited lab in South Texas, located in one of the nation's busiest produce import corridors, with advanced instrumentation and bilingual capability. The market is there. The credentials are there. The website is the only thing missing.",
        "The competitive landscape is surprisingly favorable. The major national labs (Bureau Veritas, Eurofins, SGS) all require sample shipping to Houston, San Antonio, or beyond — adding 3-5 days of turnaround time that produce growers cannot afford during peak harvest seasons. A properly built website that captures 'pesticide testing near me' and 'food safety lab RGV' searches would have virtually no local competition.",
        "The investment required to close this gap is modest relative to the revenue at stake. A single produce company sending $2,000-$5,000/month in testing fees represents an annual contract worth $24,000-$60,000. Capturing even 3-5 new clients through improved digital visibility would generate a return that dwarfs the cost of a professional website build and ongoing SEO.",
        "The competitive window is open — but national labs are actively expanding their Texas footprints. Every month of delay is market share ceded to distant competitors who are already investing in digital visibility. Empiria Labs has earned the credentials that competitors spend years pursuing. The only thing standing between this lab and a full testing pipeline is a website that tells the truth about what it actually is.",
    ],
    "strategic_quote": (
        "Empiria Labs has earned the credentials that competitors spend years pursuing. The only thing standing between this lab and a full testing pipeline is a website that tells the truth about what it actually is.",
        "Maker Web Studios Audit Finding",
    ),
}

# ══════════════════════════════════════════════════════════════════════════════
# BUILDER
# ══════════════════════════════════════════════════════════════════════════════

def build(client, logo_path, output_dir):
    C           = CONTENT
    client_name = client["name"]
    slug        = client["slug"]
    out_path    = os.path.join(output_dir, f"01_Digital_Presence_Audit_{slug}.pdf")

    # Auto-calculate overall score
    def _f(s):
        try: return float(s.split("/")[0])
        except: return 0.0
    overall = sum(_f(r[1]) for r in C["scorecard"]) / len(C["scorecard"])

    # ── Cover page ────────────────────────────────────────────────────────────
    cover_fn = make_cover_template(
        doc_type_label = "DIGITAL PRESENCE AUDIT",
        client_name    = None,   # no client name line on digital audit cover
        logo_path      = logo_path,
        headline1      = "DIGITAL PRESENCE",
        headline2      = "AUDIT REPORT",
        subtitle       = f"{client['url']} — {client_name}",
        meta_items     = C["meta"],
    )
    cover_story = [sp(1)]  # invisible spacer to force a page

    # ── Interior pages ────────────────────────────────────────────────────────
    interior_fn = make_interior_template(client_name, logo_path)
    S = []

    # TOC
    toc_items = [
        ("01","Executive Summary"),("02","Audit Scorecard"),
        ("03","Market & Competitive Context"),("04","Design & UX"),
        ("05","On-Page SEO"),("06","Technical SEO"),
        ("07","Content Quality"),("08","Conversion"),
        ("09","Trust & Credibility"),("10","Digital Presence"),
        ("11","What They Are Doing Right"),("12","Priority Fix Table"),
        ("13","90-Day Fix Roadmap"),("14","Strategic Opportunity"),
    ]
    S.append(sp(20))
    S.append(Paragraph("TABLE OF CONTENTS", sOrgBold))
    S.append(sp(8))
    S.append(build_toc(toc_items))

    # S01 Executive Summary
    S.append(PageBreak())
    S += section_header("01", "Executive Summary",
        f"A comprehensive analysis of {client['url']}'s digital presence, "
        "market positioning, and growth opportunities.")
    S.append(sp(14))
    S += exec_summary_boxes(C["exec_boxes"])
    S += pull_quote(*C["exec_quote"])

    # S02 Scorecard
    S.append(PageBreak())
    S += section_header("02", "Audit Scorecard",
        "Overall performance across seven critical website and digital presence categories.")
    S.append(sp(10))
    S.append(scorecard_table(C["scorecard"], overall, C["overall_note"]))

    # S03 Market Context
    S.append(PageBreak())
    S += section_header("03", "Market & Competitive Context",
        f"Understanding the {client['industry']} landscape and competitive dynamics.")
    S.append(sp(10))
    # stat tiles — show max 6, 3 per row
    tiles = C["market_tiles"]
    if len(tiles) >= 3:
        S.append(stat_tiles(tiles[:3]))
        S.append(sp(4))
    if len(tiles) >= 6:
        S.append(stat_tiles(tiles[3:6]))
    S.append(sp(10))
    S.append(Paragraph("Competitive Landscape", sH3))
    S.append(sp(6))
    S.append(three_col(
        ["COMPETITOR","PROFILE","DIGITAL POSITION VS. CLIENT"],
        C["competitors"],
        cw=[CONTENT_W*0.22, CONTENT_W*0.28, CONTENT_W*0.50],
    ))
    S += pull_quote(*C["market_quote"])

    # S04–S10 Audit sections
    sections = [
        ("04","Design & UX","Visual design, user experience, and interface assessment.",       "design_ux"),
        ("05","On-Page SEO","SEO at the page level: titles, metas, keywords, content structure.","onpage_seo"),
        ("06","Technical SEO","Technical factors: crawlability, indexing, search performance.", "technical_seo"),
        ("07","Content Quality","Depth, uniqueness, and strategic value of website content.",   "content"),
        ("08","Conversion","How effectively the site converts visitors into leads.",            "conversion"),
        ("09","Trust & Credibility","How the site builds buyer confidence and social proof.",   "trust"),
        ("10","Digital Presence","Social footprint, directories, and off-site visibility.",    "digital_presence"),
    ]
    for num, title, lead, key in sections:
        S.append(PageBreak())
        S += section_header(num, title, lead)
        S.append(sp(8))
        for item in C[key]:
            S += audit_item(*item)

    # S11 Doing Right
    S.append(PageBreak())
    S += section_header("11","What They Are Doing Right",
        "Credit where it is due. Legitimate competitive advantages that form the foundation for growth.")
    S.append(sp(10))
    for i, (t, d) in enumerate(C["doing_right"], 1):
        # Numbered item using the left-number style from the original
        row = [[
            Paragraph(str(i), make_style(f"dr_n{i}", fontSize=14, leading=18,
                                  fontName="Helvetica-Bold", textColor=C_ORANGE,
                                  alignment=TA_CENTER)),
            [Paragraph(f"<b>{t}</b>", sBodyBold), Paragraph(d, sBody)],
        ]]
        t_obj = Table(row, colWidths=[CONTENT_W*0.07, CONTENT_W*0.93])
        t_obj.setStyle(TableStyle([
            ("VALIGN",       (0,0),(-1,-1),"TOP"),
            ("TOPPADDING",   (0,0),(-1,-1),6),
            ("BOTTOMPADDING",(0,0),(-1,-1),6),
            ("LEFTPADDING",  (0,0),(0,0),  4),
            ("LEFTPADDING",  (1,0),(1,0),  10),
            ("BOX",          (0,0),(-1,-1),0.5,C_MGRAY),
            ("INNERGRID",    (0,0),(-1,-1),0.5,C_MGRAY),
            ("BACKGROUND",   (0,0),(-1,-1),C_LGRAY),
        ]))
        S.append(t_obj); S.append(sp(4))

    # S12 Priority Fix Table
    S.append(PageBreak())
    S += section_header("12","Priority Fix Table",
        "Ranked improvements by impact and urgency. Address critical items first.")
    S.append(sp(10))
    S += priority_section_header("CRITICAL", "Immediate Action Required")
    for num, badge, detail in C["critical"]:
        S += priority_row(num, badge, detail)
    S.append(sp(10))
    S += priority_section_header("HIGH", "Address Within 30 Days")
    for num, badge, detail in C["high"]:
        S += priority_row(num, badge, detail)
    S.append(sp(10))
    S += priority_section_header("MEDIUM", "Address Within 60 Days")
    for num, badge, detail in C["medium"]:
        S += priority_row(num, badge, detail)

    # S13 Roadmap
    S.append(PageBreak())
    S += section_header("13","90-Day Fix Roadmap",
        f"A phased execution plan to transform {client['url']} from a digital "
        "liability into the company's strongest lead generation asset.")
    S.append(sp(10))
    for label, title, items in C["roadmap"]:
        S += phase_block(label, title, items)

    # S14 Strategic Opportunity
    S.append(PageBreak())
    S += section_header("14","Strategic Opportunity")
    S.append(sp(6))
    for para in C["strategic"]:
        S.append(Paragraph(para, sBody))
        S.append(sp(4))
    S += pull_quote(*C["strategic_quote"])

    build_pdf(out_path, cover_story, S, cover_fn, interior_fn,
              client_name, logo_path)
    return out_path
