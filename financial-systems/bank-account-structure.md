# Bank Account Structure

2-account model setup for Maker Web Studios Profit First implementation.

**Last Updated**: March 6, 2026
**Recommended**: Mercury (start simple, migrate to Relay if expanding to 5 accounts)

---

## 2-Account Model (MWS Implementation)

### Account 1: Business Checking

**Bank**: Mercury or Relay
**Type**: Checking
**Purpose**: Operating account - "live from this"

**Inflows**:
- All client payments
- All revenue sources

**Outflows**:
- Operating expenses (software, contractors, tools, marketing)
- Owner's pay (salary/distributions to personal account)

**Access**:
- Debit card (yes)
- Checkbook (if needed)
- Full access for daily operations

**Balance Target**: 30-35% of monthly revenue (operating budget)

---

### Account 2: Business Savings

**Bank**: Same as checking (for easy transfers)
**Type**: Savings
**Purpose**: Reserves - "don't touch"

**Inflows**:
- Profit allocation (2x/month transfers from checking)
- Tax allocation (2x/month transfers from checking)

**Outflows**:
- Quarterly profit distributions (decision: reinvest or take)
- Tax payments (quarterly estimated, annual filing)

**Access**:
- **NO debit card** (behavioral lock)
- Manual transfers only
- Requires intentional action to access

**Balance Target**: Grow over time (ideally 3-6 months operating expenses)

---

## Banking Options Comparison

### Option A: Mercury (Recommended to Start)

**Pros**:
- Modern, startup-focused business banking
- Free business checking + savings (no monthly fees)
- Clean UI/UX, mobile app
- API access for automation (future use)
- Fast account opening (1-2 days)
- Integrated accounting features

**Cons**:
- Limited to 2-3 accounts (checking + 1-2 savings)
- No physical branches (online only)
- May need to migrate to Relay if expanding to 5-account model

**Best For**: Solo founders, pre-$100K revenue, simple structure

**Link**: https://mercury.com

**Cost**: $0/month

---

### Option B: Relay

**Pros**:
- Built for small businesses
- Free business checking + up to 20 savings accounts
- Enables full 5-account Profit First model if needed
- No monthly fees
- Multiple users (for future team)

**Cons**:
- Slightly less polished UI vs. Mercury
- Fewer automation features
- Account opening can take 3-5 days

**Best For**: Planning to scale to 5-account model, team growth anticipated

**Link**: https://relayfi.com

**Cost**: $0/month

---

### Option C: Traditional Banks (Not Recommended)

**Examples**: Chase, Bank of America, Wells Fargo

**Pros**:
- Physical branches
- Established reputation

**Cons**:
- Monthly fees ($15-30/month)
- Minimum balance requirements ($1,500-5,000)
- Poor online/mobile experience
- Slow customer service
- Not built for startups

**Best For**: Large established businesses, need for physical banking

**Cost**: $15-30/month + fees

---

## Recommended Setup (Phase 1)

### Start with Mercury

**Why**: Simple, free, fast setup, good for pre-$100K revenue

**Accounts to Open**:
1. Mercury Business Checking
2. Mercury Business Savings

**Timeline**: 1-2 days for approval

**Requirements**:
- LLC formation (or sole proprietorship)
- EIN from IRS
- Personal identification
- Business description

---

### Migrate to Relay (Optional, Later)

**When**: If/when you want to expand to 5-account model (team scaling)

**Trigger**: Hiring first full-time employee, revenue > $100K/year

**Migration Process**:
1. Open Relay accounts (checking + 5 savings)
2. Transfer balances from Mercury
3. Update payment processors (Stripe, etc.) to new account
4. Close Mercury accounts

**Timeline**: 1-2 weeks for migration

---

## 5-Account Model (Future Expansion)

If you decide to expand from 2 accounts to 5:

### Account Structure (Relay)

1. **Revenue (Checking)**: All income deposits here
2. **Operating (Checking)**: Day-to-day expenses
3. **Profit (Savings)**: Untouchable reserves
4. **Tax (Savings)**: Quarterly/annual tax payments
5. **Owner's Pay (Savings)**: Your salary reserve

### Transfer Flow (With 5 Accounts)

**Every 1st and 15th**:
1. Revenue account receives client payments
2. Transfer allocations:
   - 5% → Profit savings
   - 15% → Tax savings
   - 50% → Owner's Pay savings
   - 30% → Operating checking
3. Pay yourself from Owner's Pay savings (weekly or bi-weekly)
4. Pay expenses from Operating checking only

**Behavioral Lock**: Only Operating checking has debit card

---

## Setup Checklist

### Before Opening Accounts

- [ ] LLC filed and approved (or decide on sole proprietorship)
- [ ] EIN received from IRS (apply at IRS.gov - free, instant)
- [ ] Business name decided
- [ ] Business description prepared (1-2 sentences)
- [ ] Personal ID ready (driver's license or passport)

### Opening Accounts (Mercury)

- [ ] Go to https://mercury.com
- [ ] Click "Apply Now"
- [ ] Complete application:
  - Business information (name, EIN, address)
  - Owner information (name, SSN, DOB)
  - Business description
  - Expected monthly revenue
- [ ] Upload documents (ID, EIN confirmation)
- [ ] Wait for approval (1-2 days)
- [ ] Receive account details
- [ ] Link checking + savings accounts

### After Account Opening

- [ ] **DO NOT** order debit card for savings account (behavioral lock)
- [ ] Order debit card for checking account only
- [ ] Set up mobile app
- [ ] Link payment processors (Stripe, PayPal, etc.) to checking account
- [ ] Set calendar reminders for 1st and 15th (recurring transfers)
- [ ] Create budget categories in bank (if available)

---

## Transfer Automation

### Manual (Phase 1-2)

**Tools**: Calendar + bank app

**Process**:
1. Set recurring calendar events (1st and 15th)
2. Calculate allocation percentages (see target-allocation-percentages.md)
3. Log into bank app
4. Transfer from checking → savings
5. Log transfer in spreadsheet or notes

**Pros**: Simple, no automation setup
**Cons**: Can forget, requires discipline

---

### Semi-Automated (Phase 3+)

**Tools**: Mercury/Relay scheduled transfers

**Process**:
1. Set up recurring transfer in bank
2. Every 1st and 15th: Auto-transfer fixed amount
3. Adjust transfer amount monthly based on actual revenue

**Pros**: Less likely to forget
**Cons**: Still requires monthly adjustment

---

### Fully Automated (Future)

**Tools**: Zapier or Make.com + Mercury API

**Process**:
1. Trigger on revenue receipt (Stripe payment)
2. Calculate allocation percentages
3. Auto-transfer to savings
4. Log in spreadsheet

**Pros**: Truly hands-off
**Cons**: Complex setup, requires API access

**When to Implement**: After $100K/year revenue, when automation ROI justifies setup time

---

## Behavioral Locks

### Primary Lock: No Debit Card on Savings

**Why**: Remove temptation to "borrow" from profit/tax reserves

**Implementation**:
- When opening savings account, decline debit card
- If accidentally ordered, shred immediately
- Only way to access: manual transfer via bank app or website

**Psychological Effect**: Creates intentional friction, forces you to question "Do I really need this?"

---

### Secondary Lock: Separate Bank (Future)

**When**: If you're still tempted to raid reserves

**Implementation**:
- Keep checking at Mercury
- Move savings to completely different bank (Ally, Marcus)
- Requires 3-5 day transfer time to access
- Maximum friction

**When to Use**: Only if lacking discipline with same-bank savings

---

## Notes

- Start with Mercury (simple, free, fast)
- 2-account model sufficient for solo founder, pre-$100K revenue
- No debit card on savings = critical behavioral lock
- Migrate to Relay only if expanding to 5-account model (team scaling)
- Avoid traditional banks (fees, minimum balances, poor UX)
- Set calendar reminders for 1st and 15th (recurring transfers)

**The Goal**: Simple structure with behavioral locks to ensure profit allocations happen automatically.
