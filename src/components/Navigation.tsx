import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/pristine-logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { 
      name: "Owners Association Management", 
      path: "/services/owners-association-management",
      color: "bg-blue-500"
    },
    { 
      name: "Financial & Administrative Management", 
      path: "/services/financial-administrative-services",
      color: "bg-green-500"
    },
    { 
      name: "Facilities & Operations Management", 
      path: "/services/facilities-management",
      color: "bg-orange-500"
    },
    { 
      name: "Health, Safety & Compliance", 
      path: "/services/health-safety-compliance",
      color: "bg-red-500"
    },
    { 
      name: "Community Engagement", 
      path: "/services/community-engagement",
      color: "bg-purple-500"
    },
    { 
      name: "Technology & Portal Solutions", 
      path: "/services/technology-portal-solutions",
      color: "bg-cyan-500"
    },
    { 
      name: "Consultancy for New Developments", 
      path: "/services/consultancy-new-developments",
      color: "bg-teal-500"
    },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Communities", path: "/communities" },
    { name: "Why Choose Us", path: "/why-us" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  // Determine navbar background: transparent only on homepage when not scrolled, otherwise always visible
  const shouldShowBackground = isScrolled || !isHomePage;
  
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldShowBackground ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="Pristine Logo" 
              className={`h-16 md:h-20 w-auto transition-all duration-300 ${
                shouldShowBackground ? "" : "brightness-0 invert"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.slice(0, 1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors relative group ${
                  shouldShowBackground
                    ? location.pathname === link.path
                      ? "text-primary"
                      : "text-foreground hover:text-secondary"
                    : location.pathname === link.path
                      ? "text-secondary"
                      : "text-primary-foreground hover:text-secondary"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  shouldShowBackground ? "bg-secondary" : "bg-secondary"
                }`} />
              </Link>
            ))}
            
            {navLinks.slice(1, 2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors relative group ${
                  shouldShowBackground
                    ? location.pathname === link.path
                      ? "text-primary"
                      : "text-foreground hover:text-secondary"
                    : location.pathname === link.path
                      ? "text-secondary"
                      : "text-primary-foreground hover:text-secondary"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  shouldShowBackground ? "bg-secondary" : "bg-secondary"
                }`} />
              </Link>
            ))}

            {/* Services Dropdown - After About Us */}
            <DropdownMenu onOpenChange={setIsServicesOpen}>
              <DropdownMenuTrigger asChild>
                <button
                  className={`text-sm font-medium transition-colors relative group flex items-center gap-1.5 ${
                    shouldShowBackground
                      ? location.pathname.startsWith("/services")
                        ? "text-primary"
                        : "text-foreground hover:text-secondary"
                      : location.pathname.startsWith("/services")
                        ? "text-secondary"
                        : "text-primary-foreground hover:text-secondary"
                  }`}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    shouldShowBackground ? "bg-secondary" : "bg-secondary"
                  }`} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="start" 
                className="w-80 max-w-[calc(100vw-2rem)] bg-background/95 backdrop-blur-md border border-border/50 shadow-2xl rounded-xl p-2 mt-2"
              >
                <Link to="/services" className="block">
                  <DropdownMenuItem className="cursor-pointer font-semibold text-primary hover:bg-primary/10 rounded-lg px-4 py-3 mb-1 transition-colors">
                    <div className="flex items-center justify-between w-full">
                      <span>View All Services</span>
                      <ArrowRight className="w-4 h-4 opacity-60" />
                    </div>
                  </DropdownMenuItem>
                </Link>
                <div className="border-t border-border/50 my-2" />
                <div className="max-h-[400px] overflow-y-auto scrollbar-hide">
                  {services.map((service, index) => (
                    <DropdownMenuItem key={index} asChild>
                      <Link 
                        to={service.path} 
                        className="cursor-pointer rounded-lg px-4 py-3 hover:bg-accent/50 transition-all duration-200 group/item"
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative flex-shrink-0">
                            <div className={`w-1 h-8 ${service.color} rounded-full group-hover/item:h-10 transition-all duration-200`} />
                            <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 ${service.color} rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-200`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground group-hover/item:text-primary transition-colors leading-tight">
                              {service.name}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors relative group ${
                  shouldShowBackground
                    ? location.pathname === link.path
                      ? "text-primary"
                      : "text-foreground hover:text-secondary"
                    : location.pathname === link.path
                      ? "text-secondary"
                      : "text-primary-foreground hover:text-secondary"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  shouldShowBackground ? "bg-secondary" : "bg-secondary"
                }`} />
              </Link>
            ))}

            <Button 
              variant={shouldShowBackground ? "default" : "secondary"} 
              size="sm" 
              asChild
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 transition-colors ${
              shouldShowBackground ? "text-foreground" : "text-primary-foreground"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden py-4 animate-fade-in ${
            shouldShowBackground ? "border-t border-border bg-background" : "border-t border-primary-foreground/20 bg-primary/95 backdrop-blur-md"
          }`}>
            <div className="flex flex-col space-y-2">
              {/* Home */}
              {navLinks.slice(0, 1).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium px-4 py-3 rounded-lg transition-colors ${
                    shouldShowBackground
                      ? location.pathname === link.path
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-accent"
                      : location.pathname === link.path
                        ? "bg-secondary text-secondary-foreground"
                        : "text-primary-foreground hover:bg-primary-foreground/10"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* About Us */}
              {navLinks.slice(1, 2).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium px-4 py-3 rounded-lg transition-colors ${
                    shouldShowBackground
                      ? location.pathname === link.path
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-accent"
                      : location.pathname === link.path
                        ? "bg-secondary text-secondary-foreground"
                        : "text-primary-foreground hover:bg-primary-foreground/10"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Services in Mobile - After About Us */}
              <div className="px-4">
                <Link
                  to="/services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium px-4 py-3 rounded-lg transition-colors block ${
                    shouldShowBackground
                      ? location.pathname.startsWith("/services")
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-accent"
                      : location.pathname.startsWith("/services")
                        ? "bg-secondary text-secondary-foreground"
                        : "text-primary-foreground hover:bg-primary-foreground/10"
                  }`}
                >
                  Services
                </Link>
                <div className={`mt-2 ml-2 pl-2 border-l-2 ${
                  shouldShowBackground ? "border-primary/30" : "border-primary-foreground/20"
                }`}>
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 py-2.5 px-3 rounded-lg transition-all group ${
                        shouldShowBackground
                          ? location.pathname === service.path
                            ? "bg-primary/10 text-foreground"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                          : location.pathname === service.path
                            ? "bg-primary-foreground/10 text-primary-foreground"
                            : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                      }`}
                    >
                      <div className="relative flex-shrink-0">
                        <div className={`w-1 h-6 ${service.color} rounded-full group-hover:h-8 transition-all duration-200`} />
                        <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 ${service.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200`} />
                      </div>
                      <span className="text-xs font-medium leading-tight flex-1">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Remaining Links */}
              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium px-4 py-3 rounded-lg transition-colors ${
                    shouldShowBackground
                      ? location.pathname === link.path
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-accent"
                      : location.pathname === link.path
                        ? "bg-secondary text-secondary-foreground"
                        : "text-primary-foreground hover:bg-primary-foreground/10"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <Button 
                variant={shouldShowBackground ? "default" : "secondary"} 
                size="sm" 
                className="mx-4 mt-2" 
                asChild
              >
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
