import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Smartphone, Globe, Palette } from "lucide-react";

import simranImg from "@assets/Simran_Dev_SIngh's__1768377818268.png";
import kaiserImg from "@assets/Kaiser_Tarun's_Project__1768377818269.png";
import gmLendingImg from "@assets/Mandep's_project__1768377818256.png";
import saharaImg from "@assets/Sahara_Wholesale,_Mr_Anil_Ji_UK__1768377818268.png";
import meshaPortalImg from "@assets/Mesha_Exports_Buyer_Portal__1768377926728.png";
import meshaWebsiteImg from "@assets/Mesha_Exports_Website__1768377926727.png";
import siddabImg from "@assets/Screenshot_2026-01-14_at_1.37.37_PM_1768378060915.png";

const apps = [
  {
    id: 1,
    title: "Simran Enterprise",
    subtitle: "Import Management System",
    client: "Dev Singh",
    location: "Philippines",
    description: "A comprehensive import management platform with inventory tracking, container monitoring, sales transactions, and expiry alerts for efficient supply chain operations.",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: simranImg,
  },
  {
    id: 2,
    title: "Kaiser Service Manager",
    subtitle: "Field Service Platform",
    client: "Tarun Goswami",
    location: "Ivory Coast",
    description: "A service booking and job management system with engineer scheduling, real-time availability tracking, and team map visualization for field operations.",
    tags: ["React", "Express", "Google Maps"],
    image: kaiserImg,
  },
  {
    id: 3,
    title: "GM Lending",
    subtitle: "Microfinance Manager",
    client: "Mandeep Jhanda",
    location: "Canada",
    description: "A complete microfinance management system with loan disbursement, collection tracking, agent management, and real-time payment status monitoring.",
    tags: ["React", "Node.js", "Financial APIs"],
    image: gmLendingImg,
  },
  {
    id: 4,
    title: "Sahara Wholesale",
    subtitle: "B2B Order Portal",
    client: "Mr Anil Ji",
    location: "United Kingdom",
    description: "A B2B wholesale platform with credit management, product catalog, order tracking, and invoicing for retail distributors across the UK.",
    tags: ["React", "Express", "Stripe"],
    image: saharaImg,
  },
  {
    id: 5,
    title: "Mesha Exports Buyer Portal",
    subtitle: "ERP System",
    client: "Mesha Exports",
    location: "India",
    description: "A comprehensive ERP system with smart shopping cart, CBM calculations, global shipping support, and complete product catalog for international buyers.",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: meshaPortalImg,
  },
];

const websites = [
  {
    id: 6,
    title: "Mesha Exports",
    subtitle: "Corporate Website",
    url: "meshaexports.com",
    description: "A professional export company website showcasing Indian groceries, spices, and FMCG products with ISO/FSSAI certifications and worldwide shipping capabilities.",
    tags: ["Next.js", "Tailwind", "SEO"],
    image: meshaWebsiteImg,
  },
  {
    id: 7,
    title: "Siddab",
    subtitle: "Brand Website",
    url: "siddab.com",
    description: "A premium brand website for merchant exporters of pulses, spices, and staples, connecting Indian farms to international markets with certified quality assurance.",
    tags: ["React", "Framer Motion", "SEO"],
    image: siddabImg,
  },
];

const moreProjectsStats = [
  { icon: Smartphone, label: "Apps Built", count: "20+" },
  { icon: Globe, label: "Websites Delivered", count: "15+" },
  { icon: Palette, label: "Branding Projects", count: "10+" },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container px-6 mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Our Work</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We've helped businesses across the globe automate their operations and accelerate growth with custom AI-powered solutions.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold font-heading mb-8 flex items-center gap-3">
              <Smartphone className="w-6 h-6 text-primary" />
              Apps & Platforms
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {apps.map((project) => (
                <Card 
                  key={project.id} 
                  className="glass-card border-white/10 overflow-hidden group hover:border-primary/50 transition-all duration-300"
                  data-testid={`card-project-${project.id}`}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary/80 mb-2">{project.subtitle}</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      {project.client} • {project.location}
                    </p>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold font-heading mb-8 flex items-center gap-3">
              <Globe className="w-6 h-6 text-primary" />
              Websites
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {websites.map((project) => (
                <Card 
                  key={project.id} 
                  className="glass-card border-white/10 overflow-hidden group hover:border-primary/50 transition-all duration-300"
                  data-testid={`card-project-${project.id}`}
                >
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary/80 mb-2">{project.subtitle}</p>
                    <a 
                      href={`https://${project.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary mb-3 inline-flex items-center gap-1"
                    >
                      {project.url}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <div className="glass-card border-white/10 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-center mb-4">
                And Many More...
              </h2>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
                We've delivered successful projects for clients worldwide across various industries. Here's a snapshot of our portfolio.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {moreProjectsStats.map((stat) => (
                  <div 
                    key={stat.label}
                    className="text-center p-6 rounded-xl bg-primary/5 border border-primary/10"
                  >
                    <stat.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                    <div className="text-4xl font-bold text-primary mb-2">{stat.count}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Ready to build something great together?
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              data-testid="link-contact-cta"
            >
              Start Your Project
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
