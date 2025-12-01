import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { fetchBlogs, BlogApiItem } from "@/api/blog";

type BlogCard = {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
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
      <section ref={heroRef} className="relative min-h-[80vh] flex items-center overflow-hidden pt-16 sm:pt-20">
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
                <span>Blog & News</span>
              </div>
              
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-heading font-bold leading-[0.95] tracking-tight mb-8">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="block"
                >
                  Insights &
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="block text-primary"
                >
                  Updates
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-3xl"
              >
                Expert insights, practical tips, and the latest updates from the world of community management.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section ref={postsRef.ref} className="py-32 lg:py-40 border-t border-border">
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
                <span>Latest Articles</span>
              </div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold leading-[0.95] tracking-tight max-w-3xl">
                Featured Posts
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {!isLoading && hasError && blogPosts.length === 0 && (
                <div className="col-span-full text-center text-muted-foreground">
                  Unable to load blog posts. Please try again later.
                </div>
              )}
              {blogPosts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <article className="h-full flex flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-muted">
                      <motion.img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex-1 flex flex-col space-y-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <span className="w-1 h-1 rounded-full bg-border" />
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-heading font-bold leading-tight group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed flex-1">
                        {post.excerpt}
                      </p>
                      
                      <Button 
                        variant="ghost" 
                        className="group/btn p-0 h-auto w-fit text-foreground hover:text-primary"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </article>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section ref={newsletterRef} className="py-32 lg:py-40 border-t border-border">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={newsletterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-4 text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">
                <span className="w-12 h-px bg-border" />
                <span>Stay Connected</span>
              </div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold leading-[0.95] tracking-tight mb-8">
                Stay Updated
              </h2>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-2xl">
                Subscribe to our newsletter for the latest insights and updates in community management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-base"
                />
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button size="lg" className="text-lg px-8 py-4 h-auto rounded-xl">
                    Subscribe
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
