from pathlib import Path

import markdown
from weasyprint import HTML


SOURCE = Path("/home/ubuntu/upload/PFSGoogleAdsPerformanceAnalysis.md")
OUTPUT_HTML = Path("/home/ubuntu/pfs-google-ads-performance-analysis-full-width.html")
OUTPUT_PDF = Path("/home/ubuntu/pfs-google-ads-performance-analysis-full-width.pdf")


CSS = """
@page {
  size: A3 landscape;
  margin: 9mm 10mm 10mm 10mm;
  @bottom-right { content: "PFS Google Ads Performance Analysis | " counter(page) " of " counter(pages); font-size: 7pt; color: #475569; }
}

* { box-sizing: border-box; }
body {
  color: #111827;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 8.5pt;
  line-height: 1.3;
}
h1 { font-size: 22pt; color: #102b52; margin: 0 0 5mm 0; }
h2 { font-size: 15pt; color: #102b52; margin: 8mm 0 3mm 0; padding-bottom: 1.5mm; border-bottom: 0.6mm solid #c8a84b; break-after: avoid; }
h3 { font-size: 11.5pt; color: #102b52; margin: 6mm 0 2.5mm 0; break-after: avoid; }
p { margin: 0 0 3mm 0; }
ul { margin: 0 0 3mm 5mm; padding-left: 3mm; }
li { margin-bottom: 1.2mm; }
blockquote { margin: 3mm 0; padding: 2.5mm 4mm; border-left: 1.2mm solid #c8a84b; background: #f8fafc; color: #334155; }
table {
  width: 100%;
  border-collapse: collapse;
  table-layout: auto;
  font-size: 6.2pt;
  line-height: 1.18;
  margin: 3mm 0 6mm 0;
  page-break-inside: auto;
}
thead { display: table-header-group; }
tbody { display: table-row-group; }
tr { page-break-inside: avoid; }
th, td {
  padding: 1.25mm 1.15mm;
  vertical-align: top;
  border: 0.2mm solid #cbd5e1;
  overflow-wrap: anywhere;
  word-break: normal;
}
th { background: #102b52; color: #ffffff; font-weight: 700; }
tr:nth-child(even) td { background: #f8fafc; }
th:nth-child(n+5), td:nth-child(n+5) { text-align: right; white-space: nowrap; }
hr { border: 0; border-top: 0.3mm solid #cbd5e1; margin: 6mm 0; }
"""


def main() -> None:
    source = SOURCE.read_text(encoding="utf-8")
    body = markdown.markdown(
        source,
        extensions=["tables", "fenced_code", "sane_lists"],
        output_format="html5",
    )
    html = f"""<!doctype html>
<html lang=\"en\">
  <head>
    <meta charset=\"utf-8\" />
    <title>PFS Google Ads Performance Analysis — Full Width</title>
    <style>{CSS}</style>
  </head>
  <body>{body}</body>
</html>"""
    OUTPUT_HTML.write_text(html, encoding="utf-8")
    HTML(string=html, base_url=str(SOURCE.parent)).write_pdf(str(OUTPUT_PDF))
    print(f"Wrote {OUTPUT_PDF}")


if __name__ == "__main__":
    main()
