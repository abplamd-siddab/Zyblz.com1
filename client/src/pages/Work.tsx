import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Inventory Management System",
    client: "Dev Singh",
    location: "Philippines",
    description: "A comprehensive inventory tracking application that helps manage stock levels, orders, and suppliers efficiently.",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Service Booking Platform",
    client: "Tarun Goswami",
    location: "Ivory Coast",
    description: "An online platform for booking and managing professional services with real-time availability and payment integration.",
    tags: ["React", "Express", "Stripe"],
  },
  {
    id: 3,
    title: "Lending Management App",
    client: "Mandeep Jhanda",
    location: "Canada",
    description: "A loan management system that streamlines the lending process with automated calculations and payment tracking.",
    tags: ["React", "Node.js", "Financial APIs"],
  },
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card 
                key={project.id} 
                className="glass-card border-white/10 overflow-hidden group hover:border-primary/50 transition-all duration-300"
                data-testid={`card-project-${project.id}`}
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary/30 font-heading">
                    {project.title.charAt(0)}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
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
