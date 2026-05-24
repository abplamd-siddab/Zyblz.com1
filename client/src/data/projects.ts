import { Globe, Palette, Smartphone, type LucideIcon } from "lucide-react";

import simranImg from "@assets/Simran_Dev_SIngh's__1768377818268.png";
import kaiserImg from "@assets/Kaiser_Tarun's_Project__1768377818269.png";
import gmLendingImg from "@assets/Mandep's_project__1768377818256.png";
import saharaImg from "@assets/Sahara_Wholesale,_Mr_Anil_Ji_UK__1768377818268.png";
import meshaPortalImg from "@assets/Mesha_Exports_Buyer_Portal__1768377926728.png";
import meshaWebsiteImg from "@assets/Mesha_Exports_Website__1768377926727.png";
import siddabImg from "@assets/Screenshot_2026-01-14_at_1.37.37_PM_1768378060915.png";

export type AppProject = {
  id: number;
  title: string;
  subtitle: string;
  client: string;
  location: string;
  description: string;
  highlight: string;
  tags: string[];
  image: string;
};

export type WebsiteProject = {
  id: number;
  title: string;
  subtitle: string;
  url: string;
  description: string;
  tags: string[];
  image: string;
};

export const appProjects: AppProject[] = [
  {
    id: 1,
    title: "Simran Enterprise",
    subtitle: "Import Management System",
    client: "Dev Singh",
    location: "Philippines",
    description:
      "A comprehensive import management platform with inventory tracking, container monitoring, sales transactions, and expiry alerts for efficient supply chain operations.",
    highlight: "Real-time inventory across multiple warehouses",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: simranImg,
  },
  {
    id: 2,
    title: "Kaiser Service Manager",
    subtitle: "Field Service Platform",
    client: "Tarun Goswami",
    location: "Ivory Coast",
    description:
      "A service booking and job management system with engineer scheduling, real-time availability tracking, and team map visualization for field operations.",
    highlight: "Automated service requests and technician scheduling",
    tags: ["React", "Express", "Google Maps"],
    image: kaiserImg,
  },
  {
    id: 3,
    title: "GM Lending",
    subtitle: "Microfinance Manager",
    client: "Mandeep Jhanda",
    location: "Canada",
    description:
      "A complete microfinance management system with loan disbursement, collection tracking, agent management, and real-time payment status monitoring.",
    highlight: "Loans, payments, and client comms in one system",
    tags: ["React", "Node.js", "Financial APIs"],
    image: gmLendingImg,
  },
  {
    id: 4,
    title: "Sahara Wholesale",
    subtitle: "B2B Order Portal",
    client: "Mr Anil Ji",
    location: "United Kingdom",
    description:
      "A B2B wholesale platform with credit management, product catalog, order tracking, and invoicing for retail distributors across the UK.",
    highlight: "B2B ordering with credit and invoice management",
    tags: ["React", "Express", "Stripe"],
    image: saharaImg,
  },
  {
    id: 5,
    title: "Mesha Exports Buyer Portal",
    subtitle: "ERP System",
    client: "Mesha Exports",
    location: "India",
    description:
      "A comprehensive ERP system with smart shopping cart, CBM calculations, global shipping support, and complete product catalog for international buyers.",
    highlight: "Global buyer portal with CBM and shipping tools",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: meshaPortalImg,
  },
];

export const websiteProjects: WebsiteProject[] = [
  {
    id: 6,
    title: "Mesha Exports",
    subtitle: "Corporate Website",
    url: "meshaexports.com",
    description:
      "A professional export company website showcasing Indian groceries, spices, and FMCG products with ISO/FSSAI certifications and worldwide shipping capabilities.",
    tags: ["Next.js", "Tailwind", "SEO"],
    image: meshaWebsiteImg,
  },
  {
    id: 7,
    title: "Siddab",
    subtitle: "Brand Website",
    url: "siddab.com",
    description:
      "A premium brand website for merchant exporters of pulses, spices, and staples, connecting Indian farms to international markets with certified quality assurance.",
    tags: ["React", "Framer Motion", "SEO"],
    image: siddabImg,
  },
];

export const featuredProjectIds = [1, 2, 3] as const;

export const featuredProjects = featuredProjectIds
  .map((id) => appProjects.find((p) => p.id === id))
  .filter((p): p is AppProject => p !== undefined);

export const portfolioStats: { icon: LucideIcon; label: string; count: string }[] = [
  { icon: Smartphone, label: "Apps Built", count: "20+" },
  { icon: Globe, label: "Websites Delivered", count: "15+" },
  { icon: Palette, label: "Branding Projects", count: "10+" },
];
