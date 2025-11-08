import { Card } from "@/components/ui/card";
import {
  Building2,
  DollarSign,
  Users,
  Wrench,
  MessageSquare,
  Shield,
  Laptop,
  Phone,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Services = () => {
  const servicesRef = useScrollAnimation();
  
  // Framer Motion refs
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
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
      image: "/Services Images/Owner Association Management.png",
      title: "Owners Association Management",
      description:
        "Tailored governance frameworks that keep boards supported, communication transparent, and communities running smoothly.",
      features: [
        "Customized governance plans",
        "Board advisory & meeting support",
        "Policy documentation",
        "Resident communication playbooks",
      ],
    },
    {
      image: "/Services Images/Financial & Administrative Management.png",
      title: "Financial & Administrative Management",
      description:
        "Expert budgeting, accounting, collections, and financial reporting backed by RERA-compliant processes.",
      features: [
        "Annual budgets & reserve planning",
        "Transparent financial reporting",
        "Accounts receivable & collections",
        "Audit-ready documentation",
      ],
    },
    {
      icon: Wrench,
      title: "Facilities & Operations Management",
      description:
        "Maintenance programs, vendor oversight, and preventive care that protect assets and extend lifecycle value.",
      features: [
        "Preventive maintenance planning",
        "24/7 vendor supervision",
        "Quality inspections",
        "Lifecycle asset strategies",
      ],
      bgGradient: "from-orange-500 to-orange-600",
      shadowColor: "shadow-orange-500/30",
    },
    {
      icon: Shield,
      title: "Health, Safety & Compliance",
      description:
        "Regular audits, emergency response planning, and UAE HSE compliance to safeguard residents and assets.",
      features: [
        "Routine HSE audits",
        "Emergency readiness plans",
        "Regulatory compliance tracking",
        "Risk mitigation reporting",
      ],
      bgGradient: "from-red-500 to-red-600",
      shadowColor: "shadow-red-500/30",
    },
    {
      icon: MessageSquare,
      title: "Community Engagement",
      description:
        "Resident-first programs that build trust through events, surveys, and consistent communication channels.",
      features: [
        "Resident events & activations",
        "Feedback & survey programs",
        "Stakeholder newsletters",
        "Conflict resolution support",
      ],
      bgGradient: "from-indigo-500 to-indigo-600",
      shadowColor: "shadow-indigo-500/30",
    },
    {
      icon: Laptop,
      title: "Technology & Portal Solutions",
      description:
        "Smart platforms for payments, service requests, and real-time community updates accessible anywhere.",
      features: [
        "Resident portal & mobile app",
        "Online payments & billing",
        "Service request automation",
        "Real-time announcement center",
      ],
      bgGradient: "from-cyan-500 to-cyan-600",
      shadowColor: "shadow-cyan-500/30",
    },
    {
      icon: Building2,
      title: "Consultancy for New Developments",
      description:
        "Guiding developers with design input, community setup, and RERA documentation for seamless handovers.",
      features: [
        "Design & operational review",
        "Service charge modelling",
        "Community launch playbooks",
        "RERA documentation support",
      ],
      bgGradient: "from-purple-500 to-purple-600",
      shadowColor: "shadow-purple-500/30",
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-background">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-block mb-6">
                <span className="text-sm font-semibold tracking-wider uppercase text-primary px-4 py-2 bg-primary/10 rounded-full">
                  Our Services
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Comprehensive
                </span>
                <br />
                <span className="text-primary">Management Solutions</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                End-to-end services designed to keep communities safe, compliant, and sustainable across the UAE.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef.ref} className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24 lg:space-y-32">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              const isImageService = !!service.image;
              
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  animate={servicesRef.isVisible ? "visible" : "hidden"}
                  className="relative"
                >
                  <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}>
                    {/* Image/Icon Section */}
                    <motion.div
                      className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      animate={servicesRef.isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
                      transition={{ delay: index * 0.15 + 0.2, duration: 0.8 }}
                    >
                      {isImageService ? (
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted shadow-2xl group">
                          <motion.img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={servicesRef.isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
                            transition={{ delay: index * 0.15 + 0.3, duration: 1 }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                          <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-primary/30 backdrop-blur-sm border border-primary/50" />
                        </div>
                      ) : (
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-muted via-muted/50 to-background flex items-center justify-center shadow-2xl">
                          <motion.div
                            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                            animate={servicesRef.isVisible ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.5, rotate: -10 }}
                            transition={{ delay: index * 0.15 + 0.3, duration: 0.8, type: "spring" }}
                            className={`relative w-32 h-32 bg-gradient-to-br ${service.bgGradient} rounded-3xl flex items-center justify-center ${service.shadowColor} shadow-2xl`}
                          >
                            <div className="absolute inset-0 rounded-3xl border-2 border-white/40" />
                            <service.icon className="w-16 h-16 text-white relative z-10" strokeWidth={2} />
                          </motion.div>
                          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                        </div>
                      )}
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                      className={`flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      animate={servicesRef.isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 50 : -50 }}
                      transition={{ delay: index * 0.15 + 0.3, duration: 0.8 }}
                    >
                      <div className="space-y-6">
                        {/* Service Number */}
                        <div className="flex items-center gap-4">
                          <span className="text-6xl font-bold text-primary/20 leading-none">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <div className="h-px flex-1 bg-border" />
                        </div>

                        {/* Title */}
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold leading-tight">
                          {service.title}
                        </h2>

                        {/* Description */}
                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                          {service.description}
                        </p>

                        {/* Features */}
                        <div className="pt-4">
                          <ul className="space-y-4">
                            {service.features.map((feature, idx) => (
                              <motion.li
                                key={idx}
                                className="flex items-start gap-4 group"
                                initial={{ opacity: 0, x: -20 }}
                                animate={servicesRef.isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ delay: index * 0.15 + idx * 0.1 + 0.5, duration: 0.5 }}
                              >
                                <div className="mt-2 flex-shrink-0">
                                  <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300" />
                                </div>
                                <span className="text-base sm:text-lg text-foreground/80 group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                                  {feature}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Divider between services */}
                  {index < services.length - 1 && (
                    <div className="mt-24 lg:mt-32 flex items-center justify-center">
                      <div className="h-px w-24 bg-gradient-to-r from-transparent via-border to-transparent" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block mb-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto shadow-xl">
                <Phone className="w-10 h-10 text-primary-foreground" />
              </div>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Ready to Transform
              <br />
              <span className="text-primary">Your Community?</span>
            </h2>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Every community is unique. Let us create a tailored management plan that perfectly fits your needs.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button size="lg" className="text-lg px-8 py-6 h-auto" asChild>
                <Link to="/contact">Get Started Today</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
