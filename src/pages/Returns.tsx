import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { RefreshCw, Shield, Clock, CheckCircle } from "lucide-react";

const Returns = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Returns & Exchanges</h1>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 border-0 shadow-[var(--shadow-card)]">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">14-Day Returns</h3>
              <p className="text-muted-foreground">
                Return items within 14 days of delivery for a full refund or exchange.
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-[var(--shadow-card)]">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                <RefreshCw className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Easy Exchanges</h3>
              <p className="text-muted-foreground">
                Exchange products hassle-free for a different size, color, or model.
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-[var(--shadow-card)]">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quality Guarantee</h3>
              <p className="text-muted-foreground">
                All products are backed by our quality guarantee and manufacturer warranties.
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-[var(--shadow-card)]">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                <CheckCircle className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Simple Process</h3>
              <p className="text-muted-foreground">
                Our returns process is quick and straightforward with full support.
              </p>
            </Card>
          </div>

          <Card className="p-8 mb-8 border-0 shadow-[var(--shadow-card)]">
            <h2 className="text-2xl font-semibold mb-6">Return Policy</h2>
            
            <h3 className="font-semibold mb-3">Eligibility</h3>
            <p className="text-muted-foreground mb-4">
              To be eligible for a return, your item must be:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Unused and in the same condition as received</li>
              <li>In the original packaging with all tags attached</li>
              <li>Returned within 14 days of delivery</li>
              <li>Accompanied by proof of purchase</li>
            </ul>

            <h3 className="font-semibold mb-3">Non-Returnable Items</h3>
            <p className="text-muted-foreground mb-4">
              The following items cannot be returned:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Opened board games, puzzles, or products with broken seals</li>
              <li>Personalized or customized items</li>
              <li>Items marked as final sale or clearance</li>
              <li>Gift cards and downloadable content</li>
            </ul>
          </Card>

          <Card className="p-8 mb-8 border-0 shadow-[var(--shadow-card)]">
            <h2 className="text-2xl font-semibold mb-6">How to Return</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Contact Us</h3>
                  <p className="text-muted-foreground">
                    Email info@mytoyshop.sg or call +65 9127 3521 to initiate a return. Provide your order number and reason for return.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Receive Instructions</h3>
                  <p className="text-muted-foreground">
                    We'll email you a return authorization and instructions, including the return address.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Pack & Ship</h3>
                  <p className="text-muted-foreground">
                    Securely pack the item in its original packaging and ship it to the provided address.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Receive Refund</h3>
                  <p className="text-muted-foreground">
                    Once we receive and inspect your return, we'll process your refund within 5-7 business days.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 mb-8 border-0 shadow-[var(--shadow-card)]">
            <h2 className="text-2xl font-semibold mb-6">Exchanges</h2>
            <p className="text-muted-foreground mb-4">
              If you need to exchange an item for a different size, color, or model, follow the same return process. Once we receive your return, we'll ship your replacement item at no additional cost.
            </p>
            <p className="text-muted-foreground">
              If there's a price difference, we'll either refund or charge the difference accordingly.
            </p>
          </Card>

          <Card className="p-8 border-0 shadow-[var(--shadow-card)]">
            <h2 className="text-2xl font-semibold mb-6">Damaged or Defective Items</h2>
            <p className="text-muted-foreground mb-4">
              If you receive a damaged or defective item, please contact us immediately with photos of the damage. We'll arrange for a replacement or full refund at no cost to you, including return shipping.
            </p>
            <p className="text-muted-foreground">
              We stand behind the quality of our products and will make it right if anything goes wrong.
            </p>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Returns;
