"""
populate_rgs_demo.py
Overwrites the CONTENT dicts in all 5 V2 templates with full Rio Grande Steel content,
then runs the framework to produce demo PDFs.
Run from maker_audit_framework_v2/ directory.
"""
import sys, os
sys.path.insert(0, os.path.dirname(__file__))

# ── Shared client config ──────────────────────────────────────────────────────
CLIENT_BLOCK = '''CLIENT = {
    "name":     "Rio Grande Steel, Ltd.",
    "url":      "riograndesteel.com",
    "industry": "Fabricated Reinforcing Steel & Construction Supply",
    "location": "Rio Grande Valley, South Texas",
    "date":     "March 2026",
}
'''

# ── Template 01 — Digital Presence Audit ─────────────────────────────────────
T01 = '''
CONTENT = {
    "client_name": "Rio Grande Steel, Ltd.",
    "client_url":  "riograndesteel.com",
    "industry":    "Fabricated Reinforcing Steel & Construction Supply",
    "date":        "March 2026",
    "meta": ["Deep Research Audit", "March 2026", "Prepared by Maker Web Studios"],

    "exec_boxes": [
        ("THE COMPANY",
         "Rio Grande Steel, Ltd. is the largest supplier of fabricated reinforcing steel in South Texas. Founded in 1991 by Hector M. Maldonado, the company operates from three Valley-wide branches (Edinburg, San Benito, Peñitas) with approximately 100 employees and 120,000 sq. ft. of warehouse space."),
        ("THE CREDENTIALS",
         "Largest fabricated rebar supplier in South Texas. 35+ years of operation. Owned delivery fleet (tractor trailers, bobtails, pickups). Automated fabrication equipment. On-site rebar placing crew. Exclusive Valley distributor of Sika concrete colors. Named client list includes UTPA, DHR Hospital, SpaceX Launch Pad, Dodge Arena, and McAllen Border Patrol Station."),
        ("THE PLATFORM",
         "Website at riograndesteel.com built on WordPress (Brizy builder). Copyright footer reads 2019. A legacy domain (rgscas.com) is also indexed by Google, splitting search authority. No confirmed Google Analytics, no submitted sitemap, no schema markup detected on any page crawled."),
        ("THE MARKET REALITY",
         "Rio Grande Steel competes in a Valley construction market in active expansion. SpaceX, LNG terminals, residential growth, and commercial development create sustained demand. The company\'s 35-year legacy and fleet ownership are significant differentiators that are nearly invisible to contractors searching Google for a new supplier."),
    ],
    "exec_quote": (
        "The gap between what Rio Grande Steel has built over 35 years — the fleet, the fabrication capacity, the team, the project history — and what its website communicates to a contractor searching Google today is the defining strategic opportunity.",
        "Maker Web Studios Audit Finding",
    ),

    "scorecard": [
        ("Design & UX",         "4.0/10", "2019-era WordPress/Brizy template. Functional but dated. Image-heavy pages. No confirmed mobile optimization. Project photos present but alt text missing."),
        ("On-Page SEO",         "2.0/10", "No keyword strategy detected. Generic page titles. No meta descriptions on any page. No H1 targeting search terms used by contractors."),
        ("Technical SEO",       "2.5/10", "No sitemap confirmed. No schema markup. No Analytics detected. Dual-domain issue (riograndesteel.com + rgscas.com) splits search authority and confuses first-time visitors."),
        ("Content Quality",     "4.5/10", "Above average for category — named client list, product catalogs, team roster with direct phone numbers. Thin on FAQs, differentiator copy, and first-buyer guidance."),
        ("Conversion",          "2.5/10", "Phone numbers present but no online RFQ form. No estimating intake. No lead capture beyond phone. No above-the-fold CTA on the homepage."),
        ("Trust & Credibility", "5.5/10", "Strong foundation: named client list with major projects, leadership team with direct numbers, real project photography, 35-year history referenced on homepage."),
        ("Digital Presence",    "3.0/10", "Facebook (3 location pages) + Instagram + YouTube active. No LinkedIn company page. No confirmed Google Business Profile for any of the three locations."),
    ],
    "overall_note": "Significant improvements available across all categories. Strong operational foundation not yet reflected in digital presence. High upside opportunity.",

    "market_tiles": [
        ("Founded", "1991", "35+ Years in Operation"),
        ("Warehouse Space", "120,000 Sq. Ft.", "Valley-Wide"),
        ("Overall Audit Score", "3.4/10", "Significant Upside"),
        ("Branch Locations", "3", "Edinburg • San Benito • Peñitas"),
        ("U.S. Rebar CAGR", "5.2%", "Through 2030"),
        ("Texas Construction Spend", "$90B+", "Annually — Nation\'s Largest"),
    ],
    "competitors": [
        ("Commercial Metals Company (CMC)", "National fabricated rebar leader with Texas fabrication facilities.", "Dominant SEO, RFQ forms, spec sheets, project gallery. RGS can compete on local relationship and full-service depth."),
        ("Gerdau / Nucor Rebar Fabrication", "National steel producers with regional distribution. Major bid competition for large commercial projects.", "National brand digital infrastructure. RGS advantage: local ownership, three Valley locations, placing crew, 3,000-product accessory depth."),
        ("Regional RGV Concrete Suppliers", "Smaller local suppliers without RGS\'s fabrication capacity, owned fleet, or placing crew.", "Similar or weaker digital presence than RGS. A modernized site creates immediate competitive differentiation."),
        ("Rio Grande Steel, Ltd.", "35 years, 3 locations, 100+ employees, owned fleet, placing crew, 3,000-product showroom.", "Strongest operational credentials in the region — but nearly invisible in search results. The gap is entirely addressable."),
    ],
    "market_quote": (
        "Rio Grande Steel\'s strongest advantages — 35 years of operation, owned delivery fleet, on-site rebar placing crew, and a 3,000-product showroom — are invisible in search results. A contractor researching fabricated rebar suppliers in the Valley today cannot easily find Rio Grande Steel on Google.",
        "Maker Web Studios Audit Finding",
    ),

    "design_ux": [
        ("PASS", "Project Photography Present", "Real project photos (Academy, Children\'s Hospital, Convention Center, UTPA) appear on the Commercial page. Authentic imagery is a strong trust signal in B2B construction supply."),
        ("PASS", "Phone Numbers Accessible", "Direct numbers for all three locations plus sales rep cell numbers on the Contact page. Above-average contact accessibility for the category."),
        ("PASS", "Five Distinct Service Pages", "Commercial, Residential, Showroom, Fabrication, and Contact are navigable from the main menu. A functional structure exists to build upon."),
        ("PASS", "Team Names and Roles Listed", "Contact page lists full management team and sales reps with direct cell numbers — an unusual and credibility-building depth of contact information."),
        ("WARN", "Visual Design — 2019-Era Template", "Functional but visually dated Brizy/WordPress template. Lacks the visual authority expected by commercial GCs and project managers evaluating a major supplier."),
        ("WARN", "Navigation — Missing Key Pages", "No About / History page in main nav. No Quote Request shortcut. No standalone Projects page. Key trust-building content is buried within service pages."),
        ("WARN", "Dual Domain Confusion", "Two websites (riograndesteel.com and rgscas.com) both appear in Google results, splitting link authority and sending some first-time visitors to the 2009-era legacy site."),
        ("FAIL", "Homepage Hero — No Value Proposition", "Homepage hero is a bridge image with no headline communicating what the company does, who it serves, or why a contractor should call. No above-the-fold CTA."),
        ("FAIL", "Mobile Performance — Risk Indicators", "The Residential page has 15+ large gallery images. No confirmed image CDN or caching plugin. Mobile load performance is likely poor — a confirmed Google ranking factor."),
        ("FAIL", "No Standalone About / History Page", "The 35-year Maldonado family story — from steel shop helper in 1991 to South Texas\'s dominant rebar supplier — is not accessible as a dedicated page from the main navigation."),
        ("FAIL", "Image Alt Text — Missing", "All images use generic filenames (commercial01, FABRI14). No descriptive alt text observed. Eliminates image SEO and accessibility compliance."),
    ],
    "onpage_seo": [
        ("PASS", "Clean URL Structure", "/commercial/, /residential/, /fabrication/, /showroom/, /contact/ — acceptable URL structure that assists crawlability."),
        ("PASS", "WordPress Platform — SEO-Capable", "WordPress with Brizy supports Yoast/RankMath plugins that can resolve most on-page SEO gaps without a full rebuild."),
        ("WARN", "Partial Keyword Presence in Body Copy", "Terms like \'fabricated reinforcing steel,\' \'rebar,\' and \'South Texas\' appear in body text but are absent from titles, H1s, and meta descriptions where they carry the most ranking weight."),
        ("FAIL", "Page Title Tags — Generic and Unoptimized", "Titles follow \'Commercial – Rio Grande Steel\' pattern. No contractor search intent targeted. Correct format: \'Rebar Fabrication South Texas | Rio Grande Steel.\'"),
        ("FAIL", "Meta Descriptions — Not Present", "No custom meta descriptions detected on any page. Google auto-generates snippets, resulting in missed click-through opportunities in search results."),
        ("FAIL", "Homepage H1 — Not Keyword-Optimized", "The primary homepage heading is a brand tagline, not a search-intent statement. No contractor searching \'rebar supplier RGV\' would find it through this heading."),
        ("FAIL", "Keyword Strategy — None Detected", "High-value terms: \'rebar fabrication McAllen TX,\' \'concrete accessories Rio Grande Valley,\' \'rebar placing service Edinburg\' — entirely absent from title tags and headings."),
        ("FAIL", "Image Alt Text — Missing Site-Wide", "Generic filenames used as image references. No keyword-bearing alt text observed across any page."),
        ("FAIL", "Blog / Content Hub — None", "No blog or resource section. Zero opportunity to rank for informational queries used by contractors researching rebar ordering or residential foundation packages."),
    ],
    "technical_seo": [
        ("PASS", "Domain Age — Established", "The riograndesteel.com WordPress site has been live since at least 2019. The legacy rgscas.com domain dates to 2009. Aged domains carry modest authority advantages."),
        ("PASS", "WordPress Platform — Technically Sound", "WordPress/Brizy is capable of handling all technical SEO requirements with proper plugin configuration."),
        ("WARN", "Dual Domain — rgscas.com Still Indexed", "Both domains appear in Google results. The legacy site splits search authority, lacks HTTPS, and delivers a significantly inferior experience to first-time visitors."),
        ("WARN", "Image Optimization — No CDN Confirmed", "No image CDN confirmed on riograndesteel.com. The Residential page alone contains 15+ large photos. Material page speed risk on both desktop and mobile."),
        ("FAIL", "XML Sitemap — Not Confirmed Submitted", "No sitemap.xml confirmed at standard locations. Without a sitemap, Googlebot must discover all pages by crawling alone — reducing indexation efficiency."),
        ("FAIL", "Schema Markup — None Detected", "No LocalBusiness, Organization, or Service schema detected. Eliminates eligibility for Google rich results and knowledge panel features for all three locations."),
        ("FAIL", "Google Analytics — Not Confirmed", "No GA4 or Google Tag Manager detected. No visibility into how contractors find the site or which pages drive phone calls."),
        ("FAIL", "Google Search Console — Not Confirmed Active", "Without Search Console, crawl errors, indexation gaps, and the dual-domain issue go undetected and unresolved."),
        ("FAIL", "HTTPS — Inconsistently Enforced", "The primary domain returns errors on direct HTTPS access. The legacy rgscas.com serves HTTP only. Inconsistent HTTPS is a trust and ranking signal issue."),
    ],
    "content": [
        ("PASS", "Named Client and Project List — Exceptional", "Commercial page lists GC names alongside completed projects: UTPA, DHR Hospital, Academy, Dodge Arena, McAllen Border Patrol Station, SpaceX Launch Pad. A rare and credible trust asset."),
        ("PASS", "Comprehensive Product Catalogs", "30+ product categories on Commercial, detailed residential products, steel shapes on Fabrication. Above-average content depth for regional suppliers."),
        ("PASS", "Team Roster with Direct Contacts", "Full management team named with titles plus sales reps with direct cell numbers. Uncommon level of transparency that builds immediate credibility."),
        ("WARN", "Service Pages Functional but Thin", "Content covers what each service does but lacks buyer-decision information: no FAQs, no lead times, no minimum orders, no first-time buyer process explanations."),
        ("WARN", "Project Gallery — Present but Unoptimized", "Photos on Commercial and Residential pages have no captions, project names, client attribution, or alt text."),
        ("FAIL", "No Dedicated About / History Page", "The 35-year Maldonado family origin story is not accessible as a dedicated page from the main navigation."),
        ("FAIL", "No FAQs — Critical Gap for First-Time Buyers", "No FAQ section on any page. Common pre-call questions — minimum orders, lead times, residential rebar package process, delivery area — go unanswered."),
        ("FAIL", "Sika Exclusive Distribution Buried", "The Valley\'s exclusive Sika concrete colors and stains distribution agreement is mentioned once in Residential page body text. It deserves prominent placement on the homepage."),
    ],
    "conversion": [
        ("PASS", "Phone Numbers — Multiple Direct Contacts", "All three location numbers plus sales rep cell numbers are on the Contact page. A buyer who reaches it has everything needed to call the right person."),
        ("PASS", "Social Media Links Present", "Facebook pages for all three locations, Instagram, and YouTube are linked from each service page."),
        ("WARN", "Contact Form — Basic", "A standard contact form exists but has no project-scoping fields that would help qualify leads or route them to the right sales rep."),
        ("FAIL", "Homepage — No Above-the-Fold CTA", "No visible call-to-action in the homepage hero. First-time visitors have no clear next step upon landing."),
        ("FAIL", "No Request a Quote / Online Estimating Flow", "No dedicated RFQ page or online plan-submission form. Commercial GCs expecting a structured estimating intake have no structured path to initiate one."),
        ("FAIL", "No Lead Capture — Zero Email List Building", "No lead magnets, gated content, or email capture mechanism. Website traffic generates no email subscribers."),
        ("FAIL", "Placing Crew Service — Not Actively Sold", "The on-site rebar placing crew is mentioned on the Commercial page but has no dedicated CTA, no pricing framework description, and no mechanism to request it separately."),
    ],
    "trust": [
        ("PASS", "Named Client List with Major Projects — Strong", "GC names alongside completed projects including UTPA, DHR Hospital, Academy, Dodge Arena, Border Patrol Station, and the SpaceX Launch Pad. One of the strongest trust assets on the site."),
        ("PASS", "Ownership Transparency — Named Leadership", "Hector M. Maldonado (President), Criselda Maldonado (VP), and Rick Maldonado (GM) are named with titles. Personal ownership transparency is a meaningful differentiator."),
        ("PASS", "Real Project Photography", "Project gallery photos show actual completed construction projects — not stock imagery."),
        ("WARN", "No Client Testimonials", "A substantial named client list exists but no written testimonials or quotes appear anywhere on the site."),
        ("WARN", "No Industry Memberships Displayed", "No AGC, AISC, or local construction association memberships shown. Competitors who display these signals hold a credibility advantage."),
        ("FAIL", "No Google Reviews or External Platform Presence", "No verified Google Business Profile reviews, Yelp reviews, or BBB profile confirmed for any location."),
        ("FAIL", "35-Year Legacy Not Featured as a Trust Badge", "\'Since 1991\' is buried in body text, not displayed as a prominent trust headline. This differentiator is easy for a first-time visitor to miss."),
        ("FAIL", "No Google Business Profile Confirmed", "No verified GBP for any of the three locations — eliminating the company from Google Maps and local search results entirely."),
    ],
    "digital_presence": [
        ("PASS", "Facebook — Three Location Pages Active", "Separate Facebook pages for Edinburg (1,198 likes), San Benito, and Peñitas — all linked from the website. The Edinburg page had a live post in March 2026."),
        ("PASS", "Instagram — Account Exists", "@riograndesteel is linked from all service pages. Active visual channel for project and product content."),
        ("PASS", "YouTube — Channel Linked", "A YouTube channel is linked from the site. Fabrication and project video content would serve as high-trust sales tools."),
        ("WARN", "Legacy Domain rgscas.com Still Indexed", "The 2009-era static HTML site at rgscas.com appears in Google results, splitting search authority and delivering an inferior first impression."),
        ("FAIL", "LinkedIn Company Page — Not Confirmed", "No LinkedIn company page found. LinkedIn is the primary B2B discovery channel for GCs, project managers, and procurement contacts."),
        ("FAIL", "Google Business Profile — Not Confirmed for Any Location", "No verified GBP for Edinburg, San Benito, or Peñitas. A free verified GBP places the company immediately on Google Maps and in local search."),
        ("FAIL", "Industry Directory Listings — Not Confirmed", "No presence confirmed in ThomasNet, Dodge Data, or regional contractor databases."),
        ("FAIL", "Organic Search Visibility — Minimal", "The site appears to rank only for branded queries. A company with 35 years of operation should have a substantial footprint for unbranded contractor search terms."),
    ],

    "doing_right": [
        ("Named Client List with Major Valley Projects", "The Commercial page lists GC names alongside completed projects including UTPA, DHR Hospital, Academy, Dodge Arena, McAllen Border Patrol Station, and the SpaceX Launch Pad — a rare and credible trust asset."),
        ("Management Team Named with Direct Contact Numbers", "The Contact page lists the full leadership team plus direct cell numbers for commercial and residential sales reps. This transparency builds immediate credibility."),
        ("Three Social Media Channels Active", "Three Facebook location pages plus Instagram and YouTube are all linked and show recent activity."),
        ("Real Project Photography on Key Pages", "Authentic project photos on the Commercial page confirm the company\'s scale and project history to visiting contractors."),
        ("Comprehensive Product Catalogs Published", "30+ product categories on Commercial including concrete accessories, forming systems, and farm/ranch materials."),
        ("35-Year Founding History Present", "The 1991 founding by Hector M. Maldonado is referenced on the homepage. The story is present — it simply needs to be elevated and told more prominently."),
        ("Owned Delivery Fleet Mentioned", "The homepage references the owned fleet of tractor trailers, bobtails, and pickup trucks — a significant operational differentiator."),
        ("Three Valley-Wide Locations — Geographic Advantage", "Three locations provide geographic coverage and same-day emergency availability that out-of-region competitors cannot match."),
        ("On-Site Rebar Placing Crew Referenced", "The Commercial page explicitly mentions the rebar placing service — a premium, differentiated service that deserves its own dedicated section."),
        ("Sika Exclusive Distribution — Valley\'s Only Source", "Rio Grande Steel is the Valley\'s exclusive distributor of Sika integral concrete colors and stains — a genuine competitive moat currently buried in body text."),
    ],

    "critical": [
        (1, "CRITICAL", "Google Business Profile — Three Locations. Create and verify a free GBP for Edinburg, San Benito, and Peñitas. Places Rio Grande Steel on Google Maps and in local search results immediately."),
        (2, "CRITICAL", "Google Analytics 4 + Search Console. Install GA4 and connect Search Console immediately. Without analytics, no data exists on how contractors find the site or which pages drive calls."),
        (3, "CRITICAL", "Page Title Tags — All Pages. Rewrite all page titles: \'Rebar Fabrication South Texas | Rio Grande Steel.\' Current titles target no contractor search query."),
        (4, "CRITICAL", "Consolidate Legacy rgscas.com Domain. 301-redirect all rgscas.com URLs to riograndesteel.com to consolidate search authority and eliminate visitor confusion."),
        (5, "CRITICAL", "XML Sitemap — Generate and Submit. Generate sitemap.xml via Yoast SEO or RankMath and submit to Google Search Console."),
    ],
    "high": [
        (6,  "HIGH", "Homepage Hero — Value Proposition + CTA. Replace bridge image hero with: \'South Texas\'s Largest Fabricated Rebar Supplier — Three Valley Locations, Owned Fleet, On-Site Placing Crew.\' Add a primary CTA button."),
        (7,  "HIGH", "Meta Descriptions — All Pages. Write unique 150–160 character meta descriptions for every page. These appear directly in Google search results and drive click-through rates."),
        (8,  "HIGH", "About / History Page — In Navigation. Build a standalone About page featuring the 1991 founding, Maldonado family story, and 35-year track record. Make it accessible from main navigation."),
        (9,  "HIGH", "LinkedIn Company Page. Create and optimize a LinkedIn Company Page. Commercial GCs and project managers research suppliers on LinkedIn. Post bi-weekly updates."),
        (10, "HIGH", "Schema Markup — Organization + LocalBusiness + Service. Implement schema on homepage, contact, and all service pages for all three physical locations."),
        (11, "HIGH", "Image Alt Text — Site-Wide. Add descriptive alt text to all images: \'Fabricated rebar delivery to commercial job site in Edinburg TX.\' Critical for image SEO and accessibility."),
    ],
    "medium": [
        (12, "MEDIUM", "Online Estimating Intake Form. Build a \'Request an Estimate\' page with project scoping fields: project type, material, quantity, delivery location, timeline."),
        (13, "MEDIUM", "FAQ Sections — Commercial and Residential. Answer common pre-call questions: minimum orders, lead times, residential rebar package process, delivery coverage area."),
        (14, "MEDIUM", "Feature Sika Exclusive Distribution Prominently. Move the Sika exclusive distribution statement to a featured badge on the Residential page hero and homepage."),
        (15, "MEDIUM", "Standalone Projects Page with Captions. Create a Projects page with photos, GC names, project types, and Valley locations. Currently buried in the Commercial page."),
        (16, "MEDIUM", "Google Reviews — Active Request Campaign. Contact 5–10 existing GC accounts and request a Google review. Five genuine reviews transform the GBP from empty to credible."),
        (17, "MEDIUM", "YouTube Channel — Activate with Video Content. Short videos (60–90 seconds) of the fabrication shop, placing crew on-site, and showroom depth serve as high-trust sales tools."),
        (18, "MEDIUM", "Content Hub — 5 Initial Articles. Publish 5 articles targeting contractor search queries: how to order fabricated rebar in South Texas, what is a residential rebar package, rebar placing service vs. self-install."),
    ],

    "roadmap": [
        ("PHASE 1",
         "Days 1–30: Foundation",
         [
             "Create and verify Google Business Profiles for all three locations (Edinburg, San Benito, Peñitas) — free and highest-ROI action available.",
             "Install Google Analytics 4 and connect Google Search Console. Establish baseline traffic and indexation data.",
             "Generate and submit XML sitemap to Google Search Console via Yoast SEO or RankMath plugin.",
             "Rewrite all page title tags with keyword-optimized copy targeting rebar and concrete accessory search terms.",
             "Write unique meta descriptions for every page (150–160 characters, include location and primary differentiator).",
             "Add above-the-fold homepage hero with clear value proposition headline and primary CTA button.",
             "Implement 301 redirect from rgscas.com to riograndesteel.com to resolve dual-domain authority split.",
             "Create and publish LinkedIn Company Page. Post first 3–5 updates on capabilities, team, and projects.",
         ]),
        ("PHASE 2",
         "Days 31–60: Content & Trust",
         [
             "Build dedicated About / History page accessible from main navigation featuring the Maldonado family story and 35-year growth narrative.",
             "Add descriptive alt text to all images across every page on the site.",
             "Implement Organization, LocalBusiness, and Service schema markup site-wide for all three locations.",
             "Add FAQ sections to Commercial and Residential pages addressing the most common pre-call questions.",
             "Create a standalone Projects page with photos, GC names, project types, and Valley locations.",
             "Feature the Sika exclusive distribution agreement prominently on the Residential page hero and homepage.",
             "Build a \'Request an Estimate\' page with project scoping form fields routed to the commercial sales team.",
             "Request Google reviews from 5–10 existing GC accounts with a simple personal outreach message.",
         ]),
        ("PHASE 3",
         "Days 61–90: Lead Generation & SEO Flywheel",
         [
             "Publish first 5 blog articles targeting contractor search queries identified during Phase 1 keyword research.",
             "Activate YouTube channel with 2–3 short-form videos: fabrication shop walk-through, placing crew on-site, showroom overview.",
             "Add FAQ schema to homepage and service pages to enable rich results in Google SERPs.",
             "Implement internal linking connecting all service pages to each other and to the new About and Projects pages.",
             "Submit Rio Grande Steel to ThomasNet and regional contractor directory listings.",
             "Review Google Business Profile analytics to confirm impressions, calls, and direction requests per location.",
             "Audit Core Web Vitals via Google Search Console. Address page speed on image-heavy gallery pages.",
         ]),
    ],

    "strategic": [
        "Rio Grande Steel, Ltd. has done something extremely difficult: built a dominant regional position in a capital-intensive, relationship-driven industry over 35 years of consistent operation. The owned delivery fleet, the automated fabrication shop, the on-site rebar placing crew, the three Valley locations, the 3,000-product showroom, and the named relationship with GCs who have built hospitals, universities, and state facilities across the Rio Grande Valley — these are not assets that a new entrant can replicate in five years.",
        "The digital presence does not yet reflect this. A contractor who does not already know Rio Grande Steel — a first-time developer from Austin, a growing GC who just relocated to the Valley, a subcontractor searching for a closer supplier — cannot easily find the company on Google. When they do find the site, the depth of capability they encounter is not communicated with the clarity it deserves.",
        "The South Texas construction market is in an active growth phase. SpaceX infrastructure at Boca Chica, LNG terminal construction in Brownsville, sustained residential expansion across Hidalgo and Cameron counties, and commercial development Valley-wide are generating multi-year rebar and concrete accessory demand. New contractors are entering the Valley market constantly — and they are searching online for suppliers before they pick up the phone.",
        "With a focused 90-day investment, riograndesteel.com can be transformed from a 2019-era digital placeholder into the company\'s most productive lead generation asset — capturing contractors who are actively searching, communicating the 35-year track record that is currently invisible, and providing the structured quote intake that converts a website visit into a sales conversation.",
    ],
    "strategic_quote": (
        "Rio Grande Steel has the foundation. The work now is making that foundation visible — to the GCs, project managers, and residential builders who are searching for exactly what Rio Grande Steel offers, and finding a competitor\'s site first.",
        "Maker Web Studios Audit Finding",
    ),
}
'''

# ── Template 02 — Blind Spot Audit ───────────────────────────────────────────
T02 = '''
CONTENT = {
    "client_name":    "Rio Grande Steel, Ltd.",
    "client_short":   "Rio Grande Steel",
    "industry":       "Fabricated Reinforcing Steel & Construction Supply",
    "date":           "March 2026",
    "meta": ["Deep Research Audit","March 2026","Prepared by Maker Web Studios"],
    "cover_subtitle": "Rio Grande Steel — The Strategic Gaps South Texas\'s Largest Rebar Supplier Cannot Afford",
    "intro_about_title": "About Rio Grande Steel, Ltd.",
    "intro_about_body": "Rio Grande Steel, Ltd. is the largest supplier of fabricated reinforcing steel in South Texas, founded in 1991 by Hector M. Maldonado. Operating from three Valley-wide branches in Edinburg, San Benito, and Peñitas, the company employs approximately 100 people, operates 120,000 sq. ft. of warehouse space, runs its own delivery fleet, provides an on-site rebar placing crew, and carries approximately 3,000 concrete and construction-related products across its showrooms. It is the Valley\'s exclusive distributor of Sika concrete colors and stains.",
    "intro_quote": (
        "Rio Grande Steel has earned its market position through three decades of reliable delivery, quality fabrication, and deep product inventory. In a Valley construction market that is actively expanding, the company that wins new accounts will be the one a contractor encounters first, trusts most, and feels most confident calling. Rio Grande Steel is not yet winning that race consistently.",
        "Maker Web Studios Blind Spot Finding",
    ),
    "blind_spots": [
        {
            "number":       "0\\n1",
            "title":        "The Company Is Growing on Reputation Alone — No Active Business Development",
            "tag":          "Pipeline blind spot — passive sales model cannot capture new contractors entering the Valley market",
            "risk_label":   "Critical Revenue Risk",
            "impact_label": "High Pipeline Impact",
            "fix_label":    "Medium Fix Complexity",
            "risk_color":   "CRITICAL",
            "gap_text": "Rio Grande Steel has earned its market position through decades of reliable delivery. But reputation-driven sales are passive — they depend on customers who already know the company calling when they have a need. There is no documented outbound business development strategy, no key account management program, and no systematic approach to capturing new contractors entering the Valley. New developers, out-of-region GCs, and first-time commercial builders entering the market around SpaceX, LNG terminals, and residential growth have no existing relationship with Rio Grande Steel. If no one is reaching out before they call a competitor, those accounts are lost by default.",
            "fix_bullets": [
                "→ Build a named account target list of 50 active Valley GCs not currently buying from Rio Grande Steel using local building permit data and contractor registrations.",
                "→ Assign account development responsibility per location and establish a monthly outreach cadence — the goal is to be the first call on the next project.",
                "→ Create a project pipeline tracker giving management visibility into active bids, upcoming projects, and follow-up cadences.",
                "→ Establish a quarterly key account review cadence: a call or visit to each active commercial account every 90 days to discuss upcoming projects and material needs.",
            ],
        },
        {
            "number":       "0\\n2",
            "title":        "Price-Driven Sales Conversations — Value Is Never Communicated",
            "tag":          "Positioning blind spot — operational excellence is invisible in every sales interaction",
            "risk_label":   "High Revenue Risk",
            "impact_label": "High Margin Impact",
            "fix_label":    "Low Fix Complexity",
            "risk_color":   "HIGH",
            "gap_text": "When a buyer calls to compare prices, the conversation starts and ends with price per ton. The company\'s actual differentiators — automated fabrication equipment, an owned delivery fleet, a detailing and estimating division, an on-site placing crew, 35 years of local experience, and three Valley locations — are either not communicated or listed as features without translation into buyer outcomes. A buyer who only hears the price number will choose the cheapest option. A buyer who understands that Rio Grande Steel\'s detailing division reduces placement errors and that the owned fleet guarantees delivery timing will make a value-based decision. These are fundamentally different purchasing conversations.",
            "fix_bullets": [
                "→ Write a value articulation script for the estimating and sales team: translate every operational capability into the outcome it delivers for the contractor.",
                "→ Lead with outcomes, not features: \'Quick turnaround means no project delays.\' \'On-site placing crew means no rebar errors at pour time.\' \'Three locations means same-day emergency availability.\'",
                "→ State the price last — after the buyer understands what they are buying. The price conversation is won or lost before the number is stated.",
                "→ Build a one-page value summary sheet to include with every commercial quote, communicating the full service package before the line items.",
            ],
        },
        {
            "number":       "0\\n3",
            "title":        "The Showroom and Accessory Depth Is a Hidden Revenue Stream",
            "tag":          "Cross-sell blind spot — 3,000-product inventory is invisible to most rebar-buying accounts",
            "risk_label":   "High Revenue Risk",
            "impact_label": "High Cross-Sell Impact",
            "fix_label":    "Low Fix Complexity",
            "risk_color":   "HIGH",
            "gap_text": "Rio Grande Steel carries approximately 3,000 concrete and construction-related products — concrete panel accessories, lifting hardware, power tools, surveying equipment, PPG Pittsburgh Paints, Rust-Oleum, Sika concrete colors (exclusive Valley distribution), and general hardware. This transforms the company into a complete construction supply source. But very few contractors outside regular walk-in customers know this inventory exists. It is not actively marketed, not visible online, and not systematically communicated to rebar-buying accounts. Every contractor who buys rebar from Rio Grande Steel and then buys concrete accessories from a separate supplier represents revenue being transferred to a competitor.",
            "fix_bullets": [
                "→ Add cross-sell prompts to the estimating and dispatcher workflow: mention accessory availability when rebar orders are placed.",
                "→ Create a product capabilities sheet organized by category — include with every commercial rebar quote.",
                "→ Build a showroom products page on the website organized by category, prominently featuring the Sika exclusive distribution agreement.",
                "→ Run targeted outreach to existing rebar-only accounts that have never placed an accessory order — the revenue opportunity is already within the current account base.",
            ],
        },
        {
            "number":       "0\\n4",
            "title":        "No Formal Repeat Business Program for Commercial Accounts",
            "tag":          "Retention blind spot — good project experiences are not systematically converted into recurring revenue",
            "risk_label":   "Medium Revenue Risk",
            "impact_label": "High Lifetime Value Impact",
            "fix_label":    "Low Fix Complexity",
            "risk_color":   "HIGH",
            "gap_text": "Commercial construction contractors who complete a project with Rio Grande Steel represent the highest-probability new business opportunity the company has — they have already experienced the quality, the delivery, and the service. But there is no documented program to proactively re-engage these accounts when their next project begins, notify them of new capabilities, or offer early commitment pricing on materials in the pipeline. In a project-based business, the gap between project completions can be six to eighteen months — long enough for a competitor to establish a relationship before Rio Grande Steel makes contact again.",
            "fix_bullets": [
                "→ Establish a quarterly key account contact cadence: a call or visit to each active commercial account every 90 days.",
                "→ Track project pipeline information per account so outreach happens before a new project starts, not after a competitor has been called.",
                "→ Implement a post-project follow-up: a personal call from the estimating contact after delivery confirming satisfaction and asking about upcoming projects.",
                "→ Request Google reviews from satisfied GC accounts — five genuine reviews transform the Google Business Profile from empty to credible.",
            ],
        },
        {
            "number":       "0\\n5",
            "title":        "Workforce and Capacity Constraints Are Not Being Planned For",
            "tag":          "Operations blind spot — demand is growing but capacity planning is reactive",
            "risk_label":   "Medium Revenue Risk",
            "impact_label": "High Operational Impact",
            "fix_label":    "Medium Fix Complexity",
            "risk_color":   "MEDIUM",
            "gap_text": "The Texas construction industry is experiencing documented labor shortages, particularly in skilled fabrication and concrete trades. Rio Grande Steel\'s competitive position depends on the quality and speed of its fabrication shop and its rebar placing crew. If key fabrication staff depart or if placing crew capacity cannot scale with demand, the company\'s core differentiator — quick turnaround and precise workmanship — is at risk. The Rio Grande Valley construction market is projected to grow through 2026 and beyond. If capacity cannot scale to meet that demand, the company will be forced to turn away work or extend lead times, which creates an opening for a competitor.",
            "fix_bullets": [
                "→ Conduct a workforce planning review: identify which fabrication and placing positions are critical single points of failure and what cross-training exists.",
                "→ Benchmark compensation for critical fabrication roles against the Valley market to reduce turnover risk.",
                "→ Assess automated bending equipment capacity against the projected increase in demand from Valley industrial projects.",
                "→ Build recruiting relationships with trade schools and workforce development programs in Hidalgo and Cameron counties before a vacancy occurs.",
            ],
        },
    ],
    "strategic_para1": "Rio Grande Steel, Ltd. has built something that cannot be quickly replicated: thirty-five years of fabricated steel delivery in South Texas, an owned fleet that no carrier can match for reliability, an on-site rebar placing crew that eliminates the GC\'s most common pour-day problem, three Valley locations with same-day emergency availability, and the exclusive Sika distribution agreement that makes them the only Valley source for premium concrete colors. These are assets that require years of operational discipline and local relationship-building to accumulate.",
    "strategic_para2": "The blind spots are not product problems. They are systems problems. The value is not being communicated in sales conversations. The accounts that already know the company well are not being proactively retained. The 3,000-product showroom inventory is not being marketed to the contractors who are already buying rebar. The channels where new contractors research suppliers before calling are empty. And the capacity planning that a growing market demands is still being done reactively.",
    "strategic_quote": (
        "In a Valley construction market that is adding contractors faster than any time in recent history, Rio Grande Steel holds the most defensible operational position in the region. The work now is building the systems that convert that position into predictable, scalable revenue — before a better-marketed competitor captures the accounts Rio Grande Steel has not yet reached.",
        "Maker Web Studios Blind Spot Finding",
    ),
}
'''

# ── Template 03 — Market Forecast ────────────────────────────────────────────
T03 = '''
CONTENT = {
    "client_name": "Rio Grande Steel, Ltd.",
    "industry":    "Fabricated Reinforcing Steel & Construction Supply",
    "date":        "March 2026",
    "meta": ["Deep Research Audit","March 2026","Prepared by Maker Web Studios"],
    "kpi_tiles_row1": [
        ("U.S. Rebar Market 2024",    "$6.5B",   "Estimated Size"),
        ("U.S. Rebar Market 2030",    "$8.32B",  "Projected"),
        ("Market CAGR 2025–2030",     "5.2%",    "Annual Growth Rate"),
    ],
    "kpi_tiles_row2": [
        ("Texas Construction Spend",  "$90B+",   "Annual — Nation\'s Largest"),
        ("RGV Industrial Jobs",       "17,000+", "Projected Next 5 Years"),
        ("Client Revenue Upside",     "HIGH",    "★★★★★"),
    ],
    "market_paragraphs": [
        "The U.S. steel rebar market was valued at approximately $6.5 billion in 2024 and is projected to grow at a compound annual rate of 5.2%, reaching $8.32 billion by 2030. Non-residential construction captured over 51% of total rebar consumption in 2024, and the infrastructure segment is forecast to grow at 5.6% CAGR through 2030, driven by federal and state spending on roads, bridges, energy, and industrial facilities.",
        "Within this national market, South Texas and the Rio Grande Valley represent a locally concentrated growth opportunity that is structurally different from the broader Texas average. The RGV is experiencing a category-specific industrial acceleration driven by LNG terminal construction, SpaceX infrastructure at Boca Chica, residential expansion across Hidalgo and Cameron counties, and sustained commercial development that has been building for years.",
        "Rio Grande Steel, as the largest fabricated reinforcing steel supplier in South Texas, is positioned at the center of this demand. The strategic question is not whether the market will grow — it will — but whether the company\'s business development capacity, digital presence, and cross-sell infrastructure are positioned to capture the maximum share of that growth.",
    ],
    "timing_rows": [
        ("Texas leads the nation in construction spending at $90B+ annually",          "South Texas receives a proportional share. Every highway, bridge, industrial building, and residential foundation in the Valley is a potential rebar and accessory order."),
        ("RGV industrial acceleration — SpaceX, LNG terminals, port development",      "Multi-year fabricated rebar demand at scales rarely seen in the Valley. Sustained large-project orders for contractors actively searching for qualified suppliers."),
        ("Residential growth across Hidalgo and Cameron counties",                     "Homebuilding drives demand for residential rebar packages — a high-frequency, repeat-purchase segment Rio Grande Steel already serves and can scale."),
        ("2025 U.S. steel tariffs increasing onshore fabricator competitiveness",       "Supply chain volatility for imported steel benefits domestic fabricators with owned inventory and established supply chains."),
        ("Construction labor shortages creating demand for turnkey rebar services",     "Demand for full-service rebar solutions where the supplier also places and ties steel on-site — a service Rio Grande Steel already offers and few regional competitors match."),
    ],
    "revenue_model": [
        ("Commercial fabricated rebar",             "Core business. Highest volume. Project-based. Estimating and detailing division supports competitive bidding."),
        ("Residential rebar packages",              "High-frequency, repeat-purchase. Homebuilders and general contractors. Consistent volume across the year."),
        ("Rebar placing service (on-site)",         "Highest margin per engagement. Labor-intensive but differentiated. Few regional competitors offer this as a structured service."),
        ("Concrete accessories and showroom",       "~3,000 SKUs. Cross-sell opportunity with every rebar account. Predictable, high-frequency replenishment for active job sites."),
        ("Sika concrete colors (exclusive Valley)", "Exclusive distribution creates a captive revenue stream from every contractor using Sika products in the Valley. Currently under-marketed."),
        ("Structural fabrication",                  "Custom cuts, small steel structures. Variable volume. High per-unit margin on specialty and custom work."),
    ],
    "forecast_rows": [
        ("Year 1 (2026)", "Flat to -2%", "+8% to +12%", "+15% to +20%"),
        ("Year 2 (2027)", "+2% to +4%", "+10% to +15%", "+18% to +25%"),
        ("Year 3 (2028)", "+3% to +5%", "+12% to +18%", "+20% to +28%"),
        ("Year 4 (2029)", "+2% to +4%", "+10% to +15%", "+15% to +22%"),
        ("Year 5 (2030)", "+1% to +3%", "+8% to +12%", "+12% to +18%"),
    ],
    "forecast_legend": "Conservative: No change to business development or digital presence. Growth mirrors general South Texas construction market.  Base Case: Website rebuilt, online quote intake operational, outreach to new commercial accounts begins — growth outpaces the market.  Optimistic: Full digital presence, active pipeline management, cross-sell program, rebar placing capacity scaled.",
    "assumptions": [
        ("RGV construction demand",       "Sustained through 2028+ based on documented LNG, industrial, and residential projects. Risk: major project cancellation could reduce near-term demand."),
        ("Tariff environment",            "2025 U.S. steel tariffs favor domestic fabricators. Tariff policy changes would affect this advantage."),
        ("Rebar market CAGR",             "5.2% nationally. South Texas likely higher due to concentrated industrial projects and active residential growth."),
        ("Fabrication capacity",          "Assumes current equipment can scale to meet Base Case demand. Optimistic case may require additional equipment investment."),
        ("New account capture rate",      "Base Case assumes 10–15 net new commercial accounts per year. Optimistic assumes 20–30 through systematic outreach."),
    ],
    "advantage_paragraphs": [
        "The highest-earning independent fabricated steel suppliers in regional markets are not competing on price alone — they operate as full-service construction supply partners with owned logistics, technical estimating capabilities, on-site service offerings, and deep product inventory. The inflection point is consistently the same: the supplier builds the digital infrastructure to capture inbound leads, systematizes business development to capture new accounts proactively, and activates the cross-sell opportunity within the current customer base.",
        "Rio Grande Steel\'s 3,000-product showroom inventory makes it uniquely positioned to capture the full relationship value of each contractor account. A fabricator who bids rebar only and does not also capture the accessory, tool, and concrete supply business from the same contractor is leaving a significant share of each relationship on the table.",
    ],
    "capabilities": [
        ("Owned delivery fleet",               "Eliminates third-party logistics risk. Delivery timing is within Rio Grande Steel\'s control — a direct competitive advantage over suppliers using contract carriers."),
        ("On-site rebar placing crew",         "Turnkey rebar service eliminates a labor coordination problem for GCs. Few regional competitors offer this. Premium margin per engagement."),
        ("35 years of operational history",    "Deep contractor relationships. Local knowledge of project environments and inspector expectations that out-of-region suppliers cannot replicate."),
        ("~3,000-product showroom",            "One-stop construction supply capability. Every contractor relationship has incremental accessory revenue potential currently untapped."),
        ("Exclusive Sika distribution",        "Captive revenue stream. Every Sika product used in the Valley flows through Rio Grande Steel. Currently under-marketed and under-positioned."),
    ],
    "risks": [
        ("Regional competitor enters Valley market",   "35+ years of local relationships, owned fleet, and three locations create switching costs a new entrant cannot replicate quickly. Accelerate new account development now."),
        ("Steel price volatility affecting margins",   "Consistent cost-plus pricing discipline. Volume purchasing agreements with mill suppliers during off-peak periods where possible."),
        ("Key fabrication staff departure",            "Cross-training program. Competitive compensation benchmarking. Succession planning for critical fabrication roles."),
        ("Project cancellations reducing demand",      "Diversified revenue across commercial, residential, placing services, accessories, and Sika distribution reduces dependence on any single project type."),
        ("FRP alternatives gaining market share",      "FRP adoption remains limited to repair and specialty applications. Carbon steel rebar retains dominant market share in new construction."),
    ],
}
'''

# ── Template 04 — Growth Strategy ────────────────────────────────────────────
T04 = '''
CONTENT = {
    "client_name":  "Rio Grande Steel, Ltd.",
    "client_short": "Rio Grande Steel",
    "industry":     "Fabricated Reinforcing Steel & Construction Supply",
    "date":         "March 2026",
    "meta": ["Prepared for Rio Grande Steel, Ltd.", "March 2026", "Prepared by Maker Web Studios"],
    "cover_subtitle": "Positioning, Prospecting, and Building a Pipeline That Scales",
    "service_table": [
        ("Rebar placing service (on-site)",     "Commercial GCs who need steel placed, not just delivered.", "HIGHEST — Labor + materials. Highest margin per engagement. Creates site presence that generates reorders."),
        ("Commercial fabricated rebar — large", "Commercial GCs and project managers for major Valley projects.", "HIGHEST — Highest volume. Long-term account relationships. Estimating division creates competitive moat."),
        ("Residential rebar packages",          "Homebuilders and general contractors building foundations.", "HIGH — High frequency. Repeat purchase. Homebuilder accounts compound in value over multiple builds."),
        ("Concrete accessories and showroom",   "Every contractor who buys rebar and builds anything.",       "HIGH — 3,000 SKUs. Cross-sell to every existing rebar account. Currently under-monetized."),
        ("Sika concrete colors (exclusive)",    "Any Valley contractor using Sika products.",                 "HIGH — Exclusive distribution. Every Sika order in the Valley is a Rio Grande Steel order."),
        ("Structural fabrication",              "Specialty contractors needing custom steel work.",            "MEDIUM — High per-unit margin. Less volume but strong relationship driver."),
    ],
    "strategic_q_title": "The Real Strategic Question: Lead With Rebar or Lead With Full-Service?",
    "strategic_boxes": [
        ("THE CASE FOR FULL-SERVICE POSITIONING",
         "Rio Grande Steel\'s strongest differentiator is not rebar — it is the complete construction supply experience: fabricate, deliver on our fleet, place it on your site, and supply every accessory your project needs from three Valley locations. This full-service positioning is what no competitor can match and what the website should lead with.\\n\\nRECOMMENDED FOCUS: Commercial full-service supply partner for Valley GCs."),
        ("THE CASE FOR KEEPING ALL SEGMENTS",
         "Residential rebar packages, structural fabrication, and showroom retail all represent genuine revenue streams that should not be abandoned. The Sika exclusive distribution alone is a competitive moat worth protecting and marketing aggressively.\\n\\nVERDICT: Lead publicly with full-service commercial positioning. Let residential and specialty work come through existing relationships and the improved website."),
    ],
    "roi_table": [
        ("#1", "Commercial GC with active Valley project pipeline", "Multi-project volume. Long-term relationship. Estimating relationship creates switching cost that makes them very sticky."),
        ("#2", "Industrial project developer (LNG, SpaceX corridor)", "Highest per-project revenue. Multi-year relationship if executed well. Rare in frequency but highest ticket size."),
        ("#3", "Production homebuilder (multiple builds per year)", "High frequency. Predictable volume. Low service complexity. Compounds in value over multiple build cycles."),
        ("#4", "Specialty contractor needing placing crew", "Full-service relationship. Highest margin per engagement. Least price-sensitive buyer segment."),
        ("#5", "Walk-in and retail showroom contractor", "Consistent accessory revenue. Every walk-in is a cross-sell opportunity for accounts not currently on the commercial roster."),
    ],
    "skills": [
        {
            "title":          "Commercial Full-Service Rebar Supply — Premium Tier",
            "demand":         "9.5/10",
            "scarcity":       "HIGH (owned fleet + placing crew + 3 locations is rare in the corridor)",
            "scalable":       "YES",
            "who_pays": [
                "Commercial GCs managing tilt-wall, multi-family, and infrastructure projects in the Valley.",
                "Industrial project developers sourcing fabricated rebar for large-scale facility construction.",
                "Specialty contractors who need rebar fabricated, delivered, and placed on-site without managing the labor.",
            ],
            "problem_solved": "A rebar fabrication error or late delivery delays a concrete pour by days. A pour delay on a commercial project costs thousands per day in equipment and crew standby. Rio Grande Steel\'s detailing division, owned fleet, and placing crew eliminate this risk entirely — and no other regional supplier offers all three.",
            "engagement_table": [
                ("Fabricated rebar to engineered spec",   "Automated benders, shears, detailing division support.", "No field cutting. No placement errors. No pour delays."),
                ("Detailing division support",            "Shop drawings and placement maps provided with every commercial order.", "Reduces field confusion and rework on complex pours."),
                ("Owned fleet delivery",                  "Tractor trailers, bobtails, and pickups — RGS controls the timeline.", "No third-party carrier risk. Delivery timing guaranteed."),
                ("On-site placing crew",                  "Steel tying crew goes to job site and places rebar in proper location.", "GC eliminates a labor coordination problem entirely."),
                ("Three Valley locations",                "Edinburg, San Benito, and Peñitas for same-day emergency availability.", "No project waits for materials from San Antonio or Houston."),
            ],
        },
        {
            "title":          "Concrete Accessories & Showroom — Cross-Sell Engine",
            "demand":         "9/10",
            "scarcity":       "HIGH (3,000 SKUs + Sika exclusive is unique in the Valley)",
            "scalable":       "YES",
            "who_pays":       [
                "Every contractor who already buys rebar from Rio Grande Steel.",
                "Walk-in contractors, homebuilders, and DIY customers needing construction supplies.",
                "Contractors who are currently buying accessories elsewhere and don\'t know RGS carries them.",
            ],
            "problem_solved": "Every contractor buying rebar from one supplier and accessories from another is making two stops, two calls, and two deliveries. Rio Grande Steel eliminates that friction — one call, one relationship, one delivery for rebar and every accessory, tool, and finishing product the project needs.",
            "engagement_table": [
                ("Concrete accessories (3,000+ SKUs)",  "Panel accessories, lifting hardware, braces, chairs.", "One-stop shop eliminates secondary supplier relationship."),
                ("Sika concrete colors (exclusive)",    "Valley\'s only source for Sika integral colors and stains.", "Captive revenue — every Sika order in the Valley flows through RGS."),
                ("PPG Pittsburgh Paints / Rust-Oleum",  "Brand-name paint and coating products on showroom floor.", "Increases average transaction value per visit."),
                ("Power tools and hardware",            "Saws, drills, levels, hardware across all locations.", "Keeps contractors from needing a second stop."),
                ("Farm & ranch materials",              "T-posts, barb wire, fencing, panels, gates.", "Unexpected revenue stream from rural Valley contractors and ranchers."),
            ],
        },
        {
            "title":          "Digital Presence & Inbound Lead Generation — The Visibility Engine",
            "demand":         "10/10",
            "scarcity":       "CRITICAL (zero organic presence = every new account requires cold outreach)",
            "scalable":       "YES — compounds permanently once built",
            "who_pays":       [
                "Rio Grande Steel itself — the company currently invisible to contractors searching for its services.",
                "Every dollar invested in digital presence creates a permanent asset that generates inbound calls.",
                "This is the highest-ROI growth lever available to the company right now.",
            ],
            "problem_solved": "Rio Grande Steel currently ranks for essentially no commercial keywords. A contractor searching \'rebar fabrication McAllen TX\' or \'concrete accessories Edinburg\' does not find Rio Grande Steel. This is not a market problem — it is a visibility problem. The company has the credentials, the fleet, the team, and the track record. The work is making all of it visible in the format that Google and buyers reward.",
            "engagement_table": [
                ("Google Business Profiles (3 locations)", "Verified GBP for Edinburg, San Benito, and Peñitas.", "Immediate placement on Google Maps and local search results. Free."),
                ("Rebuilt website with keyword-optimized pages", "Commercial, residential, fabrication, placing crew, showroom pages with SEO titles.", "Inbound leads from contractors actively searching for suppliers."),
                ("Online estimating intake form",           "Project scoping form routing to the correct sales rep.", "After-hours commercial inquiries captured and routed automatically."),
                ("LinkedIn Company Page",                  "Bi-weekly posts on projects, capabilities, and team.", "Visibility in the primary B2B channel for commercial procurement research."),
                ("Content hub — 5 articles",               "Articles targeting contractor search queries about rebar and construction supply in the Valley.", "Organic search traffic from buyers researching before they call."),
            ],
        },
    ],
    "messages": [
        (
            "Message 1 — Commercial GC / Project Manager — Active Valley Project",
            "Hi [Name], your next concrete pour is only as reliable as your rebar supplier\'s fabrication turnaround and delivery fleet. Rio Grande Steel has been fabricating rebar and delivering on our own trucks in the Rio Grande Valley since 1991. We also place it — our tying crew goes on-site and places rebar in its proper location, minimizing shortages and errors at pour time. Three Valley locations. 35 years. If you\'re sourcing rebar for an upcoming project, I\'d like to walk you through what we can do. Worth a 15-minute call this week?",
        ),
        (
            "Message 2 — Industrial Project Developer — Large-Scale Fabrication",
            "Hi [Name], large-scale industrial projects in the Valley require a fabricated rebar supplier with the capacity and fleet to deliver on a project timeline — not a carrier\'s schedule. Rio Grande Steel has been supplying fabricated reinforcing steel for Valley industrial, commercial, and infrastructure projects since 1991. Owned fleet, automated fabrication equipment, on-site placing crew. If you\'re sourcing for a project in Hidalgo or Cameron County, I\'d like to send you our capabilities sheet. Would that be useful?",
        ),
        (
            "Message 3 — Residential Production Builder — Multiple Foundation Packages",
            "Hi [Name], if you\'re breaking ground on multiple homes in the Valley, the fastest way to handle foundation rebar is to bring us your plans and let us fill the package — cut, bent, and ready for pickup or delivery. Rio Grande Steel is the Valley\'s largest fabricated rebar supplier. We also carry colored concrete, stamps, stains, and accessories — Sika exclusive distributor in the Valley. One stop for everything your foundation and flatwork needs. Would a quote for your next phase be helpful?",
        ),
        (
            "Message 4 — Contractor Who Uses a Competitor — Quality or Delivery Issues",
            "Hi [Name], if your current rebar supplier has ever made you wait past a pour date or delivered pieces that needed field cutting, I\'d like to introduce you to an alternative. Rio Grande Steel has been fabricating rebar in the Valley since 1991 — automated equipment, owned delivery fleet, and an on-site placing crew available when you need it. Three locations across the Valley for same-day availability. If you\'re open to getting a comparison quote on your next project, I\'ll make it easy. Worth a quick call?",
        ),
        (
            "Message 5 — General Contractor / Concrete Subcontractor — Referral Follow-Up",
            "Hi [Name], [Referring Contact] suggested I reach out — they mentioned you\'re working on a project in the Valley and might need a reliable fabricated rebar supplier. Rio Grande Steel is the largest in South Texas — owned fleet, on-site placing crew, 3,000-product showroom including Sika concrete colors (exclusive Valley distributor). We\'ve supplied UTPA, DHR Hospital, Dodge Arena, and the SpaceX Launch Pad, among others. Happy to send a capabilities sheet or jump on a 10-minute call if timing works.",
        ),
    ],
    "questionnaire_sections": [
        ("Section A: The Project", [
            "Company name and primary contact?",
            "Project name and location (city, county)?",
            "Project type (commercial, residential, industrial, infrastructure)?",
            "Estimated project start date and pour schedule?",
            "Who is the general contractor or project owner?",
        ]),
        ("Section B: Rebar Requirements", [
            "Estimated total rebar tonnage or quantity for the project?",
            "Do you have engineered drawings or plans to share for detailing?",
            "What bar sizes and grades are required?",
            "Do you need rebar placed on-site or delivered only?",
            "What is your required delivery schedule (phased vs. single delivery)?",
        ]),
        ("Section C: Current Supplier Situation", [
            "Who is your current rebar supplier?",
            "Have you experienced any fabrication errors or delivery delays with your current supplier?",
            "Are you comparing bids from multiple suppliers for this project?",
            "What is the most important factor in your supplier decision: price, turnaround, delivery reliability, or placing service?",
            "Is there anything your current supplier does not offer that you wish they did?",
        ]),
        ("Section D: Additional Needs", [
            "Do you need concrete accessories, panel products, or construction hardware for this project?",
            "Are you interested in our Sika colored concrete products (Valley exclusive)?",
            "Do you have upcoming projects in the next 90 days we should be quoting?",
            "Is there anything else we should know before preparing your quote?",
        ]),
    ],
    "proposal_instructions": [
        "Complete the project questionnaire before drafting — this saves 30 minutes of back-and-forth.",
        "Replace all [bracket] fields with client-specific project details.",
        "Reference the specific project name and GC contact in the opening paragraph.",
        "Include the relevant project portfolio references (UTPA, DHR, SpaceX, etc.) that match the client\'s industry.",
        "Add the one specific insight from your discovery conversation — something about their project schedule, their current supplier\'s weakness, or their quality requirement.",
    ],
    "proposal_table": [
        ("Fabricated Rebar to Spec",    "Full fabrication to engineered drawings with detailing division support.", "Delivery 5–7 business days after plan submission"),
        ("Detailing Division Support",  "Shop drawings and placement maps provided for field crew.", "Included with all commercial fabrication orders"),
        ("Owned Fleet Delivery",        "Delivery on Rio Grande Steel\'s trucks — timeline within our control.", "Coordinated with your pour schedule"),
        ("On-Site Placing Crew",        "Rio Grande Steel tying crew places rebar on-site at your project.", "Available — quote provided separately based on scope"),
        ("Concrete Accessories",        "Panel accessories, forming hardware, tools from our 3-location showroom.", "Same-day availability at nearest branch"),
    ],
    "proposal_why_bullets": [
        "35 years of operation since 1991 — operational stability and Valley track record that newer suppliers cannot claim.",
        "Owned delivery fleet — tractor trailers, bobtails, and pickups deliver on our schedule, not a carrier\'s.",
        "On-site rebar placing crew — eliminates the GC\'s most common pour-day labor coordination problem.",
        "Three Valley-wide locations — Edinburg, San Benito, and Peñitas for same-day emergency availability.",
        "Exclusive Sika concrete colors distributor — one stop for fabricated steel and all your finishing product needs.",
    ],
    "results_metrics": [
        ("Fabricated orders delivered on-time",     "% on-time",   "Target %",   "% after 90 days"),
        ("Field cutting incidents per project",     "Baseline #",  "Target 0",   "Actual"),
        ("Average quote-to-delivery lead time",     "X days",      "Target",     "Actual"),
        ("Accessory orders placed alongside rebar", "0 (new acct)","Target",     "Actual"),
        ("Repeat order rate (orders per account)",  "Baseline",    "Target",     "Actual"),
        ("Account satisfaction score (1–10)",       "N/A",         "9+",         "Actual"),
    ],
    "testimonial_script": "\'[Name], it\'s been 90 days since we started delivering on your project. Based on what I\'m hearing from your crew and what the delivery records show, things have gone the way we said they would. Would you be willing to write 2-3 sentences about your experience? Specifically: what the situation was before, what changed after you started ordering from us, and whether you\'d recommend Rio Grande Steel to another GC in the Valley. I use it on our website and in proposals. Totally optional — but it makes a significant difference when I\'m talking to contractors who are evaluating us for the first time.\'",
    "final_steps": [
        "Step 1: Create and verify Google Business Profiles for all three locations this week — free and immediate impact on local search visibility.",
        "Step 2: Send Message 1 (Commercial GC) and Message 3 (Residential Builder) to 10 target contacts using LinkedIn and direct outreach.",
        "Step 3: Close the first new commercial account from outreach. Document the experience and ask for a Google review.",
        "Step 4: Build the online estimating intake form and update all page title tags — these are the two highest-impact website actions available.",
        "Step 5: Deploy the value articulation script with the estimating team. The price conversation should come last, not first.",
    ],
    "final_advantages": [
        "Rio Grande Steel has owned its delivery fleet for decades. Most regional rebar suppliers use contract carriers. When a contractor\'s pour schedule depends on a delivery window, this distinction is worth thousands of dollars per day — and RGS is the only local supplier that can truly own the commitment.",
        "Rio Grande Steel has operated in South Texas since 1991. Competitors that entered the market in 2015 or 2018 cannot claim this. In a business where contractors are committing multi-year, multi-project relationships, 35 years of uninterrupted Valley operation is a financial stability signal that no marketing can fabricate.",
        "Rio Grande Steel is the Valley\'s exclusive Sika concrete colors distributor. Every contractor in the Rio Grande Valley who uses Sika integral concrete colors has only one source. That is a captive revenue stream that compounds with every new homebuilder and commercial contractor who discovers it.",
    ],
    "final_quote": (
        "The move: stop selling rebar. Start selling the certainty that the pour happens on schedule. A commercial GC does not buy fabricated steel — they buy a supplier who eliminates the risk of a pour delay. A homebuilder does not buy a rebar package — they buy the confidence that their foundation goes in right the first time. A contractor who discovers the showroom does not buy concrete accessories — they buy the convenience of one call for everything their project needs. Price accordingly.",
        "Maker Web Studios Growth Strategy Recommendation",
    ),
}
'''

# ── Template 05 — Sales Strategy ─────────────────────────────────────────────
T05 = '''
CONTENT = {
    "client_name":  "Rio Grande Steel, Ltd.",
    "industry":     "Fabricated Reinforcing Steel & Construction Supply",
    "date":         "March 2026",
    "meta": ["Prepared for Rio Grande Steel, Ltd.","March 2026","Prepared by Maker Web Studios"],
    "cover_subtitle": "Selling on Value, Structuring Offers That Cannot Be Compared",
    "commodity_paras": [
        "Most rebar suppliers present themselves the same way: \'We supply fabricated rebar at competitive prices.\' This framing turns every evaluation into a price comparison. The contractor calls three suppliers, gets three quotes, and chooses the cheapest. The supplier who spent the most time on the estimate, has the best equipment, and carries the most reliable inventory loses on a two-dollar-per-ton difference that evaporates before the project is finished.",
        "Rio Grande Steel has a 35-year operational history, automated fabrication equipment, an owned delivery fleet, a detailing and estimating division, an on-site placing crew, and a 3,000-product showroom with exclusive Sika distribution. None of that is communicated in a price-per-ton quote. The gap between what Rio Grande Steel actually delivers and what the market perceives when it hears \'rebar supplier\' is the revenue gap — and closing it requires a deliberate, structured approach to how every offer is framed, named, and presented.",
    ],
    "actual_sells": [
        ("Fabricated rebar to engineered spec",    "No field cutting. No placement errors. No pour delays waiting for correct pieces."),
        ("Detailing division support",             "The contractor gets placement maps and shop drawings — reducing field confusion and rework on complex pours."),
        ("Owned fleet delivery to job site",       "No third-party logistics risk. Delivery times that Rio Grande Steel controls and guarantees."),
        ("On-site rebar placing crew",             "The GC eliminates a labor coordination problem entirely. The steel goes in right the first time."),
        ("3,000-product showroom at 3 locations",  "One call, one relationship, one delivery — for rebar and every accessory the project needs."),
        ("Exclusive Sika concrete colors",         "The Valley\'s only source. Every Sika product used in the region flows through Rio Grande Steel."),
    ],
    "value_eq": [
        ("Dream Outcome",                     "Increase", "The project pours on schedule with zero rebar-related delays, errors, or field cutting incidents."),
        ("Perceived Likelihood of Achievement","Increase", "35 years of delivery history, automated fabrication, owned fleet, named project references including SpaceX and UTPA."),
        ("Time Delay",                        "Decrease", "Quick fabrication turnaround, owned fleet, three Valley locations. Emphasize how fast the steel gets to the site."),
        ("Effort and Sacrifice",              "Decrease", "Estimating support, detailing services, on-site placing crew. The buyer does less work and takes on less risk."),
    ],
    "value_note": "The goal is to maximize the numerator — the dream outcome and the buyer\'s confidence it will happen — and minimize the denominator — the time between order and pour, and the effort the GC has to invest to make it happen. A supplier who handles fabrication, detailing, delivery, and placement eliminates every step of the buyer\'s job except writing the check. That is not a commodity. That is a partner.",
    "avatar_description": "A commercial general contractor or project manager managing one or more active construction projects in Hidalgo, Cameron, or Starr County — working on tilt-wall commercial buildings, industrial facilities, or multi-family residential — who has experienced at least one project delay caused by rebar fabrication errors, late delivery, or field placement issues. They are not primarily looking for the cheapest supplier. They are looking for the supplier who does not cause problems on pour day.",
    "avatar_table": [
        ("Has experienced a pour delay from rebar issues",     "This buyer has lived the pain that Rio Grande Steel directly eliminates. The sales conversation starts with the solution to a problem they have personally felt."),
        ("Budget and authority to choose a supplier",          "This buyer makes the decision without a committee. A good conversation with the right estimating contact closes the account."),
        ("Active project pipeline in the Valley",              "Multiple projects means multiple orders. A well-served account compounds in value over time as their project volume grows."),
        ("Values reliability over cheapest price",             "Once a buyer has felt the cost of a pour delay, price is no longer the primary criterion. Reliability is. Rio Grande Steel wins this conversation."),
    ],
    "market_indicators": [
        ("Massive Pain",      "A rebar fabrication error that requires field cutting or reorder delays a pour by days. A pour delay costs thousands per day in equipment and crew standby. This pain is real, recurring, and expensive for every GC in the Valley."),
        ("Purchasing Power",  "Commercial GCs and industrial developers are budget-approved buyers. The rebar line item on a commercial building is rarely the cost-reduction target — schedule and quality are. Price sensitivity is lower than most suppliers assume."),
        ("Easy to Target",    "Active construction contractors in the Valley are identifiable through building permit data, Procore contractor networks, AGC membership, and direct outreach. This is not a scattered audience."),
        ("Growing Market",    "U.S. rebar market growing at 5.2% CAGR through 2030. South Texas growing faster than national average due to concentrated industrial and residential projects confirmed through 2026 and beyond."),
    ],
    "named_offers": [
        ("Generic (old)",                    "\'We fabricate and deliver rebar for construction projects in the Rio Grande Valley.\'"),
        ("Project Assurance Package (new)",  "\'The Rio Grande Steel Project Assurance Package — fabricated rebar to your engineered spec, delivered on our fleet timeline, with detailing support and on-site placing available — so your pour happens on schedule, the first time.\'"),
        ("Foundation Ready Package (new)",   "\'The Foundation Ready Package — bring us your plans and we cut, bend, and deliver every rebar piece your foundation requires, ready for your pour date. Sika colored concrete and accessories available at the same location.\'"),
    ],
    "naming_note": "Each named version calls out the specific buyer, speaks to the outcome they want, and describes a complete experience rather than a product category. A GC who fits the description immediately recognizes this was built for them — and stops comparing it to a generic price quote from a supplier who ships and walks away.",
    "offer_stack": [
        ("Fabricated rebar to spec",           "The primary need — solved with precision.",                                       "High — the anchor offer."),
        ("Detailing division support",         "\'I need placement documentation for my crew.\' Reduces field errors.",            "High — perceived as premium technical service. Low additional cost to deliver."),
        ("Dedicated estimating contact",       "\'I want one person who knows my project.\' Eliminates communication friction.",   "High — relationship value creates switching cost."),
        ("On-site placing crew option",        "\'I need the steel placed, not just delivered.\' Eliminates labor coordination.",  "Very High — solves a real problem and increases ticket significantly."),
        ("Same-day availability at 3 branches","\'What if I need more on short notice?\' Removes the biggest supply chain risk.", "High — eliminates the primary anxiety about single-supplier reliance."),
        ("Showroom accessories + Sika colors", "\'I don\'t want to make three stops.\' Reduces total procurement effort.",         "Medium — convenience that increases average order size per visit."),
    ],
    "pricing_weak":   "\'Our rebar is $X per ton, delivered. Let me know if you want a quote.\'",
    "pricing_strong": "\'We fabricate to your engineered specs, our detailing team provides placement documentation for your crew, and our own trucks deliver on the schedule your pour date requires. A pour delay on a commercial project costs more per day than the entire rebar line item on most jobs. Our job is to make sure that delay never happens because of us. Let me walk you through what that looks like for your project — then we can talk numbers.\'",
    "pricing_note":   "The strong framing communicates capability, reliability, and risk elimination before the price lands. By the time the buyer hears the number, they have already mentally accounted for what they are buying. The price does not feel arbitrary — it feels earned. This is the only framing that consistently produces value-based decisions rather than forcing a race to the lowest bid.",
    "guarantees": [
        ("Layer 1 — Fabrication Accuracy Guarantee",
         "\'If any piece in your fabricated order is cut or bent incorrectly and we cannot replace it before your pour, we will cover the cost of the replacement and expedite delivery at no charge.\' Easy to stand behind with automated equipment and detailing review. Removes the primary risk a contractor associates with choosing a new fabricator."),
        ("Layer 2 — Delivery Timing Commitment",
         "\'When we confirm your delivery date, we deliver. Our fleet is ours — not a carrier\'s. If we miss the committed window and it affects your project schedule, we make it right.\' The single most important promise in the construction supply relationship. A supplier who makes it explicitly and backs it up commands loyalty that price cannot displace."),
        ("Layer 3 — Detailing Accuracy Guarantee",
         "\'Before fabrication begins, our detailing division confirms the spec against your plans. If we flag a discrepancy and you approve the correction, the fabricated pieces match the approved spec.\' Eliminates the most common anxiety a GC has about outsourcing rebar specification — that something will be wrong in the field."),
    ],
    "urgency": [
        ("Fabrication lead time is real",    "\'Our current turnaround for fabricated commercial orders is X business days. If your pour is scheduled for [date], we need the order by [date] to guarantee delivery.\' State this on the website and in every estimating conversation. It is a real constraint, not a manufactured one."),
        ("Placing crew availability is limited","\'Our rebar placing crew books out in advance during peak construction season. If you need placing services for your next phase, let us know the schedule now so we can hold the dates.\' Creates legitimate urgency for the highest-margin service."),
        ("Steel pricing is subject to movement","\'The price we quote today is valid for X days. If your project timeline is firm, locking the order now protects your budget.\' Factually accurate and creates a real deadline the buyer can act on."),
        ("Seasonal demand peaks",            "\'Q4 and early Q1 are our highest-volume periods for residential foundation packages. If you\'re breaking ground in October or November, placing the order in September locks your price and delivery.\' Educates the buyer and creates a natural planning conversation."),
    ],
    "referral_para": "The highest-ROI business development activity in the construction supply industry is a contractor who brought a project in on schedule because the rebar showed up correctly fabricated, on time, with placement documentation — and who tells the next GC at a job site, in a contractor association meeting, or on a phone call who they used. That conversation — \'Call Rio Grande Steel, they\'re the only ones with their own fleet and a placing crew\' — is the most valuable marketing event the company can generate.",
    "referral_table": [
        ("Project completion — commercial GC delivered on-time",   "Personal call or text from the estimating contact. \'Glad the project went smoothly. If any of your colleagues need a reliable fabrication partner in the Valley, please send them our way.\' Include a direct link to the website quote intake form."),
        ("Post-pour confirmation — residential builder",           "Brief thank-you from the sales rep. Request a Google review. Ask if any colleagues are building in the Valley this season."),
        ("On-site placing crew completion — crew lead on job site","The placing crew lead mentions: \'If your GC or any other contractor on this site needs placing services on their next project, have them call us.\' Placing crew work is visible to everyone on site."),
        ("Showroom purchase — in-store or phone",                  "At checkout or invoice: \'If any of your contractor friends need rebar, accessories, or Sika products, we\'re the only Valley source for Sika — send them in.\'"),
    ],
    "acceleration": [
        ("Day 1–30",  "Website title tags rewritten. Google Business Profiles for all three locations verified. Value articulation script deployed with estimating team.",  "Inbound local search traffic begins. First quotes use outcome-framing language. Price-only conversations begin to shift.",  "Sales + MWS"),
        ("Day 30–60", "Online estimating intake form live. Cross-sell outreach to rebar-only accounts begins. Placing service explicitly offered in all commercial quotes.",    "Accessory revenue increases. Placing service pipeline opens. First new accounts engaged through outreach.",               "Sales team"),
        ("Day 60–90", "LinkedIn Company Page live. New account target outreach underway. Key account quarterly review cadence established.",                                   "B2B visibility in primary procurement research channel. New commercial accounts in pipeline. Retention systematized.",     "Sales managers"),
        ("Month 4–6", "First 5 blog articles published. YouTube channel activated with fabrication and placing crew video content.",                                           "Organic search leads begin arriving. YouTube content serves as trust-building sales tool for first-time buyers.",           "Marketing + Sales"),
        ("Month 6–12","Referral ask systematized post-project. GBP review campaign producing 10+ Google reviews across three locations.",                                      "Referral pipeline generating consistent new accounts. Social proof converts first-time website visitors into callers.",     "All"),
    ],
}
'''

# ── Write to templates ────────────────────────────────────────────────────────
import re

def inject_content(filepath, new_content_block):
    with open(filepath) as f:
        src = f.read()
    # Find CONTENT = { ... } and replace it
    # Match from 'CONTENT = {' to the matching closing brace at col 0
    pattern = r'^CONTENT\s*=\s*\{.*?^\}$'
    new_src = re.sub(pattern, new_content_block.strip(), src, flags=re.MULTILINE|re.DOTALL)
    with open(filepath, 'w') as f:
        f.write(new_src)
    print(f"  Updated {filepath}")

base = os.path.dirname(__file__)

inject_content(os.path.join(base, 'templates/audit_01_digital_presence.py'), T01)
inject_content(os.path.join(base, 'templates/audit_02_blind_spot.py'),       T02)
inject_content(os.path.join(base, 'templates/audit_03_market_forecast.py'),  T03)
inject_content(os.path.join(base, 'templates/audit_04_growth_strategy.py'),  T04)
inject_content(os.path.join(base, 'templates/audit_05_sales_strategy.py'),   T05)

# ── Update CLIENT in runner ───────────────────────────────────────────────────
runner_path = os.path.join(base, 'run_all_audits.py')
with open(runner_path) as f:
    runner = f.read()
old_client = re.search(r'^CLIENT\s*=\s*\{.*?^\}$', runner, re.MULTILINE|re.DOTALL).group(0)
runner = runner.replace(old_client, CLIENT_BLOCK.strip())
with open(runner_path, 'w') as f:
    f.write(runner)
print("  Updated run_all_audits.py CLIENT block")

print("\nAll templates populated. Running framework...")

# ── Run the framework ─────────────────────────────────────────────────────────
import subprocess
result = subprocess.run(
    [sys.executable, 'run_all_audits.py'],
    cwd=base, capture_output=True, text=True
)
print(result.stdout)
if result.returncode != 0:
    print("ERRORS:")
    print(result.stderr)
