import { Card } from "@/components/ui/card";
import { Award, Target, Eye, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import aboutImage from "@/assets/about-team.jpg";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
              About Pristine
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Building excellence in community management since 2004
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-heading font-bold">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2004, Pristine has grown to become one of the UAE's most trusted names in owners
                association management. Our journey began with a simple vision: to provide exceptional community
                management services that truly make a difference.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we manage over 100 communities across the UAE, serving thousands of happy residents and
                property owners. Our success is built on a foundation of integrity, professionalism, and an
                unwavering commitment to excellence.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-secondary to-secondary-hover rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <span className="font-semibold">CAI Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-secondary to-secondary-hover rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <span className="font-semibold">RERA Registered</span>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={aboutImage}
                alt="Our Team"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionRef.ref} className="py-20 bg-gradient-to-br from-muted to-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate={missionRef.isVisible ? "visible" : "hidden"}
          >
            <motion.div variants={fadeInUp} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
              <Card className="p-8 h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary-hover rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver exceptional community management services that enhance property values, foster harmonious
                  living environments, and exceed the expectations of residents and property owners throughout the UAE.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
              <Card className="p-8 h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-hover rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be recognized as the leading community management company in the UAE, setting the standard for
                  excellence, innovation, and resident satisfaction across all communities we serve.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section ref={valuesRef.ref} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={valuesRef.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate={valuesRef.isVisible ? "visible" : "hidden"}
          >
            {[
              {
                title: "Integrity",
                desc: "We operate with complete transparency and honesty in all our dealings.",
              },
              {
                title: "Excellence",
                desc: "We strive for the highest standards in every aspect of our service.",
              },
              {
                title: "Community",
                desc: "We believe in building strong, connected communities where people thrive.",
              },
              {
                title: "Innovation",
                desc: "We embrace new technologies and methods to improve our services.",
              },
              {
                title: "Accountability",
                desc: "We take responsibility for our actions and deliver on our promises.",
              },
              {
                title: "Respect",
                desc: "We treat everyone with dignity, courtesy, and professionalism.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card className="p-6 text-center hover-lift h-full">
                  <h3 className="text-xl font-heading font-semibold mb-3 text-gradient">{value.title}</h3>
                  <p className="text-muted-foreground">{value.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
