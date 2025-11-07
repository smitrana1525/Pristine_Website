import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Building2, Users, Shield, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";
import heroImage from "@/assets/hero-cityscape.jpg";

const Home = () => {
  const statsRef = useScrollAnimation();
  const testimonialsRef = useScrollAnimation();

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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-32 text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground mb-6 animate-fade-in">
            Building Better Communities,
            <span className="block text-secondary mt-2">Together</span>
          </h1>
          <p
            className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-12 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Excellence in owners association management services across UAE. Over 20 years of trusted expertise.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up"
            style={{ animationDelay: "0.4s" }}
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
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef.ref} className="py-20 bg-gradient-to-br from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const count = useCountUp(stat.value, 2000, statsRef.isVisible);
              return (
                <div
                  key={index}
                  className={`text-center ${statsRef.isVisible ? "animate-scale-in" : "opacity-0"}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-5xl md:text-6xl font-heading font-bold text-gradient mb-2">
                    {count}
                    {stat.suffix}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Why Choose Pristine?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive community management solutions backed by decades of excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Building2, title: "Expert Management", desc: "Professional oversight of all community operations" },
              { icon: Users, title: "Community Focus", desc: "Building strong relationships with residents" },
              { icon: Shield, title: "Legal Compliance", desc: "Full adherence to UAE regulations" },
              { icon: TrendingUp, title: "Value Enhancement", desc: "Maximizing property values through excellence" },
            ].map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover-lift border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef.ref} className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16">
            What Our Clients Say
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`p-8 ${testimonialsRef.isVisible ? "animate-slide-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <p className="text-lg mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-hover text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Ready to Transform Your Community?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let us help you create a thriving, well-managed community that residents love to call home.
          </p>
          <Button size="lg" variant="secondary" asChild className="group">
            <Link to="/contact">
              Schedule a Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;
