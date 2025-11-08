import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, FileCheck, TrendingUp, Handshake, Users, Heart, ArrowRight, Award, Clock, BarChart3, CheckCircle2, Target } from "lucide-react";
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
      icon: Building2,
      title: "Pre-Development Planning",
      description: "We work with developers to design efficient, resident-friendly layouts and community spaces that support easy management and daily use.",
      bgGradient: "from-teal-500 to-teal-600",
      shadowColor: "shadow-teal-500/30",
      features: ["Layout Design", "Resident-Friendly Planning", "Community Space Design", "Management Planning"]
    },
    {
      icon: FileCheck,
      title: "RERA & DLD Compliance",
      description: "We guide you through documentation, registration, and association setup to meet all UAE regulations smoothly.",
      bgGradient: "from-blue-500 to-blue-600",
      shadowColor: "shadow-blue-500/30",
      features: ["Documentation Support", "Registration Assistance", "Association Setup", "UAE Regulations"]
    },
    {
      icon: TrendingUp,
      title: "Service Charge Forecasting",
      description: "Our experts prepare accurate cost projections and budgets to maintain financial transparency from launch to occupancy.",
      bgGradient: "from-green-500 to-green-600",
      shadowColor: "shadow-green-500/30",
      features: ["Cost Projections", "Budget Planning", "Financial Transparency", "Launch to Occupancy"]
    },
    {
      icon: Handshake,
      title: "Handover Management",
      description: "We manage the handover process — from snag inspections to resident communication — ensuring a seamless transition between developers and owners.",
      bgGradient: "from-amber-500 to-amber-600",
      shadowColor: "shadow-amber-500/30",
      features: ["Snag Inspections", "Resident Communication", "Seamless Transition", "Handover Coordination"]
    },
    {
      icon: Users,
      title: "Community Governance Setup",
      description: "We establish rules, structures, and frameworks to support transparent, efficient, and long-term association management.",
      bgGradient: "from-purple-500 to-purple-600",
      shadowColor: "shadow-purple-500/30",
      features: ["Governance Rules", "Structure Development", "Management Frameworks", "Long-term Planning"]
    },
  ];

  const stats = [
    { icon: Building2, value: "50+", label: "Developments", color: "from-teal-500 to-teal-600" },
    { icon: Award, value: "20+", label: "Years Experience", color: "from-blue-500 to-blue-600" },
    { icon: BarChart3, value: "100%", label: "Compliance Rate", color: "from-green-500 to-green-600" },
    { icon: Target, value: "95%", label: "Success Rate", color: "from-amber-500 to-amber-600" },
  ];

  const processSteps = [
    { number: "01", title: "Project Consultation", description: "We assess your development project, understand your vision, and identify key requirements for successful community management." },
    { number: "02", title: "Planning & Design", description: "Our experts work with you to design efficient layouts, plan service charges, and ensure RERA compliance from the start." },
    { number: "03", title: "Documentation & Setup", description: "We handle all documentation, registration, and association setup to meet UAE regulations and prepare for handover." },
    { number: "04", title: "Handover & Launch", description: "Seamless handover management, resident onboarding, and launch support to ensure your development starts strong." },
  ];

  return (
    <div>
      {/* Hero Section - Modern Split Layout */}
      <section ref={heroRef} className="relative pt-16 sm:pt-20 pb-24 md:pb-32 overflow-hidden">
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
                  Consultancy for New Developments
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Building Strong Communities{" "}
                <span className="text-gradient">from the Start</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                At POAM, we help developers create communities that last. Our Consultancy for New Developments service offers expert guidance from the planning stage to handover — ensuring your project is well-structured, compliant, and ready for successful management.
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
                Expert Guidance for Successful Developments
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                From the planning stage to handover, we ensure your project is well-structured, compliant, and ready for successful management.
              </p>
              <div className="space-y-4">
                {[
                  "Expert Planning & Design Input",
                  "RERA & DLD Compliance Support",
                  "Service Charge Forecasting",
                  "Seamless Handover Management"
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
                    <h3 className="text-xl font-heading font-bold mb-2">Strategic Planning</h3>
                    <p className="text-muted-foreground">
                      We work with developers to design efficient, resident-friendly layouts and community spaces that support easy management.
                    </p>
                  </div>
                  <div>
                    <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary-hover rounded-xl flex items-center justify-center mb-4">
                      <FileCheck className="w-7 h-7 text-secondary-foreground" />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-2">Full Compliance</h3>
                    <p className="text-muted-foreground">
                      Expert guidance through documentation, registration, and association setup to meet all UAE regulations smoothly.
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
              Comprehensive consultancy services designed to set your development up for success
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
              A structured approach to development consultancy excellence
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
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Why It Matters</h2>
                <div className="space-y-4">
                  <Card className="p-6 bg-white/80 backdrop-blur-sm">
                    <p className="text-lg text-foreground leading-relaxed font-medium mb-2">
                      Good planning today builds strong communities tomorrow.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      By involving POAM early, developers ensure their projects are compliant, sustainable, and community-ready from day one.
                    </p>
                  </Card>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Building2, label: "Expert Planning", color: "from-teal-500 to-teal-600" },
                  { icon: FileCheck, label: "Full Compliance", color: "from-blue-500 to-blue-600" },
                  { icon: TrendingUp, label: "Financial Planning", color: "from-green-500 to-green-600" },
                  { icon: Handshake, label: "Seamless Handover", color: "from-amber-500 to-amber-600" },
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
                We don't just advise — we create lasting communities.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                With POAM, your development stands on the pillars of planning, compliance, and enduring value.
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
            Ready to Build a Successful Development?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 0.9, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's work together to create a development that's built for long-term success.
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
