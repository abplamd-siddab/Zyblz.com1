import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/abstract_dark_ai_network_background.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="AI Network Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="container relative z-10 px-6 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium">
            AI Automation Agency
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-white mb-6 leading-tight">
            We Build AI-Powered Software & <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Automations</span> That Scale Your Business
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Zyblz builds AI-powered software and automation systems that simplify operations and accelerate growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="h-14 px-8 text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all w-full sm:w-auto">
                Book a Free AI Consultation
              </Button>
            </Link>
            <Link href="/work">
              <Button variant="outline" size="lg" className="h-14 px-8 text-base bg-transparent border-white/10 hover:bg-white/5 w-full sm:w-auto">
                View Our Work
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
