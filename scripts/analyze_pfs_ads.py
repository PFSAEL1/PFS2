from __future__ import annotations

from pathlib import Path

import pandas as pd

from analyze_ads_exports import INPUT_DIR, OUTPUT_DIR, metric_summary, money, percent, read_google_csv


PFS_CAMPAIGN_MARKERS = ("PFS", "ABC Booth")
PFS_QUERY_MARKERS = (
    "paint booth", "paint booths", "spray booth", "spray booths", "powder coating", "powder booth",
    "blast booth", "blast room", "blasting", "sandblast", "sandblasting", "abrasive blast",
    "downdraft", "crossflow", "cross flow", "semi down", "semi-down", "automotive refinish",
    "auto spray", "aircraft paint", "airplane paint", "aviation booth", "industrial paint",
    "paint wall", "paint prep", "prep station", "paint booth service", "booth maintenance",
    "paint booth filter", "spray booth filter", "curing oven", "industrial oven", "burn off oven",
    "truck booth", "sprinter van booth", "mobile paint booth", "marine paint booth", "body shop booth",
)
AEL_QUERY_MARKERS = (
    "advanced extraction", "fume hood", "clean room", "cleanroom", "data center", "battery", "bess",
    "e house", "e-house", "chemical storage", "container farm", "lithium", "c1d1", "explosion proof",
    "hazardous storage", "modular storage", "switchgear", "prefabricated electrical", "solvent storage",
)


def with_metrics(frame: pd.DataFrame, columns: list[str]) -> pd.DataFrame:
    return frame[[c for c in columns if c in frame.columns]].copy()


def classify_query(query: str) -> str:
    text = str(query).lower()
    if any(marker in text for marker in AEL_QUERY_MARKERS):
        return "AEL / critical-environment query — exclude from PFS campaigns"
    if any(marker in text for marker in PFS_QUERY_MARKERS):
        return "PFS commercial intent"
    return "Manual review"


def grouped_metrics(frame: pd.DataFrame, by: list[str]) -> pd.DataFrame:
    metrics = [c for c in ["Clicks", "Impr.", "Cost", "Conversions"] if c in frame.columns]
    if frame.empty or not metrics:
        return pd.DataFrame()
    output = frame.groupby(by, dropna=False)[metrics].sum().reset_index()
    output["CTR"] = output["Clicks"] / output["Impr."].replace(0, pd.NA)
    output["Avg. CPC"] = output["Cost"] / output["Clicks"].replace(0, pd.NA)
    output["Conv. rate"] = output["Conversions"] / output["Clicks"].replace(0, pd.NA)
    output["Cost / conv."] = output["Cost"] / output["Conversions"].replace(0, pd.NA)
    return output


def table(frame: pd.DataFrame, max_rows: int = 30) -> str:
    if frame.empty:
        return "_No rows._"
    display = frame.head(max_rows).copy()
    for col in ["CTR", "Conv. rate"]:
        if col in display.columns:
            display[col] = display[col].map(lambda x: percent(float(x)) if pd.notna(x) else "—")
    for col in ["Avg. CPC", "Cost", "Cost / conv."]:
        if col in display.columns:
            display[col] = display[col].map(lambda x: money(float(x)) if pd.notna(x) else "—")
    for col in ["Clicks", "Impr.", "Conversions"]:
        if col in display.columns:
            display[col] = display[col].map(lambda x: f"{float(x):,.2f}" if float(x) % 1 else f"{float(x):,.0f}")
    return display.to_markdown(index=False)


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    campaigns, _ = read_google_csv(INPUT_DIR / "Campaignperformance(1).csv")
    ad_groups, _ = read_google_csv(INPUT_DIR / "Adgroupperformance(1).csv")
    keywords, _ = read_google_csv(INPUT_DIR / "Searchkeyword(1).csv")
    terms, _ = read_google_csv(INPUT_DIR / "Searchterms(1).csv")
    ads, _ = read_google_csv(INPUT_DIR / "Adsperformance.csv")
    placements, _ = read_google_csv(INPUT_DIR / "Placements.csv")

    pfs_campaigns = campaigns[campaigns["Campaign"].str.contains("|".join(PFS_CAMPAIGN_MARKERS), case=False, na=False)].copy()
    pfs_ad_groups = ad_groups[ad_groups["Campaign"].str.contains("|".join(PFS_CAMPAIGN_MARKERS), case=False, na=False)].copy()
    pfs_keywords = keywords[keywords["Campaign"].str.contains("|".join(PFS_CAMPAIGN_MARKERS), case=False, na=False)].copy()
    pfs_ads = ads[ads["Campaign"].str.contains("|".join(PFS_CAMPAIGN_MARKERS), case=False, na=False)].copy()
    pfs_placements = placements[placements["Campaign"].str.contains("|".join(PFS_CAMPAIGN_MARKERS), case=False, na=False)].copy()

    pfs_campaigns = pfs_campaigns.sort_values("Cost", ascending=False)
    pfs_ad_groups = pfs_ad_groups.sort_values("Cost", ascending=False)
    pfs_keywords = pfs_keywords.sort_values("Cost", ascending=False)
    pfs_ads = pfs_ads.sort_values("Cost", ascending=False)
    pfs_placements = pfs_placements.sort_values("Cost", ascending=False)

    pfs_keywords_winners = pfs_keywords[pfs_keywords["Conversions"] > 0].sort_values(["Conversions", "Cost"], ascending=[False, True])
    pfs_keywords_no_conversion = pfs_keywords[(pfs_keywords["Cost"] >= 50) & (pfs_keywords["Conversions"] == 0)].sort_values("Cost", ascending=False)

    terms = terms.copy()
    terms["Intent classification"] = terms["Search term"].map(classify_query)
    terms_pfs = terms[terms["Intent classification"] == "PFS commercial intent"].copy()
    terms_ael = terms[terms["Intent classification"].str.startswith("AEL")].copy()
    terms_review = terms[terms["Intent classification"] == "Manual review"].copy()
    terms_pfs_winners = terms_pfs[terms_pfs["Conversions"] > 0].sort_values(["Conversions", "Cost"], ascending=[False, True])
    terms_pfs_no_conversion = terms_pfs[(terms_pfs["Cost"] >= 25) & (terms_pfs["Conversions"] == 0)].sort_values("Cost", ascending=False)
    terms_ael_leakage = terms_ael[terms_ael["Cost"] >= 20].sort_values("Cost", ascending=False)

    url_col = next((c for c in ["Ad final URL", "Final URL", "Mobile final URL"] if c in pfs_ads.columns), None)
    if url_col:
        ads_by_url = grouped_metrics(pfs_ads[pfs_ads[url_col].notna() & (pfs_ads[url_col] != "")], [url_col]).sort_values("Cost", ascending=False)
    else:
        ads_by_url = pd.DataFrame()

    campaign_view = with_metrics(pfs_campaigns, ["Campaign", "Campaign state", "Campaign type", "Clicks", "Impr.", "CTR", "Avg. CPC", "Cost", "Conversions", "Cost / conv.", "Conv. rate"])
    group_view = with_metrics(pfs_ad_groups, ["Campaign", "Ad group", "Campaign state", "Ad group state", "Clicks", "Impr.", "CTR", "Avg. CPC", "Cost", "Conversions", "Cost / conv.", "Conv. rate"])
    keyword_columns = ["Campaign", "Ad group", "Search keyword", "Search keyword status", "Search keyword match type", "Clicks", "Impr.", "CTR", "Avg. CPC", "Cost", "Conversions", "Cost / conv.", "Conv. rate"]
    term_columns = ["Search term", "Search terms match type", "Added/Excluded", "Intent classification", "Clicks", "Impr.", "CTR", "Avg. CPC", "Cost", "Conversions", "Cost / conv.", "Conv. rate"]
    ads_url_columns = [url_col, "Clicks", "Impr.", "CTR", "Avg. CPC", "Cost", "Conversions", "Cost / conv.", "Conv. rate"] if url_col else []
    placement_view = with_metrics(pfs_placements, ["Placement (group)", "Placement type (group)", "Campaign", "Ad group", "TrueView views", "TrueView view rate", "Clicks", "Impr.", "CTR", "Cost", "Avg. CPM"])

    exports = {
        "pfs_campaign_performance.csv": campaign_view,
        "pfs_ad_group_performance.csv": group_view,
        "pfs_keywords_with_conversions.csv": with_metrics(pfs_keywords_winners, keyword_columns),
        "pfs_keywords_spend_no_conversion.csv": with_metrics(pfs_keywords_no_conversion, keyword_columns),
        "pfs_search_terms_with_conversions.csv": with_metrics(terms_pfs_winners, term_columns),
        "pfs_search_terms_spend_no_conversion.csv": with_metrics(terms_pfs_no_conversion, term_columns),
        "ael_query_leakage_to_exclude_from_pfs.csv": with_metrics(terms_ael_leakage, term_columns),
        "pfs_ads_by_current_destination.csv": ads_by_url,
        "pfs_top_display_placements.csv": placement_view.head(150),
        "manual_review_search_terms.csv": with_metrics(terms_review[terms_review["Cost"] >= 25].sort_values("Cost", ascending=False), term_columns),
    }
    for filename, frame in exports.items():
        frame.to_csv(OUTPUT_DIR / filename, index=False)

    campaign_summary = metric_summary(pfs_campaigns)
    search_summary = metric_summary(terms_pfs)
    ael_leakage_summary = metric_summary(terms_ael)
    pfs_spend_share = campaign_summary.get("Cost", 0) / metric_summary(campaigns).get("Cost", 1)

    report = [
        "# PFS Google Ads Performance Analysis\n",
        "This analysis isolates PFS campaigns from the supplied mixed PFS/AEL account exports. Search-term reports do not include campaign names, so query-level exclusions are framed as launch-review recommendations, not proof that a specific campaign served each term.\n",
        "## PFS Campaign Baseline — July 1–31, 2026\n",
        f"- PFS campaign spend: **{money(campaign_summary.get('Cost', 0))}** ({percent(pfs_spend_share)} of total account spend)\n",
        f"- Clicks: **{campaign_summary.get('Clicks', 0):,.0f}** | Impressions: **{campaign_summary.get('Impr.', 0):,.0f}** | CTR: **{percent(campaign_summary.get('CTR', 0))}**\n",
        f"- Recorded conversions: **{campaign_summary.get('Conversions', 0):,.2f}** | Conversion rate: **{percent(campaign_summary.get('Conv. rate', 0))}** | Cost / conversion: **{money(campaign_summary.get('Cost / conv.', 0))}**\n",
        "## PFS Campaigns\n",
        table(campaign_view),
        "\n## PFS Ad Groups by Spend\n",
        table(group_view, 50),
        "\n## PFS Keywords With Recorded Conversions\n",
        table(with_metrics(pfs_keywords_winners, keyword_columns), 50),
        "\n## PFS Keywords With Significant Spend but No Recorded Conversion\n",
        table(with_metrics(pfs_keywords_no_conversion, keyword_columns), 50),
        "\n## PFS-Intent Search Terms With Recorded Conversions\n",
        table(with_metrics(terms_pfs_winners, term_columns), 50),
        "\n## PFS-Intent Search Terms With Spend but No Recorded Conversion\n",
        table(with_metrics(terms_pfs_no_conversion, term_columns), 50),
        "\n## Cross-Brand Query Leakage to Review\n",
        f"These are AEL/critical-environment queries in the account-level search-term report, totaling {money(ael_leakage_summary.get('Cost', 0))} across the full reporting period. They should be excluded from PFS campaigns and handled only in a separate AEL account/campaign structure.\n",
        table(with_metrics(terms_ael_leakage, term_columns), 50),
        "\n## Current PFS Ad Destinations\n",
        table(ads_by_url, 75),
        "\n## PFS Display and Video Placement Spend\n",
        table(placement_view, 50),
    ]
    (OUTPUT_DIR / "pfs_performance_analysis.md").write_text("\n".join(report), encoding="utf-8")
    print(f"Wrote PFS analysis outputs to {OUTPUT_DIR}")


if __name__ == "__main__":
    main()
