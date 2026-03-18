# MWS-PB01 - Cold Email Outreach: A-Z Checklist

**Owner:** Maker Web Studios
**Version:** 1.0
**Date:** 2026-03-13

---

## Tech Stack

| Layer | Tool | Purpose | Cost |
|-------|------|---------|------|
| **Lead Sourcing** | Apollo.io | B2B contact database, job title/industry filters | Free tier: 10K leads/mo |
| **Lead Sourcing** | Apify | Web scraper for Google Maps, directories, niche lists | Pay-per-use (~$49/mo) |
| **Email Sending** | Instantly.ai | Cold email infrastructure, warmup, campaign management | $30-97/mo |
| **AI Copy** | Claude API | Email mutation, icebreaker writing, A/B test generation | Pay-per-use |
| **Personalization** | Python script | Icebreaker pipeline: Apify scrape > Claude > Google Sheets | Free |
| **CRM/Tracking** | Google Sheets | Lead pipeline, campaign tracking, icebreaker output | Free |
| **Domain/Email** | Namecheap or Porkbun | Buy secondary sending domains | ~$10/domain/yr |
| **Email Hosting** | Google Workspace or Zoho | Mailboxes on sending domains | $6-12/mo per mailbox |
| **DNS Auth** | Cloudflare | SPF, DKIM, DMARC configuration | Free |
| **Autonomous Optimization** | GitHub Actions + Autoresearch | Automated A/B testing loop every 4 hours | Free (public repo) |
| **Website Audits** | PageSpeed Insights API | Free audit as lead magnet / proof of value | Free |

---

## Phase 1: Infrastructure Setup

### A. Sending Domains

- [ ] Buy 2-3 secondary domains similar to your main brand
  - Example: `makerwebstudio.com`, `makerwebco.com`, `makerweb.io`
  - NEVER send cold email from your primary domain (`makerwebstudios.com`)
- [ ] Set up 2 mailboxes per domain (e.g., `guillermo@`, `g@`)
  - That gives you 4-6 sending accounts total
- [ ] Point MX records to your email provider (Google Workspace or Zoho)

### B. Email Authentication (per sending domain)

- [ ] Configure SPF record: `v=spf1 include:_spf.google.com ~all`
- [ ] Configure DKIM (generate key in email provider, add TXT record in DNS)
- [ ] Configure DMARC: `v=DMARC1; p=none; rua=mailto:you@domain.com`
- [ ] Verify all 3 pass using [mail-tester.com](https://mail-tester.com) or MXToolbox

### C. Warmup

- [ ] Connect all sending accounts to Instantly
- [ ] Enable Instantly warmup on every account
- [ ] Warmup for minimum 14 days before sending any cold email
- [ ] Target: 40+ warmup emails/day per account, 50%+ reply rate in warmup
- [ ] Do NOT skip this step -- it's the difference between inbox and spam

### D. Instantly Configuration

- [ ] Create Instantly account and add all sending mailboxes
- [ ] Set daily sending limit: 25/day per account (ramp up to 50 over weeks)
- [ ] Email gap: 10+ minutes between sends
- [ ] Schedule: 9am-5pm recipient timezone (America/Chicago for RGV)
- [ ] Disable open tracking (hurts deliverability)
- [ ] Disable link tracking (same reason)
- [ ] Text-only emails (no HTML, no images, no logos)

---

## Phase 2: Lead Sourcing & List Building

### E. Define Your ICP (Ideal Customer Profile)

Your moat is manufacturing. 16 years in regulated manufacturing, you speak the language. Almost nobody is cold-emailing manufacturers about websites. Lean into that.

- [ ] Document your **primary** target (manufacturing):
  - **Location:** United States (RGV first, then TX, then national)
  - **Job Titles:** Owner, President, VP Operations, Plant Manager, Operations Director
  - **Company Size:** 10-200 employees (large enough to have budget, small enough that decision maker reads email)
  - **Industries:** Contract manufacturing, CNC/machining, metal fabrication, plastics/injection molding, food processing, packaging, industrial equipment, chemical manufacturing
  - **Exclude:** Government, universities, nonprofits, hospitals, franchises, news orgs
  - **Email Status:** Validated only (no catch-all, no unverified)
- [ ] Document your **secondary** target (local services, fill volume only):
  - Construction, plumbing, HVAC, roofing, home builders in RGV

### F. Build Lead Lists

- [ ] Pull leads from Apollo using ICP filters above (250 per batch)
- [ ] Alternative: Apify Google Maps scraper for local businesses
- [ ] Export to Google Sheet with columns: firstName, lastName, email, companyName, website, jobTitle, city
- [ ] Deduplicate against `contacted.db` (never email the same person twice)
- [ ] Verify emails through Instantly or a verification tool (NeverBounce, ZeroBounce)
- [ ] Target: 500-1000 verified leads before launching first campaign

### G. Lead Research & Personalization (Optional but High-Impact)

- [ ] Build Python icebreaker script (Apify > Claude API > Google Sheets)
  - Input: Google Sheet with lead URLs
  - Apify scrapes their website (homepage + 3 internal pages)
  - Claude generates personalized icebreaker per lead
  - Output appends back to Google Sheet
  - Reference: `outreach/Deep Multiline Icebreaker System.json` for prompt structure and email framework
- [ ] For manual sends: visit their website, note one small non-obvious detail
- [ ] Never say "Love your website!" -- find something specific (a service they emphasize, a project they showcased, their About page story)

---

## Phase 3: Email Copy

### H. Write Your Baseline Email

Follow the 4-part formula:

```
Subject: quick question

Hey {{firstName}},

[PERSONALIZATION] — One line referencing something about THEM.

[WHO AM I] — One sentence. "I run a small web studio" not "We are a
full-service digital marketing agency."

[OFFER] — What you'll do for them. Make it too-good-to-be-true with
all risk on you. "I'd be happy to run a free site audit for
{{companyName}} showing exactly what's costing you leads."

[CTA] — One specific, low-commitment ask. "Worth a quick look?" or
"How's Thursday at 3pm?"

- {{sendingAccountFirstName}}
```

### I. Email Copy Rules

- [ ] Under 100 words total (75 is better)
- [ ] Use "I" not "we"
- [ ] No em dashes (AI tell)
- [ ] No exclamation marks
- [ ] No rhetorical questions (except CTA)
- [ ] No corporate jargon ("synergy", "leverage", "solutions")
- [ ] No fake urgency ("spots filling up", "limited time")
- [ ] Subject line: under 4 words, all lowercase, curiosity-driven
- [ ] Sign off with first name only, no title, no company
- [ ] Line breaks every 1-2 sentences (mobile readability)
- [ ] One CTA only -- "free audit" OR "quick call" (not both)

### J. Subject Line Bank (test these)

- [ ] `quick question`
- [ ] `{{companyName}}`
- [ ] `{{firstName}}, quick thought`
- [ ] `saw your site`
- [ ] `idea for {{companyName}}`
- [ ] `your google presence`

---

## Phase 4: Campaign Launch

### K. Pre-Launch Checklist

- [ ] Warmup has been running 14+ days
- [ ] Warmup score is 50%+ reply rate
- [ ] Lead list is verified (bounce rate must stay under 3%)
- [ ] Email copy reviewed and under 100 words
- [ ] SPF/DKIM/DMARC all passing
- [ ] Tracking disabled (open + link)
- [ ] Sending schedule set (9am-5pm)
- [ ] Daily limit set (25-50 per account)

### L. Launch Campaign in Instantly

- [ ] Create campaign with descriptive name (e.g., `2026-03 RGV Construction v1`)
- [ ] Upload lead list (max 250 leads per campaign for clean testing)
- [ ] Paste email copy into Step 1
- [ ] Assign sending accounts (rotate across accounts)
- [ ] Set email gap to 10+ minutes
- [ ] Activate campaign
- [ ] Mark launch date in your tracking sheet

### M. Follow-Up Sequence (Optional)

- [ ] Step 2 (Day 3): Short bump -- "Hey {{firstName}}, just floating this back up. Thoughts?"
- [ ] Step 3 (Day 7): Value-add -- Share a quick insight about their site or industry
- [ ] Step 4 (Day 14): Breakup -- "No worries if the timing isn't right. I'll leave this with you."
- [ ] Keep follow-ups under 50 words each

---

## Phase 5: Daily Operations

### N. Daily Prospecting Routine

- [ ] Time block: 1-2 hours every morning for outreach (non-negotiable)
- [ ] Check Instantly dashboard for replies
- [ ] Respond to positive replies within 1 hour
- [ ] Log all replies in Google Sheets (positive, negative, not interested)
- [ ] Add 50-100 new leads to pipeline weekly to keep volume steady
- [ ] Track: emails sent, open rate, reply rate, meetings booked, deals closed

### O. Reply Handling

- [ ] **Positive reply** ("Sure, let's talk"): Book call within 24-48 hours, send calendar link
- [ ] **Interested but hesitant** ("Tell me more"): Send 2-sentence value prop + free audit offer
- [ ] **Not interested**: Thank them, remove from sequence, mark in CRM
- [ ] **Unsubscribe request**: Remove immediately, add to suppression list
- [ ] **Out of office**: Note return date, follow up after they're back
- [ ] Send thank-you email within 24 hours of every discovery call with recap

---

## Phase 6: Optimization & Scaling

### P. A/B Testing (Manual)

- [ ] Test ONE variable at a time:
  1. Subject line (different hook)
  2. Opening line (different personalization angle)
  3. CTA (free audit vs quick call vs case study)
  4. Body length (shorter vs longer)
  5. Tone (casual vs professional)
- [ ] Run each test with 250 leads per variant (minimum for statistical significance)
- [ ] Wait 48+ hours before judging results
- [ ] Winner becomes new baseline, repeat

### Q. A/B Testing (Autonomous -- Phase 2, after 60 days manual)

Do NOT automate until you have 60+ days of manual sending data and a baseline email with >2% reply rate. You need real intuition for what your manufacturing ICP responds to before letting the system mutate.

- [ ] Confirm 60+ days of manual campaign data
- [ ] Confirm proven baseline with >2% reply rate
- [ ] Set up `orchestrator.py` with Instantly API key and Anthropic API key
- [ ] Pre-populate `lead_pool.db` with scraped leads
- [ ] Deploy to GitHub Actions (cron every 4 hours)
- [ ] System auto-generates challenger mutations of baseline email
- [ ] Deploys baseline vs challenger (250 leads/arm)
- [ ] After 48 hours, harvests results and promotes winner
- [ ] Baseline ratchets upward automatically -- each generation improves
- [ ] Monitor via Slack webhook notifications

### R. Metrics to Track

| Metric | Target | Action if Below |
|--------|--------|-----------------|
| Open Rate | >50% | Fix subject lines or deliverability |
| Reply Rate | >3% | Fix copy, personalization, or ICP |
| Bounce Rate | <3% | Better email verification |
| Positive Reply Rate | >1% | Improve offer or CTA |
| Meetings Booked/Month | 8-12 | Increase volume or improve reply handling |
| Close Rate | >25% | Improve sales call process |

### S. Scaling Levers

- [ ] Add more sending domains + mailboxes (scale horizontally)
- [ ] Expand ICP to adjacent industries
- [ ] Expand geography (RGV → Texas → National)
- [ ] Layer in LinkedIn connection requests (7-11 touch rule)
- [ ] Layer in cold calls to warm leads (40% pickup rate vs 2% email reply)
- [ ] Hire VA to handle lead sourcing and list building

---

## Phase 7: Compliance & Reputation

### T. Legal Compliance

- [ ] CAN-SPAM: Include physical address in email signature or footer
- [ ] CAN-SPAM: Honor unsubscribe requests within 10 business days
- [ ] Never use misleading subject lines or "Re:" tricks
- [ ] Maintain suppression list of everyone who opts out
- [ ] B2B cold email is legal in the US -- but respect boundaries

### U. Domain Reputation Protection

- [ ] Monitor sending domain reputation weekly (Google Postmaster Tools)
- [ ] If bounce rate exceeds 5%, pause campaign immediately and clean list
- [ ] If spam complaints appear, pause and review copy
- [ ] Rotate sending accounts if one gets flagged
- [ ] Never exceed 50 emails/day per sending account
- [ ] Keep warmup running even during active campaigns

---

## Quick Reference: The Formula

```
LEAD QUALITY (highest leverage)
    × PERSONALIZATION (non-obvious details)
    × COPY (under 100 words, 4-part formula)
    × DELIVERABILITY (auth + warmup + limits)
    × VOLUME (daily consistency)
    × FOLLOW-UP (7-11 touches)
    = CLOSED DEALS
```

---

## Existing Rex Assets

| Asset | Location |
|-------|----------|
| Cold Email SOP | `outreach/COLD EMAIL CAMPAIGN SOP.rtf` |
| Icebreaker Workflow (reference) | `outreach/maker_web_studios_icebreaker - updated.json` |
| Deep Icebreaker System (reference) | `outreach/Deep Multiline Icebreaker System.json` |
| Autoresearch System | `projects/Autoresearch/cold-email/` |
| Baseline Email | `projects/Autoresearch/cold-email/config/baseline.md` |
| Cold Email Course Notes | `projects/Autoresearch/cold-email/data/cold-email-course.md` |
| Strategy & Optimization | `projects/Autoresearch/cold-email/data/resource.md` |
| Sales Fundamentals | `references/sales-training-fundamentals.md` |
| SEO Cold Email Agent | `projects/Maker Web Studios/agents/seo-cold-email/` |
| 28-Lead Campaign Report | `MWS-RP02 - Cold Email Outreach 28 Leads.pdf` |
