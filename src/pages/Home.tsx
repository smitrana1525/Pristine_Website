import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";
import heroImage from "@/assets/hero-cityscape.jpg";
import community1Image from "@/assets/community-1.jpg";
import community2Image from "@/assets/community-2.jpg";
import community3Image from "@/assets/community-3.jpg";
import teamImage from "@/assets/about-team.jpg";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SEO from "@/components/SEO";
import { seoConfig } from "@/utils/seoData";

const Home = () => {
  const statsRef = useScrollAnimation();
  const testimonialsRef = useScrollAnimation();
  
  // Framer Motion refs
  const featuresRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const stats = [
    { value: 20, label: "Years of Experience", suffix: "+" },
    { value: 100, label: "Communities Managed", suffix: "+" },
    { value: 5000, label: "Happy Residents", suffix: "+" },
    { value: 98, label: "Client Satisfaction", suffix: "%" },
  ];

  const testimonials = [
    {
      text: "Pristine has transformed our community management. Their professionalism and attention to detail is unmatched.",
      author: "Ahmed Al Mansouri",
      role: "Community Board Chairman",
    },
    {
      text: "Outstanding service and transparent communication. They truly care about building better communities.",
      author: "Sarah Johnson",
      role: "Property Owner",
    },
  ];

  return (
    <>
      <SEO 
        title={seoConfig.home.title}
        description={seoConfig.home.description}
        keywords={seoConfig.home.keywords}
        structuredData={seoConfig.home.structuredData}
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Building Better Communities,
            <motion.span 
              className="block text-secondary mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              Together
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-8 sm:mb-12 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            Excellence in owners association management services across UAE. Over 20 years of trusted expertise.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          >
            <Button size="lg" variant="secondary" asChild className="group">
              <Link to="/services">
                Explore Services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          onClick={() => {
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
          }}
        >
          <span className="text-xs text-primary-foreground/70 font-medium tracking-wider uppercase">Scroll</span>
          <div className="w-10 h-10 rounded-full border-2 border-primary-foreground/50 flex items-center justify-center hover:border-primary-foreground transition-colors">
            <ChevronDown className="w-5 h-5 text-primary-foreground/70" strokeWidth={2.5} />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef.ref} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-muted to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={statsRef.isVisible ? "visible" : "hidden"}
          >
            {stats.map((stat, index) => {
              const count = useCountUp(stat.value, 2000, statsRef.isVisible);
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={scaleIn}
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gradient mb-1 sm:mb-2">
                    {count}
                    {stat.suffix}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-muted-foreground leading-tight">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8 sm:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-heading font-bold mb-3 sm:mb-4">Why Choose Pristine?</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Comprehensive community management solutions backed by decades of excellence
            </p>
          </motion.div>

           <motion.div 
             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
             variants={staggerContainer}
             initial="hidden"
             animate={featuresInView ? "visible" : "hidden"}
           >
             {[
               { 
                 image: teamImage,
                 title: "Expert Management", 
                 desc: "Professional oversight of all community operations"
               },
               { 
                 image: community1Image,
                 title: "Community Focus", 
                 desc: "Building strong relationships with residents"
               },
               { 
                 image: community2Image,
                 title: "Legal Compliance", 
                 desc: "Full adherence to UAE regulations"
               },
               { 
                 image: community3Image,
                 title: "Value Enhancement", 
                 desc: "Maximizing property values through excellence"
               },
             ].map((feature, index) => (
               <motion.div
                 key={index}
                 variants={fadeInUp}
                 whileHover={{ y: -8, transition: { duration: 0.2 } }}
               >
                 <Card className="group relative overflow-hidden h-full border-border/50 hover-lift">
                   {/* Image Container */}
                   <div className="relative h-48 sm:h-56 overflow-hidden bg-muted">
                     <motion.img
                       src={feature.image}
                       alt={`${feature.title} - ${feature.desc} | Pristine Management Services`}
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                       initial={{ opacity: 0, scale: 1.05 }}
                       animate={featuresInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 }}
                       transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                     />
                     {/* Subtle overlay on hover */}
                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                   </div>
                   
                   {/* Content */}
                   <div className="p-6">
                     <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                       {feature.title}
                     </h3>
                     <p className="text-muted-foreground leading-relaxed text-sm">
                       {feature.desc}
                     </p>
                   </div>
                 </Card>
               </motion.div>
             ))}
           </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef.ref} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-8 sm:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={testimonialsRef.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            What Our Clients Say
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate={testimonialsRef.isVisible ? "visible" : "hidden"}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <Card className="p-6 sm:p-8 h-full">
                  <p className="text-base sm:text-lg mb-4 sm:mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-12 sm:py-16 lg:py-20 bg-white text-foreground border-t border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4 sm:mb-6 text-primary"
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Community?
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto text-muted-foreground px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let us help you create a thriving, well-managed community that residents love to call home.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" variant="default" asChild className="group">
              <Link to="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
