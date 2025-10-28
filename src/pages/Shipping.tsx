import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Truck, Clock, MapPin, Package } from "lucide-react";

const Shipping = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Shipping Information</h1>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 border-0 shadow-[var(--shadow-card)]">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Free Shipping</h3>
              <p className="text-muted-foreground">
                Enjoy free standard shipping on all orders over S$50 within Singapore.
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-[var(--shadow-card)]">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Standard delivery takes 2-5 business days. Express delivery available in 1-2 days.
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-[var(--shadow-card)]">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Island-wide Coverage</h3>
              <p className="text-muted-foreground">
                We deliver to all addresses across Singapore, including residential and commercial.
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-[var(--shadow-card)]">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                <Package className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Secure Packaging</h3>
              <p className="text-muted-foreground">
                All items are carefully packed to ensure they arrive in perfect condition.
              </p>
            </Card>
          </div>

          <Card className="p-8 mb-8 border-0 shadow-[var(--shadow-card)]">
            <h2 className="text-2xl font-semibold mb-6">Shipping Rates & Options</h2>
            
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h3 className="font-semibold mb-2">Standard Delivery (2-5 Business Days)</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Orders above S$50: <span className="text-primary font-semibold">FREE</span></li>
                  <li>• Orders below S$50: <span className="font-semibold">S$5.90</span></li>
                </ul>
              </div>

              <div className="border-b pb-4">
                <h3 className="font-semibold mb-2">Express Delivery (1-2 Business Days)</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• All orders: <span className="font-semibold">S$12.90</span></li>
                  <li>• Available for orders placed before 2 PM</li>
                </ul>
              </div>

              <div className="pb-4">
                <h3 className="font-semibold mb-2">Same-Day Delivery</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Orders placed before 10 AM: <span className="font-semibold">S$19.90</span></li>
                  <li>• Subject to availability and location</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 mb-8 border-0 shadow-[var(--shadow-card)]">
            <h2 className="text-2xl font-semibold mb-6">Order Processing</h2>
            <p className="text-muted-foreground mb-4">
              Orders are typically processed within 1-2 business days. You will receive an email confirmation when your order is placed and another when it ships with tracking information.
            </p>
            <p className="text-muted-foreground mb-4">
              Please note that business days are Monday to Friday, excluding public holidays.
            </p>
          </Card>

          <Card className="p-8 border-0 shadow-[var(--shadow-card)]">
            <h2 className="text-2xl font-semibold mb-6">Tracking Your Order</h2>
            <p className="text-muted-foreground mb-4">
              Once your order ships, you'll receive a tracking number via email. Use this number to track your package through our delivery partner's website.
            </p>
            <p className="text-muted-foreground">
              If you have any questions about your delivery, please contact our customer service team at +65 9127 3521 or info@mytoyshop.sg
            </p>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shipping;
