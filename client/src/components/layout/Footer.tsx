import { Link } from "wouter";
import logo from "@assets/Zyblz-Logo_color_horizon_3_1767496346796.png";

export function Footer() {
  return (
    <footer className="bg-background py-12 border-t border-white/5">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          <div className="max-w-xs">
            <Link href="/" className="block mb-6 hover:opacity-90 transition-opacity">
              <img src={logo} alt="Zyblz" className="h-10 w-auto" />
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Zyblz builds AI-powered software and automation systems that simplify operations and accelerate growth.
            </p>
            <div className="text-muted-foreground text-xs space-y-1">
              <p className="font-medium text-white/80">Siddab Ventures Private Limited</p>
              <p>Naranpura, Ahmedabad</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full md:w-auto">
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
                <li><Link href="/work" className="hover:text-primary transition-colors">Work</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="tel:+919724445451" className="hover:text-primary transition-colors">+91 9724445451</a></li>
                <li><a href="mailto:hello@zyblz.com" className="hover:text-primary transition-colors">hello@zyblz.com</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Zyblz. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
