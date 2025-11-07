import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import community1 from "@/assets/community-1.jpg";
import community2 from "@/assets/community-2.jpg";
import community3 from "@/assets/community-3.jpg";

const Communities = () => {
  const communitiesRef = useScrollAnimation();

  const communities = [
    {
      name: "Palm Gardens Residence",
      location: "Dubai Marina",
      image: community1,
      units: "450 Units",
      type: "Residential",
    },
    {
      name: "Azure Heights Tower",
      location: "Business Bay",
      image: community2,
      units: "320 Units",
      type: "Mixed Use",
    },
    {
      name: "Serenity Villas",
      location: "Arabian Ranches",
      image: community3,
      units: "180 Villas",
      type: "Luxury Villas",
    },
    {
      name: "Marina Plaza",
      location: "Jumeirah Beach Residence",
      image: community1,
      units: "275 Units",
      type: "Residential",
    },
    {
      name: "Downtown Elite",
      location: "Downtown Dubai",
      image: community2,
      units: "520 Units",
      type: "High-Rise",
    },
    {
      name: "Green Valley Community",
      location: "Dubai Hills Estate",
      image: community3,
      units: "350 Units",
      type: "Family Community",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-in">
              Our Communities
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up">
              Proudly managing over 100 thriving communities across the UAE
            </p>
          </div>
        </div>
      </section>

      {/* Communities Grid */}
      <section ref={communitiesRef.ref} className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communities.map((community, index) => (
              <Card
                key={index}
                className={`overflow-hidden hover-lift group ${
                  communitiesRef.isVisible ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={community.image}
                    alt={community.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                    <h3 className="text-2xl font-heading font-bold mb-2">{community.name}</h3>
                    <div className="flex items-center text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {community.location}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-muted-foreground">Size</div>
                      <div className="font-semibold">{community.units}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Type</div>
                      <div className="font-semibold">{community.type}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-hover text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold mb-6">
              Trusted by Communities Across the UAE
            </h2>
            <p className="text-lg opacity-90 mb-12">
              From luxury high-rises to family villa communities, we provide exceptional management services that
              residents love.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-5xl font-bold mb-2">100+</div>
                <div className="text-sm opacity-80">Communities</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">12</div>
                <div className="text-sm opacity-80">Emirates</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">5K+</div>
                <div className="text-sm opacity-80">Residents</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">98%</div>
                <div className="text-sm opacity-80">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Communities;
