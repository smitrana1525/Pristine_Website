import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, FileCheck, TrendingUp, Handshake, Users, Heart, ArrowRight, Award, Clock, BarChart3, CheckCircle2, Target, ClipboardCheck, Shield, DollarSign, Search, FileText, AlertCircle } from "lucide-react";
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
  const processRef = useRef(null);
  const processInView = useInView(processRef, { once: true });
  const whyRef = useRef(null);
  const whyInView = useInView(whyRef, { once: true });
  const promiseRef = useRef(null);
  const promiseInView = useInView(promiseRef, { once: true });
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
      title: "Vendor Tendering & Qualification",
      description: "Tendering and appointment of qualified vendors for key services including pool maintenance, lifeguard services, cleaning, pest control, water tank cleaning, waste management, fire system maintenance, and landscaping.",
      bgGradient: "from-teal-500 to-teal-600",
      shadowColor: "shadow-teal-500/30",
      features: ["Pool Maintenance", "Cleaning & Hygiene", "Pest Control", "Waste Management", "Fire System Maintenance", "Landscaping"]
    },
    {
      icon: FileCheck,
      title: "Vendor Due Diligence",
      description: "Comprehensive vendor due diligence including license, insurance, and regulatory compliance checks to ensure all vendors meet the highest standards.",
      bgGradient: "from-blue-500 to-blue-600",
      shadowColor: "shadow-blue-500/30",
      features: ["License Verification", "Insurance Checks", "Regulatory Compliance", "Quality Assurance"]
    },
    {
      icon: FileText,
      title: "Contract Negotiation & KPI Structuring",
      description: "Contract negotiation, award, and clear KPI/SLA structuring to ensure transparent agreements and measurable performance standards.",
      bgGradient: "from-green-500 to-green-600",
      shadowColor: "shadow-green-500/30",
      features: ["Contract Negotiation", "KPI Development", "SLA Structuring", "Performance Metrics"]
    },
    {
      icon: ClipboardCheck,
      title: "Performance Monitoring",
      description: "Regular performance monitoring, inspections, and service quality reviews to maintain exceptional standards across all operations.",
      bgGradient: "from-amber-500 to-amber-600",
      shadowColor: "shadow-amber-500/30",
      features: ["Regular Inspections", "Quality Reviews", "Performance Tracking", "Service Standards"]
    },
    {
      icon: DollarSign,
      title: "Cost Optimization",
      description: "Cost optimization without compromising safety or service standards, ensuring competitive pricing and cost-efficiency for your community.",
      bgGradient: "from-purple-500 to-purple-600",
      shadowColor: "shadow-purple-500/30",
      features: ["Cost Analysis", "Budget Optimization", "Competitive Pricing", "Value Management"]
    },
    {
      icon: Shield,
      title: "AMC & Compliance Management",
      description: "AMC and statutory compliance management with renewal tracking and documentation to ensure all maintenance contracts and regulations are up to date.",
      bgGradient: "from-rose-500 to-rose-600",
      shadowColor: "shadow-rose-500/30",
      features: ["AMC Management", "Renewal Tracking", "Compliance Documentation", "Statutory Requirements"]
    },
  ];

  const stats = [
    { icon: Building2, value: "100+", label: "Vendors Managed", color: "from-teal-500 to-teal-600" },
    { icon: Award, value: "20+", label: "Years Experience", color: "from-blue-500 to-blue-600" },
    { icon: BarChart3, value: "98%", label: "Satisfaction Rate", color: "from-green-500 to-green-600" },
    { icon: Target, value: "100%", label: "Compliance Rate", color: "from-amber-500 to-amber-600" },
  ];

  const processSteps = [
    { number: "01", title: "Vendor Tendering", description: "We identify service needs and conduct comprehensive tendering processes to source qualified vendors for all key services." },
    { number: "02", title: "Due Diligence & Selection", description: "Thorough verification of licenses, insurance, and regulatory compliance to ensure only qualified vendors are selected." },
    { number: "03", title: "Contract Negotiation", description: "Expert contract negotiation with clear KPI/SLA structuring to establish transparent agreements and performance standards." },
    { number: "04", title: "Ongoing Management", description: "Continuous performance monitoring, inspections, and issue resolution to maintain high service standards and compliance." },
  ];

  return (
    <div className="bg-background">
      {/* Hero Section - Modern Split Layout */}
      <section ref={heroRef} className="relative pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-primary px-4 py-2 bg-primary/10 rounded-full">
                  Vendor & Contract Management
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Reliable Vendor Management{" "}
                <span className="text-gradient">for Quality Services</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                We ensure your community receives reliable, high-quality services by managing every aspect of vendor selection, contracting, and performance oversight. Our approach focuses on value, compliance, and accountability to maintain exceptional standards across all operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  >
                    <Card className="p-6 text-center hover-lift">
                      <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl md:text-3xl font-heading font-bold text-gradient mb-1">{stat.value}</div>
                      <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section - Split Layout */}
      <section ref={introRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={introInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Our Vendor & Contract Management Services
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We manage every aspect of vendor relationships to ensure your community receives consistent, high-quality services from trusted partners.
              </p>
              <div className="space-y-4">
                {[
                  "Tendering & Vendor Qualification",
                  "Comprehensive Due Diligence",
                  "Contract Negotiation & KPI Structuring",
                  "Performance Monitoring & Quality Reviews"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={introInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-secondary to-secondary-hover rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-secondary-foreground" />
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={introInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/10">
                <div className="space-y-6">
                  <div>
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
                      <Building2 className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-2">Vendor Qualification</h3>
                    <p className="text-muted-foreground">
                      Comprehensive tendering and qualification processes to identify and select the best vendors for all key community services.
                    </p>
                  </div>
                  <div>
                    <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary-hover rounded-xl flex items-center justify-center mb-4">
                      <Shield className="w-7 h-7 text-secondary-foreground" />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-2">Compliance & Quality</h3>
                    <p className="text-muted-foreground">
                      Rigorous due diligence, compliance checks, and performance monitoring to ensure all vendors meet the highest standards.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Offer Section - Enhanced */}
      <section ref={servicesRef} className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">What We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive vendor and contract management services designed to ensure quality, compliance, and cost-effectiveness
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                <Card className="p-8 hover-lift border-border/50 h-full group relative overflow-hidden bg-white">
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
                  <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section - Modern Timeline */}
      <section ref={processRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured approach to vendor and contract management excellence
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={processInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="flex gap-6"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-2xl font-heading font-bold text-primary-foreground">{step.number}</span>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="w-0.5 h-full bg-gradient-to-b from-secondary to-primary/20 my-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <Card className="p-6 hover-lift">
                      <h3 className="text-xl font-heading font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section - Enhanced */}
      <section ref={whyRef} className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={whyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Why This Matters</h2>
                <div className="space-y-4">
                  <Card className="p-6 bg-white/80 backdrop-blur-sm">
                    <p className="text-lg text-foreground leading-relaxed font-medium mb-2">
                      Every community depends on reliable external partners to maintain its facilities and services.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Effective vendor management ensures that every contractor delivers consistent quality, operates safely, and adheres to regulatory requirements.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      By managing vendor relationships professionally, we maintain high service standards, protect the community from non-compliant vendors, ensure competitive pricing, and enhance overall resident satisfaction.
                    </p>
                  </Card>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, label: "High Service Standards", color: "from-teal-500 to-teal-600" },
                  { icon: AlertCircle, label: "Risk Protection", color: "from-blue-500 to-blue-600" },
                  { icon: DollarSign, label: "Cost Efficiency", color: "from-green-500 to-green-600" },
                  { icon: Heart, label: "Resident Satisfaction", color: "from-amber-500 to-amber-600" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={whyInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  >
                    <Card className="p-6 text-center hover-lift bg-white">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-sm font-semibold text-foreground">{item.label}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Promise Section - Enhanced */}
      <section ref={promiseRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={promiseInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={promiseInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-24 h-24 bg-gradient-to-br from-secondary to-secondary-hover rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl"
            >
              <Heart className="w-12 h-12 text-secondary-foreground" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Promise</h2>
            <Card className="p-10 md:p-12 bg-gradient-to-br from-primary/5 via-secondary/5 to-background border-2 border-primary/20">
              <p className="text-2xl md:text-3xl text-foreground leading-relaxed font-semibold mb-6">
                Trusted vendors, transparent contracting, and consistently high-quality services.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                With us, your community benefits from trusted vendors, transparent contracting, and consistently high-quality services that support a premium living experience.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-gradient-to-r from-primary to-primary-hover text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Optimize Your Vendor Management?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto opacity-90"
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
