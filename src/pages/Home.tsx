import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, ChevronDown, Building2, DollarSign, Wrench, Shield, MessageSquare, Laptop, FileCheck, Calendar, User, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";
import heroImage from "@/assets/hero-cityscape.jpg";
import community1Image from "@/assets/community-1.jpg";
import community2Image from "@/assets/community-2.jpg";
import community3Image from "@/assets/community-3.jpg";
import teamImage from "@/assets/about-team.jpg";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SEO from "@/components/SEO";
import { seoConfig } from "@/utils/seoData";
import { fetchBlogs, BlogApiItem } from "@/api/blog";
import { fetchTestimonials, TestimonialApiItem } from "@/api/testimonial";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type LatestBlogCard = {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  path: string;
};

type TestimonialCard = {
  text: string;
  author: string;
  role?: string;
};

type Stat = {
  value: number;
  label: string;
  suffix: string;
};

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

  const formatBlogDate = (isoDate?: string | null) => {
    if (!isoDate) return "";
    const date = new Date(isoDate);
    if (Number.isNaN(date.getTime())) return "";
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const [latestBlogPosts, setLatestBlogPosts] = useState<LatestBlogCard[]>([]);
  const [testimonials, setTestimonials] = useState<TestimonialCard[]>([]);
  const [testimonialCarouselApi, setTestimonialCarouselApi] = useState<CarouselApi | null>(null);

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

  // Auto-slide testimonials carousel
  useEffect(() => {
    if (!testimonialCarouselApi || testimonials.length === 0) return;

    const interval = setInterval(() => {
      testimonialCarouselApi.scrollNext();
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [testimonialCarouselApi, testimonials.length]);

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const StatCard = ({ stat, isVisible }: { stat: Stat; isVisible: boolean }) => {
    const count = useCountUp(stat.value, 2000, isVisible);
  
    return (
      <motion.div
        className="text-center"
        variants={scaleIn}
      >
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gradient mb-1 sm:mb-2 tracking-tight">
          {count}
          {stat.suffix}
        </div>
        <div className="text-xs sm:text-sm md:text-base text-muted-foreground leading-tight">
          {stat.label}
        </div>
      </motion.div>
    );
  };

  const stats: Stat[] = [
    { value: 20, label: "Years of Experience", suffix: "+" },
    { value: 100, label: "Communities Managed", suffix: "+" },
    { value: 5000, label: "Happy Residents", suffix: "+" },
    { value: 98, label: "Client Satisfaction", suffix: "%" },
  ];

  const quickServices = [
    {
      icon: Building2,
      title: "Compliance & Governance",
      description: "Complete governance and board support",
      path: "/services/owners-association-management",
      gradient: "from-blue-500/10 via-primary/5 to-blue-500/20",
      accent: "text-blue-600"
    },
    {
      icon: DollarSign,
      title: "Financial Management",
      description: "Budgeting, accounting & compliance",
      path: "/services/financial-administrative-services",
      gradient: "from-emerald-500/10 via-secondary/5 to-emerald-500/20",
      accent: "text-emerald-600"
    },
    {
      icon: Wrench,
      title: "Facility & Operations Management",
      description: "Maintenance & operations oversight",
      path: "/services/facilities-management",
      gradient: "from-orange-500/10 via-primary/5 to-orange-500/20",
      accent: "text-orange-600"
    },
    {
      icon: Shield,
      title: "Health, Safety & Risk Management",
      description: "HSE audits & compliance",
      path: "/services/health-safety-compliance",
      gradient: "from-rose-500/10 via-secondary/5 to-rose-500/20",
      accent: "text-rose-600"
    },
  ];

  const highlights = [
    {
      title: "CAI M-100",
      description: "The Essentials of Community Association Management",
      gradient: "from-blue-100/60 via-blue-50/40 to-transparent"
    },
    {
      title: "CAI M-201",
      description: "Facilities Management",
      gradient: "from-blue-100/60 via-blue-50/40 to-transparent"
    },
    {
      title: "CAI M-202",
      description: "Association Communications for Jointly-Owned Properties",
      gradient: "from-amber-100/60 via-amber-50/40 to-transparent"
    },
    {
      title: "CAI M-203",
      description: "Community Leadership",
      gradient: "from-emerald-100/60 via-emerald-50/40 to-transparent"
    },
    {
      title: "REI Innovation Expert",
      description: "Excellence in Community Association Management",
      gradient: "from-blue-100/60 via-blue-50/40 to-transparent"
    },
  ];

  useEffect(() => {
    let isMounted = true;

    const loadLatestBlogs = async () => {
      try {
        const blogs = await fetchBlogs();
        if (!isMounted) return;

        const sorted = [...blogs].sort((a: BlogApiItem, b: BlogApiItem) => {
          const aTime = a.dtPublishedOn ? new Date(a.dtPublishedOn).getTime() : 0;
          const bTime = b.dtPublishedOn ? new Date(b.dtPublishedOn).getTime() : 0;
          return bTime - aTime;
        });

        const topThree = sorted.slice(0, 3);

        const mapped: LatestBlogCard[] = topThree.map((blog, index) => ({
          title: blog.strTitle,
          excerpt: blog.strDescription,
          date: formatBlogDate(blog.dtPublishedOn),
          category: blog.strCategoryName || "",
          image:
            blog.strBlogImage ||
            (index === 0
              ? community1Image
              : index === 1
              ? community2Image
              : community3Image),
          path: blog.strSlug ? `/blog/${blog.strSlug}` : "/blog",
        }));

        setLatestBlogPosts(mapped);
      } catch (error) {
        console.error("Failed to load latest blogs", error);
      }
    };

    void loadLatestBlogs();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    const loadTestimonials = async () => {
      try {
        const items = await fetchTestimonials();
        if (!isMounted) return;

        const mapped: TestimonialCard[] = items.map((t: TestimonialApiItem) => ({
          text: t.strTestimonialContent,
          author: t.strPersonName,
          role: t.strPersonDesignation || t.strCompanyName || "",
        }));

        setTestimonials(mapped);
      } catch (error) {
        console.error("Failed to load testimonials", error);
      }
    };

    void loadTestimonials();

    return () => {
      isMounted = false;
    };
  }, []);

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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-4 sm:mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Building Better Communities,
            <motion.span 
              className="block mt-2 text-secondary font-accent text-5xl sm:text-6xl lg:text-7xl leading-tight"
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
            <span className="font-accent text-secondary text-2xl md:text-3xl mr-2">Excellence</span>
            in owners association management services across UAE. Over 20 years of{" "}
            <span className="font-accent text-secondary text-2xl md:text-3xl">trusted expertise</span>.
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
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} isVisible={statsRef.isVisible} />
            ))}
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-3 sm:mb-4 tracking-tight">
              Comprehensive Management
              <br />
              <span className="text-primary font-accent text-4xl sm:text-5xl lg:text-6xl">Solutions</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              End-to-end services designed to keep communities <span className="font-accent text-secondary text-xl sm:text-2xl">safe, compliant, and sustainable</span> across the UAE.
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
                      <div className="relative h-full p-8 rounded-3xl border border-border/40 bg-gradient-to-br from-background via-background/90 to-muted/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-5xl font-heading font-bold text-foreground/5 leading-none tracking-tight">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>

                        <div className="mb-6 relative">
                          <div
                            className={`w-16 h-16 rounded-2xl border border-white/40 flex items-center justify-center transition-all duration-500 group-hover:scale-105 shadow-inner bg-gradient-to-br ${service.gradient}`}
                          >
                            <Icon className={`w-7 h-7 ${service.accent}`} />
                          </div>
                          <div className="absolute -bottom-3 left-0 w-12 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
                        </div>

                        <div className="relative z-10 space-y-4">
                          <h3 className="text-xl font-heading font-bold group-hover:text-primary transition-colors duration-300 leading-tight tracking-tight">
                            {service.title}
                          </h3>
                          <p className="text-sm text-foreground/70 leading-relaxed group-hover:text-foreground/90 transition-colors">
                            {service.description}
                          </p>
                          <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                            <span className="uppercase tracking-widest text-xs">Learn More</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
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
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-3 sm:mb-4 tracking-tight">
              Professional <span className="text-primary font-accent text-4xl sm:text-5xl">Certifications</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Globally recognized CAI and REI programs that keep our expertise <span className="font-accent text-secondary text-xl sm:text-2xl">ahead of industry standards</span>
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-border/30 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 text-center"
              >
                <div className={`mx-auto mb-5 w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br ${highlight.gradient} border border-border/20 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 via-yellow-300/10 to-transparent" />
                  <Award className="w-7 h-7 text-blue-700 relative z-10" strokeWidth={2.5} style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))' }} />
                </div>
                <h3 className="text-base sm:text-lg font-heading font-semibold mb-3 tracking-tight text-foreground">{highlight.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{highlight.description}</p>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-3 sm:mb-4 tracking-tight">
              Building Better
              <br />
              <span className="text-primary font-accent text-4xl sm:text-5xl lg:text-6xl">Communities</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Comprehensive community management solutions backed by <span className="font-accent text-secondary text-xl sm:text-2xl">decades of excellence</span>
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
                      <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors duration-300 tracking-tight">
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-3 sm:mb-4 tracking-tight">
              What Our <span className="text-primary font-accent text-4xl sm:text-5xl lg:text-6xl">Clients Say</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by communities across the UAE
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={testimonialsRef.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <Carousel
              className="max-w-6xl mx-auto"
              opts={{ loop: true, align: "start" }}
              setApi={setTestimonialCarouselApi}
            >
              <CarouselContent className="md:-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 flex">
                    <motion.div
                      className="w-full"
                      variants={fadeInUp}
                      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    >
                      <Card className="p-6 sm:p-8 h-full flex flex-col justify-between border-border/50">
                        <p className="text-base sm:text-lg mb-4 sm:mb-6 italic text-foreground/90 line-clamp-4">
                          "{testimonial.text}"
                        </p>
                        <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <User className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-heading font-semibold text-foreground tracking-tight">
                              {testimonial.author}
                            </div>
                            <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-3 sm:mb-4 tracking-tight">
              Insights & <span className="text-primary font-accent text-4xl sm:text-5xl lg:text-6xl">Updates</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay informed with the latest news, insights, and best practices in <span className="font-accent text-secondary text-xl sm:text-2xl">community management</span>
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
                  <Card className="group h-full flex flex-col overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer">
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
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                    <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2 tracking-tight">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="mt-auto flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6 tracking-tight">
              Ready to Transform
              <br />
              <span className="text-primary font-accent text-4xl sm:text-5xl lg:text-6xl">Your Community?</span>
            </h2>
            <motion.p 
              className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Let us help you create a <span className="font-premium text-primary text-2xl md:text-3xl">thriving, well-managed community</span> that residents love to call home.
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
