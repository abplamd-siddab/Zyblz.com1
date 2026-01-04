import { Link } from "wouter";
import logo from "@assets/Zyblz-Logo_color_horizon_3_1767496346796.png";

export function Footer() {
  return (
    <footer className="bg-background py-12 border-t border-white/5">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          <div className="max-w-xs">
            <Link href="/">
              <a className="block mb-6 hover:opacity-90 transition-opacity">
                <img src={logo} alt="Zyblz" className="h-10 w-auto" />
              </a>
            </Link>
            <p className="text-muted-foreground text-sm">
              Zyblz builds AI-powered software and automation systems that simplify operations and accelerate growth.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full md:w-auto">
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about"><a className="hover:text-primary transition-colors">About Us</a></Link></li>
                <li><Link href="/services"><a className="hover:text-primary transition-colors">Services</a></Link></li>
                <li><Link href="/contact"><a className="hover:text-primary transition-colors">Contact</a></Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Email Us</a></li>
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
