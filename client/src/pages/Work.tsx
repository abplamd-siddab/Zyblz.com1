import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Globe, Smartphone } from "lucide-react";
import { appProjects, portfolioStats, websiteProjects } from "@/data/projects";

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
              {appProjects.map((project) => (
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
              {websiteProjects.map((project) => (
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
                {portfolioStats.map((stat) => (
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
