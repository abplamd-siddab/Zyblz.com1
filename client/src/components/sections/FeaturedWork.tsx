import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { featuredProjects } from "@/data/projects";

export function FeaturedWork() {
  return (
    <section className="py-24 bg-card/30 border-y border-white/5" id="work">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Built for Real Businesses
            </h2>
            <p className="text-muted-foreground text-lg">
              Custom apps and platforms shipped for clients across the Philippines, Africa, Canada, the UK, and India.
            </p>
          </div>
          <Link href="/work">
            <Button variant="outline" className="border-white/10 hover:bg-white/5 shrink-0">
              View full portfolio
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              className="glass-card border-white/10 overflow-hidden group hover:border-primary/50 transition-all duration-300"
              data-testid={`card-featured-project-${project.id}`}
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <p className="text-xs font-medium text-primary mb-2">{project.highlight}</p>
                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-primary/80 mb-2">{project.subtitle}</p>
                <p className="text-sm text-muted-foreground">
                  {project.client} · {project.location}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
