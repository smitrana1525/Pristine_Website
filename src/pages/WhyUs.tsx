import { Card } from "@/components/ui/card";
import { CheckCircle2, Award, Users, Clock, Shield, TrendingUp, Heart, Headphones, ArrowRight } from "lucide-react";
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-28 pb-12 sm:pb-16 md:pt-32 md:pb-20 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4 sm:mb-6">
                <span className="w-8 sm:w-12 h-px bg-border" />
                <span>Why Choose Us</span>
                <span className="w-8 sm:w-12 h-px bg-border" />
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight tracking-tight text-center">
                The Difference
                <br />
                <span className="text-primary font-accent text-4xl sm:text-5xl lg:text-6xl">of Excellence</span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center"
              >
                Experience what sets Pristine apart in community management. Two decades of proven expertise, 
                unwavering commitment, and results that speak for themselves.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section ref={featuresRef.ref} className="py-12 sm:py-16 lg:py-20 bg-white border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="flex items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4 sm:mb-6">
              <span className="w-8 sm:w-12 h-px bg-border" />
              <span>What Sets Us Apart</span>
              <span className="w-8 sm:w-12 h-px bg-border" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight">
              Our <span className="text-primary font-accent text-4xl sm:text-5xl lg:text-6xl">Differentiators</span>
            </h2>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group"
              >
                <Card className="p-6 sm:p-8 hover-lift border-border/50 h-full bg-white">
                  <div className="space-y-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.bgGradient} rounded-2xl flex items-center justify-center ${item.shadowColor} shadow-lg`}>
                      <item.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-heading font-semibold leading-tight tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef.ref} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-muted/50 to-background border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="flex items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4 sm:mb-6">
              <span className="w-8 sm:w-12 h-px bg-border" />
              <span>The Advantage</span>
              <span className="w-8 sm:w-12 h-px bg-border" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight">
              Why It <span className="text-primary font-accent text-4xl sm:text-5xl lg:text-6xl">Matters</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 sm:p-8 bg-white/80 backdrop-blur-sm hover-lift">
                  <div className="flex gap-4 sm:gap-6 items-start">
                    <div className="flex-shrink-0 pt-1">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-secondary to-secondary-hover rounded-lg flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-foreground" strokeWidth={2.5} />
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl sm:text-2xl font-heading font-bold tracking-tight">
                        {benefit.title}
                      </h3>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-12 sm:py-16 lg:py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4 sm:mb-6">
              <span className="w-8 sm:w-12 h-px bg-border" />
              <span>Get Started</span>
              <span className="w-8 sm:w-12 h-px bg-border" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6 tracking-tight">
              Ready to Experience
              <br />
              <span className="text-primary font-accent text-4xl sm:text-5xl lg:text-6xl">Excellence?</span>
            </h2>
            <motion.p 
              className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join over 100 communities who trust Pristine for their management needs.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button size="lg" variant="default" asChild className="group">
                <Link to="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
