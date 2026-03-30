# MWS Audit System v2

Assembly line for producing 6 client audit documents.

## The Pipeline

```
Step 1: Fill client JSON          (5 min -- identity, scores, market data)
Step 2: Rex generates .md files   (Claude Code writes the audit findings)
Step 3: Run the script            (3 seconds -- merges JSON + .md into 6 DOCXs)
```

## Folder Structure

```
audits/
  templates/         6 DOCX templates (do not edit)
  clients/           One JSON per client (identity data)
  md/                One subfolder per client with 6 .md files (content)
  output/            Generated documents land here
  mws_audit_fill.py  The merge script
```

## Usage

### JSON-only (identity fields only, content placeholders stay)
```
python3 mws_audit_fill.py clients/mirsa.json "" output/mirsa/
```

### Full pipeline (JSON + .md content)
```
python3 mws_audit_fill.py clients/mirsa.json md/mirsa/ output/mirsa/
```

### Ask Rex to generate the .md files
```
"Run audit for [client name]"
```
Rex will research the client, fill the JSON, generate the 6 .md files, and run the script.

## The 6 Documents

1. Digital Presence Audit -- full website teardown with scores
2. Blind Spot Audit -- 5 strategic gaps the client can't see
3. Grand Slam Offer Framework -- Hormozi-style offer architecture
4. Growth Playbook -- positioning, outreach, capabilities
5. Market Analysis & 5-Year Forecast -- market data and projections
6. Revenue Acceleration Playbook -- offer, guarantee, pitch

## Requirements

```
pip3 install python-docx
```
