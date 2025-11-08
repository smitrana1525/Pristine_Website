import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SEO from "@/components/SEO";
import { seoConfig } from "@/utils/seoData";

const Contact = () => {
  const formRef = useScrollAnimation();
  
  // Framer Motion refs
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const contactInfoRef = useRef(null);
  const contactInfoInView = useInView(contactInfoRef, { once: true, margin: "-100px" });
  const mapRef = useRef(null);
  const mapInView = useInView(mapRef, { once: true });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={seoConfig.contact.title}
        description={seoConfig.contact.description}
        keywords={seoConfig.contact.keywords}
        structuredData={seoConfig.contact.structuredData}
        url="https://pristine.ae/contact"
      />
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-center overflow-hidden pt-16 sm:pt-20">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 w-full">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4 sm:mb-6">
                <span className="w-8 sm:w-12 h-px bg-border" />
                <span>Contact Us</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold leading-[0.95] tracking-tight mb-6 sm:mb-8">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="block"
                >
                  Let's Start
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="block text-primary"
                >
                  a Conversation
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl"
              >
                Let's discuss how we can help transform your community. Our team is ready to assist you.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-24">
              {/* Contact Info */}
              <motion.div 
                ref={contactInfoRef}
                initial={{ opacity: 0, x: -60 }}
                animate={contactInfoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-12"
              >
                <div>
                  <div className="flex items-center gap-4 text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">
                    <span className="w-12 h-px bg-border" />
                    <span>Get in Touch</span>
                  </div>
                  <h2 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold leading-[0.95] tracking-tight mb-6">
                    Contact Information
                  </h2>
                  <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                    Reach out to us through any of the following channels. Our team is ready to assist you.
                  </p>
                </div>

                <div className="space-y-8">
                  {[
                    { icon: MapPin, title: "Office Location", content: "Dubai, United Arab Emirates\nBusiness Bay Area" },
                    { icon: Phone, title: "Phone", content: "+971 XX XXX XXXX\n+971 XX XXX XXXX (Emergency)" },
                    { icon: Mail, title: "Email", content: "info@pristine.ae\nsupport@pristine.ae" },
                    { icon: Clock, title: "Business Hours", content: "Saturday - Thursday: 8:00 AM - 6:00 PM\nFriday: Closed\nEmergency Support: 24/7" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="flex gap-6">
                        <div className="flex-shrink-0 pt-1">
                          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <item.icon className="w-7 h-7 text-primary" strokeWidth={2} />
                          </div>
                        </div>
                        <div className="flex-1 space-y-1">
                          <h3 className="text-xl font-heading font-bold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div 
                ref={formRef.ref}
                initial={{ opacity: 0, x: 60 }}
                animate={formRef.isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-4 text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">
                      <span className="w-12 h-px bg-border" />
                      <span>Send Message</span>
                    </div>
                    <h2 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold leading-[0.95] tracking-tight">
                      Get in Touch
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-foreground">First Name</label>
                        <Input 
                          placeholder="John" 
                          required 
                          className="h-12 rounded-xl border-border focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-foreground">Last Name</label>
                        <Input 
                          placeholder="Doe" 
                          required 
                          className="h-12 rounded-xl border-border focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-foreground">Email</label>
                      <Input 
                        type="email" 
                        placeholder="john@example.com" 
                        required 
                        className="h-12 rounded-xl border-border focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-foreground">Phone</label>
                      <Input 
                        type="tel" 
                        placeholder="+971 XX XXX XXXX" 
                        required 
                        className="h-12 rounded-xl border-border focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-foreground">Subject</label>
                      <Input 
                        placeholder="How can we help you?" 
                        required 
                        className="h-12 rounded-xl border-border focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-foreground">Message</label>
                      <Textarea
                        placeholder="Tell us more about your community management needs..."
                        rows={6}
                        required
                        className="rounded-xl border-border focus:ring-2 focus:ring-primary resize-none"
                      />
                    </div>

                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="pt-4"
                    >
                      <Button type="submit" size="lg" className="w-full text-lg px-8 py-6 h-auto rounded-xl">
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section ref={mapRef} className="py-32 lg:py-40 border-t border-border">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={mapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <div className="flex items-center gap-4 text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">
                  <span className="w-12 h-px bg-border" />
                  <span>Find Us</span>
                </div>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold leading-[0.95] tracking-tight">
                  Our Location
                </h2>
              </div>

              <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462565.91384445744!2d54.89782859999999!3d25.0762095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pristine Location Map"
                  className="absolute inset-0"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
