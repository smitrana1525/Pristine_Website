import { Card } from "@/components/ui/card";
import { CheckCircle2, Award, Users, Clock, Shield, TrendingUp, Heart, Headphones } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WhyUs = () => {
  const featuresRef = useScrollAnimation();
  const benefitsRef = useScrollAnimation();

  const differentiators = [
    {
      icon: Award,
      title: "20+ Years of Excellence",
      description: "Two decades of proven expertise in community management across the UAE.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly trained professionals dedicated to delivering exceptional service.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock availability for emergencies and urgent matters.",
    },
    {
      icon: Shield,
      title: "Full Compliance",
      description: "100% adherence to RERA regulations and UAE legal requirements.",
    },
    {
      icon: TrendingUp,
      title: "Proven Track Record",
      description: "98% client satisfaction rate and consistent 5-star reviews.",
    },
    {
      icon: Heart,
      title: "Community Focused",
      description: "We genuinely care about creating thriving, harmonious communities.",
    },
    {
      icon: Headphones,
      title: "Responsive Service",
      description: "Average response time under 2 hours for all inquiries.",
    },
    {
      icon: CheckCircle2,
      title: "Transparent Operations",
      description: "Clear communication and complete transparency in all dealings.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-in">
              Why Choose Pristine?
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up">
              Experience the difference that true excellence makes
            </p>
          </div>
        </div>
      </section>

      {/* Differentiators Grid */}
      <section ref={featuresRef.ref} className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">What Sets Us Apart</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the unique advantages of partnering with Pristine
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item, index) => (
              <Card
                key={index}
                className={`p-6 text-center hover-lift ${
                  featuresRef.isVisible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef.ref} className="py-20 bg-gradient-to-br from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-center mb-16">
              The Pristine Advantage
            </h2>

            <div className="space-y-6">
              {[
                {
                  title: "Enhanced Property Values",
                  description:
                    "Our professional management approach consistently leads to increased property values and higher resale prices.",
                },
                {
                  title: "Peace of Mind",
                  description:
                    "Sleep easy knowing your community is in expert hands with proactive management and immediate response to issues.",
                },
                {
                  title: "Cost Efficiency",
                  description:
                    "Strategic vendor relationships and efficient operations result in significant cost savings for your community.",
                },
                {
                  title: "Harmonious Living",
                  description:
                    "Our community-first approach fosters positive relationships and reduces conflicts among residents.",
                },
                {
                  title: "Technology Integration",
                  description:
                    "Modern digital platforms for communication, payments, and service requests make management effortless.",
                },
                {
                  title: "Continuous Improvement",
                  description:
                    "Regular assessments and upgrades ensure your community stays competitive and well-maintained.",
                },
              ].map((benefit, index) => (
                <Card
                  key={index}
                  className={`p-6 flex items-start space-x-4 ${
                    benefitsRef.isVisible ? "animate-slide-in-left" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-12 text-center bg-gradient-to-br from-primary/5 to-secondary/5">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Experience Excellence?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join over 100 communities who trust Pristine for their management needs.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
