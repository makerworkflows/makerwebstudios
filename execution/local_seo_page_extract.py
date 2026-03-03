#!/usr/bin/env python3
"""
Local SEO: extract internal links (service/location pages) from your site and competitors.
Use before or alongside the "Service area page gap analysis" Claude Cowork prompt.

Output: CSV of unique paths per domain so you can compare who has which landing pages.

Usage:
  python execution/local_seo_page_extract.py

Reads URLs from LOCAL_SEO_URLS in .env or from stdin (one URL per line).
Format in .env:
  LOCAL_SEO_URLS=https://makerwebstudios.com,https://competitor1.com,https://competitor2.com

Or:
  echo "https://makerwebstudios.com" | python execution/local_seo_page_extract.py

Requires: requests, beautifulsoup4 (pip install requests beautifulsoup4)
"""

import csv
import os
import re
import sys
from urllib.parse import urljoin, urlparse

try:
    import requests
    from bs4 import BeautifulSoup
except ImportError:
    print("Install: pip install requests beautifulsoup4", file=sys.stderr)
    sys.exit(1)

USER_AGENT = "Mozilla/5.0 (compatible; LocalSEO/1.0)"
TIMEOUT = 15


def load_urls():
    """Get list of URLs from env or stdin."""
    env_urls = os.environ.get("LOCAL_SEO_URLS", "").strip()
    if env_urls:
        return [u.strip() for u in env_urls.split(",") if u.strip()]
    lines = [line.strip() for line in sys.stdin if line.strip()]
    return lines


def fetch_html(url):
    try:
        r = requests.get(url, headers={"User-Agent": USER_AGENT}, timeout=TIMEOUT)
        r.raise_for_status()
        return r.text
    except Exception as e:
        return None


def extract_internal_links(html, base_url):
    """Return set of internal paths (normalized, no fragment)."""
    if not html:
        return set()
    parsed = urlparse(base_url)
    base_netloc = parsed.netloc
    base_scheme = parsed.scheme
    base_path = parsed.path.rstrip("/") or "/"
    soup = BeautifulSoup(html, "html.parser")
    paths = set()
    for a in soup.find_all("a", href=True):
        href = a["href"].strip()
        if not href or href.startswith("#") or href.startswith("mailto:") or href.startswith("tel:"):
            continue
        full = urljoin(base_url, href)
        p = urlparse(full)
        if p.netloc != base_netloc:
            continue
        path = p.path.rstrip("/") or "/"
        if path.startswith("//"):
            continue
        paths.add(path)
    return paths


def main():
    urls = load_urls()
    if not urls:
        print("No URLs. Set LOCAL_SEO_URLS in .env or pipe URLs to stdin.", file=sys.stderr)
        sys.exit(1)

    out_path = os.path.join(os.path.dirname(__file__), "..", ".tmp", "local_seo_pages.csv")
    os.makedirs(os.path.dirname(out_path), exist_ok=True)

    rows = []
    for url in urls:
        url = url.rstrip("/")
        if not url.startswith("http"):
            url = "https://" + url
        print(f"Fetching {url} ...", file=sys.stderr)
        html = fetch_html(url)
        paths = extract_internal_links(html, url)
        domain = urlparse(url).netloc
        for path in sorted(paths):
            rows.append({"domain": domain, "url": url, "path": path})

    with open(out_path, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=["domain", "url", "path"])
        w.writeheader()
        w.writerows(rows)

    print(f"Wrote {len(rows)} paths to {out_path}", file=sys.stderr)
    print(out_path)


if __name__ == "__main__":
    main()
