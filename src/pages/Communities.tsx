import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import community1 from "@/assets/community-1.jpg";
import community2 from "@/assets/community-2.jpg";
import community3 from "@/assets/community-3.jpg";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Communities = () => {
  const communitiesRef = useScrollAnimation();
  
  // Framer Motion refs
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

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
    <div>
      {/* Hero Section */}
      <section ref={heroRef} className="pt-16 sm:pt-20 pb-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-6xl font-heading font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              Our Communities
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Proudly managing over 100 thriving communities across the UAE
            </motion.p>
          </div>
        </div>
      </section>

      {/* Communities Grid */}
      <section ref={communitiesRef.ref} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={communitiesRef.isVisible ? "visible" : "hidden"}
          >
            {communities.map((community, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card className="overflow-hidden hover-lift group h-full">
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={community.image}
                      alt={community.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                      <h3 className="text-2xl font-heading font-bold mb-2">{community.name}</h3>
                      <div className="flex items-center text-sm">
                        <div className="w-6 h-6 bg-primary-foreground/20 rounded-md flex items-center justify-center mr-2">
                          <MapPin className="w-3.5 h-3.5 text-primary-foreground" />
                        </div>
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-gradient-to-br from-primary to-primary-hover text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-heading font-bold mb-6">
              Trusted by Communities Across the UAE
            </h2>
            <p className="text-lg opacity-90 mb-12">
              From luxury high-rises to family villa communities, we provide exceptional management services that
              residents love.
            </p>
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="hidden"
              animate={statsInView ? "visible" : "hidden"}
            >
              {[
                { value: "100+", label: "Communities" },
                { value: "12", label: "Emirates" },
                { value: "5K+", label: "Residents" },
                { value: "98%", label: "Satisfaction" },
              ].map((stat, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <div className="text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Communities;
