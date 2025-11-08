import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, ChevronDown, Building2, DollarSign, Wrench, Shield, MessageSquare, Laptop, FileCheck, Calendar, User } from "lucide-react";
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
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const featuresRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const blogRef = useRef(null);
  const blogInView = useInView(blogRef, { once: true, margin: "-100px" });
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

  const quickServices = [
    {
      icon: Building2,
      title: "Owners Association Management",
      description: "Complete governance and board support",
      path: "/services/owners-association-management",
      color: "text-blue-600"
    },
    {
      icon: DollarSign,
      title: "Financial Management",
      description: "Budgeting, accounting & compliance",
      path: "/services/financial-administrative-services",
      color: "text-green-600"
    },
    {
      icon: Wrench,
      title: "Facilities Management",
      description: "Maintenance & operations oversight",
      path: "/services/facilities-management",
      color: "text-orange-600"
    },
    {
      icon: Shield,
      title: "Health & Safety",
      description: "HSE audits & compliance",
      path: "/services/health-safety-compliance",
      color: "text-red-600"
    },
  ];

  const highlights = [
    {
      icon: "✓",
      title: "RERA Registered",
      description: "Fully compliant with UAE regulations"
    },
    {
      icon: "✓",
      title: "CAI Certified",
      description: "Industry-recognized expertise"
    },
    {
      icon: "✓",
      title: "20+ Years Experience",
      description: "Proven track record of excellence"
    },
    {
      icon: "✓",
      title: "24/7 Support",
      description: "Always available when you need us"
    },
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

  const latestBlogPosts = [
    {
      title: "Understanding RERA Regulations for Community Management",
      excerpt: "A comprehensive guide to navigating UAE real estate regulations and ensuring your community stays compliant.",
      date: "March 15, 2024",
      category: "Legal & Compliance",
      image: community1Image,
      path: "/blog"
    },
    {
      title: "5 Ways to Increase Property Values in Your Community",
      excerpt: "Expert strategies for enhancing your community's appeal and boosting property values for all residents.",
      date: "March 10, 2024",
      category: "Property Management",
      image: community2Image,
      path: "/blog"
    },
    {
      title: "The Importance of Preventive Maintenance",
      excerpt: "How regular maintenance schedules can save costs and prevent major issues in your community.",
      date: "March 5, 2024",
      category: "Maintenance",
      image: community3Image,
      path: "/blog"
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

        <div 
          className="absolute bottom-8 left-0 right-0 flex justify-center items-center z-30 pointer-events-none"
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: 0,
            right: 0,
            margin: 0,
            padding: 0,
            transition: 'none',
            animation: 'none',
            transform: 'none'
          }}
        >
          <div 
            className="flex flex-col items-center gap-2 cursor-pointer pointer-events-auto"
            style={{
              margin: 0,
              padding: 0,
              transition: 'none',
              animation: 'none',
              transform: 'none'
            }}
            onClick={() => {
              window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
            }}
          >
            <span 
              className="text-xs text-primary-foreground/70 font-medium tracking-wider uppercase whitespace-nowrap" 
              style={{ 
                transition: 'none',
                animation: 'none',
                transform: 'none'
              }}
            >
              Scroll
            </span>
            <div 
              className="w-10 h-10 rounded-full border-2 border-primary-foreground/50 flex items-center justify-center hover:border-primary-foreground" 
              style={{ 
                transition: 'border-color 0.2s',
                animation: 'none',
                transform: 'none'
              }}
            >
              <ChevronDown 
                className="w-5 h-5 text-primary-foreground/70" 
                strokeWidth={2.5} 
                style={{ 
                  transition: 'none',
                  animation: 'none',
                  transform: 'none'
                }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef.ref} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-muted to-background border-t border-border">
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

      {/* Quick Services Overview */}
      <section ref={servicesRef} className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <div className="flex items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4 sm:mb-6">
              <span className="w-8 sm:w-12 h-px bg-border" />
              <span>Our Services</span>
              <span className="w-8 sm:w-12 h-px bg-border" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-3 sm:mb-4">
              Comprehensive Management
              <br />
              <span className="text-primary">Solutions</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              End-to-end services designed to keep communities safe, compliant, and sustainable across the UAE.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10"
            variants={staggerContainer}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            {quickServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -2, transition: { duration: 0.3 } }}
                >
                  <Link to={service.path}>
                    <div className="group relative h-full cursor-pointer">
                      {/* Main Content Area */}
                      <div className="relative h-full p-8 border border-border/50 bg-background hover:border-foreground/20 transition-all duration-500 rounded-none">
                        {/* Top Accent Line */}
                        <div className="absolute top-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500" />
                        
                        {/* Number Badge */}
                        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-6xl font-heading font-bold text-foreground/5 leading-none">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>

                        {/* Icon with Unique Design */}
                        <div className="mb-6 relative">
                          <div className="relative inline-block">
                            {/* Background shape */}
                            <div className="absolute inset-0 bg-foreground/5 group-hover:bg-foreground/10 rounded-sm rotate-3 group-hover:rotate-6 transition-all duration-500" />
                            {/* Icon container */}
                            <div className="relative w-14 h-14 flex items-center justify-center bg-background border border-border/50 group-hover:border-foreground/30 transition-all duration-500">
                              <Icon className={`w-6 h-6 ${service.color} group-hover:scale-110 transition-transform duration-300`} />
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                          <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
                            {service.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground/80 transition-colors">
                            {service.description}
                          </p>
                          
                          {/* Bottom Link Indicator */}
                          <div className="flex items-center gap-2 text-sm font-medium text-foreground/60 group-hover:text-primary transition-colors">
                            <span className="uppercase tracking-wider text-xs">Learn More</span>
                            <div className="w-8 h-px bg-border group-hover:bg-primary transition-colors" />
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>

                        {/* Hover Overlay Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/2 group-hover:via-primary/1 group-hover:to-primary/2 transition-all duration-500 pointer-events-none" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8 sm:mt-12"
          >
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-3 sm:mb-4">
              Why Choose <span className="text-primary">Pristine?</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by communities across the UAE for excellence in management
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-6 rounded-xl bg-background/50 border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="text-4xl font-bold text-primary mb-3">{highlight.icon}</div>
                <h3 className="text-lg font-heading font-semibold mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <section ref={featuresRef} className="py-12 sm:py-16 lg:py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8 sm:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4 sm:mb-6">
              <span className="w-8 sm:w-12 h-px bg-border" />
              <span>Our Approach</span>
              <span className="w-8 sm:w-12 h-px bg-border" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-3 sm:mb-4">
              Building Better
              <br />
              <span className="text-primary">Communities</span>
            </h2>
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
      <section ref={testimonialsRef.ref} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/5 to-secondary/5 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={testimonialsRef.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <div className="flex items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4 sm:mb-6">
              <span className="w-8 sm:w-12 h-px bg-border" />
              <span>Testimonials</span>
              <span className="w-8 sm:w-12 h-px bg-border" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-3 sm:mb-4">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by communities across the UAE
            </p>
          </motion.div>

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
                <Card className="p-6 sm:p-8 h-full border-border/50">
                  <p className="text-base sm:text-lg mb-4 sm:mb-6 italic text-foreground/90">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Latest News & Blog Highlights */}
      <section ref={blogRef} className="py-12 sm:py-16 lg:py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={blogInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <div className="flex items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4 sm:mb-6">
              <span className="w-8 sm:w-12 h-px bg-border" />
              <span>Latest News</span>
              <span className="w-8 sm:w-12 h-px bg-border" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-3 sm:mb-4">
              Insights & <span className="text-primary">Updates</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay informed with the latest news, insights, and best practices in community management
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={blogInView ? "visible" : "hidden"}
          >
            {latestBlogPosts.map((post, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <Link to={post.path}>
                  <Card className="group h-full overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer">
                    <div className="relative h-48 overflow-hidden bg-muted">
                      <motion.img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={blogInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-medium bg-background/90 backdrop-blur-sm rounded-full border border-border/50">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={blogInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8 sm:mt-12"
          >
            <Button size="lg" variant="outline" asChild>
              <Link to="/blog">
                View All News & Blog
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6">
              Ready to Transform
              <br />
              <span className="text-primary">Your Community?</span>
            </h2>
            <motion.p 
              className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Let us help you create a thriving, well-managed community that residents love to call home.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button size="lg" variant="default" asChild className="group">
                <Link to="/contact">
                  Schedule a Consultation
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
    </>
  );
};

export default Home;
