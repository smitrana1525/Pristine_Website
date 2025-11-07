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
      icon: Users,
      title: "Owners Association Management",
      description:
        "Tailored governance frameworks that keep boards supported, communication transparent, and communities running smoothly.",
      features: [
        "Customized governance plans",
        "Board advisory & meeting support",
        "Policy documentation",
        "Resident communication playbooks",
      ],
      bgGradient: "from-blue-500 to-blue-600",
      shadowColor: "shadow-blue-500/30",
    },
    {
      icon: DollarSign,
      title: "Financial & Administrative Management",
      description:
        "Expert budgeting, accounting, collections, and financial reporting backed by RERA-compliant processes.",
      features: [
        "Annual budgets & reserve planning",
        "Transparent financial reporting",
        "Accounts receivable & collections",
        "Audit-ready documentation",
      ],
      bgGradient: "from-green-500 to-green-600",
      shadowColor: "shadow-green-500/30",
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
    <div className="pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-6xl font-heading font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              Comprehensive Community Management Solutions
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              At POAM, we deliver end-to-end services designed to keep communities safe, compliant, and sustainable.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef.ref} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={servicesRef.isVisible ? "visible" : "hidden"}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card className="p-8 hover-lift group h-full">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={servicesRef.isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                    className="relative mb-6"
                  >
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${service.bgGradient} rounded-2xl flex items-center justify-center ${service.shadowColor} shadow-lg`}>
                      <div className="absolute inset-0 rounded-2xl border border-white/20" />
                      <service.icon className="w-8 h-8 text-white relative z-10 drop-shadow-sm" strokeWidth={2.5} />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-heading font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
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

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-gradient-to-br from-muted to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="max-w-4xl mx-auto p-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={ctaInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary-hover rounded-2xl flex items-center justify-center mx-auto mb-6"
              >
                <Phone className="w-10 h-10 text-secondary-foreground" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Every community is unique. Let us create a tailored management plan that perfectly fits your needs.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" asChild>
                  <Link to="/contact">Contact Us Today</Link>
                </Button>
              </motion.div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
