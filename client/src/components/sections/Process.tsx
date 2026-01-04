import { Search, Lightbulb, Hammer, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Understand Business Process",
    description: "We analyze your current workflows to identify bottlenecks.",
  },
  {
    icon: Lightbulb,
    title: "Identify Opportunities",
    description: "We pinpoint exactly where AI can save time and money.",
  },
  {
    icon: Hammer,
    title: "Build & Integrate Solution",
    description: "We develop custom automations tailored to your stack.",
  },
  {
    icon: Rocket,
    title: "Deploy, Train & Optimize",
    description: "We launch the system and ensure it delivers results.",
  },
];

export function Process() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -skew-y-3 z-0 transform origin-left scale-110" />
      
      <div className="container relative z-10 px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">How Zyblz Works</h2>
          <p className="text-muted-foreground text-lg">
            A simple, transparent process to get you from idea to automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              {/* Connector Line */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-[2px] bg-gradient-to-r from-primary/50 to-transparent -z-10" />
              )}
              
              <div className="w-16 h-16 rounded-full bg-card border border-white/10 flex items-center justify-center mb-6 shadow-xl relative z-10">
                <step.icon className="w-8 h-8 text-primary" />
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-white">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-[250px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
