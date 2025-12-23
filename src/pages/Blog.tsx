import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { fetchBlogs, BlogApiItem } from "@/api/blog";

type BlogCard = {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  slug: string;
};

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

const Blog = () => {
  const postsRef = useScrollAnimation();
  const [blogPosts, setBlogPosts] = useState<BlogCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  
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

  useEffect(() => {
    let isMounted = true;

    const loadBlogs = async () => {
      try {
        setIsLoading(true);
        setHasError(false);

        const blogs = await fetchBlogs();

        if (!isMounted) return;

        const sorted = [...blogs].sort((a: BlogApiItem, b: BlogApiItem) => {
          const aTime = a.dtPublishedOn ? new Date(a.dtPublishedOn).getTime() : 0;
          const bTime = b.dtPublishedOn ? new Date(b.dtPublishedOn).getTime() : 0;
          return bTime - aTime;
        });

        const mapped: BlogCard[] = sorted.map((blog) => ({
          title: blog.strTitle,
          excerpt: blog.strDescription,
          image: blog.strBlogImage || "",
          date: formatBlogDate(blog.dtPublishedOn),
          author: blog.strAuthorName || "",
          category: blog.strCategoryName || "",
          slug: blog.strSlug || blog.strBlogGUID,
        }));

        setBlogPosts(mapped);
      } catch (error) {
        console.error("Failed to load blogs", error);
        if (isMounted) {
          setHasError(true);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    void loadBlogs();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-28 pb-12 sm:pb-16 md:pt-32 md:pb-20 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4 sm:mb-6">
                <span className="w-8 sm:w-12 h-px bg-border" />
                <span>Blog & News</span>
                <span className="w-8 sm:w-12 h-px bg-border" />
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight tracking-tight">
                Insights &{" "}
                <span className="text-primary font-accent text-4xl sm:text-5xl lg:text-6xl">Updates</span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
              >
                Expert insights, practical tips, and the latest updates from the world of community management.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section ref={postsRef.ref} className="py-12 sm:py-16 lg:py-20 bg-white border-t border-border">
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
              <span>Latest Articles</span>
              <span className="w-8 sm:w-12 h-px bg-border" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight">
              Featured <span className="text-primary font-accent text-4xl sm:text-5xl lg:text-6xl">Posts</span>
            </h2>
          </motion.div>

          {isLoading && (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">Loading blog posts...</p>
            </div>
          )}
          {!isLoading && hasError && blogPosts.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">Unable to load blog posts. Please try again later.</p>
            </div>
          )}
          {!isLoading && !hasError && blogPosts.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">No blog posts available at the moment.</p>
            </div>
          )}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group"
              >
                <Link to={`/blog/${post.slug}`}>
                  <Card className="group h-full flex flex-col overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer">
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      <motion.img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        initial={{ opacity: 0, scale: 1.05 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
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
                        {post.author && (
                          <>
                            <span className="w-1 h-1 rounded-full bg-border" />
                            <div className="flex items-center gap-2">
                              <User className="w-3 h-3" />
                              <span>{post.author}</span>
                            </div>
                          </>
                        )}
                      </div>
                      
                      <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2 tracking-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4 flex-1">
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
        </div>
      </section>

      {/* Newsletter Section */}
      <section ref={newsletterRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-background border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={newsletterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4 sm:mb-6">
              <span className="w-8 sm:w-12 h-px bg-border" />
              <span>Stay Connected</span>
              <span className="w-8 sm:w-12 h-px bg-border" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6 tracking-tight">
              Stay <span className="text-primary font-accent text-4xl sm:text-5xl lg:text-6xl">Updated</span>
            </h2>
            <motion.p 
              className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={newsletterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Subscribe to our newsletter for the latest insights and updates in community management.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={newsletterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-base"
              />
              <Button size="lg" className="px-6 sm:px-8">
                Subscribe
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
