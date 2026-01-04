import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Services as ServicesSection } from "@/components/sections/Services";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24">
        <div className="container px-6 mx-auto mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Our Expertise</h1>
            <p className="text-xl text-muted-foreground">
              We provide end-to-end AI automation solutions tailored to your specific business needs.
            </p>
          </div>
        </div>

        <ServicesSection />

        <section className="py-24 bg-card/30">
          <div className="container px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold font-heading mb-6">Industries We Serve</h2>
                <div className="space-y-4">
                  {[
                    "Exporters & Trading Companies",
                    "Agencies & Service Businesses",
                    "Sales-Driven Teams",
                    "Operations & Back-Office Automation",
                    "SaaS & Startups"
                  ].map((industry, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-card border border-white/5 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <Check className="w-5 h-5" />
                      </div>
                      <span className="font-medium text-lg">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-card to-background">
                <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Need a custom solution?</h3>
                    <p className="text-muted-foreground mb-8">
                      We understand that every business is unique. Let's discuss your specific challenges.
                    </p>
                    <Link href="/contact">
                      <Button size="lg">Talk to an Expert</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
