from __future__ import annotations

import csv
import json
import re
from pathlib import Path

import pandas as pd


INPUT_DIR = Path("/home/ubuntu/upload")
OUTPUT_DIR = Path("/home/ubuntu/pfs-ads-analysis")

FILES = {
    "landing_pages": "pfslandingpages.csv",
    "campaigns": "Campaignperformance(1).csv",
    "keywords": "Searchkeyword(1).csv",
    "ads": "Adsperformance.csv",
    "ad_groups": "Adgroupperformance(1).csv",
    "search_terms": "Searchterms(1).csv",
    "conversions": "Conversions.csv",
    "ad_schedule": "Whenyouradsshowed.csv",
    "placements": "Placements.csv",
}

NUMERIC_COLUMNS = {
    "Clicks",
    "Impr.",
    "CTR",
    "Avg. CPC",
    "Cost",
    "Impr. (Abs. Top) %",
    "Impr. (Top) %",
    "Conversions",
    "View-through conv.",
    "Cost / conv.",
    "Conv. rate",
    "TrueView views",
    "TrueView view rate",
    "TrueView avg. CPV",
    "Avg. CPM",
    "Keyword max CPC",
}


def clean_number(value: object) -> float:
    if pd.isna(value):
        return 0.0
    text = str(value).strip().replace("$", "").replace(",", "")
    if text in {"", "--", "-"}:
        return 0.0
    if text.endswith("%"):
        text = text[:-1]
        try:
            return float(text) / 100
        except ValueError:
            return 0.0
    try:
        return float(text)
    except ValueError:
        return 0.0


def read_google_csv(path: Path) -> tuple[pd.DataFrame, dict[str, str]]:
    with path.open("r", encoding="utf-8-sig", newline="") as fh:
        rows = list(csv.reader(fh))
    if len(rows) < 3:
        return pd.DataFrame(), {"report": "", "date_range": ""}

    meta = {"report": rows[0][0] if rows[0] else "", "date_range": rows[1][0] if rows[1] else ""}
    headers = rows[2]
    data_rows = rows[3:]
    frame = pd.DataFrame(data_rows, columns=headers)
    frame = frame.dropna(how="all")
    for column in NUMERIC_COLUMNS.intersection(frame.columns):
        frame[column] = frame[column].map(clean_number)
    return frame, meta


def dataframe_markdown(frame: pd.DataFrame, max_rows: int = 15) -> str:
    if frame.empty:
        return "_No data returned._"
    return frame.head(max_rows).to_markdown(index=False)


def metric_summary(frame: pd.DataFrame) -> dict[str, float]:
    output: dict[str, float] = {}
    for metric in ["Clicks", "Impr.", "Cost", "Conversions"]:
        if metric in frame.columns:
            output[metric] = float(frame[metric].sum())
    if output.get("Impr.", 0):
        output["CTR"] = output.get("Clicks", 0) / output["Impr."]
    if output.get("Clicks", 0):
        output["Avg. CPC"] = output.get("Cost", 0) / output["Clicks"]
    if output.get("Conversions", 0):
        output["Cost / conv."] = output.get("Cost", 0) / output["Conversions"]
    if output.get("Clicks", 0):
        output["Conv. rate"] = output.get("Conversions", 0) / output["Clicks"]
    return output


def percent(value: float) -> str:
    return f"{value * 100:.2f}%"


def money(value: float) -> str:
    return f"${value:,.2f}"


def baseline_section(label: str, summary: dict[str, float]) -> str:
    if not summary:
        return f"### {label}\n\n_No summary metrics available._\n"
    rows = []
    for key in ["Impr.", "Clicks", "Cost", "Conversions", "CTR", "Avg. CPC", "Conv. rate", "Cost / conv."]:
        if key not in summary:
            continue
        value = summary[key]
        display = percent(value) if key in {"CTR", "Conv. rate"} else money(value) if key in {"Cost", "Avg. CPC", "Cost / conv."} else f"{value:,.0f}"
        rows.append(f"| {key} | {display} |")
    return f"### {label}\n\n| Metric | Value |\n| --- | ---: |\n" + "\n".join(rows) + "\n"


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    frames: dict[str, pd.DataFrame] = {}
    metadata: dict[str, dict[str, str]] = {}
    for key, filename in FILES.items():
        frame, meta = read_google_csv(INPUT_DIR / filename)
        frames[key] = frame
        metadata[key] = meta

    inventory = []
    for key, frame in frames.items():
        inventory.append(
            {
                "Export": key,
                "Report title": metadata[key]["report"],
                "Date range": metadata[key]["date_range"],
                "Rows": len(frame),
                "Columns": len(frame.columns),
            }
        )
    inventory_frame = pd.DataFrame(inventory)
    inventory_frame.to_csv(OUTPUT_DIR / "export_inventory.csv", index=False)

    campaign = frames["campaigns"].copy()
    ad_groups = frames["ad_groups"].copy()
    keywords = frames["keywords"].copy()
    terms = frames["search_terms"].copy()
    landing = frames["landing_pages"].copy()
    placements = frames["placements"].copy()

    for frame in [campaign, ad_groups, keywords, terms, landing, placements]:
        if "Cost" in frame.columns:
            frame.sort_values("Cost", ascending=False, inplace=True)

    campaign_top = campaign[[c for c in ["Campaign", "Campaign state", "Campaign type", "Clicks", "Impr.", "CTR", "Avg. CPC", "Cost", "Conversions", "Cost / conv.", "Conv. rate"] if c in campaign.columns]].head(25)
    ad_group_top = ad_groups[[c for c in ["Campaign", "Ad group", "Campaign type", "Clicks", "Impr.", "CTR", "Avg. CPC", "Cost", "Conversions", "Cost / conv.", "Conv. rate"] if c in ad_groups.columns]].head(40)
    keyword_top = keywords[[c for c in ["Campaign", "Ad group", "Search keyword", "Search keyword match type", "Clicks", "Impr.", "CTR", "Avg. CPC", "Cost", "Conversions", "Cost / conv.", "Conv. rate"] if c in keywords.columns]].head(50)
    term_top = terms[[c for c in ["Search term", "Search terms match type", "Added/Excluded", "Clicks", "Impr.", "CTR", "Avg. CPC", "Cost", "Conversions", "Cost / conv.", "Conv. rate"] if c in terms.columns]].head(75)
    landing_top = landing[[c for c in ["Landing page", "Impr.", "Clicks", "CTR", "Avg. CPC", "Cost", "Conversions", "Cost / conv.", "Conv. rate"] if c in landing.columns]].head(50)
    placement_top = placements[[c for c in ["Placement (group)", "Placement type (group)", "Campaign", "Ad group", "TrueView views", "TrueView view rate", "Clicks", "Impr.", "CTR", "Cost", "Avg. CPM"] if c in placements.columns]].head(50)

    waste_terms = terms.copy()
    if {"Cost", "Conversions"}.issubset(waste_terms.columns):
        waste_terms = waste_terms[(waste_terms["Cost"] > 25) & (waste_terms["Conversions"] == 0)].sort_values("Cost", ascending=False)
    waste_terms = waste_terms[[c for c in ["Search term", "Search terms match type", "Added/Excluded", "Clicks", "Impr.", "Cost", "Conversions"] if c in waste_terms.columns]].head(100)

    winners = terms.copy()
    if "Conversions" in winners.columns:
        winners = winners[winners["Conversions"] > 0].sort_values(["Conversions", "Cost"], ascending=[False, True])
    winners = winners[[c for c in ["Search term", "Search terms match type", "Clicks", "Impr.", "Cost", "Conversions", "Cost / conv.", "Conv. rate"] if c in winners.columns]].head(100)

    for name, frame in {
        "top_campaigns": campaign_top,
        "top_ad_groups": ad_group_top,
        "top_keywords_by_spend": keyword_top,
        "top_search_terms_by_spend": term_top,
        "top_landing_pages": landing_top,
        "top_placements_by_spend": placement_top,
        "search_terms_spend_without_conversions": waste_terms,
        "search_terms_with_conversions": winners,
    }.items():
        frame.to_csv(OUTPUT_DIR / f"{name}.csv", index=False)

    conversion_frame = frames["conversions"].copy()
    conversion_frame.to_csv(OUTPUT_DIR / "conversion_actions.csv", index=False)

    sections = [
        "# PFS Google Ads Export Baseline\n",
        "This baseline is derived from the supplied Google Ads exports. It is a reporting and migration-planning analysis, not a guarantee of future campaign performance.\n",
        "## Source Inventory\n",
        dataframe_markdown(inventory_frame, 20),
        "\n",
        baseline_section("Campaign-performance baseline", metric_summary(campaign)),
        baseline_section("Search-term baseline", metric_summary(terms)),
        "## Highest-Spend Campaigns\n",
        dataframe_markdown(campaign_top),
        "\n## Highest-Spend Ad Groups\n",
        dataframe_markdown(ad_group_top),
        "\n## Highest-Spend Landing Pages\n",
        dataframe_markdown(landing_top),
        "\n## Search Terms With Conversions\n",
        dataframe_markdown(winners, 30),
        "\n## Search Terms With Spend but No Recorded Conversion\n",
        dataframe_markdown(waste_terms, 30),
        "\n## Conversion Actions\n",
        dataframe_markdown(conversion_frame, 30),
    ]
    (OUTPUT_DIR / "baseline.md").write_text("\n".join(sections), encoding="utf-8")

    (OUTPUT_DIR / "metadata.json").write_text(json.dumps(metadata, indent=2), encoding="utf-8")
    print(f"Wrote baseline outputs to {OUTPUT_DIR}")


if __name__ == "__main__":
    main()
