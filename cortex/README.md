# Cortex
**The AI brain behind your business.**
*A Maker Web Studios product*

---

## What It Is

Cortex is a custom AI executive assistant built on Claude Code. It centralizes everything a business owner knows — their voice, their business context, their priorities, their clients — into one AI-accessible system that gets smarter over time.

Not a chatbot. Not a plugin. A system that thinks, remembers, and operates like a senior member of staff who knows everything about your business.

---

## Two Tiers

### Cortex Full
The complete installation. Built and configured by MWS on Claude Code.

**What's included:**
- Full directory structure (context, projects, clients, references, templates)
- Persistent auto-memory across all sessions
- Writing voice capture (Taste Interview + anti-ai-writing-style.md)
- Document control system (ISO-adapted, doc codes)
- Financial operating system (Home Office workbook)
- Gmail, Google Drive, ClickUp integrations via MCP
- Telegram or WhatsApp agent (24/7 mobile access with tool use)
- Agent Teams for parallelized work (website builds, research, QA)
- Automated daily backups to Google Drive
- Security monitoring (encryption, VPN, backup health)
- Onboarding PDF generated at kickoff

**Price:** Included in the GrowthEngine retainer, or standalone TBD
**Setup time:** 2–4 hours (MWS installs and configures)

---

### Cortex Desktop
The portable knowledge layer. Works inside Claude Desktop (Cowork). Client self-installs in 5–10 minutes.

**What's included:**
- Pre-filled Cowork folder: ABOUT ME, PROJECTS, TEMPLATES, CLAUDE OUTPUTS
- About-me, business context, goals, priorities, voice, writing rules
- Global instructions block (paste once into Claude Desktop settings)
- Setup guide

**What it doesn't include:**
- Auto-memory (context re-read each session)
- Integrations (no Gmail, Drive, ClickUp)
- Skills or code execution

**Price:** $500–$750 one-time
**Setup time:** 5–10 min (client self-installs from ZIP)
**Upsell path:** "This is Cortex Lite. The full installation adds memory, integrations, and automation."

---

## Pricing (Draft)

| Product | Price | Notes |
|---|---|---|
| Cortex Desktop | $500–$750 one-time | Entry point. Good for discovery calls. |
| Cortex Full (standalone) | TBD | Bundle with website build or retainer |
| Cortex Full (bundled) | Included in GrowthEngine retainer | Retention play — they can't easily leave |

---

## How to Sell It

**Entry angle:** "You're already using Claude or ChatGPT. You're prompting it from scratch every time. Cortex fixes that — it knows who you are, how you write, what you're working on, and what rules you never break."

**Differentiation:** Most people use AI like a search engine. Cortex makes it an employee.

**Objection — "I already use ChatGPT":**
"ChatGPT forgets you the moment the tab closes. Cortex remembers your business, your voice, your goals. It's not a better chatbot — it's a different category."

**Objection — "I'm not technical":**
"That's why MWS builds it for you. You don't touch code. You answer questions, we configure the system, you start using it."

---

## Generators (in templates/)

| File | What It Does |
|---|---|
| `templates/MWS-OB01 - Onboarding PDF Generator.py` | Generates the branded 90-day roadmap PDF for client kickoff |
| `templates/MWS-OB02 - Cortex Desktop Package Generator.py` | Generates the Cortex Desktop ZIP for Claude Desktop |

---

## Client Packages

Generated packages for each client go in `clients/[CLIENT-CODE]/`:
- The CLIENT config used to generate (so it can be regenerated)
- Any custom context files added for that client
- Log of what was delivered and when

---

## Reference

- Full technical blueprint: `templates/executive-assistant-blueprint.md` (v7.3)
- Voice capture framework: `templates/executive-assistant-blueprint.md` Phase 22
- Desktop packaging guide: `templates/executive-assistant-blueprint.md` Phase 26
