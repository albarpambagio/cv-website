import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Albar Pambagio Arioseto",
  initials: "AP",
  location: "Bandung, Indonesia",
  locationLink: "https://www.google.com/maps/place/Bandung",
  about:
    "Data analyst building end-to-end analytics pipelines across FMCG, retail, and healthcare. Open to relocate.",
  summary:
    "Data analyst with hands-on experience building end-to-end analytics pipelines — from ETL and star schema design to interactive dashboards and time-series forecasting. Projects span FMCG procurement intelligence, pharmacy retail operations, and e-commerce marketing analytics. Strong foundation in Python, SQL, and business-oriented storytelling; background in UX design sharpens how I communicate findings to non-technical stakeholders.",
  avatarUrl: "",
  personalWebsiteUrl: "",
  contact: {
    email: "albarpambagio@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/albarpambagio",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/albarpambagio/",
        icon: "linkedin",
      },
      {
        name: "Medium",
        url: "https://medium.com/@albarpambagio",
        icon: "medium",
      },
    ],
  },
  education: [
    {
      school: "Universitas Terbuka",
      degree: "Bachelor of Management",
      start: "2022",
      end: "2026",
    },
    {
      school: "Pacmann",
      degree: "Analytics & Data Science Program",
      start: "2023",
      end: "2025",
    },
    {
      school: "Bangkit Academy (Google, Tokopedia, Gojek, Traveloka)",
      degree: "Independent Study — Cloud Computing Cohort",
      start: "2024",
      end: "2024",
    },
  ],
  work: [
    {
      company: "PT Kautsar Inovasi Teknologi Digital",
      link: "",
      badges: [],
      title: "UX Designer",
      start: "2020",
      end: "2021",
      description:
        "Designed user interfaces for school and learning management system products, translating user requirements into component specifications. Collaborated with developers to establish a shared design system, reducing implementation inconsistency across product lines.",
    },
  ],
  skills: [
    "Python",
    "SQL",
    "PostgreSQL",
    "DuckDB",
    "dbt",
    "ETL Pipeline Design",
    "Star Schema Modeling",
    "Exploratory Data Analysis",
    "Time-Series Analysis",
    "Forecasting (AutoARIMA, AutoETS)",
    "Funnel Analysis",
    "LTV Analysis",
    "Power BI",
    "Next.js",
    "Recharts",
    "Cloudflare Pages",
    "GitHub Actions",
    "TypeScript",
    "pandas",
    "Marimo",
  ],
  projects: [
    {
      title: "Indonesia Food Price Intelligence",
      techStack: [
        "In Progress",
        "Python",
        "DuckDB",
        "dbt",
        "AutoARIMA",
        "AutoETS",
        "Next.js",
        "Cloudflare Pages",
      ],
      description:
        "17-year WFP food price pipeline (325,240 raw rows → 2,116 analytical rows) across 224 markets in 34 Indonesian provinces. dbt transformation layer with 33 automated tests. AutoARIMA/AutoETS forecasting with 12-month holdout validation. 4-page procurement dashboard for FMCG Category Managers.",
      link: {
        label: "GitHub",
        href: "https://github.com/albarpambagio/indonesia-food-price-intelligence",
      },
    },
    {
      title: "Pharmacy Retail Sales Analytics",
      techStack: [
        "Python",
        "PostgreSQL",
        "Next.js",
        "Recharts",
        "shadcn/ui",
        "GitHub Actions",
        "Cloudflare Pages",
      ],
      description:
        "End-to-end ETL pipeline for 511,559 pharmacy transaction lines. Parsed irregular prescription number formats, designed star schema, classified 2,233 SKUs, and identified 2 negative-margin products. Deployed interactive 3-page dashboard with margin threshold slider and CSV export.",
      link: {
        label: "GitHub",
        href: "https://github.com/albarpambagio/pharmacy-retail-sales-analytics",
      },
      links: [
        {
          label: "Dashboard",
          href: "https://pharmacy-retail-sales-analytics.pages.dev",
        },
      ],
    },
    {
      title: "Olist Marketing Funnel: Channel Performance & LTV Analysis",
      techStack: ["Python", "PostgreSQL", "Power BI"],
      description:
        "Analyzed 8,000 MQLs and 100,000 orders. Built combined star schema joining marketing funnel and e-commerce datasets. Identified root cause of Social channel's low conversion (5.56%): 17.3% Wolf-profile deal mix — nearly double other channels. Delivered 4-page Power BI dashboard for VP Marketing budget allocation.",
      link: {
        label: "GitHub",
        href: "https://github.com/albarpambagio/olist-marketing-report",
      },
      links: [
        {
          label: "Deck",
          href: "https://pitch.com/v/olist-channel-performance-report-ew5t9z",
        },
      ],
    },
  ],
} as const;
