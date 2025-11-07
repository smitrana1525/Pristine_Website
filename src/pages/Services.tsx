import { Card } from "@/components/ui/card";
import {
  Building2,
  DollarSign,
  Users,
  Wrench,
  FileText,
  MessageSquare,
  Shield,
  TrendingUp,
  Phone,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const servicesRef = useScrollAnimation();

  const services = [
    {
      icon: DollarSign,
      title: "Financial Management",
      description:
        "Comprehensive budgeting, accounting, and financial reporting services. We ensure transparent financial operations and optimal resource allocation.",
      features: ["Budget Planning", "Financial Reporting", "Collections Management", "Reserve Fund Analysis"],
    },
    {
      icon: Wrench,
      title: "Property Maintenance",
      description:
        "Proactive maintenance programs to keep your community in pristine condition. From routine inspections to emergency repairs.",
      features: ["Preventive Maintenance", "Vendor Management", "Quality Control", "Emergency Response"],
    },
    {
      icon: FileText,
      title: "Legal & Compliance",
      description:
        "Full compliance with UAE regulations including RERA requirements. Expert handling of all legal documentation and procedures.",
      features: ["RERA Compliance", "Contract Management", "Insurance Coordination", "Regulatory Reporting"],
    },
    {
      icon: Users,
      title: "Community Relations",
      description:
        "Building strong relationships between residents, board members, and management through effective communication and engagement.",
      features: ["Resident Portal", "Board Support", "Conflict Resolution", "Community Events"],
    },
    {
      icon: Shield,
      title: "Security Management",
      description:
        "Comprehensive security solutions to ensure the safety and well-being of all residents and their properties.",
      features: ["Access Control", "CCTV Monitoring", "Security Personnel", "Emergency Protocols"],
    },
    {
      icon: Building2,
      title: "Facility Management",
      description:
        "Expert management of all community facilities including pools, gyms, gardens, and common areas.",
      features: ["Facility Operations", "Equipment Maintenance", "Amenity Management", "Landscaping"],
    },
    {
      icon: MessageSquare,
      title: "Communication Services",
      description:
        "Modern communication tools and strategies to keep residents informed and engaged with their community.",
      features: ["Digital Notices", "Resident App", "Email Updates", "Social Media"],
    },
    {
      icon: TrendingUp,
      title: "Property Enhancement",
      description:
        "Strategic planning and implementation of improvement projects to enhance property values and resident satisfaction.",
      features: ["Capital Projects", "Renovation Planning", "Value Engineering", "ROI Analysis"],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-in">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up">
              Comprehensive community management solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef.ref} className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`p-8 hover-lift group ${servicesRef.isVisible ? "animate-slide-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-muted to-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-12 text-center">
            <Phone className="w-16 h-16 text-secondary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every community is unique. Let us create a tailored management plan that perfectly fits your needs.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;
