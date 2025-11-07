import { Card } from "@/components/ui/card";
import {
  Building2,
  DollarSign,
  Users,
  Wrench,
  FileText,
  MessageSquare,
  Shield,
  TrendingUp,
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
      icon: DollarSign,
      title: "Financial Management",
      description:
        "Comprehensive budgeting, accounting, and financial reporting services. We ensure transparent financial operations and optimal resource allocation.",
      features: ["Budget Planning", "Financial Reporting", "Collections Management", "Reserve Fund Analysis"],
      bgGradient: "from-green-500 to-green-600",
      shadowColor: "shadow-green-500/30"
    },
    {
      icon: Wrench,
      title: "Property Maintenance",
      description:
        "Proactive maintenance programs to keep your community in pristine condition. From routine inspections to emergency repairs.",
      features: ["Preventive Maintenance", "Vendor Management", "Quality Control", "Emergency Response"],
      bgGradient: "from-orange-500 to-orange-600",
      shadowColor: "shadow-orange-500/30"
    },
    {
      icon: FileText,
      title: "Legal & Compliance",
      description:
        "Full compliance with UAE regulations including RERA requirements. Expert handling of all legal documentation and procedures.",
      features: ["RERA Compliance", "Contract Management", "Insurance Coordination", "Regulatory Reporting"],
      bgGradient: "from-red-500 to-red-600",
      shadowColor: "shadow-red-500/30"
    },
    {
      icon: Users,
      title: "Community Relations",
      description:
        "Building strong relationships between residents, board members, and management through effective communication and engagement.",
      features: ["Resident Portal", "Board Support", "Conflict Resolution", "Community Events"],
      bgGradient: "from-cyan-500 to-cyan-600",
      shadowColor: "shadow-cyan-500/30"
    },
    {
      icon: Shield,
      title: "Security Management",
      description:
        "Comprehensive security solutions to ensure the safety and well-being of all residents and their properties.",
      features: ["Access Control", "CCTV Monitoring", "Security Personnel", "Emergency Protocols"],
      bgGradient: "from-indigo-500 to-indigo-600",
      shadowColor: "shadow-indigo-500/30"
    },
    {
      icon: Building2,
      title: "Facility Management",
      description:
        "Expert management of all community facilities including pools, gyms, gardens, and common areas.",
      features: ["Facility Operations", "Equipment Maintenance", "Amenity Management", "Landscaping"],
      bgGradient: "from-teal-500 to-teal-600",
      shadowColor: "shadow-teal-500/30"
    },
    {
      icon: MessageSquare,
      title: "Communication Services",
      description:
        "Modern communication tools and strategies to keep residents informed and engaged with their community.",
      features: ["Digital Notices", "Resident App", "Email Updates", "Social Media"],
      bgGradient: "from-pink-500 to-pink-600",
      shadowColor: "shadow-pink-500/30"
    },
    {
      icon: TrendingUp,
      title: "Property Enhancement",
      description:
        "Strategic planning and implementation of improvement projects to enhance property values and resident satisfaction.",
      features: ["Capital Projects", "Renovation Planning", "Value Engineering", "ROI Analysis"],
      bgGradient: "from-violet-500 to-violet-600",
      shadowColor: "shadow-violet-500/30"
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
              Our Services
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Comprehensive community management solutions tailored to your needs
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
