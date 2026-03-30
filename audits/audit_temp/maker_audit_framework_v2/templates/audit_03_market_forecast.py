"""
templates/audit_03_market_forecast.py  —  Maker Audit Framework V2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Market Analysis & 5-Year Forecast — same design system as digital audit.

FILL INSTRUCTIONS: Replace every value marked  # ← FILL
"""

import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))
from lib.design import *

CONTENT = {
    "client_name": "Empiria Labs, LLC",
    "industry":    "Analytical Testing Laboratory — Food Safety & Petroleum Geochemistry",
    "date":        "March 2026",
    "meta": ["Deep Research Audit","March 2026","Prepared by Maker Web Studios"],
    "kpi_tiles_row1": [
        ("Global Food Safety Testing 2024", "$28B+",  "Market Size"),
        ("North America Segment",           "$4.2B",  "Estimated"),
        ("Market CAGR 2024-2031",           "7.2%",   "Annual Growth Rate"),
    ],
    "kpi_tiles_row2": [
        ("Projected Global Market 2031",    "$40B",   "Food Safety Testing"),
        ("Dual A2LA Certificates",          "2",      "Chemistry + Biology"),
        ("Client Revenue Upside",           "HIGH",   "★★★★★"),
    ],
    "market_paragraphs": [
        "The global food safety testing market is valued at over $28 billion and is projected to grow at a 7.2% CAGR through 2031, reaching approximately $40 billion. The North American segment represents approximately $4.2 billion, driven by FSMA enforcement, retailer audit requirements, and consumer demand for supply chain transparency. The analytical laboratory services market more broadly (including environmental and industrial testing) exceeds $80 billion globally.",
        "Within this national market, the Rio Grande Valley represents a locally concentrated growth opportunity driven by its position as one of the top 5 produce import corridors in the United States. The McAllen-Hidalgo International Bridge and Pharr International Bridge handle billions of dollars in produce annually, with nearshoring trends accelerating cross-border trade through South Texas.",
        "Empiria Labs, as the only dual A2LA-accredited food safety testing laboratory in South Texas, is positioned at the center of this demand. The strategic question is not whether the market will grow — it will — but whether the lab's digital presence and business development infrastructure are positioned to capture the maximum share of that growth before national competitors establish a local footprint.",
    ],
    "timing_rows": [
        ("FSMA Produce Safety Rule enforcement shifting from guidance to action",            "Produce growers are now subject to mandatory testing for microbial contaminants, water quality, and agricultural inputs. Compliance requires third-party accredited testing — creating non-discretionary demand that grows as enforcement expands."),
        ("Nearshoring and cross-border produce trade growth through South Texas",            "Every shipment crossing the border is a potential testing client. Mexican exporters need US-accredited testing to clear FDA requirements. Empiria's bilingual capability and RGV location create a unique cross-border offering."),
        ("Consumer demand for transparency and pesticide-free certification",                "Major retailers (HEB, Walmart, Whole Foods, Kroger) are imposing stricter testing requirements on suppliers. This pushes testing volume upstream to growers who need accessible, accredited labs."),
        ("Retailer and foodservice supply chain audit requirements tightening",              "Third-party audit programs (SQF, GFSI, BRC) increasingly require documented testing from accredited laboratories. Suppliers who cannot provide A2LA or ISO 17025 accredited results risk losing shelf placement."),
        ("Mycotoxin and heavy metal regulatory tightening by FDA and California Prop 65",    "FDA has proposed action levels for lead in baby food and is expanding heavy metal guidance. These regulatory trends create new testing categories and higher testing frequency."),
    ],
    "revenue_model": [
        ("Pesticide residue analysis (LC/MS-MS, GC/MS-MS)",   "Core revenue driver. Highest volume. Every produce company shipping through the RGV needs pesticide testing for regulatory compliance and retailer audits. Recurring, non-discretionary."),
        ("Microbiological testing (pathogens + indicators)",   "Required for FSMA compliance, retailer food safety audits, and export certifications. Often bundled with pesticide testing for the same shipments."),
        ("Heavy metals quantification (ICP/OES)",              "Growing demand driven by consumer awareness, California Prop 65, and tightening international standards. Often required for organic certification and premium retail placement."),
        ("Mycotoxin analysis",                                 "Specialized testing for grains, spices, and produce susceptible to aflatoxin, ochratoxin, and fumonisin contamination. Project-based during harvest or import cycles."),
        ("Petroleum geochemistry (TOC, Pyrolysis, Rock Eval)", "Separate revenue stream from food safety. Less recurring but higher per-project value. Leverages Jorge Cortes' PhD expertise directly. Natural hedge against agricultural sector volatility."),
        ("Environmental monitoring program design",            "Consulting-adjacent service. Sampling plans, zone mapping, and corrective action triggers for produce facility clients. Relationship deepener and recurring revenue generator."),
    ],
    "forecast_rows": [
        ("Year 1 (2026)", "$180K ARR", "$250K ARR", "$350K ARR"),
        ("Year 2 (2027)", "$280K ARR", "$450K ARR", "$650K ARR"),
        ("Year 3 (2028)", "$400K ARR", "$700K ARR", "$1M ARR"),
        ("Year 4 (2029)", "$520K ARR", "$950K ARR", "$1.5M ARR"),
        ("Year 5 (2030)", "$650K ARR", "$1.2M ARR", "$2M ARR"),
    ],
    "forecast_legend": "Conservative: No change to digital presence. Growth mirrors slow organic word-of-mouth from existing clients.  Base Case: Website rebuilt, online sample submission operational, Google presence optimized, 2-3 new clients within 90 days of launch. SEO and GBP drive steady inbound.  Optimistic: Aggressive launch with targeted outreach, first-mover digital advantage captures significant share of RGV testing volume, cross-border testing contracts developed.",
    "assumptions": [
        ("RGV produce corridor volume",      "Sustained and growing based on nearshoring trends and cross-border trade expansion through South Texas. Risk: major trade policy disruption could reduce volumes."),
        ("FSMA enforcement trajectory",       "Increasing year-over-year. Enforcement actions up 40% annually. Drives non-discretionary testing demand."),
        ("Food safety testing CAGR",          "7.2% nationally through 2031. RGV likely higher due to concentrated produce corridor and border crossing volumes."),
        ("Facility capacity",                 "Current facility and instrumentation can support growth through Base Case Year 3. Optimistic case may require second instrument suite by Year 2."),
        ("New client capture rate",           "Base Case assumes 3-8 new produce company clients per year. Optimistic assumes 5+ in Year 1 through aggressive outreach and digital visibility."),
    ],
    "advantage_paragraphs": [
        "The highest-earning independent testing laboratories in regional markets share a common pattern: they establish digital visibility within their geographic service area before national competitors do, build brand recognition through accreditation messaging and local industry engagement, and capture the recurring revenue that comes from being the default testing partner for an industry cluster. The inflection point is consistently the same: the lab builds the digital infrastructure to be found by buyers who are already searching.",
        "Empiria Labs' dual A2LA accreditation and physical location in the RGV produce corridor create a structural advantage that no national lab can replicate quickly. A Bureau Veritas or Eurofins office in Houston cannot offer same-day sample acceptance to a grower in Edinburg. This proximity advantage compounds with every client relationship established — switching costs in laboratory testing are high once methods are validated and reporting formats are integrated into a client's quality system.",
    ],
    "capabilities": [
        ("Dual A2LA accreditation (Chemistry + Biology)", "The only lab in South Texas holding both certificates under ISO/IEC 17025:2017. Qualifies Empiria for contracts that single-accredited competitors cannot bid on."),
        ("LC/MS-MS, GC/MS-MS, ICP/OES instrumentation",  "Matches the analytical capability of the largest national laboratories. Extraction methods (ASE-350, QuEChERS, SPE) are industry gold standard."),
        ("Physical location in RGV produce corridor",     "Same-day sample acceptance for growers in Edinburg, McAllen, Mission, Pharr, and Weslaco. No shipping delays. 2-3 day turnaround vs. 5-7 when shipping to Houston."),
        ("PhD-led scientific team",                       "Jorge Cortes' doctorate in Geosciences and Organic Geochemistry brings research-grade analytical rigor. Opens petroleum geochemistry as a second revenue stream."),
        ("Bilingual capability",                          "Colombian-American leadership serves both US growers and Mexican exporters with equal fluency. Cultural and linguistic advantage that English-only national labs cannot replicate."),
    ],
    "risks": [
        ("National lab expansion into the RGV",              "Establish brand dominance and client relationships now, before a competitor enters. Switching costs in laboratory testing are high — once a grower has validated methods with a lab, changing is disruptive."),
        ("Accreditation scope maintenance costs",            "Budget for annual A2LA assessments and proficiency testing. Document quality system rigorously. Jorge's scientific background is an asset for maintaining compliance."),
        ("Instrumentation downtime",                         "Maintain service contracts on critical instruments. Build relationships with backup labs for emergency overflow. Communicate transparently with clients about instrument status."),
        ("Regulatory shifts affecting testing requirements", "Stay current on regulatory developments through industry associations and FDA guidance. Diversify testing capabilities across multiple regulatory frameworks (FSMA, Prop 65, EU MRLs)."),
        ("Economic slowdown in produce sector",              "Diversify revenue streams across food safety, petroleum geochemistry, and environmental testing. Petroleum geochemistry provides a natural hedge against agricultural sector volatility."),
    ],
}

def build(client, logo_path, output_dir):
    C           = CONTENT
    client_name = client["name"]
    slug        = client["slug"]
    out_path    = os.path.join(output_dir, f"03_Market_Forecast_{slug}.pdf")

    cover_fn = make_cover_template(
        doc_type_label = "MARKET ANALYSIS & 5-YEAR FORECAST",
        client_name    = None,
        logo_path      = logo_path,
        headline1      = "MARKET ANALYSIS",
        headline2      = "& 5-YEAR FORECAST",
        subtitle       = f"{client_name} — {C['industry']}",
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
        ("01","Market Context"),
        ("02","Why the Timing Is Favorable"),
        ("03","Revenue Model Overview"),
        ("04","5-Year Revenue Potential Scenarios"),
        ("05","Key Assumptions"),
        ("06","The Competitive Advantage"),
        ("07","Risks and Mitigations"),
    ]))

    # S01
    S.append(PageBreak())
    S += section_header("01","Market Context")
    for p in C["market_paragraphs"]:
        S.append(Paragraph(p, sBody)); S.append(sp(4))
    S.append(sp(6))
    S.append(stat_tiles(C["kpi_tiles_row1"]))
    S.append(sp(4))
    S.append(stat_tiles(C["kpi_tiles_row2"]))

    # S02
    S.append(PageBreak())
    S += section_header("02","Why the Timing Is Favorable",
        "Several converging trends make this an exceptionally favorable "
        "moment to invest in digital visibility and business development infrastructure.")
    S.append(sp(10))
    S.append(two_col(["TREND OR TAILWIND","IMPACT ON CLIENT"],
                     C["timing_rows"], cw=[CONTENT_W*0.35, CONTENT_W*0.65]))

    # S03
    S.append(PageBreak())
    S += section_header("03","Revenue Model Overview",
        "Multiple revenue streams at different margin profiles and demand cycles. "
        "Understanding relative value guides business development investment.")
    S.append(sp(10))
    S.append(two_col(["REVENUE TYPE / SERVICE","NOTES"], C["revenue_model"]))

    # S04
    S.append(PageBreak())
    S += section_header("04","5-Year Revenue Potential Scenarios",
        "Three scenarios based on investment level and execution against recommendations.")
    S.append(sp(6))
    S.append(Paragraph(C["forecast_legend"], sSmall))
    S.append(sp(10))
    S.append(four_col(
        ["YEAR","CONSERVATIVE","BASE CASE","OPTIMISTIC"],
        C["forecast_rows"],
        cw=[CONTENT_W*0.22, CONTENT_W*0.26, CONTENT_W*0.26, CONTENT_W*0.26],
    ))

    # S05
    S.append(PageBreak())
    S += section_header("05","Key Assumptions")
    S.append(sp(8))
    S.append(two_col(["ASSUMPTION","DETAIL"], C["assumptions"]))

    # S06
    S.append(PageBreak())
    S += section_header("06","The Competitive Advantage")
    for p in C["advantage_paragraphs"]:
        S.append(Paragraph(p, sBody)); S.append(sp(4))
    S.append(sp(6))
    S.append(two_col(["KEY CAPABILITY / ASSET","COMPETITIVE VALUE"],
                     C["capabilities"]))

    # S07
    S.append(PageBreak())
    S += section_header("07","Risks and Mitigations")
    S.append(sp(8))
    S.append(two_col(["RISK","MITIGATION"], C["risks"]))

    build_pdf(out_path, cover_story, S, cover_fn, interior_fn,
              client_name, logo_path)
    return out_path
