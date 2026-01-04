import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";

export function WhyZyblz() {
  const reasons = [
    "Business-first automation strategy",
    "Custom-built secure systems",
    "Real operational understanding",
    "Ongoing support & optimization",
  ];

  return (
    <section className="py-24 bg-card/30 border-y border-white/5">
      <div className="container px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Why Choose Zyblz?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl">
            Unlike generic agencies or freelancers, we don't just patch tools together. We build robust, scalable infrastructure that grows with your business.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="font-medium">{r}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="w-full md:w-auto bg-card p-8 rounded-2xl border border-white/10 max-w-md text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to automate?</h3>
          <p className="text-muted-foreground mb-8">
            Book a free consultation to discuss your bottlenecks and how AI can solve them.
          </p>
          <Link href="/contact">
            <Button size="lg" className="w-full h-12 text-base shadow-lg shadow-primary/20">
              Book a Free Call
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
