import { Card } from "@/components/ui/card";
import { CheckCircle2, Award, Users, Clock, Shield, TrendingUp, Heart, Headphones } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const WhyUs = () => {
  const featuresRef = useScrollAnimation();
  const benefitsRef = useScrollAnimation();
  
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

  const differentiators = [
    {
      icon: Award,
      title: "20+ Years of Excellence",
      description: "Two decades of proven expertise in community management across the UAE.",
      bgGradient: "from-yellow-500 to-yellow-600",
      shadowColor: "shadow-yellow-500/30"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly trained professionals dedicated to delivering exceptional service.",
      bgGradient: "from-blue-500 to-blue-600",
      shadowColor: "shadow-blue-500/30"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock availability for emergencies and urgent matters.",
      bgGradient: "from-emerald-500 to-emerald-600",
      shadowColor: "shadow-emerald-500/30"
    },
    {
      icon: Shield,
      title: "Full Compliance",
      description: "100% adherence to RERA regulations and UAE legal requirements.",
      bgGradient: "from-amber-500 to-amber-600",
      shadowColor: "shadow-amber-500/30"
    },
    {
      icon: TrendingUp,
      title: "Proven Track Record",
      description: "98% client satisfaction rate and consistent 5-star reviews.",
      bgGradient: "from-purple-500 to-purple-600",
      shadowColor: "shadow-purple-500/30"
    },
    {
      icon: Heart,
      title: "Community Focused",
      description: "We genuinely care about creating thriving, harmonious communities.",
      bgGradient: "from-rose-500 to-rose-600",
      shadowColor: "shadow-rose-500/30"
    },
    {
      icon: Headphones,
      title: "Responsive Service",
      description: "Average response time under 2 hours for all inquiries.",
      bgGradient: "from-sky-500 to-sky-600",
      shadowColor: "shadow-sky-500/30"
    },
    {
      icon: CheckCircle2,
      title: "Transparent Operations",
      description: "Clear communication and complete transparency in all dealings.",
      bgGradient: "from-lime-500 to-lime-600",
      shadowColor: "shadow-lime-500/30"
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
              Why Choose Pristine?
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Experience the difference that true excellence makes
            </motion.p>
          </div>
        </div>
      </section>

      {/* Differentiators Grid */}
      <section ref={featuresRef.ref} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={featuresRef.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-heading font-bold mb-4">What Sets Us Apart</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the unique advantages of partnering with Pristine
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate={featuresRef.isVisible ? "visible" : "hidden"}
          >
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card className="p-6 text-center hover-lift h-full">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={featuresRef.isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                    className="relative mb-4"
                  >
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${item.bgGradient} rounded-2xl flex items-center justify-center mx-auto ${item.shadowColor} shadow-lg`}>
                      <div className="absolute inset-0 rounded-2xl border border-white/20" />
                      <item.icon className="w-8 h-8 text-white relative z-10 drop-shadow-sm" strokeWidth={2.5} />
                    </div>
                  </motion.div>
                  <h3 className="text-lg font-heading font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef.ref} className="py-20 bg-gradient-to-br from-muted to-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsRef.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-heading font-bold text-center mb-16">
              The Pristine Advantage
            </h2>

            <motion.div 
              className="space-y-6"
              variants={staggerContainer}
              initial="hidden"
              animate={benefitsRef.isVisible ? "visible" : "hidden"}
            >
              {[
                {
                  title: "Enhanced Property Values",
                  description:
                    "Our professional management approach consistently leads to increased property values and higher resale prices.",
                },
                {
                  title: "Peace of Mind",
                  description:
                    "Sleep easy knowing your community is in expert hands with proactive management and immediate response to issues.",
                },
                {
                  title: "Cost Efficiency",
                  description:
                    "Strategic vendor relationships and efficient operations result in significant cost savings for your community.",
                },
                {
                  title: "Harmonious Living",
                  description:
                    "Our community-first approach fosters positive relationships and reduces conflicts among residents.",
                },
                {
                  title: "Technology Integration",
                  description:
                    "Modern digital platforms for communication, payments, and service requests make management effortless.",
                },
                {
                  title: "Continuous Improvement",
                  description:
                    "Regular assessments and upgrades ensure your community stays competitive and well-maintained.",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  <Card className="p-6 flex items-start space-x-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={benefitsRef.isVisible ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                      className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary-hover rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                    >
                      <CheckCircle2 className="w-5 h-5 text-secondary-foreground" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="max-w-4xl mx-auto p-12 text-center bg-gradient-to-br from-primary/5 to-secondary/5">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Ready to Experience Excellence?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join over 100 communities who trust Pristine for their management needs.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" asChild>
                  <Link to="/contact">Get Started Today</Link>
                </Button>
              </motion.div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
