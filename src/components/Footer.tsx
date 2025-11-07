import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/pristine-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary to-primary-hover text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4 animate-fade-in">
            <img src={logo} alt="Pristine Logo" className="h-16 w-auto brightness-0 invert" />
            <p className="text-sm text-primary-foreground/80">
              Excellence in owners association management services across UAE. Building better communities together.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-colors group">
                <Facebook size={20} className="text-primary-foreground group-hover:text-secondary transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-colors group">
                <Twitter size={20} className="text-primary-foreground group-hover:text-secondary transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-colors group">
                <Linkedin size={20} className="text-primary-foreground group-hover:text-secondary transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-colors group">
                <Instagram size={20} className="text-primary-foreground group-hover:text-secondary transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-lg font-heading font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-secondary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/communities" className="text-sm hover:text-secondary transition-colors">
                  Our Communities
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm hover:text-secondary transition-colors">
                  Blog & News
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-lg font-heading font-semibold">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-primary-foreground/80">Financial Management</li>
              <li className="text-sm text-primary-foreground/80">Property Maintenance</li>
              <li className="text-sm text-primary-foreground/80">Legal Compliance</li>
              <li className="text-sm text-primary-foreground/80">Community Relations</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-lg font-heading font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={16} className="text-primary-foreground" />
                </div>
                <span className="text-sm">Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-primary-foreground" />
                </div>
                <span className="text-sm">+971 XX XXX XXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-primary-foreground" />
                </div>
                <span className="text-sm">info@pristine.ae</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} Pristine Owners Association Management Services. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="#" className="text-sm hover:text-secondary transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-sm hover:text-secondary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
