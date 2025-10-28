import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

        <Card className="p-8 border-0 shadow-[var(--shadow-card)]">
          <div className="prose max-w-none">
            <p className="text-muted-foreground mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground mb-6">
              By accessing or using My Toy Shop website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this site.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Use License</h2>
            <p className="text-muted-foreground mb-6">
              Permission is granted to temporarily access the materials on My Toy Shop's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Product Information</h2>
            <p className="text-muted-foreground mb-6">
              We strive to provide accurate product information. However, we do not warrant that product descriptions, pricing, or other content is accurate, complete, reliable, current, or error-free.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Orders and Payment</h2>
            <p className="text-muted-foreground mb-4">
              When you place an order:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>You must provide accurate and complete information</li>
              <li>You authorize us to charge your payment method</li>
              <li>We reserve the right to refuse or cancel any order</li>
              <li>Prices are subject to change without notice</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Shipping and Delivery</h2>
            <p className="text-muted-foreground mb-6">
              We ship to addresses within Singapore. Delivery times are estimates and not guaranteed. Risk of loss passes to you upon delivery to the carrier.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Returns and Refunds</h2>
            <p className="text-muted-foreground mb-6">
              We accept returns within 14 days of delivery for most items in original condition. Some items may not be eligible for return. Refunds will be processed to the original payment method.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground mb-6">
              My Toy Shop shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p className="text-muted-foreground mb-6">
              These terms shall be governed by and construed in accordance with the laws of Singapore.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-muted-foreground">
              For questions about these Terms of Service, contact us at info@mytoyshop.sg or call +65 9127 3521.
            </p>
          </div>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
