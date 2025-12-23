import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import SEO from "@/components/SEO";
import { seoConfig } from "@/utils/seoData";
import { submitContact } from "@/api/contact";

const Contact = () => {
  const formRef = useScrollAnimation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    try {
      setIsSubmitting(true);
      await submitContact({
        strFirstName: firstName,
        strLastName: lastName,
        strEmail: email,
        strPhone: phone || undefined,
        strSubject: subject,
        strMessage: message,
      });

      toast.success("Thank you for your message! Our team will contact you within 24 hours.");

      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    } catch (error) {
      toast.error("Something went wrong while sending your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
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
                <span>Contact Us</span>
                <span className="w-8 sm:w-12 h-px bg-border" />
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight tracking-tight">
                Let's Start{" "}
                <span className="text-primary font-accent text-4xl sm:text-5xl lg:text-6xl">a Conversation</span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
              >
                Let's discuss how we can help transform your community. Our team is ready to assist you.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
              {/* Contact Info */}
              <motion.div 
                ref={contactInfoRef}
                initial={{ opacity: 0, x: -30 }}
                animate={contactInfoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4 sm:mb-6">
                    <span className="w-8 sm:w-12 h-px bg-border" />
                    <span>Get in Touch</span>
                    <span className="w-8 sm:w-12 h-px bg-border" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4">
                    Contact <span className="text-primary font-accent text-4xl sm:text-5xl">Information</span>
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Reach out to us through any of the following channels. Our team is ready to assist you.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    { icon: MapPin, title: "Office Location", content: "Dubai, United Arab Emirates\nBusiness Bay Area" },
                    { icon: Clock, title: "Business Hours", content: "Saturday - Thursday: 8:00 AM - 6:00 PM\nFriday: Closed\nEmergency Support: 24/7" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="p-6 hover-lift bg-white">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 pt-1">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                              <item.icon className="w-6 h-6 text-primary" strokeWidth={2.5} />
                            </div>
                          </div>
                          <div className="flex-1 space-y-2">
                            <h3 className="text-lg sm:text-xl font-heading font-semibold tracking-tight">{item.title}</h3>
                            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                              {item.content}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div 
                ref={formRef.ref}
                initial={{ opacity: 0, x: 30 }}
                animate={formRef.isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6 }}
              >
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4 sm:mb-6">
                      <span className="w-8 sm:w-12 h-px bg-border" />
                      <span>Send Message</span>
                      <span className="w-8 sm:w-12 h-px bg-border" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight">
                      Get in <span className="text-primary font-accent text-4xl sm:text-5xl">Touch</span>
                    </h2>
                  </div>

                  <Card className="p-6 sm:p-8 bg-white">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-foreground tracking-tight">First Name</label>
                          <Input 
                            placeholder="John" 
                            required 
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="h-11 rounded-lg border-border focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-foreground tracking-tight">Last Name</label>
                          <Input 
                            placeholder="Doe" 
                            required 
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="h-11 rounded-lg border-border focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-foreground tracking-tight">Email</label>
                        <Input 
                          type="email" 
                          placeholder="john@example.com" 
                          required 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="h-11 rounded-lg border-border focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-foreground tracking-tight">Phone</label>
                        <Input 
                          type="tel" 
                          placeholder="+971 XX XXX XXXX" 
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="h-11 rounded-lg border-border focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-foreground tracking-tight">Subject</label>
                        <Input 
                          placeholder="How can we help you?" 
                          required 
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          className="h-11 rounded-lg border-border focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-foreground tracking-tight">Message</label>
                        <Textarea
                          placeholder="Tell us more about your community management needs..."
                          rows={6}
                          required
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="rounded-lg border-border focus:ring-2 focus:ring-primary resize-none"
                        />
                      </div>

                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="pt-2"
                      >
                        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </motion.div>
                    </form>
                  </Card>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section ref={mapRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-muted/50 to-background border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 sm:space-y-8"
            >
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4 sm:mb-6">
                  <span className="w-8 sm:w-12 h-px bg-border" />
                  <span>Find Us</span>
                  <span className="w-8 sm:w-12 h-px bg-border" />
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight">
                  Our <span className="text-primary font-accent text-4xl sm:text-5xl">Location</span>
                </h2>
              </div>

              <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden border border-border shadow-lg">
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
