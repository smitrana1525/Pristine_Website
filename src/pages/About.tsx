import { Card } from "@/components/ui/card";
import { Award, Target, Eye, Shield, Users, TrendingUp, Heart, Zap, CheckCircle2, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import aboutImage from "@/assets/about-team.jpg";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SEO from "@/components/SEO";
import { seoConfig } from "@/utils/seoData";

const About = () => {
  const missionRef = useScrollAnimation();
  const valuesRef = useScrollAnimation();
  
  // Framer Motion refs
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const storyRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
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

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={seoConfig.about.title}
        description={seoConfig.about.description}
        keywords={seoConfig.about.keywords}
        structuredData={seoConfig.about.structuredData}
        url="https://pristine.ae/about"
      />
      {/* Hero Section - Editorial Style */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden pt-16 sm:pt-20">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 w-full">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-center">
              {/* Left Column - Text */}
              <motion.div
                className="lg:col-span-7 space-y-6 sm:space-y-8"
                initial={{ opacity: 0, x: -80 }}
                animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="space-y-2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground"
                  >
                    <span className="w-8 sm:w-12 h-px bg-border" />
                    <span>Established 2004</span>
                  </motion.div>
                  
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold leading-[0.95] tracking-tight">
                    <motion.span
                      initial={{ opacity: 0, y: 30 }}
                      animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                      className="block"
                    >
                      Two Decades
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, y: 30 }}
                      animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                      className="block text-primary"
                    >
                      of Excellence
                    </motion.span>
                  </h1>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="space-y-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl"
                >
                  <p>
                    Pristine stands as one of the UAE's most trusted names in owners association management. 
                    Our journey began with a commitment to redefine community living through exceptional service.
                  </p>
                  <p className="text-foreground/90">
                    Today, we manage over 100 communities, serving thousands of residents who trust us to 
                    maintain their properties, enhance their lifestyles, and protect their investments.
                  </p>
                </motion.div>

                {/* Stats - Inline */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="flex flex-wrap gap-8 pt-8 border-t border-border"
                >
                  {[
                    { value: "20+", label: "Years" },
                    { value: "100+", label: "Communities" },
                    { value: "5000+", label: "Residents" },
                    { value: "98%", label: "Satisfaction" },
                  ].map((stat, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-4xl font-heading font-bold text-foreground leading-none mb-1">
                        {stat.value}
                      </span>
                      <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Column - Image */}
              <motion.div
                className="lg:col-span-5 relative"
                initial={{ opacity: 0, x: 80 }}
                animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative aspect-[3/4] lg:aspect-[4/5]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl" />
                  <img
                    src={aboutImage}
                    alt="Pristine Team"
                    className="w-full h-full object-cover rounded-3xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 border-y border-border">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="text-lg font-semibold text-foreground">CAI Certified</div>
                  <div className="text-sm text-muted-foreground">Professional Standards</div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <div className="text-lg font-semibold text-foreground">RERA Registered</div>
                  <div className="text-sm text-muted-foreground">UAE Compliant</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionRef.ref} className="py-32 lg:py-40">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4 text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
                  <span className="w-12 h-px bg-border" />
                  <span>01</span>
                </div>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold leading-[0.95] tracking-tight">
                  Our Mission
                </h2>
                <div className="pt-4">
                  <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
                    To deliver exceptional community management services that enhance property values, foster harmonious
                    living environments, and exceed the expectations of residents and property owners throughout the UAE.
                  </p>
                </div>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4 text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
                  <span className="w-12 h-px bg-border" />
                  <span>02</span>
                </div>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold leading-[0.95] tracking-tight text-primary">
                  Our Vision
                </h2>
                <div className="pt-4">
                  <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
                    To be recognized as the leading community management company in the UAE, setting the standard for
                    excellence, innovation, and resident satisfaction across all communities we serve.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section ref={valuesRef.ref} className="py-32 lg:py-40 border-t border-border">
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
                <span>Our Foundation</span>
              </div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold leading-[0.95] tracking-tight max-w-3xl">
                Core Values
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  icon: Shield,
                  title: "Integrity",
                  desc: "We operate with complete transparency and honesty in all our dealings, building trust through consistent actions.",
                },
                {
                  icon: Star,
                  title: "Excellence",
                  desc: "We strive for the highest standards in every aspect of our service, continuously improving and innovating.",
                },
                {
                  icon: Heart,
                  title: "Community",
                  desc: "We believe in building strong, connected communities where people thrive and feel at home.",
                },
                {
                  icon: Zap,
                  title: "Innovation",
                  desc: "We embrace new technologies and methods to improve our services and enhance resident experiences.",
                },
                {
                  icon: CheckCircle2,
                  title: "Accountability",
                  desc: "We take responsibility for our actions and deliver on our promises, ensuring reliable service delivery.",
                },
                {
                  icon: Users,
                  title: "Respect",
                  desc: "We treat everyone with dignity, courtesy, and professionalism, valuing diverse perspectives and needs.",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <value.icon className="w-6 h-6 text-primary" strokeWidth={2} />
                      </div>
                      <h3 className="text-2xl font-heading font-bold">
                        {value.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {value.desc}
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
                Join the communities that trust Pristine for exceptional management services.
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Button size="lg" className="text-lg px-10 py-7 h-auto rounded-xl" asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
