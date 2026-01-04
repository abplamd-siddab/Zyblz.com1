import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import avatar1 from "@assets/generated_images/professional_male_headshot.png";
import avatar2 from "@assets/generated_images/professional_female_headshot.png";

const testimonials = [
  {
    quote: "Zyblz automated our lead handling and follow-ups. Our response time dropped by 70% and conversion rates skyrocketed.",
    name: "James Carter",
    role: "Founder, Export Business",
    image: avatar1,
  },
  {
    quote: "The custom AI chatbot they built handles 90% of our support queries instantly. It feels like magic.",
    name: "Sarah Jenkins",
    role: "Operations Manager, TechSaaS",
    image: avatar2,
  },
  {
    quote: "We replaced 3 manual admin roles with a single automated workflow. The ROI was immediate.",
    name: "Michael Chen",
    role: "Director, Agency Co.",
    image: null, // Fallback
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Trusted by Businesses</h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what our clients say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <Card key={index} className="glass-card border-white/5 p-6 h-full flex flex-col justify-between">
              <CardContent className="pt-6">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <p className="text-lg text-white/90 mb-8 italic">"{t.quote}"</p>
                
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12 border-2 border-primary/20">
                    <AvatarImage src={t.image || ""} />
                    <AvatarFallback>{t.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-white">{t.name}</h4>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
