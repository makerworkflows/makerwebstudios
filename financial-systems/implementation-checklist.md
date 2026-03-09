# Profit First Implementation Checklist

Step-by-step task list with checkboxes for MWS Profit First implementation.

**Last Updated**: March 6, 2026
**Current Phase**: Phase 0 (Pre-Revenue)

---

## Phase 0: Pre-Revenue (Now)

### Learning & Planning

- [ ] Read [01-profit-first-methodology-guide.pdf](profit-first-methodology/01-profit-first-methodology-guide.pdf) (26 pages)
- [ ] Review [02-profit-first-quick-reference.pdf](profit-first-methodology/02-profit-first-quick-reference.pdf) (1 page)
- [ ] Read [03-profit-first-personal-notes.rtf](profit-first-methodology/03-profit-first-personal-notes.rtf) (personal critique)
- [ ] Review [04-profit-first-graphics-charts.pdf](profit-first-methodology/04-profit-first-graphics-charts.pdf) (visual aids)
- [ ] Read [00-IMPLEMENTATION-PLAN.md](profit-first-methodology/00-IMPLEMENTATION-PLAN.md) (MWS-specific roadmap)
- [ ] Review [target-allocation-percentages.md](target-allocation-percentages.md) (TAP tables)

### Bank Research

- [ ] Compare [Mercury](https://mercury.com) vs. [Relay](https://relayfi.com)
- [ ] Read [bank-account-structure.md](bank-account-structure.md) (2-account model details)
- [ ] Choose bank: [ ] Mercury [ ] Relay
- [ ] Bookmark bank application URL

### LLC Planning

- [ ] Research LLC filing options (LegalZoom, Northwest Registered Agent, DIY)
- [ ] Cost research: $______ total for LLC filing
- [ ] Timeline estimate: ______ weeks to approval
- [ ] Decision: File now or wait for first revenue? [ ] Now [ ] Wait

### Calendar Setup

- [ ] Create recurring calendar event: "Profit First Transfer" on 1st of month
- [ ] Create recurring calendar event: "Profit First Transfer" on 15th of month
- [ ] Set alerts for both events (30 min before)
- [ ] Add annual review event: 1 year from first revenue date (TBD)

**Phase 0 Complete When**: All items checked, waiting for first revenue to trigger Phase 1

---

## Phase 1: Day 1 of Revenue

### Trigger Event

- [ ] **First client payment received**: $___________ on Date: __________

### Legal Entity Formation

- [ ] File LLC (or confirm sole proprietorship decision)
  - [ ] Choose formation service: ________________
  - [ ] Submit application
  - [ ] Pay filing fee: $_________
  - [ ] Receive approval (ETA: _______ days)
  - [ ] Store LLC documents in `/projects/Maker Web Studios/legal/`

- [ ] Get EIN from IRS
  - [ ] Go to https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online
  - [ ] Complete SS-4 application online
  - [ ] Receive EIN immediately: __ - _______
  - [ ] Save EIN confirmation PDF
  - [ ] Store in password manager

### Bank Account Setup

- [ ] Open Business Checking
  - [ ] Go to bank website (Mercury or Relay)
  - [ ] Complete application
  - [ ] Upload required documents (ID, EIN)
  - [ ] Wait for approval (1-2 days)
  - [ ] Receive account number: _______________
  - [ ] Order debit card for checking: [ ] Yes [ ] No

- [ ] Open Business Savings
  - [ ] Same bank as checking
  - [ ] Complete application
  - [ ] Link to checking account
  - [ ] Receive account number: _______________
  - [ ] **DO NOT order debit card** (behavioral lock): [ ] Confirmed

- [ ] Link Accounts
  - [ ] Log into bank
  - [ ] Link checking ↔ savings for transfers
  - [ ] Test transfer: $10 checking → savings → checking
  - [ ] Verify transfer works both ways: [ ] Yes

### Payment Processor Setup

- [ ] Update Stripe (or payment processor) with Business Checking account
  - [ ] Log into Stripe dashboard
  - [ ] Settings → Bank Accounts
  - [ ] Add Business Checking details
  - [ ] Verify micro-deposits (2-3 days)
  - [ ] Set as default payout account

### First Allocation

- [ ] Calculate allocation percentages (Stage 1: 1% profit)
  - First revenue amount: $_________
  - Profit (1%): $_________
  - Tax (15%): $_________
  - Total to transfer: $_________

- [ ] Execute first transfer
  - [ ] Log into bank
  - [ ] Transfer Profit + Tax to savings
  - [ ] Confirm transfer successful
  - [ ] Screenshot/document first allocation (milestone!)

- [ ] Celebrate
  - [ ] First profit allocation complete, even if $5
  - [ ] Habit begins today
  - [ ] Share with Ane (celebrate the milestone)

**Phase 1 Complete When**: LLC filed, EIN received, 2 accounts open, first allocation transferred

**Completion Date**: ___________

---

## Phase 2: Week 1 After Revenue

### Recurring Transfer Setup

- [ ] Set up calendar reminders (if not done in Phase 0)
  - [ ] 1st of month: "Profit First Transfer"
  - [ ] 15th of month: "Profit First Transfer"
  - [ ] Set to repeat monthly
  - [ ] Add alerts (30 min before)

- [ ] Create transfer template/script
  - [ ] Document calculation process
  - [ ] Save in this file or create transfer-log.md
  - [ ] Include formula: Revenue × % = Transfer Amount

- [ ] (Optional) Set up automated transfers in bank
  - [ ] Check if Mercury/Relay offers scheduled transfers
  - [ ] If yes, set up recurring transfer for fixed amount
  - [ ] Note: Will need to adjust monthly based on revenue
  - [ ] If no, rely on calendar reminders

### Expense Tracking

- [ ] Review all expenses in Business Checking
  - [ ] List all current expenses:
    1. _________________: $_________/month
    2. _________________: $_________/month
    3. _________________: $_________/month
  - [ ] Total monthly expenses: $_________

- [ ] Compare to operating budget (34% of revenue)
  - [ ] Revenue: $_________
  - [ ] Operating budget (34%): $_________
  - [ ] Actual expenses: $_________
  - [ ] Over/under budget: $_________

- [ ] If over budget, identify cuts
  - [ ] Review each expense: Can we do this for less?
  - [ ] List potential cuts:
    1. _________________: Save $_________/month
    2. _________________: Save $_________/month
  - [ ] Implement cuts

### Constraint-Driven Innovation Log

- [ ] Create innovation log (or use this section)
  - [ ] Document question asked: "How can we achieve X for 1/3 the cost?"
  - [ ] Document solution found
  - [ ] Document savings realized

**Example Entry**:
```
Date: __________
Challenge: Need to send 100 emails/day
Traditional approach: Apollo.io ($500/month)
Profit First question: "Can we do this for $0?"
Solution: Manual Gmail API + Chris's 50-word sequence
Savings: $500/month = $6,000/year
```

**Phase 2 Complete When**: Recurring transfers scheduled, expense tracking started, first innovation logged

**Completion Date**: ___________

---

## Phase 3: Month 3 Quarterly Review

### Profit Allocation Increase

- [ ] Review current revenue stage
  - [ ] Current MRR: $_________
  - [ ] Current stage: [ ] Stage 1 ($0-$5K) [ ] Stage 2 ($5K-$12K) [ ] Stage 3 ($12K-$25K)

- [ ] Increase profit % if applicable
  - [ ] From: _____% (Stage ___)
  - [ ] To: _____% (Stage ___)
  - [ ] Effective date: ___________ (next transfer)

- [ ] Update transfer calculations
  - [ ] New profit %: _____
  - [ ] New tax %: _____
  - [ ] New owner's pay %: _____
  - [ ] New operating %: _____
  - [ ] Total: 100% [ ] Verified

### First Profit Distribution Decision

- [ ] Review savings balance
  - [ ] Current balance: $_________
  - [ ] Months accumulated: 3
  - [ ] Average monthly profit: $_________

- [ ] Distribution options
  - [ ] **Reinvest 100%**: Leave in savings, build reserves
  - [ ] **Take 100%**: Distribute to yourself (bonus)
  - [ ] **Hybrid 50/50**: $___________ reinvest, $___________ take

- [ ] Decision made: ___________________
  - [ ] If taking distribution, transfer to personal account
  - [ ] Document reasoning for decision

### Methodology Assessment

- [ ] Review constraint-driven innovations
  - [ ] How many innovations documented? _____
  - [ ] Total savings realized: $_________/month
  - [ ] vs. "unlimited budget" scenario: $_________ saved

- [ ] Assess effectiveness
  - [ ] Is profit allocation working? [ ] Yes [ ] No
  - [ ] Are transfers happening 2x/month? [ ] Yes [ ] No
  - [ ] Is operating budget sufficient? [ ] Yes [ ] No
  - [ ] Are constraints driving innovation? [ ] Yes [ ] No

- [ ] Decision: Continue, Modify, or Abandon
  - [ ] **Continue as-is**: Methodology working
  - [ ] **Modify**: Adjust TAPs or process (specify): ___________
  - [ ] **Abandon**: Not working (document why): ___________

### TAP Adjustments (If Needed)

- [ ] If actual expenses consistently over/under operating budget:
  - [ ] Current operating %: _____
  - [ ] Actual expenses average: _____% of revenue
  - [ ] Adjust to: _____% (not to exceed 35%)

- [ ] If tax reserve insufficient/excessive:
  - [ ] Current tax %: _____
  - [ ] Actual tax liability: _____% of revenue
  - [ ] Adjust to: _____% (15-25% range)

**Phase 3 Complete When**: Profit % increased, distribution decision made, effectiveness assessed

**Completion Date**: ___________

---

## Phase 4: Month 12 Annual Review

### Tax Payment

- [ ] Review tax reserves
  - [ ] Current tax savings balance: $_________
  - [ ] Quarterly estimated taxes paid (if applicable):
    - Q1: $_________
    - Q2: $_________
    - Q3: $_________
    - Q4: $_________
  - [ ] Total paid: $_________

- [ ] Annual tax filing
  - [ ] Prepare Form 1040 Schedule C (sole prop) or 1120S (S-Corp)
  - [ ] Calculate total tax liability: $_________
  - [ ] Amount already paid: $_________
  - [ ] Balance due/refund: $_________

- [ ] Pay balance from tax reserves
  - [ ] Transfer from tax savings to checking
  - [ ] Pay IRS balance due
  - [ ] Or receive refund and decide: reinvest or take

- [ ] Assess tax allocation sufficiency
  - [ ] Was 15% enough? [ ] Yes [ ] No
  - [ ] If no, increase to: _____% for Year 2

### Year 1 Profit Distribution

- [ ] Review annual profit accumulation
  - [ ] Total profit accumulated Year 1: $_________
  - [ ] Already distributed (Q1, Q3 decisions): $_________
  - [ ] Remaining balance: $_________

- [ ] Year 1 distribution decision
  - [ ] **Reinvest 100%**: Growth capital
  - [ ] **Take 100%**: Year-end bonus
  - [ ] **Hybrid 50/50**: $___________ reinvest, $___________ take

- [ ] Execute distribution
  - [ ] If taking, transfer to personal account
  - [ ] If reinvesting, specify use: ___________
  - [ ] Document reasoning

### Optimize TAPs for Year 2

- [ ] Review Year 1 performance
  - [ ] Average MRR Year 1: $_________
  - [ ] Peak MRR: $_________
  - [ ] Current MRR: $_________
  - [ ] Stage achieved: Stage _____ ($______ - $______ range)

- [ ] Set Year 2 TAPs
  - [ ] Profit %: _____ (up from Year 1: _____)
  - [ ] Tax %: _____ (adjust if needed)
  - [ ] Owner's Pay %: _____ (may decrease as profit increases)
  - [ ] Operating %: _____ (target: 30%)

- [ ] Set Year 2 goals
  - [ ] Revenue goal: $_________/month by Dec 2027
  - [ ] Profit goal: $_________/month (____% of revenue)
  - [ ] Number of clients goal: _____ clients

### Integration Updates

- [ ] Update [ACQ-implementation-notes.md](../ACQ-implementation-notes.md)
  - [ ] Add profit metrics:
    - Profit per client: $_________
    - Profit margin by tier (Tier 1/2/3)
    - CAC vs. operating allocation

- [ ] Update [daily-priorities.md](../../decisions/daily-priorities.md)
  - [ ] Add business FQ tracking to Monthly Review section
  - [ ] Profit First allocations executed? ✅
  - [ ] Operating budget forcing innovations? (1/month minimum)

- [ ] Update [revenue-ceilings-framework.md](../../decisions/revenue-ceilings-framework.md)
  - [ ] Add note: "Financial infrastructure (Profit First) in place prevents expensive chaos"
  - [ ] Reference constraint-driven innovation examples

- [ ] Update [/personal/finance/README.md](../../personal/finance/README.md)
  - [ ] Add pointer to business finances: "See `/projects/Maker Web Studios/financial-systems/`"
  - [ ] Confirm separation maintained

### Year 1 Retrospective

- [ ] What worked well?
  1. ___________________________________________
  2. ___________________________________________
  3. ___________________________________________

- [ ] What didn't work?
  1. ___________________________________________
  2. ___________________________________________

- [ ] Changes for Year 2
  1. ___________________________________________
  2. ___________________________________________

- [ ] Continue Profit First methodology into Year 2?
  - [ ] **Yes**: Proven effective, continue with optimizations
  - [ ] **No**: Abandon or replace with: ___________

**Phase 4 Complete When**: Taxes paid, Year 1 distribution made, TAPs optimized for Year 2, integrations updated

**Completion Date**: ___________

---

## Ongoing Maintenance (Every 2 Weeks)

### Transfer Checklist (1st and 15th of Month)

- [ ] Calculate revenue from past 2 weeks: $_________
- [ ] Calculate allocations:
  - [ ] Profit (_____% ): $_________
  - [ ] Tax (_____% ): $_________
  - [ ] Total to transfer: $_________
- [ ] Log into bank
- [ ] Transfer from checking → savings
- [ ] Verify transfer successful
- [ ] Log transfer in spreadsheet (optional)
- [ ] Update savings balance: $_________

**Copy this section and repeat every 2 weeks**

---

## Emergency Procedures Checklist

### If Revenue Drops Below Projections

- [ ] Calculate new average (trailing 3 months)
- [ ] Determine appropriate stage for current revenue
- [ ] Maintain profit % (do not drop to 0%)
- [ ] If needed, reduce profit to 1-3% minimum
- [ ] Cut operating expenses first (review line by line)
- [ ] Reduce owner's pay second (only if necessary)
- [ ] Document what happened and prevention plan

**DO NOT raid profit/tax reserves**

---

### If Operating Budget Insufficient

- [ ] Review expenses line by line
- [ ] Separate must-have vs. nice-to-have
- [ ] Eliminate all nice-to-haves
- [ ] Negotiate discounts on must-haves (ask for 20% off)
- [ ] Question business model: Wrong clients? (low revenue, high cost)
- [ ] If still insufficient, consider increasing operating to max 35%
- [ ] Beyond 35% = business model problem (deeper review needed)

---

### If Tempted to "Borrow" from Reserves

- [ ] Stop and question: Is this truly necessary?
- [ ] Review constraint-driven innovation options first
- [ ] Ask: "Can we do this for 1/3 the cost?"
- [ ] If still necessary, document reasoning
- [ ] Set repayment plan with timeline
- [ ] Execute repayment within 30 days
- [ ] Review why temptation occurred (operating % too low?)

---

## Notes

- This checklist tracks implementation from pre-revenue through Year 1
- Check off items as completed
- Add completion dates to track milestones
- Copy ongoing sections (transfers) as templates
- Update TAP percentages as you progress through stages
- Review full implementation plan at each phase: [00-IMPLEMENTATION-PLAN.md](profit-first-methodology/00-IMPLEMENTATION-PLAN.md)

**The Goal**: Systematic execution from Day 1 of revenue through profitable Year 1, with built-in reviews and optimizations.
