import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { WhyZyblz } from "@/components/sections/WhyZyblz";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <FeaturedWork />
        <Process />
        <Testimonials />
        <WhyZyblz />
      </main>
      <Footer />
    </div>
  );
}
