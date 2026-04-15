# MWS-LT01 - Cold Email Outreach Setup Checklist

---

## Tech Stack to Acquire

- [ ] **Instantly.ai** -- Cold email sending, warmup, campaign management ($30-97/mo)
- [ ] **Apollo.io** -- B2B lead database with filters (Free tier: 10K leads/mo)
- [ ] **Apify** -- Web scraper for Google Maps / directory leads (~$49/mo)
- [ ] **Claude API** -- AI email copy, mutations, icebreaker writing (Pay-per-use)
- [ ] **Python script** -- Icebreaker pipeline: Apify scrape > Claude personalization > Google Sheets (Free)
- [ ] **Google Sheets** -- Lead pipeline, tracking, icebreaker output (Free)
- [ ] **2-3 Secondary Domains** -- Namecheap or Porkbun (~$10/domain/yr)
- [ ] **Email Hosting** -- Google Workspace or Zoho for sending mailboxes ($6-12/mo per mailbox)
- [ ] **Cloudflare** -- DNS management, SPF/DKIM/DMARC config (Free)
- [ ] **GitHub Actions** -- Autoresearch autonomous A/B testing loop (Free)
- [ ] **PageSpeed Insights API** -- Free website audits as lead magnet (Free)

---

## Sending Domains

- [ ] Buy 2-3 domains similar to main brand (never cold email from makerwebstudios.com)
- [ ] Set up 2 mailboxes per domain (e.g. guillermo@ and g@)
- [ ] Point MX records to email provider

## Email Authentication (repeat per domain)

- [ ] Configure SPF record
- [ ] Configure DKIM record
- [ ] Configure DMARC record
- [ ] Verify all 3 pass using mail-tester.com

## Warmup

- [ ] Connect all sending accounts to Instantly
- [ ] Enable warmup on every account
- [ ] Wait minimum 14 days before sending anything
- [ ] Confirm warmup score: 40+ emails/day, 50%+ reply rate

## Instantly Configuration

- [ ] Add all sending mailboxes
- [ ] Set daily limit: 25/day per account (ramp to 50 over weeks)
- [ ] Set email gap: 10+ minutes between sends
- [ ] Set schedule: 9am-5pm America/Chicago
- [ ] Disable open tracking
- [ ] Disable link tracking
- [ ] Text-only emails (no HTML, no images)

## Define ICP

Your moat is manufacturing. 16 years in regulated manufacturing, you speak the language. Almost nobody is cold-emailing manufacturers about websites. That's your edge.

**Primary ICP (highest priority):**
- [ ] Document target location (RGV first, then TX, then national)
- [ ] Document target job titles (Owner, President, VP Operations, Plant Manager, Operations Director)
- [ ] Document target company size (10-200 employees)
- [ ] Document target industries (contract manufacturing, CNC/machining, metal fabrication, plastics/injection molding, food processing, packaging, industrial equipment, chemical manufacturing)
- [ ] Document exclusions (government, universities, nonprofits, hospitals, franchises)

**Secondary ICP (fill volume after primary is saturated):**
- [ ] Construction, plumbing, HVAC, roofing, home builders (generic but viable for local RGV)

## Build Lead Lists

- [ ] Pull leads from Apollo using ICP filters (250 per batch)
- [ ] Export to Google Sheet (firstName, lastName, email, companyName, website, jobTitle, city)
- [ ] Deduplicate against contacted database
- [ ] Verify emails (NeverBounce or ZeroBounce)
- [ ] Accumulate 500-1000 verified leads before first campaign

## Personalization

- [ ] Build Python icebreaker script (Apify > Claude API > Google Sheets)
- [ ] Configure Apify API key in script
- [ ] Configure Claude API key in script
- [ ] Configure Google Sheets API credentials in script
- [ ] Test full pipeline: lead URL in, personalized icebreaker out to Sheet

## Write Baseline Email

- [ ] Write personalization line (one line about THEM)
- [ ] Write who-am-I line (one sentence max)
- [ ] Write offer line (too-good-to-be-true, risk on you)
- [ ] Write CTA (one specific low-commitment ask)
- [ ] Confirm under 100 words total
- [ ] Confirm subject line under 4 words, all lowercase
- [ ] Confirm no em dashes, no exclamation marks, no jargon
- [ ] Sign off with first name only

## Pre-Launch Final Check

- [ ] Warmup running 14+ days
- [ ] Warmup score 50%+ reply rate
- [ ] Lead list verified (bounce rate under 3%)
- [ ] Email copy under 100 words
- [ ] SPF/DKIM/DMARC all passing
- [ ] Tracking disabled
- [ ] Schedule set
- [ ] Daily limits set

## Launch First Campaign

- [ ] Create campaign in Instantly with descriptive name
- [ ] Upload lead list (250 leads max per campaign)
- [ ] Paste email copy
- [ ] Assign sending accounts
- [ ] Set email gap to 10+ minutes
- [ ] Activate campaign
- [ ] Log launch date in tracking sheet

## Follow-Up Sequence

- [ ] Write Step 2 (Day 3): Short bump, under 50 words
- [ ] Write Step 3 (Day 7): Value-add insight
- [ ] Write Step 4 (Day 14): Breakup email

## Daily Operations

- [ ] Time block 1-2 hours every morning for outreach
- [ ] Check Instantly dashboard for replies
- [ ] Respond to positive replies within 1 hour
- [ ] Log all replies in Google Sheets
- [ ] Add 50-100 new leads to pipeline weekly

## Autonomous Optimization (Phase 2 -- after 60 days of manual sending)

Do NOT set this up until you've sent manually for 60 days. You need real reply data and intuition for what your ICP responds to before automating mutations. Premature automation optimizes noise.

- [ ] Confirm you have 60+ days of manual campaign data
- [ ] Confirm you have a proven baseline email with >2% reply rate
- [ ] Set up orchestrator.py with Instantly API key
- [ ] Set up orchestrator.py with Anthropic API key
- [ ] Pre-populate lead_pool.db with scraped leads
- [ ] Deploy to GitHub Actions (cron every 4 hours)
- [ ] Configure Slack webhook for notifications
- [ ] Verify auto-mutation cycle is running

## Compliance

- [ ] Include physical address in email signature
- [ ] Set up suppression list for opt-outs
- [ ] Honor unsubscribe requests within 10 days
- [ ] Register with Google Postmaster Tools per sending domain
- [ ] Monitor domain reputation weekly
