# Maker Web Studios — To-Do List

Use this list to track what’s left to do. Check off items as you complete them.

---

## NAP & business details (do first)

- [ ] **Get a canonical business address**  
  You’ll use this everywhere: GBP, directories, schema, citations. No address yet = leave blank until you have one.

- [ ] **Get a canonical phone number**  
  One number for Google Business Profile and all directories. No phone yet = leave blank until you have one.

- [ ] **Fill in NAP in the directive**  
  In `directives/local_seo_cowork_system.md`, update the table at the top with your address and phone once you have them.

- [ ] **Add address + phone to the website schema**  
  In `index.html`, add `"address"` and `"telephone"` to the JSON-LD block (see the HTML comment there and the directive for format).

---

## Local SEO (Claude Cowork — after NAP is ready)

Run these in order when you’re ready. All prompts live in `directives/local_seo_cowork_system.md`.

- [ ] **Week 1:** Citation audit (#5) — run prompt, fix NAP on every directory.
- [ ] **Week 1:** Review teardown (#1) — run prompt, get review velocity targets.
- [ ] **Week 2:** Service area page gap (#2) — run prompt (optional: run `execution/local_seo_page_extract.py` first).
- [ ] **Week 2:** GBP category audit (#3) — run prompt, add missing categories to GBP.
- [ ] **Week 3:** GBP photo audit (#4) — run prompt, follow 8-week photo plan.
- [ ] **Week 3:** Backlink gap (#6) — run prompt in Ahrefs, start outreach from Tab 2 list.
- [ ] **Week 4+:** Execute — build missing pages, fix citations, upload photos, do link outreach.

---

## Favicon (MWS .ico) — one-time

- [ ] **Copy the MWS favicon PNG into the project**  
  From: `[Cursor project]/assets/mws-favicon-256.png`  
  To: `public/mws-favicon-256.png` (in this repo).
- [ ] **Generate favicon.ico**  
  Run: `python execution/create_favicon_ico.py` (from project root).  
  Then deploy so the site uses `public/favicon.ico` (browser tab / Google results).

---

## Optional / later

- [ ] Create service+location landing pages (from gap analysis output).
- [ ] Set up or claim Google Business Profile when you have address/phone.

---

*Bookmark this file: it’s your running task list until NAP is set and SEO execution is under way.*
