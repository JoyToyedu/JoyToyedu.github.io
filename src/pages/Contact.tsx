import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <Card className="p-6 text-center border-0 shadow-[var(--shadow-card)]">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
            <p className="text-muted-foreground text-sm">
              123 Toy Street<br />
              Singapore 123456
            </p>
          </Card>

          <Card className="p-6 text-center border-0 shadow-[var(--shadow-card)]">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
              <Phone className="h-8 w-8 text-accent" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Call Us</h3>
            <p className="text-muted-foreground text-sm">
              +65 9127 3521<br />
              Mon-Fri: 9AM-6PM
            </p>
          </Card>

          <Card className="p-6 text-center border-0 shadow-[var(--shadow-card)]">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Email Us</h3>
            <p className="text-muted-foreground text-sm">
              info@mytoyshop.sg<br />
              support@mytoyshop.sg
            </p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 border-0 shadow-[var(--shadow-card)]">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">First Name</label>
                  <Input placeholder="John" required />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Last Name</label>
                  <Input placeholder="Doe" required />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="john.doe@example.com" required />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Phone</label>
                <Input type="tel" placeholder="+65 1234 5678" />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Subject</label>
                <Input placeholder="How can we help you?" required />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell us more about your inquiry..." 
                  rows={6}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-accent hover:bg-accent/90" size="lg">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Map & Business Hours */}
          <div className="space-y-6">
            <Card className="p-6 border-0 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Business Hours</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b">
                  <span className="font-medium">Monday - Friday</span>
                  <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="font-medium">Saturday</span>
                  <span className="text-muted-foreground">10:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="font-medium">Sunday</span>
                  <span className="text-muted-foreground">11:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium">Public Holidays</span>
                  <span className="text-muted-foreground">Closed</span>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden border-0 shadow-[var(--shadow-card)]">
              <div className="h-80 bg-secondary/30 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">123 Toy Street, Singapore</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
