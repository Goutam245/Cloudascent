import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img src={logo} alt="IT Partner" className="h-10 rounded-lg" />
            <span className="text-lg font-bold">IT Partner</span>
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
            Microsoft Gold Partner since 2006. Helping enterprises transform their IT
            infrastructure with cloud-first solutions.
          </p>
          <div className="flex items-center gap-3 text-primary-foreground/60 text-sm">
            <Mail className="w-4 h-4 shrink-0" />
            <span>info@o365hq.com</span>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-6">Services</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li><Link to="/services" className="hover:text-primary transition-colors">Microsoft 365</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Azure Solutions</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Cybersecurity</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Migration</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">IT Support</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-6">Company</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Case Studies</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-6">Locations</h4>
          <div className="space-y-4 text-sm text-primary-foreground/70">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
              <span>New York, USA</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
              <span>London, UK</span>
            </div>
            <div className="flex items-start gap-2">
              <Phone className="w-4 h-4 shrink-0 mt-0.5" />
              <span>+1 (888) 365-1234</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
        <p>© {new Date().getFullYear()} IT Partner O365HQ. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-primary-foreground/80 transition-colors">Privacy</Link>
          <Link to="/" className="hover:text-primary-foreground/80 transition-colors">Terms</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
