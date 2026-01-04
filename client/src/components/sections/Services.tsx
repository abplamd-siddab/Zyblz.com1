import { Bot, Workflow, Code, Database, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const services = [
  {
    icon: Bot,
    title: "AI Chatbots",
    description: "Sales bots, support bots, WhatsApp bots, and website assistants that work 24/7.",
  },
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    description: "CRM automation, lead handling, follow-ups, and automated reporting systems.",
  },
  {
    icon: Code,
    title: "Custom Software & Apps",
    description: "Tailored web apps, internal tools, and SaaS products built for your specific needs.",
  },
  {
    icon: Database,
    title: "AI Tool Integration",
    description: "Seamless integration with OpenAI, CRMs, WhatsApp APIs, Zapier, Make, and internal systems.",
  },
];

export function Services() {
  return (
    <section className="py-24 bg-background relative" id="services">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Intelligent Solutions for Modern Business
          </h2>
          <p className="text-muted-foreground text-lg">
            We don't just use tools; we build systems that solve real operational problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="glass-card border-white/5 hover:border-primary/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
