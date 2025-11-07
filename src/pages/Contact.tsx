import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { toast } from "sonner";

const Contact = () => {
  const formRef = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-in">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up">
              Let's discuss how we can help transform your community
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8 animate-slide-in-left">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Reach out to us through any of the following channels. Our team is ready to assist you.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 flex items-start space-x-4 hover-lift">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office Location</h3>
                    <p className="text-muted-foreground">
                      Dubai, United Arab Emirates
                      <br />
                      Business Bay Area
                    </p>
                  </div>
                </Card>

                <Card className="p-6 flex items-start space-x-4 hover-lift">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">
                      +971 XX XXX XXXX
                      <br />
                      +971 XX XXX XXXX (Emergency)
                    </p>
                  </div>
                </Card>

                <Card className="p-6 flex items-start space-x-4 hover-lift">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      info@pristine.ae
                      <br />
                      support@pristine.ae
                    </p>
                  </div>
                </Card>

                <Card className="p-6 flex items-start space-x-4 hover-lift">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Saturday - Thursday: 8:00 AM - 6:00 PM
                      <br />
                      Friday: Closed
                      <br />
                      Emergency Support: 24/7
                    </p>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div ref={formRef.ref}>
              <Card
                className={`p-8 ${formRef.isVisible ? "animate-slide-in-right" : "opacity-0"}`}
              >
                <h2 className="text-2xl font-heading font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <Input placeholder="John" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <Input placeholder="Doe" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="john@example.com" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <Input type="tel" placeholder="+971 XX XXX XXXX" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input placeholder="How can we help you?" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      placeholder="Tell us more about your community management needs..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-br from-muted to-background">
        <div className="container mx-auto px-4">
          <Card className="h-96 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462565.91384445744!2d54.89782859999999!3d25.0762095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pristine Location Map"
            />
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
