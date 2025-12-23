import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, FileCheck, ArrowRight, CheckCircle2, ClipboardCheck, Shield, DollarSign, Search, FileText, AlertCircle, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ConsultancyNewDevelopments = () => {
  // Framer Motion refs
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const introRef = useRef(null);
  const introInView = useInView(introRef, { once: true, margin: "-100px" });
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const whyRef = useRef(null);
  const whyInView = useInView(whyRef, { once: true });
  const withUsRef = useRef(null);
  const withUsInView = useInView(withUsRef, { once: true });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true });

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const services = [
    {
      icon: Search,
      title: "Tendering and appointment of qualified vendors for key services",
      description: "Professional tendering and appointment of qualified vendors for all key community services ensuring quality and reliability.",
      bgGradient: "from-teal-500 to-teal-600",
      shadowColor: "shadow-teal-500/30",
      subFeatures: [
        "Pool maintenance",
        "Lifeguard services (if required)",
        "Cleaning and hygiene",
        "Pest control",
        "Water tank cleaning and testing",
        "Waste management",
        "Fire system maintenance (AMC-certified)",
        "Landscaping and irrigation"
      ]
    },
    {
      icon: FileCheck,
      title: "Comprehensive vendor due diligence including license, insurance, and regulatory compliance checks",
      description: "Thorough vendor due diligence including license verification, insurance checks, and regulatory compliance to ensure all vendors meet the highest standards.",
      bgGradient: "from-blue-500 to-blue-600",
      shadowColor: "shadow-blue-500/30"
    },
    {
      icon: FileText,
      title: "Contract negotiation, award, and clear KPI/SLA structuring",
      description: "Expert contract negotiation, award, and clear KPI/SLA structuring to ensure transparent agreements and measurable performance standards.",
      bgGradient: "from-green-500 to-green-600",
      shadowColor: "shadow-green-500/30"
    },
    {
      icon: ClipboardCheck,
      title: "Regular performance monitoring, inspections, and service quality reviews",
      description: "Continuous performance monitoring, regular inspections, and comprehensive service quality reviews to maintain exceptional standards.",
      bgGradient: "from-amber-500 to-amber-600",
      shadowColor: "shadow-amber-500/30"
    },
    {
      icon: DollarSign,
      title: "Cost optimization without compromising safety or service standards",
      description: "Strategic cost optimization ensuring competitive pricing and cost-efficiency while maintaining safety and service standards.",
      bgGradient: "from-purple-500 to-purple-600",
      shadowColor: "shadow-purple-500/30"
    },
    {
      icon: Shield,
      title: "AMC and statutory compliance management with renewal tracking and documentation",
      description: "Complete AMC and statutory compliance management with renewal tracking and comprehensive documentation for all maintenance contracts.",
      bgGradient: "from-rose-500 to-rose-600",
      shadowColor: "shadow-rose-500/30"
    },
    {
      icon: AlertCircle,
      title: "Prompt issue resolution and vendor escalation when service standards are not met",
      description: "Rapid issue resolution and professional vendor escalation processes when service standards are not met, ensuring accountability.",
      bgGradient: "from-indigo-500 to-indigo-600",
      shadowColor: "shadow-indigo-500/30"
    },
  ];


  return (
    <div className="bg-background">
      {/* Hero Section - Modern Split Layout */}
      <section ref={heroRef} className="relative pt-28 pb-12 sm:pb-16 md:pt-32 md:pb-20 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4">
                <span className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-primary px-4 py-2 bg-primary/10 rounded-full">
                  Vendor & Contract Management
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight tracking-tight">
                Reliable, High-Quality Services{" "}
                <span className="text-gradient font-accent">Through Expert Management</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                We ensure your community receives reliable, high-quality services by managing every aspect of vendor selection, contracting, and performance oversight. Our approach focuses on value, compliance, and accountability to maintain exceptional standards across all operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="group">
                  <Link to="/contact">
                    Get Started
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/services">View All Services</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section ref={introRef} className="py-12 sm:py-16 lg:py-20 bg-white border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={introInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 tracking-tight">
                Our Vendor & Contract Management Services
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                We ensure your community receives reliable, high-quality services by managing every aspect of vendor selection, contracting, and performance oversight. Our approach focuses on value, compliance, and accountability to maintain exceptional standards across all operations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-muted/50 to-background border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 tracking-tight">Our Vendor & Contract Management Services</h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card className="p-6 sm:p-8 hover-lift border-border/50 h-full group relative overflow-hidden bg-white">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={servicesInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                    className="relative mb-6"
                  >
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${service.bgGradient} rounded-2xl flex items-center justify-center ${service.shadowColor} shadow-lg`}>
                      <div className="absolute inset-0 rounded-2xl border border-white/20" />
                      <service.icon className="w-8 h-8 text-white relative z-10 drop-shadow-sm" strokeWidth={2.5} />
                    </div>
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors duration-300 tracking-tight">{service.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                  {service.subFeatures && (
                    <ul className="space-y-2 mt-4">
                      {service.subFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 mt-1.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section ref={whyRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-background border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={whyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 tracking-tight">Why This Matters</h2>
              <div className="space-y-6">
                <Card className="p-6 sm:p-8 bg-white/80 backdrop-blur-sm">
                  <p className="text-base sm:text-lg text-foreground leading-relaxed font-medium mb-4">
                    Every community depends on reliable external partners to maintain its facilities and services. Effective vendor management ensures that every contractor delivers consistent quality, operates safely, and adheres to regulatory requirements.
                  </p>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                    By managing vendor relationships professionally, we:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Maintain high service standards across all operations",
                      "Protect the community from non-compliant or underperforming vendors",
                      "Ensure competitive pricing and cost-efficiency",
                      "Reduce operational risks and enhance overall resident satisfaction"
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={whyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                        className="flex items-start"
                      >
                        <div className="w-6 h-6 bg-gradient-to-br from-secondary to-secondary-hover rounded-lg flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-secondary-foreground" />
                        </div>
                        <span className="text-base text-foreground leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* With Us Section */}
      <section ref={withUsRef} className="py-12 sm:py-16 lg:py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={withUsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4 sm:mb-6">
              <span className="w-8 sm:w-12 h-px bg-border" />
              <span>With Us</span>
              <span className="w-8 sm:w-12 h-px bg-border" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6 tracking-tight">
              Trusted Partners for
              <br />
              <span className="text-primary font-accent text-4xl sm:text-5xl lg:text-6xl">Premium Living</span>
            </h2>
            <motion.p 
              className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={withUsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              With us, your community benefits from <span className="text-primary font-semibold">trusted vendors</span>, transparent contracting, and consistently high-quality services that support a premium living experience.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-primary to-primary-hover text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Optimize Your Vendor Management?
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 0.9, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's work together to ensure your community receives reliable, high-quality services from trusted vendors.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" variant="secondary" asChild className="group">
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ConsultancyNewDevelopments;
