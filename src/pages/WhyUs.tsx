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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center overflow-hidden pt-16 sm:pt-20">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
        
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-4 text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">
                <span className="w-12 h-px bg-border" />
                <span>Why Choose Us</span>
              </div>
              
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-heading font-bold leading-[0.95] tracking-tight mb-8">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="block"
                >
                  The Difference
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="block text-primary"
                >
                  of Excellence
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-3xl"
              >
                Experience what sets Pristine apart in community management. Two decades of proven expertise, 
                unwavering commitment, and results that speak for themselves.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section ref={featuresRef.ref} className="py-32 lg:py-40 border-t border-border">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <div className="flex items-center gap-4 text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">
                <span className="w-12 h-px bg-border" />
                <span>What Sets Us Apart</span>
              </div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold leading-[0.95] tracking-tight max-w-3xl">
                Our Differentiators
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {differentiators.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-7 h-7 text-primary" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-heading font-bold leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef.ref} className="py-32 lg:py-40 border-t border-border">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <div className="flex items-center gap-4 text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">
                <span className="w-12 h-px bg-border" />
                <span>The Advantage</span>
              </div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold leading-[0.95] tracking-tight max-w-3xl">
                Why It Matters
              </h2>
            </motion.div>

            <div className="space-y-12 lg:space-y-16">
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
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-8 lg:gap-12 group"
                >
                  <div className="flex-shrink-0 pt-2">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <CheckCircle2 className="w-6 h-6 text-primary" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-2xl sm:text-3xl font-heading font-bold">
                      {benefit.title}
                    </h3>
                    <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-32 lg:py-40 border-t border-border">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-4 text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">
                <span className="w-12 h-px bg-border" />
                <span>Get Started</span>
              </div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold leading-[0.95] tracking-tight mb-8">
                Ready to Experience
                <br />
                <span className="text-primary">Excellence?</span>
              </h2>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-2xl">
                Join over 100 communities who trust Pristine for their management needs.
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Button size="lg" className="text-lg px-10 py-7 h-auto rounded-xl" asChild>
                  <Link to="/contact">Get Started Today</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
