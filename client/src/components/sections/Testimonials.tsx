import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Zyblz built us a complete inventory management system that transformed how we track stock across multiple warehouses. Real-time updates and automated reordering saved us countless hours.",
    name: "Dev Singh",
    role: "Founder, FMCG Importer, Philippines",
  },
  {
    quote: "The after-sales service app they created streamlined our entire customer support process. Service requests, technician assignments, and follow-ups - all automated and working flawlessly.",
    name: "Tarun Goswami",
    role: "Entrepreneur, Ivory Coast",
  },
  {
    quote: "Our lending business needed a robust system to manage loans, payments, and client communications. Zyblz delivered exactly what we needed - efficient, reliable, and easy to use.",
    name: "Mandeep Jhanda",
    role: "Entrepreneur, Canada",
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
                  <Avatar className="w-12 h-12 border-2 border-primary/20 bg-primary/10">
                    <AvatarFallback className="bg-primary/10 text-primary font-bold">
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
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
