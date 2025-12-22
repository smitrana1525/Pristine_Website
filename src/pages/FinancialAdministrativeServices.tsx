import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { DollarSign, FileText, TrendingUp, FileCheck, Receipt, Shield, ArrowRight, CheckCircle2, ClipboardCheck, FileBarChart, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const FinancialAdministrativeServices = () => {
  // Framer Motion refs
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const introRef = useRef(null);
  const introInView = useInView(introRef, { once: true, margin: "-100px" });
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const whyRef = useRef(null);
  const whyInView = useInView(whyRef, { once: true });
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
      icon: TrendingUp,
      title: "Preparation of annual operational and reserve fund budgets",
      description: "Comprehensive annual budget planning for both operational expenses and reserve funds, ensuring your community is financially prepared for all needs.",
      bgGradient: "from-green-500 to-green-600",
      shadowColor: "shadow-green-500/30"
    },
    {
      icon: FileCheck,
      title: "Submission of budgets through Mollak for RERA review and approval",
      description: "Expert handling of budget submissions via Mollak system for RERA review and approval, ensuring full regulatory compliance.",
      bgGradient: "from-blue-500 to-blue-600",
      shadowColor: "shadow-blue-500/30"
    },
    {
      icon: Receipt,
      title: "Issuance and management of service charge invoices via Mollak",
      description: "Professional issuance and complete management of service charge invoices through the Mollak platform, ensuring accuracy and compliance.",
      bgGradient: "from-emerald-500 to-emerald-600",
      shadowColor: "shadow-emerald-500/30"
    },
    {
      icon: DollarSign,
      title: "Collection follow-ups to maintain strong community cash flow",
      description: "Proactive collection follow-ups to ensure timely payments and maintain healthy cash flow for your community operations.",
      bgGradient: "from-amber-500 to-amber-600",
      shadowColor: "shadow-amber-500/30"
    },
    {
      icon: FileText,
      title: "Maintaining accurate financial records and trust accounts",
      description: "Precise maintenance of all financial records and trust accounts, ensuring complete accuracy and transparency in all transactions.",
      bgGradient: "from-purple-500 to-purple-600",
      shadowColor: "shadow-purple-500/30"
    },
    {
      icon: FileBarChart,
      title: "Transparent quarterly and annual financial reports",
      description: "Comprehensive quarterly and annual financial reporting providing complete transparency to owners, committees, and stakeholders.",
      bgGradient: "from-indigo-500 to-indigo-600",
      shadowColor: "shadow-indigo-500/30"
    },
    {
      icon: ClipboardCheck,
      title: "Vendor tendering, contract award, and cost oversight",
      description: "Professional vendor tendering processes, contract award management, and ongoing cost oversight to ensure value and quality.",
      bgGradient: "from-teal-500 to-teal-600",
      shadowColor: "shadow-teal-500/30"
    },
    {
      icon: ShieldCheck,
      title: "Administration of community insurance policies, including building, liability, and common-area coverage",
      description: "Complete administration of all community insurance policies including building, liability, and common-area coverage for comprehensive protection.",
      bgGradient: "from-cyan-500 to-cyan-600",
      shadowColor: "shadow-cyan-500/30"
    },
    {
      icon: Shield,
      title: "Coordination with RERA-approved auditors for annual audits and compliance reviews",
      description: "Seamless coordination with RERA-approved auditors for annual audits and compliance reviews, ensuring full regulatory adherence.",
      bgGradient: "from-rose-500 to-rose-600",
      shadowColor: "shadow-rose-500/30"
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
                  Financial Management
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight tracking-tight">
                Complete Transparency and{" "}
                <span className="text-gradient font-accent">Full Compliance</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                We manage your community's finances with complete transparency and in full compliance with RERA and Mollak standards. Our goal is to protect your investment by ensuring accurate budgeting, efficient cost control, and responsible financial planning for both operational and long-term needs.
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

      {/* Introduction Section - Split Layout */}
      <section ref={introRef} className="py-12 sm:py-16 lg:py-20 bg-white border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={introInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tight">
                Financial Management
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                We manage your community's finances with complete transparency and in full compliance with RERA and Mollak standards. Our goal is to protect your investment by ensuring accurate budgeting, efficient cost control, and responsible financial planning for both operational and long-term needs.
              </p>
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
                      <DollarSign className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-2 tracking-tight">RERA & Mollak Compliance</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Full compliance with RERA and Mollak standards ensuring your community's finances meet all regulatory requirements.
                    </p>
                  </div>
                  <div>
                    <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary-hover rounded-xl flex items-center justify-center mb-4">
                      <Shield className="w-7 h-7 text-secondary-foreground" />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-2 tracking-tight">Investment Protection</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Accurate budgeting, efficient cost control, and responsible financial planning to protect your investment.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Offer Section - Enhanced */}
      <section ref={servicesRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-muted/50 to-background border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8 sm:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4 sm:mb-6">
              <span className="w-8 sm:w-12 h-px bg-border" />
              <span>Our Services</span>
              <span className="w-8 sm:w-12 h-px bg-border" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-3 sm:mb-4 tracking-tight">
              Our Financial{" "}
              <span className="text-primary font-accent text-4xl sm:text-5xl lg:text-6xl">Management Services</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Comprehensive financial services designed to keep your community <span className="font-accent text-secondary text-xl sm:text-2xl">financially secure and compliant</span>
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                  <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors duration-300 tracking-tight leading-tight">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why It Matters Section - Enhanced */}
      <section ref={whyRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-background border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={whyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 tracking-tight">
                  Why This <span className="text-primary font-accent text-4xl sm:text-5xl lg:text-6xl">Matters</span>
                </h2>
                <Card className="p-6 bg-white/80 backdrop-blur-sm mb-4">
                  <p className="text-base sm:text-lg text-foreground leading-relaxed font-medium mb-4">
                    Dubai's jointly owned property regulations require communities to operate with accountability and financial clarity. Proper budgeting, accurate forecasting, and transparent reporting are essential for maintaining service quality and long-term asset value.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                    By ensuring strong financial management, we:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Keep service charges fair, accurate, and well-justified",
                      "Maintain financial stability and prevent unexpected costs",
                      "Protect property value through responsible spending",
                      "Provide full transparency to owners, committees, and developers",
                      "Ensure smooth annual audits and continuous regulatory compliance"
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={whyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-5 h-5 bg-gradient-to-br from-secondary to-secondary-hover rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3 h-3 text-secondary-foreground" />
                        </div>
                        <span className="text-sm sm:text-base text-foreground">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </Card>
                <Card className="p-6 bg-white/80 backdrop-blur-sm">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    With us, your community benefits from a transparent, well-planned, and financially secure management framework that supports continuous improvement and long-term sustainability.
                  </p>
                </Card>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: DollarSign, label: "Financial Transparency", color: "from-green-500 to-green-600" },
                  { icon: FileCheck, label: "RERA Compliance", color: "from-blue-500 to-blue-600" },
                  { icon: TrendingUp, label: "Property Value Protection", color: "from-emerald-500 to-emerald-600" },
                  { icon: Shield, label: "Regulatory Compliance", color: "from-amber-500 to-amber-600" },
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
                      <p className="text-sm font-semibold text-foreground tracking-tight">{item.label}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-primary to-primary-hover text-primary-foreground border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-primary-foreground/70 mb-4 sm:mb-6">
              <span className="w-8 sm:w-12 h-px bg-primary-foreground/30" />
              <span>Get Started</span>
              <span className="w-8 sm:w-12 h-px bg-primary-foreground/30" />
            </div>
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              Ready to Strengthen{" "}
              <span className="text-secondary font-accent text-4xl sm:text-5xl lg:text-6xl">Your Finances?</span>
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 0.9, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Let's work together to achieve <span className="font-accent text-secondary text-xl sm:text-2xl">financial excellence</span> and long-term stability for your community.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button size="lg" variant="secondary" asChild className="group">
                <Link to="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FinancialAdministrativeServices;
