from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import landscape, A3
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak,
    KeepTogether, HRFlowable,
)

OUT = "/home/ubuntu/pfs-google-ads-service-filter-handoff-visual.pdf"

NAVY = colors.HexColor("#102448")
BLUE = colors.HexColor("#1B3A6B")
GOLD = colors.HexColor("#C8A84B")
INK = colors.HexColor("#19202A")
MUTED = colors.HexColor("#5D6876")
LIGHT = colors.HexColor("#F3F6FA")
PALE_BLUE = colors.HexColor("#EAF0F8")
PALE_GOLD = colors.HexColor("#FFF7E4")
PALE_RED = colors.HexColor("#FFF0EE")
WHITE = colors.white

styles = getSampleStyleSheet()
title = ParagraphStyle("title", parent=styles["Title"], fontName="Helvetica-Bold", fontSize=25, leading=30, textColor=WHITE, alignment=TA_LEFT, spaceAfter=8)
subtitle = ParagraphStyle("subtitle", parent=styles["BodyText"], fontName="Helvetica", fontSize=11, leading=15, textColor=colors.HexColor("#D8E2F0"), spaceAfter=14)
h1 = ParagraphStyle("h1", parent=styles["Heading1"], fontName="Helvetica-Bold", fontSize=18, leading=22, textColor=NAVY, spaceBefore=4, spaceAfter=8)
h2 = ParagraphStyle("h2", parent=styles["Heading2"], fontName="Helvetica-Bold", fontSize=11, leading=14, textColor=NAVY, spaceBefore=6, spaceAfter=5)
body = ParagraphStyle("body", parent=styles["BodyText"], fontName="Helvetica", fontSize=8.7, leading=12, textColor=INK)
body_small = ParagraphStyle("body_small", parent=body, fontSize=7.4, leading=9.5)
small = ParagraphStyle("small", parent=body, fontSize=7.3, leading=9.2, textColor=MUTED)
table_head = ParagraphStyle("table_head", parent=body_small, fontName="Helvetica-Bold", fontSize=7.1, leading=8.3, textColor=WHITE, alignment=TA_LEFT)
table_text = ParagraphStyle("table_text", parent=body_small, fontSize=6.85, leading=8.3, textColor=INK)
table_url = ParagraphStyle("table_url", parent=table_text, fontName="Helvetica", fontSize=5.9, leading=7.1, textColor=NAVY)
callout = ParagraphStyle("callout", parent=body, fontName="Helvetica-Bold", textColor=NAVY, fontSize=9, leading=12)
footer = ParagraphStyle("footer", parent=small, fontSize=6.6, textColor=MUTED, alignment=TA_CENTER)


def p(text, style=body):
    return Paragraph(text, style)


def table(rows, widths, header=True, row_colors=None, font_size=None):
    formatted = []
    for ri, row in enumerate(rows):
        formatted_row = []
        for cell in row:
            if isinstance(cell, Paragraph):
                formatted_row.append(cell)
            else:
                formatted_row.append(p(str(cell), table_head if header and ri == 0 else table_text))
        formatted.append(formatted_row)
    tbl = Table(formatted, colWidths=widths, repeatRows=1 if header else 0, hAlign="LEFT")
    commands = [
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("GRID", (0, 0), (-1, -1), 0.35, colors.HexColor("#D5DCE5")),
        ("LEFTPADDING", (0, 0), (-1, -1), 5),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 4),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
    ]
    if header:
        commands.extend([
            ("BACKGROUND", (0, 0), (-1, 0), NAVY),
            ("TEXTCOLOR", (0, 0), (-1, 0), WHITE),
        ])
    start = 1 if header else 0
    for ri in range(start, len(rows)):
        bg = row_colors[ri - start] if row_colors and ri - start < len(row_colors) else (WHITE if (ri - start) % 2 == 0 else LIGHT)
        commands.append(("BACKGROUND", (0, ri), (-1, ri), bg))
    tbl.setStyle(TableStyle(commands))
    return tbl


def page_number(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(colors.HexColor("#D8DEE6"))
    canvas.line(doc.leftMargin, 0.43 * inch, A3[1] - doc.rightMargin, 0.43 * inch)
    canvas.setFont("Helvetica", 6.8)
    canvas.setFillColor(MUTED)
    canvas.drawString(doc.leftMargin, 0.26 * inch, "PFS INDUSTRIAL FINISHING EQUIPMENT  |  GOOGLE ADS HANDOFF — SERVICES & FILTERS")
    canvas.drawRightString(A3[1] - doc.rightMargin, 0.26 * inch, f"PAGE {doc.page}")
    canvas.restoreState()


def badge(text, bg=PALE_BLUE, fg=NAVY):
    t = Table([[p(text, ParagraphStyle("badge", parent=body_small, fontName="Helvetica-Bold", textColor=fg, fontSize=7.4, leading=8.2, alignment=TA_CENTER))]], colWidths=[1.75 * inch])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), bg),
        ("BOX", (0, 0), (-1, -1), 0.5, bg),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 4),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
    ]))
    return t


doc = SimpleDocTemplate(
    OUT,
    pagesize=landscape(A3),
    leftMargin=0.55 * inch,
    rightMargin=0.55 * inch,
    topMargin=0.5 * inch,
    bottomMargin=0.6 * inch,
)

story = []

# Cover / use instructions
hero = Table([[p("PFS GOOGLE ADS HANDOFF<br/>SERVICES & FILTERS", title), p("<b>FOR:</b> Google Ads team<br/><b>USE:</b> Build paused drafts now; activate only after the production URL and conversion test are complete.<br/><br/><b>PRODUCTION DOMAIN:</b> https://pfsspraybooths.com", subtitle)]], colWidths=[9.0 * inch, 6.65 * inch])
hero.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (-1, -1), NAVY),
    ("LEFTPADDING", (0, 0), (-1, -1), 22),
    ("RIGHTPADDING", (0, 0), (-1, -1), 22),
    ("TOPPADDING", (0, 0), (-1, -1), 20),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 20),
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
]))
story += [hero, Spacer(1, 0.25 * inch)]
story += [p("How to use this handoff", h1)]
story += [p("This is the paid-search-only working document for the PFS filter and service launch. It intentionally excludes broad SEO implementation, which remains in Developer Handoff v4. The exact production final URL for each campaign is on the next two pages. Manus URLs are preview-only and must never be pasted into Google Ads.", body)]
story += [Spacer(1, 0.14 * inch)]
scope = table([
    ["Launch now after tracking test", "Do not launch yet", "Mandatory before any campaign goes live"],
    ["Three filter Search campaigns: NESHAP/Aerospace, California & West Coast, National Paint Booth Filters.<br/><br/>Three California service Search campaigns: California, Los Angeles, Bay Area.",
     "Nationwide general service, broad match, Display, Performance Max, new product tests, and Andreae brand ads until authorization, inventory, shipping, and the conversion path are verified.",
     "Production page returns HTTP 200; form submit and tap-to-call are tested; one verified lead conversion is primary; UTM and CRM disposition are live; PFS confirms coverage and fulfillment."],
], [5.15 * inch, 5.15 * inch, 5.15 * inch], row_colors=[PALE_BLUE])
story += [scope, Spacer(1, 0.23 * inch)]
story += [p("Decision at a glance", h2)]
story += [table([
    ["Campaign family", "Why now", "Success measure"],
    ["Filters", "New dedicated SEO pages match high-intent compliance, regional, and general replacement demand; PFS can ship nationally where fulfillment is confirmed.", "Qualified filter quote / completed purchase path—not clicks alone."],
    ["California service", "Service capacity and new local landing pages are confirmed for California, Los Angeles, and Bay Area; geo separation protects lead quality.", "Qualified service request and operationally viable dispatch."],
    ["Nationwide service", "Organic awareness is supported by the site, but broad paid service demand should not be bought until nationwide dispatch capacity is real.", "Hold until service coverage and follow-up capacity are documented."],
], [2.7 * inch, 7.2 * inch, 5.55 * inch])]
story.append(PageBreak())

# Campaign final URLs
story += [p("1. Campaign Final URLs — Filters", h1), p("Use the **production final URL** column in Google Ads only after launch. The Manus review URL is for PFS review before launch.", body), Spacer(1, 0.12 * inch)]
filter_rows = [["Priority / campaign", "Target geography", "Production final URL", "Manus review URL", "Activation rule"]]
filters = [
    ("P1 — [PFS] Filters — NESHAP & Aerospace — Search", "United States; Canada only if PFS can sell/ship there", "/parts/filters/neshap-aerospace-compliance", "Launch after form + phone tracking test."),
    ("P1 — [PFS] Filters — California & West Coast — Search", "California plus PFS-approved West Coast states", "/parts/filters/california-west-coast-paint-booth-filters", "Launch after geography is approved."),
    ("P1 — [PFS] Filters — National Paint Booth — Search", "United States; Canada only if PFS can sell/ship there", "/parts/filters/paint-booth-filters", "Controlled exact/phrase test."),
    ("DRAFT — [PFS] Filters — Andreae Brand — Search", "Only markets PFS can fulfill", "/parts/filters/paint-booth-filters", "Do not enable until authorization, inventory, price/ship coverage, and final conversion path are confirmed."),
]
for name, geo, path, rule in filters:
    prod = f"https://pfsspraybooths.com{path}"
    manus = f"https://pfsspraybooth-qb3z7l9y.manus.space{path}"
    filter_rows.append([p(name, table_text), p(geo, table_text), p(prod, table_url), p(manus, table_url), p(rule, table_text)])
story += [table(filter_rows, [3.1*inch, 2.35*inch, 3.65*inch, 3.8*inch, 3.6*inch], row_colors=[PALE_BLUE, WHITE, PALE_BLUE, PALE_GOLD]), Spacer(1, 0.23*inch)]
story += [p("Filter-launch controls", h2)]
story += [table([
    ["Build setting", "Ads-team instruction"],
    ["Match types", "Begin with exact and phrase. Do not use broad match in the first 30 days."],
    ["National filter destination", "Keep PFS landing pages as the destination until pfsfilters.com has a working catalog, stock, checkout, Google tag, consent mode, and independently tested purchase conversion."],
    ["Andreae campaign", "The PFS National Filters page now includes original authorized-distributor and fitment-support content. Draft only until PFS confirms the specific authorized range and fulfillment. Do not reuse Andreae product copy, slogans, performance promises, or guarantee wording."],
    ["Filter negative review", "Review/exclude residential HVAC, home AC, furnace, cabin air, air purifier, refrigerator, pool, vacuum, free, DIY, jobs, careers."],
], [2.55*inch, 13.95*inch])]
story.append(PageBreak())

# Service final URLs
story += [p("2. Campaign Final URLs — Services", h1), p("PFS should launch paid service campaigns only where it can actually dispatch, quote, and support the lead. The national service row remains a deliberate hold.", body), Spacer(1, 0.12 * inch)]
service_rows = [["Priority / campaign", "Target geography", "Production final URL", "Manus review URL", "Activation rule"]]
services = [
    ("P1 — [PFS] Service — California — Search", "California", "/service/california", "Exact/phrase only; optimize to qualified leads."),
    ("P1 — [PFS] Service — Los Angeles — Search", "Los Angeles County + approved operating area", "/service/los-angeles", "Separate budget/reporting from statewide California."),
    ("P1 — [PFS] Service — Bay Area — Search", "Confirmed Bay Area coverage only", "/service/bay-area", "Separate budget/reporting from California and LA."),
    ("HOLD — [PFS] Service — National — Search", "Do not target until PFS has true nationwide delivery", "/service", "No broad national service or ‘near me’ targeting outside verified service areas."),
]
for name, geo, path, rule in services:
    prod = f"https://pfsspraybooths.com{path}"
    manus = f"https://pfsspraybooth-qb3z7l9y.manus.space{path}"
    service_rows.append([p(name, table_text), p(geo, table_text), p(prod, table_url), p(manus, table_url), p(rule, table_text)])
story += [table(service_rows, [3.1*inch, 2.35*inch, 3.65*inch, 3.8*inch, 3.6*inch], row_colors=[PALE_BLUE, WHITE, PALE_BLUE, PALE_RED]), Spacer(1, 0.23*inch)]
story += [p("Starting keyword themes and messaging boundaries", h2)]
story += [table([
    ["Campaign", "Exact / phrase themes to start", "Do not claim in ads without operational proof"],
    ["California Service", "paint booth service California; spray booth maintenance California; paint booth repair California; paint booth preventive maintenance California", "Statewide response time, emergency coverage, inspection approval, or compliance guarantees."],
    ["Los Angeles Service", "Los Angeles paint booth service; LA spray booth repair; South Coast AQMD paint booth service", "AQMD approval, Rule 1151 compliance approval, or service beyond the confirmed operating area."],
    ["Bay Area Service", "Bay Area paint booth service; San Francisco spray booth maintenance; Oakland paint booth service; San Jose spray booth repair", "BAAQMD guarantees, 24/7 service, or counties PFS has not approved."],
], [2.55*inch, 7.2*inch, 6.75*inch])]
story.append(PageBreak())

# Tracking and launch
story += [p("3. Tracking, CRM, and Launch Checklist", h1), p("Do not ask Google Ads to learn from duplicate form events or raw clicks. The quality of the conversion signal determines whether this launch produces useful leads.", body), Spacer(1, 0.13*inch)]
story += [table([
    ["Step", "Owner", "Required action"],
    ["1. Production URL check", "Developer", "Open every production URL in the tables above and confirm an HTTP 200 response, correct page rendering, canonical tag, and no redirect loop."],
    ["2. Conversion test", "Ads team + PFS", "Test every form and the tap-to-call link on desktop and mobile. Record the event in GA4/Google Ads and verify it reaches the CRM."],
    ["3. Primary conversion", "Ads team", "Choose one completed, verified lead event as the primary bidding conversion. Keep duplicate form events secondary until reconciled."],
    ["4. CRM disposition", "PFS", "For every lead record: qualified, unqualified, spam, duplicate, quote issued, or sold. Feed qualified outcome data back to campaign review."],
    ["5. UTM convention", "Ads team", "Pass utm_source=google, utm_medium=cpc, and a clear campaign/ad group identifier. Do not overwrite existing source data."],
    ["6. First review", "All owners", "At day 7 review search terms, disapprovals, conversion firing, and lead quality. At day 30 decide scale, hold, or stop using qualified-lead cost."],
], [1.55*inch, 1.7*inch, 13.25*inch]), Spacer(1, 0.22*inch)]
story += [p("Launch timing and responsibilities", h2)]
story += [table([
    ["Timing", "Google Ads team", "Developer", "PFS"],
    ["Before migration", "Build all P1 campaigns as paused drafts. Use exact/phrase terms and initial negatives.", "Confirm production routes, 301 redirects, Google tag/GTM, and phone/form tracking.", "Confirm coverage, inventory, shipping markets, authorization, and lead-follow-up owner."],
    ["DNS cutover day", "Change final URLs after production pages are live. Verify approval and conversion firing.", "Validate direct URLs, redirects, page load, and tracking.", "Submit each service/filter test lead; test the mobile tap-to-call path."],
    ["First 7 days", "Review search terms, invalid clicks, disapprovals, and conversion behavior.", "Repair any 404, tracking, or redirect issue immediately.", "Qualify every lead in CRM and share revenue relevance."],
    ["Day 30", "Scale, hold, or stop by qualified lead cost—not platform forms alone.", "Support new landing-page requests based on real search demand.", "Approve/disapprove expansion, including Andreae or pfsfilters.com commerce campaigns."],
], [1.6*inch, 4.7*inch, 4.7*inch, 5.5*inch])]
story.append(PageBreak())

# Reference and notes
story += [p("4. Andreae Rules, Negative Keywords, and Final Approval", h1)]
story += [p("Andreae is now reflected in the PFS National Filters landing page as original authorized-distributor and fitment-support content. This supports a future branded campaign but does not replace the need for actual availability, authorization, and fulfillment controls.", body), Spacer(1, 0.15*inch)]
story += [table([
    ["Area", "Rule for the Ads team"],
    ["Andreae brand terms", "Draft a separate campaign only. Do not mix branded Andreae queries into generic National Filters ad groups. Use original PFS copy. Activate only after PFS confirms the exact product range, inventory, price, shipping market, and conversion path."],
    ["Compliance claims", "Do not claim regulatory approval, capture percentage, universal fitment, OEM status, or a compliance guarantee unless PFS can document the exact claim for the advertised product and customer use case."],
    ["Cross-brand separation", "Exclude AEL/critical-environment terms from PFS campaigns as appropriate: battery storage, clean room, fume hood, hazardous storage, data center, C1D1, chemical storage, explosion-proof container. Validate the destination before applying account-level negatives."],
    ["Service geo discipline", "Do not enable nationwide general service simply because the site has national organic visibility. Buy paid service demand only where PFS can fulfill it."],
], [3.0*inch, 13.5*inch]), Spacer(1, 0.25*inch)]
story += [p("Final go-live approval", h2)]
story += [table([
    ["Approval question", "PFS answer required before the Ads team enables a campaign"],
    ["Can we fulfill this lead?", "Confirm shipping territory for filters, technician/service territory for service, and response ownership."],
    ["Can we track it?", "Confirm one primary qualified-lead conversion, form/phone test, CRM field mapping, and UTM capture."],
    ["Does the landing page match the query?", "Confirm final URL, landing-page headline, CTA, compliance language, and product availability match the ad group."],
    ["Do we have a stop rule?", "Agree on maximum test duration and qualified-lead review at day 7 and day 30 before budgets scale."],
], [4.25*inch, 12.25*inch]), Spacer(1, 0.35*inch)]
story += [p("Source note: Campaign positioning and URL guidance are derived from the current PFS landing-page inventory, the supplied Google Ads exports, and Andreae’s public product-category positioning. Andreae is a trademark of its respective owner. The document does not authorize use of Andreae’s product copy, slogans, claims, or images.", small)]

doc.build(story, onFirstPage=page_number, onLaterPages=page_number)
print(OUT)
