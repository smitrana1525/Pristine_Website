import { Card } from "@/components/ui/card";
import { Award, Target, Eye, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import aboutImage from "@/assets/about-team.jpg";

const About = () => {
  const missionRef = useScrollAnimation();
  const valuesRef = useScrollAnimation();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-in">
              About Pristine
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up">
              Building excellence in community management since 2004
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
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
                  <Award className="w-6 h-6 text-secondary" />
                  <span className="font-semibold">CAI Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-6 h-6 text-secondary" />
                  <span className="font-semibold">RERA Registered</span>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <img
                src={aboutImage}
                alt="Our Team"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionRef.ref} className="py-20 bg-gradient-to-br from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card
              className={`p-8 ${missionRef.isVisible ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: "0s" }}
            >
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver exceptional community management services that enhance property values, foster harmonious
                living environments, and exceed the expectations of residents and property owners throughout the UAE.
              </p>
            </Card>

            <Card
              className={`p-8 ${missionRef.isVisible ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be recognized as the leading community management company in the UAE, setting the standard for
                excellence, innovation, and resident satisfaction across all communities we serve.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section ref={valuesRef.ref} className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
              <Card
                key={index}
                className={`p-6 text-center hover-lift ${valuesRef.isVisible ? "animate-slide-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-heading font-semibold mb-3 text-gradient">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
