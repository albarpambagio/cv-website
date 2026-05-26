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
      start: "Feb 2024",
      end: "Jun 2024",
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
    {
      label: "Languages",
      items: ["Python", "SQL", "TypeScript"],
    },
    {
      label: "Data Stack",
      items: [
        "PostgreSQL",
        "DuckDB",
        "dbt",
        "pandas",
        "ETL Pipeline Design",
        "Star Schema Modeling",
      ],
    },
    {
      label: "Analysis & Forecasting",
      items: [
        "Exploratory Data Analysis",
        "Time-Series Analysis",
        "Forecasting (AutoARIMA, AutoETS)",
        "Funnel Analysis",
        "LTV Analysis",
      ],
    },
    {
      label: "Visualization",
      items: ["Power BI", "Recharts", "Marimo"],
    },
    {
      label: "Infrastructure & Tools",
      items: [
        "Next.js",
        "TypeScript",
        "Cloudflare Pages",
        "GitHub Actions",
        "AI-Assisted Development",
      ],
    },
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
        "Built a procurement intelligence tool for FMCG Category Managers sourcing rice, cooking oil, sugar, and flour across Indonesia. Analyzed 17 years of WFP price data across 224 markets to map seasonal spikes (Ramadan premium on sugar, Q2 harvest discount on rice), a 30% persistent price gap between Eastern Indonesia and Java for cooking oil, and a 3-month leading relationship between oil and flour prices. Includes a 6-month price forecast with explicit confidence intervals to guide procurement timing decisions.",
      start: "May 25, 2026",
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
        "Analyzed a hospital pharmacy's full-year sales data to surface margin risk and inform 2016 procurement decisions. Identified 2 branded SKUs selling below cost and mapped revenue concentration patterns across inpatient and outpatient channels. Delivered a 3-page interactive dashboard — with a margin threshold slider and CSV export — for the Pharmacy Director and Finance team to act on product pricing and procurement priorities.",
      start: "May 18, 2026",
      end: "May 26, 2026",
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
        "Investigated why Social — Olist's second-highest-volume acquisition channel — converted at only half the rate of Paid and Organic Search. Found the root cause in channel deal composition: Social's closed deals skewed nearly twice as heavy in high-maintenance seller profiles compared to other channels, a structural drag on conversion rather than a lead quality issue. Delivered a 4-page Power BI dashboard with channel LTV and funnel analysis to support VP Marketing budget allocation for Q3 2018.",
      start: "May 8, 2026",
      end: "May 18, 2026",
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
