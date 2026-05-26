"""
Generate cv.yaml from resume data, render PDF via RenderCV,
and copy to public/cv.pdf.
"""
import subprocess, sys, shutil, os
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent

try:
    from ruamel.yaml import YAML
except ImportError:
    subprocess.check_call(
        [sys.executable, "-m", "pip", "install", "ruamel.yaml", "-q"]
    )
    from ruamel.yaml import YAML

yaml = YAML()
yaml.indent(mapping=2, sequence=4, offset=2)
yaml.width = 120

CV_DATA = {
    "cv": {
        "name": "Albar Pambagio Arioseto",
        "email": "albarpambagio@gmail.com",
        "location": "Bandung, Indonesia",
        "website": "https://albar-cv.pages.dev",
        "social_networks": [
            {"network": "GitHub", "username": "albarpambagio"},
            {"network": "LinkedIn", "username": "albarpambagio"},

        ],
        "sections": {
            "summary": [
                "Data analyst with hands-on experience building end-to-end analytics pipelines \u2014 from ETL and star schema design to interactive dashboards and time-series forecasting. Projects span FMCG procurement intelligence, pharmacy retail operations, and e-commerce marketing analytics. Strong foundation in Python, SQL, and business-oriented storytelling; background in UX design sharpens how I communicate findings to non-technical stakeholders."
            ],
            "education": [
                {
                    "institution": "Universitas Terbuka",
                    "area": "Management",
                    "degree": "Bachelor",
                    "start_date": "2022",
                    "end_date": "2026",
                },
                {
                    "institution": "Pacmann",
                    "area": "Analytics & Data Science",
                    "degree": "Program",
                    "start_date": "2023",
                    "end_date": "2025",
                },
                {
                    "institution": "Bangkit Academy (Google, Tokopedia, Gojek, Traveloka)",
                    "area": "Cloud Computing",
                    "degree": "Independent Study",
                    "start_date": "2024",
                    "end_date": "2024",
                },
            ],
            "experience": [
                {
                    "company": "PT Kautsar Inovasi Teknologi Digital",
                    "position": "UX Designer",
                    "start_date": "2020",
                    "end_date": "2021",
                    "highlights": [
                        "Designed user interfaces for school and learning management system products, translating user requirements into component specifications",
                        "Collaborated with developers to establish a shared design system, reducing implementation inconsistency across product lines",
                    ],
                }
            ],
            "projects": [
                {
                    "name": "[Indonesia Food Price Intelligence](https://github.com/albarpambagio/indonesia-food-price-intelligence)",
                    "date": "In Progress",
                    "summary": "Built a procurement intelligence tool for FMCG Category Managers sourcing rice, cooking oil, sugar, and flour across Indonesia. Analyzed 17 years of WFP price data across 224 markets to map seasonal spikes (Ramadan premium on sugar, Q2 harvest discount on rice), a 30% persistent price gap between Eastern Indonesia and Java for cooking oil, and a 3-month leading relationship between oil and flour prices. Includes a 6-month price forecast with explicit confidence intervals to guide procurement timing decisions.",
                },
                {
                    "name": "[Pharmacy Retail Sales Analytics](https://github.com/albarpambagio/pharmacy-retail-sales-analytics)",
                    "date": "May 18 – May 26, 2026",
                    "summary": "Analyzed a hospital pharmacy's full-year sales data to surface margin risk and inform 2016 procurement decisions. Identified 2 branded SKUs selling below cost and mapped revenue concentration patterns across inpatient and outpatient channels. Delivered a 3-page interactive dashboard \u2014 with a margin threshold slider and CSV export \u2014 for the Pharmacy Director and Finance team to act on product pricing and procurement priorities.",
                },
                {
                    "name": "[Olist Marketing Funnel: Channel Performance & LTV Analysis](https://github.com/albarpambagio/olist-marketing-report)",
                    "date": "May 8 – May 18, 2026",
                    "summary": "Investigated why Social \u2014 Olist's second-highest-volume acquisition channel \u2014 converted at only half the rate of Paid and Organic Search. Found the root cause in channel deal composition: Social's closed deals skewed nearly twice as heavy in high-maintenance seller profiles compared to other channels, a structural drag on conversion rather than a lead quality issue. Delivered a 4-page Power BI dashboard with channel LTV and funnel analysis to support VP Marketing budget allocation for Q3 2018.",
                },
            ],
            "skills": [
                {"label": "Languages", "details": "Python, SQL, TypeScript"},
                {
                    "label": "Data Stack",
                    "details": "PostgreSQL, DuckDB, dbt, pandas, ETL Pipeline Design, Star Schema Modeling",
                },
                {
                    "label": "Analysis & Forecasting",
                    "details": "Exploratory Data Analysis, Time-Series Analysis, Forecasting (AutoARIMA, AutoETS), Funnel Analysis, LTV Analysis",
                },
                {
                    "label": "Visualization",
                    "details": "Power BI, Recharts, Marimo",
                },
                {
                    "label": "Infrastructure & Tools",
                    "details": "Next.js, TypeScript, Cloudflare Pages, GitHub Actions, AI-Assisted Development",
                },
            ],
        },
    },
    "design": {
        "theme": "engineeringresumes",
        "colors": {
            "links": "rgb(37,99,235)",
        },
        "links": {
            "show_external_link_icon": True,
        },
        "header": {
            "connections": {
                "show_icons": True,
            },
        },
    },
}

def main():
    yaml_path = PROJECT_ROOT / "cv.yaml"
    with open(yaml_path, "w", encoding="utf-8") as f:
        yaml.dump(CV_DATA, f)

    print(f"Generated {yaml_path}")

    result = subprocess.run(
        [sys.executable, "-m", "rendercv", "render", str(yaml_path)],
        capture_output=False,
        cwd=str(PROJECT_ROOT),
        env={**os.environ, "PYTHONIOENCODING": "utf-8"},
    )
    if result.returncode != 0:
        sys.exit(result.returncode)

    output_dir = PROJECT_ROOT / "rendercv_output"
    pdf_files = list(output_dir.glob("*.pdf"))
    if not pdf_files:
        print("No PDF found in rendercv_output")
        sys.exit(1)

    public_dir = PROJECT_ROOT / "public"
    public_dir.mkdir(exist_ok=True)
    dest = public_dir / "cv.pdf"
    shutil.copy2(str(pdf_files[0]), str(dest))
    print(f"Copied {pdf_files[0].name} -> public/cv.pdf")

if __name__ == "__main__":
    main()
