import { Link } from "react-router-dom";
import { MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/pristine-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary to-primary-hover text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="space-y-4 animate-fade-in">
            <img src={logo} alt="Pristine Logo" className="h-16 w-auto brightness-0 invert" />
            <p className="text-sm text-primary-foreground/80 leading-relaxed font-premium tracking-tight">
              Excellence in owners association management services across UAE. Building better communities together.
            </p>
            <div className="h-1" />
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-lg font-heading font-premium font-semibold tracking-tight">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/communities" className="text-sm hover:text-secondary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/why-us" className="text-sm hover:text-secondary transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm hover:text-secondary transition-colors">
                  Blog & News
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-lg font-heading font-premium font-semibold tracking-tight">Our Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/90">
              <li>
                <Link to="/services/owners-association-management" className="hover:text-secondary transition-colors">
                  Compliance & Governance
                </Link>
              </li>
              <li>
                <Link to="/services/financial-administrative-services" className="hover:text-secondary transition-colors">
                  Financial & Administrative
                </Link>
              </li>
              <li>
                <Link to="/services/facilities-management" className="hover:text-secondary transition-colors">
                  Facilities & Operations
                </Link>
              </li>
              <li>
                <Link to="/services/health-safety-compliance" className="hover:text-secondary transition-colors">
                  Health, Safety & Risk
                </Link>
              </li>
              <li>
                <Link to="/services/community-engagement" className="hover:text-secondary transition-colors">
                  Community & Resident Relations
                </Link>
              </li>
              <li>
                <Link to="/services/consultancy-new-developments" className="hover:text-secondary transition-colors">
                  Vendor & Contract Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-lg font-heading font-premium font-semibold tracking-tight">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={16} className="text-primary-foreground" />
                </div>
                <span className="text-sm">Dubai, United Arab Emirates</span>
              </li>
              <li className="text-sm text-primary-foreground/80 leading-relaxed">
                Prefer a tailored conversation? <Link to="/contact" className="font-semibold underline-offset-2 hover:underline">Contact our team</Link> and we’ll respond within one business day.
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
