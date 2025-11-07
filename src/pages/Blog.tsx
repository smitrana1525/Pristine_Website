import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import community1 from "@/assets/community-1.jpg";
import community2 from "@/assets/community-2.jpg";
import community3 from "@/assets/community-3.jpg";

const Blog = () => {
  const postsRef = useScrollAnimation();

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
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-in">
              Blog & News
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up">
              Insights, tips, and updates from the world of community management
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section ref={postsRef.ref} className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className={`overflow-hidden hover-lift group ${
                  postsRef.isVisible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
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
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-muted to-background">
        <div className="container mx-auto px-4">
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
              <Button size="lg">Subscribe</Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Blog;
