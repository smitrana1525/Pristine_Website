import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wrench, Users, Shield, Clock, CheckCircle2, Heart, ArrowRight, Building2, Award, BarChart3, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const FacilitiesManagement = () => {
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
      icon: Wrench,
      title: "Complete Maintenance Management",
      description: "We take care of all daily facility operations — making sure shared areas, systems, and amenities are always clean, functional, and well-maintained.",
      bgGradient: "from-orange-500 to-orange-600",
      shadowColor: "shadow-orange-500/30",
      features: ["Daily Operations", "Shared Area Maintenance", "System Management", "Amenity Care"]
    },
    {
      icon: Users,
      title: "Vendor & Contractor Coordination",
      description: "Our team manages and monitors all service providers to ensure quality work, timely delivery, and cost-effective solutions, so your community always gets the best service.",
      bgGradient: "from-cyan-500 to-cyan-600",
      shadowColor: "shadow-cyan-500/30",
      features: ["Vendor Management", "Quality Monitoring", "Cost Optimization", "Service Delivery"]
    },
    {
      icon: CheckCircle2,
      title: "Preventive Maintenance",
      description: "We follow planned maintenance schedules and smart monitoring to prevent issues before they happen — saving time, money, and keeping everything in top condition.",
      bgGradient: "from-teal-500 to-teal-600",
      shadowColor: "shadow-teal-500/30",
      features: ["Scheduled Maintenance", "Smart Monitoring", "Issue Prevention", "Cost Savings"]
    },
    {
      icon: Shield,
      title: "Health, Safety & Compliance",
      description: "Regular inspections and audits make sure your community meets all UAE building, safety, and environmental standards.",
      bgGradient: "from-red-500 to-red-600",
      shadowColor: "shadow-red-500/30",
      features: ["Regular Inspections", "Safety Audits", "UAE Standards Compliance", "Environmental Standards"]
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Our on-site teams and dedicated helpdesk are available around the clock to handle maintenance requests and emergencies quickly and professionally.",
      bgGradient: "from-indigo-500 to-indigo-600",
      shadowColor: "shadow-indigo-500/30",
      features: ["24/7 Availability", "Emergency Response", "On-site Teams", "Dedicated Helpdesk"]
    },
  ];

  const stats = [
    { icon: Building2, value: "500+", label: "Properties Managed", color: "from-orange-500 to-orange-600" },
    { icon: Award, value: "15+", label: "Years Experience", color: "from-cyan-500 to-cyan-600" },
    { icon: BarChart3, value: "95%", label: "Satisfaction Rate", color: "from-teal-500 to-teal-600" },
    { icon: Clock, value: "<2hrs", label: "Response Time", color: "from-indigo-500 to-indigo-600" },
  ];

  const processSteps = [
    { number: "01", title: "Assessment & Planning", description: "We evaluate your facilities, identify maintenance needs, and create a comprehensive management plan." },
    { number: "02", title: "Vendor Selection", description: "Our team selects and coordinates trusted vendors and contractors for optimal service delivery." },
    { number: "03", title: "Implementation", description: "We implement preventive maintenance schedules and establish operational procedures." },
    { number: "04", title: "Ongoing Management", description: "Continuous monitoring, regular inspections, and proactive maintenance to ensure peak performance." },
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
                  Facilities Management
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Smooth Operations. Quality Maintenance.{" "}
                <span className="text-gradient">Long-Term Value</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                At Pristine Owner Association Management Services (POAM), we do more than just maintain communities — we help them run better every day.
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
                Professional Facilities Management
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our Facilities Management service ensures every property is safe, efficient, and well cared for, delivering comfort and long-term value for residents and owners alike.
              </p>
              <div className="space-y-4">
                {[
                  "Smart Planning & Preventive Care",
                  "Trusted Vendor Network",
                  "UAE Building Standards Compliance",
                  "24/7 Emergency Response"
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
                      <Wrench className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-2">Operational Excellence</h3>
                    <p className="text-muted-foreground">
                      From managing utilities and common areas to supervising contractors, we focus on smart planning and reliable maintenance.
                    </p>
                  </div>
                  <div>
                    <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary-hover rounded-xl flex items-center justify-center mb-4">
                      <Shield className="w-7 h-7 text-secondary-foreground" />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-2">Safety First</h3>
                    <p className="text-muted-foreground">
                      Ensuring compliance with all UAE building, safety, and environmental standards for complete peace of mind.
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
              Comprehensive facilities management services designed for excellence
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
              A structured approach to facilities management excellence
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
                      Good facilities management keeps your community safe, comfortable, and sustainable.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      By planning ahead, maintaining regularly, and working with trusted partners, POAM protects your assets and improves everyday living for residents.
                    </p>
                  </Card>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, label: "Safety Standards", color: "from-red-500 to-red-600" },
                  { icon: TrendingUp, label: "Asset Protection", color: "from-orange-500 to-orange-600" },
                  { icon: Clock, label: "Quick Response", color: "from-cyan-500 to-cyan-600" },
                  { icon: CheckCircle2, label: "Quality Service", color: "from-teal-500 to-teal-600" },
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
                We don't just maintain — we enhance.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                With POAM, every system runs smoothly, every space is cared for, and every community grows with efficiency, honesty, and excellence.
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
            Ready to Enhance Your Facilities?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 0.9, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's work together to keep your community running smoothly and efficiently.
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

export default FacilitiesManagement;
