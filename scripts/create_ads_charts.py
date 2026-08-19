from pathlib import Path

import matplotlib.pyplot as plt
import pandas as pd


OUTPUT = Path("/home/ubuntu/pfs-ads-analysis")


def save_campaign_efficiency() -> None:
    df = pd.read_csv(OUTPUT / "pfs_campaign_performance.csv")
    df = df[(df["Cost"] > 0) & (df["Campaign state"] == "Enabled")].copy()
    df["Label"] = (
        df["Campaign"]
        .str.replace("{AD} ", "", regex=False)
        .str.replace(" [Search]", "", regex=False)
        .str.replace(" [Test]", "", regex=False)
        .str.replace(" [PFS]", "", regex=False)
    )
    df = df.sort_values("Cost", ascending=True)

    plt.style.use("seaborn-v0_8-whitegrid")
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(15, 6), gridspec_kw={"width_ratios": [1.2, 1]})
    fig.patch.set_facecolor("#ffffff")

    ax1.barh(df["Label"], df["Cost"], color="#1B3A6B")
    for idx, value in enumerate(df["Cost"]):
        ax1.text(value + 75, idx, f"${value:,.0f}", va="center", fontsize=10, color="#111827")
    ax1.set_title("PFS Spend by Enabled Campaign", fontsize=15, weight="bold", color="#0f172a")
    ax1.set_xlabel("July 2026 Spend (USD)")
    ax1.spines[["top", "right"]].set_visible(False)

    efficiency = df[df["Conversions"] > 0].copy().sort_values("Cost / conv.", ascending=False)
    colors = ["#C8A84B" if "Aerospace" in x or "Industrial" in x else "#1B3A6B" for x in efficiency["Label"]]
    ax2.barh(efficiency["Label"], efficiency["Cost / conv."], color=colors)
    for idx, value in enumerate(efficiency["Cost / conv."]):
        ax2.text(value + 8, idx, f"${value:,.0f}", va="center", fontsize=10, color="#111827")
    ax2.set_title("Recorded Cost per Conversion", fontsize=15, weight="bold", color="#0f172a")
    ax2.set_xlabel("USD per recorded conversion")
    ax2.spines[["top", "right"]].set_visible(False)

    fig.suptitle("PFS Google Ads — July 1–31, 2026", fontsize=19, weight="bold", color="#111827", y=1.03)
    fig.text(0.01, -0.03, "Source: supplied Google Ads campaign-performance export. Conversion quality must be validated in CRM before scaling budgets.", fontsize=9, color="#475569")
    fig.tight_layout()
    fig.savefig(OUTPUT / "pfs_campaign_efficiency.png", dpi=200, bbox_inches="tight")
    plt.close(fig)


def save_destination_efficiency() -> None:
    df = pd.read_csv(OUTPUT / "pfs_ads_by_current_destination.csv")
    df = df[df["Cost"] > 0].copy().head(15)
    df["Label"] = (
        df["Ad final URL"]
        .str.replace("https://pfsspraybooths.com", "", regex=False)
        .str.replace("/", " / ", regex=False)
        .str.strip()
        .replace("", "Homepage")
    )
    df = df.sort_values("Cost", ascending=True)

    plt.style.use("seaborn-v0_8-whitegrid")
    fig, ax = plt.subplots(figsize=(13, 8))
    colors = ["#C8A84B" if conversions == 0 else "#1B3A6B" for conversions in df["Conversions"]]
    ax.barh(df["Label"], df["Cost"], color=colors)
    for idx, row in df.reset_index(drop=True).iterrows():
        conv = row["Conversions"]
        cpa = "—" if conv == 0 else f"${row['Cost / conv.']:,.0f} CPA"
        ax.text(row["Cost"] + 35, idx, f"${row['Cost']:,.0f} | {conv:.2f} conv. | {cpa}", va="center", fontsize=9, color="#111827")
    ax.set_title("Current Paid Destinations — Spend and Recorded Conversion Outcome", fontsize=16, weight="bold", color="#0f172a")
    ax.set_xlabel("July 2026 Spend (USD)")
    ax.spines[["top", "right"]].set_visible(False)
    ax.legend(
        handles=[
            plt.Rectangle((0, 0), 1, 1, color="#1B3A6B", label="At least one recorded conversion"),
            plt.Rectangle((0, 0), 1, 1, color="#C8A84B", label="No recorded conversion"),
        ],
        loc="lower right",
    )
    fig.text(0.01, 0.01, "Source: supplied Ads performance export. This informs URL migration priority; it does not establish lead quality or revenue.", fontsize=9, color="#475569")
    fig.tight_layout()
    fig.savefig(OUTPUT / "pfs_paid_destination_efficiency.png", dpi=200, bbox_inches="tight")
    plt.close(fig)


if __name__ == "__main__":
    save_campaign_efficiency()
    save_destination_efficiency()
    print(f"Wrote charts to {OUTPUT}")
