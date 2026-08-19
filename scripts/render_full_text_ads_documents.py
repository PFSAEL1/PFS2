from pathlib import Path

import markdown
from bs4 import BeautifulSoup
from weasyprint import HTML


DOCUMENTS = [
    {
        "source": Path("/home/ubuntu/upload/PFSGoogleAdsPerformanceAnalysis.md"),
        "html": Path("/home/ubuntu/pfs-google-ads-performance-analysis-complete-landscape.html"),
        "pdf": Path("/home/ubuntu/pfs-google-ads-performance-analysis-complete-landscape.pdf"),
        "title": "PFS Google Ads Performance Analysis",
    },
    {
        "source": Path("/home/ubuntu/pfs-google-ads-service-filter-handoff.md"),
        "html": Path("/home/ubuntu/pfs-google-ads-service-filter-handoff-complete-landscape.html"),
        "pdf": Path("/home/ubuntu/pfs-google-ads-service-filter-handoff-complete-landscape.pdf"),
        "title": "PFS Google Ads Handoff — Services & Filters",
    },
    {
        "source": Path("/home/ubuntu/pfs-google-ads-handoff-new-pfs-site-only.md"),
        "html": Path("/home/ubuntu/pfs-google-ads-handoff-new-pfs-site-only-complete-landscape.html"),
        "pdf": Path("/home/ubuntu/pfs-google-ads-handoff-new-pfs-site-only-complete-landscape.pdf"),
        "title": "PFS Google Ads Handoff — New PFS Site Services & Filters",
    },
]


CSS = """
@page {
  size: A3 landscape;
  margin: 10mm 11mm 12mm 11mm;
  @bottom-left { content: "PFS Industrial Finishing Equipment"; font-size: 7pt; color: #64748b; }
  @bottom-right { content: string(report-title) "  |  " counter(page) " of " counter(pages); font-size: 7pt; color: #64748b; }
}

* { box-sizing: border-box; }
body {
  color: #172033;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 9.5pt;
  line-height: 1.36;
}
h1 {
  string-set: report-title content(text);
  color: #102b52;
  font-size: 24pt;
  line-height: 1.08;
  margin: 0 0 5mm;
  padding: 0 0 4mm;
  border-bottom: 1.2mm solid #c8a84b;
}
h2 {
  color: #102b52;
  font-size: 16pt;
  line-height: 1.15;
  margin: 9mm 0 3mm;
  padding: 0 0 1.5mm;
  border-bottom: 0.45mm solid #c8a84b;
  break-after: avoid;
}
h3 { color: #102b52; font-size: 12pt; margin: 6mm 0 2.5mm; break-after: avoid; }
p { margin: 0 0 3.4mm; }
ul, ol { margin: 0 0 4mm 6mm; padding-left: 4mm; }
li { margin-bottom: 1.3mm; }
strong { color: #102b52; }
blockquote {
  margin: 4mm 0;
  padding: 3mm 4.5mm;
  border-left: 1.2mm solid #c8a84b;
  background: #f3f6fa;
  color: #334155;
}
code {
  color: #102b52;
  background: #eef3f8;
  padding: .5mm 1mm;
  overflow-wrap: anywhere;
}
table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  font-size: 6.3pt;
  line-height: 1.2;
  margin: 3.5mm 0 7mm;
  page-break-inside: auto;
}
thead { display: table-header-group; }
tbody { display: table-row-group; }
tr { page-break-inside: avoid; }
th, td {
  padding: 1.35mm 1.15mm;
  border: .2mm solid #cbd5e1;
  vertical-align: top;
  overflow-wrap: anywhere;
  word-break: normal;
}
th { background: #102b52; color: #fff; font-weight: 700; }
tr:nth-child(even) td { background: #f7f9fc; }
table.cols-11 { font-size: 5.45pt; }
table.cols-11 th:nth-child(1), table.cols-11 td:nth-child(1) { width: 17%; }
table.cols-11 th:nth-child(2), table.cols-11 td:nth-child(2) { width: 13%; }
table.cols-11 th:nth-child(3), table.cols-11 td:nth-child(3) { width: 8%; }
table.cols-11 th:nth-child(4), table.cols-11 td:nth-child(4) { width: 8%; }
table.cols-11 th:nth-child(5), table.cols-11 td:nth-child(5) { width: 6%; }
table.cols-11 th:nth-child(6), table.cols-11 td:nth-child(6) { width: 7%; }
table.cols-11 th:nth-child(7), table.cols-11 td:nth-child(7) { width: 6%; }
table.cols-11 th:nth-child(8), table.cols-11 td:nth-child(8) { width: 8%; }
table.cols-11 th:nth-child(9), table.cols-11 td:nth-child(9) { width: 8%; }
table.cols-11 th:nth-child(10), table.cols-11 td:nth-child(10) { width: 9%; }
table.cols-11 th:nth-child(11), table.cols-11 td:nth-child(11) { width: 10%; }
table.cols-10 { font-size: 5.8pt; }
table.cols-10 th:nth-child(1), table.cols-10 td:nth-child(1) { width: 18%; }
table.cols-10 th:nth-child(2), table.cols-10 td:nth-child(2) { width: 14%; }
table.cols-10 th:nth-child(n+3), table.cols-10 td:nth-child(n+3) { width: 8.5%; }
table.cols-9 { font-size: 6.2pt; }
table.cols-8 { font-size: 6.8pt; }
table.cols-7 { font-size: 7.1pt; }
table.cols-6 { font-size: 7.3pt; }
hr { border: 0; border-top: .3mm solid #cbd5e1; margin: 6mm 0; }
a { color: #143b73; text-decoration: none; overflow-wrap: anywhere; }
"""


def render_document(config: dict[str, Path | str]) -> None:
    source = Path(config["source"])
    markdown_text = source.read_text(encoding="utf-8")
    body = markdown.markdown(
        markdown_text,
        extensions=["tables", "fenced_code", "sane_lists"],
        output_format="html5",
    )
    soup = BeautifulSoup(body, "html.parser")
    for table in soup.find_all("table"):
        rows = table.find_all("tr")
        max_columns = max((len(row.find_all(["th", "td"])) for row in rows), default=1)
        table["class"] = list(table.get("class", [])) + [f"cols-{max_columns}"]
    title = str(config["title"])
    html = f"""<!doctype html>
<html lang=\"en\">
  <head>
    <meta charset=\"utf-8\" />
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />
    <title>{title} — Complete Landscape Version</title>
    <style>{CSS}</style>
  </head>
  <body>{soup}</body>
</html>"""
    html_path = Path(config["html"])
    pdf_path = Path(config["pdf"])
    html_path.write_text(html, encoding="utf-8")
    HTML(string=html, base_url=str(source.parent)).write_pdf(str(pdf_path))
    print(f"Wrote {pdf_path}")


def main() -> None:
    for document in DOCUMENTS:
        render_document(document)


if __name__ == "__main__":
    main()
