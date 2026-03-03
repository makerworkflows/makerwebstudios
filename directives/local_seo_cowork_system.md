# Local SEO Claude Cowork System (6-Part Masterclass)

This directive captures the 6-part prompt system for local SEO using Claude Cowork (browser automation). Use it in order: Week 1 → Week 2 → Week 3 → Week 4, then execute.

**Strategy is human. Execution is instant.**

---

## Maker Web Studios – Canonical NAP (for citation audit)

Use this exact NAP everywhere (GBP, directories, schema). Fill in address/phone when you have them; consistency matters more than perfection.

| Field    | Value |
|----------|--------|
| **Business name** | Maker Web Studios |
| **Address**       | _[Add your exact street address when you have it]_ |
| **Phone**         | _[Add one canonical phone number]_ |
| **Website**       | https://makerwebstudios.com |
| **City/region**   | Texas (service area: Texas manufacturers) |

**Citation rule:** Every directory must show the **exact** same name (e.g. "Maker Web Studios" not "Maker Web Studio" or "Maker Web Studios LLC" unless that’s your legal name). Same for address (e.g. "St" vs "Street" must match everywhere).

---

## Recommended order (weeks 1–4)

- **Week 1:** Citation audit (#5) + Review teardown (#1) → foundation: clean NAP + review strategy.
- **Week 2:** Service area page gap (#2) + GBP category audit (#3) → what to build + how to optimize GBP.
- **Week 3:** Photo audit (#4) + Backlink gap (#6) → content plan + link targets.
- **Week 4+:** Execute: build pages, fix citations, upload photos, outreach.

---

## 1. Competitor review teardown

**Why first:** Review velocity (reviews per month) matters more than total count. Tells you where you stand and how many reviews/month you need to catch the top competitor.

**Prompt (paste into Claude Cowork):**

```
Open Chrome and go to these competitor GBP listings: [URL1], [URL2], [URL3]. For each competitor, read their last 50 reviews. Extract: total review count, average rating, how many reviews in the last 30/60/90 days, the most mentioned services in reviews, the most mentioned neighborhoods or cities, and any recurring complaints.
Then compare their review velocity to mine at [my GBP URL]. Output a spreadsheet with all this data and a separate tab that says exactly how many reviews per month I need to catch the top competitor and how long it will take.
```

**What you need to do:** Replace [URL1], [URL2], [URL3] with competitor Google Business Profile URLs, and [my GBP URL] with your own GBP URL.

**Output:** Spreadsheet = your review strategy for 6–12 months; recurring complaints = your angle.

---

## 2. Service area page gap analysis

**Why:** Missing service+location landing pages = invisible in those cities. Competitors that rank in multiple cities have these pages.

**Prompt (paste into Claude Cowork):**

```
Open Chrome and crawl my website [URL] and these competitor sites: [URL1], [URL2], [URL3]. List every service+location landing page each site has. Put it in a spreadsheet. Columns: service type, city/neighborhood, my site (yes/no), competitor 1 (yes/no), competitor 2 (yes/no), competitor 3 (yes/no). Highlight every combo where competitors have a page and I don't.
Then for my top 10 missing pages, open Google and search that keyword. Note who's ranking in the top 5 and what their page covers. I need to know what to build and what to beat.
```

**What you need to do:** Replace [URL] with https://makerwebstudios.com and [URL1]–[URL3] with competitor site URLs.

**Optional:** Run `execution/local_seo_page_extract.py` first to get a list of pages per domain (see script help); use that to prep or cross-check.

**Output:** Prioritized build list + who ranks for each gap.

---

## 3. GBP category audit

**Why:** Primary and secondary categories directly affect which searches you show up for in the map pack. Wrong categories = invisible for high-intent searches.

**Prompt (paste into Claude Cowork):**

```
Open Chrome and go to Google Maps. Search '[service] in [city]' for these 3 keywords: [keyword1], [keyword2], [keyword3]. For each search, note which of my competitors show up in the Map Pack. Then open each competitor's GBP listing and extract their primary category and all secondary categories. Put everything in a spreadsheet.
One tab per keyword. Columns: business name, primary category, secondary categories, star rating, review count, ranking position. Highlight any categories my competitors have that I'm missing from my GBP.
```

**What you need to do:** Replace [service], [city], [keyword1], [keyword2], [keyword3] with your target searches (e.g. "web design for manufacturers", "manufacturer website", "industrial website design" and your city/region).

**Output:** Which categories to add to your GBP; relationship between categories and map pack rankings.

---

## 4. GBP photo audit

**Why:** Businesses with photos get ~42% more direction requests and ~35% more website clicks. Consistency and type (before/after, team, trucks, completed work) matter.

**Prompt (paste into Claude Cowork):**

```
Open Chrome and go to my GBP listing at [URL] and these competitors: [URL1], [URL2], [URL3]. For each listing, count: total photos, photos uploaded in the last 90 days, types of photos (team, jobs, before-after, office, trucks, equipment), and whether any look like stock photos. Put this in a spreadsheet comparing me vs each competitor.
Then give me a specific 8-week photo upload plan for my GBP. Tell me exactly how many photos per week and what type to shoot. Focus on before-afters, team on job sites, trucks in neighborhoods we serve, and close-ups of completed installs. No generic office photos.
```

**What you need to do:** Replace [URL] with your GBP URL and [URL1]–[URL3] with competitor GBP URLs. For Maker Web Studios, adapt “trucks/installs” to what you have (e.g. team, client sites, before/after websites, equipment).

**Output:** Spreadsheet + 8-week photo plan (weekly volume + types).

---

## 5. Citation audit + NAP cleanup

**Why:** Inconsistent NAP (name, address, phone) across directories dilutes authority. Clean citations can move you up 2–3 spots in the map pack within ~30 days.

**Prompt (paste into Claude Cowork):**

```
Open Chrome and search for my business '[business name]' + '[city]' across Google. Go through the first 10 pages of results and check every directory listing you find - Yelp, BBB, Angi, Yellow Pages, Manta, Hotfrog, Apple Maps, Bing Places, Facebook, and any others that come up.
For each listing log: directory name, listing URL, business name as shown, address as shown, phone number as shown, website URL as shown. Compare every listing against my correct info: [name], [address], [phone], [website]. Output a spreadsheet. Flag anything that doesn't match exactly, even small differences like 'St' vs 'Street' or an old phone number. Sort by highest authority directories first. That's my cleanup list.
```

**What you need to do:** Replace [business name] with "Maker Web Studios", [city] with your city (e.g. your Texas city), and [name], [address], [phone], [website] with your canonical NAP from the table at the top of this directive.

**Output:** Prioritized cleanup list (high-authority first); fix each listing to match NAP exactly.

---

## 6. Backlink gap analysis

**Why:** Sites that link to 2+ competitors but not you are warm outreach targets; conversion is much higher than cold link building.

**Prompt (paste into Claude Cowork):**

```
Open Chrome and go to Ahrefs. Run a backlink analysis on my domain [URL] and these 3 competitors: [URL1], [URL2], [URL3]. For each domain pull: total referring domains, domain rating, total backlinks that have DR 40+, and which pages get the most links.
Then find every site that links to at least 2 of my competitors but not me. Export everything into a spreadsheet. Tab 1: my backlink profile vs competitors side by side. Tab 2: sites linking to competitors but not me, sorted by domain authority.
```

**What you need to do:** Replace [URL] with https://makerwebstudios.com and [URL1]–[URL3] with competitor domains. You need Ahrefs access.

**Output:** Tab 1 = profile comparison; Tab 2 = outreach hit list (sites that already link to businesses like yours).

---

## What the agent/codebase implements for you

- **This directive:** All 6 prompts in one place, correct NAP template, and week-by-week order.
- **On-site SEO:** Canonical URL, meta description, Open Graph, and LocalBusiness schema in `index.html` (add address/phone in schema when you have them).
- **Optional script:** `execution/local_seo_page_extract.py` – extracts internal links from your site and competitor sites to support the service-area page gap analysis (run before or alongside prompt #2).

---

## What you need to do (human / tools)

1. **Run the prompts in Claude Cowork** (or equivalent with browser access) in the order above; replace all placeholders.
2. **Fill in canonical NAP** at the top of this directive (address, phone) and use it everywhere.
3. **Add NAP to schema:** Once you have a canonical address and phone, add them to the LocalBusiness JSON-LD in `index.html` (see comments there).
4. **Execute the outputs:** Fix citations, add missing GBP categories, follow the photo plan, build missing service/area pages, do backlink outreach.
5. **Ahrefs:** Prompt #6 requires an Ahrefs account.

---

## References

- Masterclass source: Claude Cowork Masterclass for SEO (6-part local SEO prompt system).
- Core idea: Strategy is human; execution (audits, spreadsheets, comparisons) is done in minutes with Claude Cowork instead of 30–40 hours of manual work.
