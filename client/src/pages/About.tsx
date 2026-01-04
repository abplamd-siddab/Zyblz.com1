import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-8">About Zyblz</h1>
            
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="lead text-xl text-muted-foreground mb-12">
                We are a team of engineers and automation experts dedicated to helping businesses scale through intelligent technology.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h3 className="text-2xl font-bold font-heading mb-4 text-primary">Our Mission</h3>
                  <p>
                    To democratize access to enterprise-grade AI automation. We believe that every business, regardless of size, should be able to leverage the power of artificial intelligence to eliminate repetitive tasks and focus on growth.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-heading mb-4 text-primary">Our Philosophy</h3>
                  <p>
                    Automation shouldn't be complicated. We focus on clarity, reliability, and measurable ROI. If it doesn't save you time or make you money, we don't build it.
                  </p>
                </div>
              </div>

              <div className="bg-card border border-white/10 rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold font-heading mb-6">Ready to work with us?</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  We take a limited number of clients per month to ensure high-quality delivery. Book a call to see if we're a good fit.
                </p>
                <Link href="/contact">
                  <Button size="lg" className="h-14 px-8 text-lg">Book a Free Consultation</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
