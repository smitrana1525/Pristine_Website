import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import community1 from "@/assets/community-1.jpg";
import community2 from "@/assets/community-2.jpg";
import community3 from "@/assets/community-3.jpg";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Blog = () => {
  const postsRef = useScrollAnimation();
  
  // Framer Motion refs
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const newsletterRef = useRef(null);
  const newsletterInView = useInView(newsletterRef, { once: true });

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

  const blogPosts = [
    {
      title: "Understanding RERA Regulations for Community Management",
      excerpt:
        "A comprehensive guide to navigating UAE real estate regulations and ensuring your community stays compliant.",
      image: community1,
      date: "March 15, 2024",
      author: "Legal Team",
      category: "Legal & Compliance",
    },
    {
      title: "5 Ways to Increase Property Values in Your Community",
      excerpt:
        "Expert strategies for enhancing your community's appeal and boosting property values for all residents.",
      image: community2,
      date: "March 10, 2024",
      author: "Management Team",
      category: "Property Management",
    },
    {
      title: "The Importance of Preventive Maintenance",
      excerpt:
        "How regular maintenance schedules can save costs and prevent major issues in your community.",
      image: community3,
      date: "March 5, 2024",
      author: "Technical Team",
      category: "Maintenance",
    },
    {
      title: "Building Stronger Community Relationships",
      excerpt:
        "Tips and strategies for fostering better communication and engagement among residents.",
      image: community1,
      date: "February 28, 2024",
      author: "Community Relations",
      category: "Community Building",
    },
    {
      title: "Financial Planning for Owners Associations",
      excerpt:
        "Best practices for budgeting, reserve funds, and financial transparency in community management.",
      image: community2,
      date: "February 20, 2024",
      author: "Finance Team",
      category: "Financial Management",
    },
    {
      title: "Smart Technology in Modern Communities",
      excerpt:
        "Exploring how digital solutions are transforming community management and resident experiences.",
      image: community3,
      date: "February 15, 2024",
      author: "Technology Team",
      category: "Innovation",
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
              Blog & News
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Insights, tips, and updates from the world of community management
            </motion.p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section ref={postsRef.ref} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={postsRef.isVisible ? "visible" : "hidden"}
          >
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card className="overflow-hidden hover-lift group h-full">
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-gradient-to-br from-primary to-primary-hover rounded-md flex items-center justify-center mr-2">
                          <Calendar className="w-3.5 h-3.5 text-primary-foreground" />
                        </div>
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-gradient-to-br from-secondary to-secondary-hover rounded-md flex items-center justify-center mr-2">
                          <User className="w-3.5 h-3.5 text-secondary-foreground" />
                        </div>
                        {post.author}
                      </div>
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <Button variant="ghost" className="group/btn p-0 h-auto">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section ref={newsletterRef} className="py-20 bg-gradient-to-br from-muted to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={newsletterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="max-w-3xl mx-auto p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Stay Updated
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Subscribe to our newsletter for the latest insights and updates in community management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg">Subscribe</Button>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
