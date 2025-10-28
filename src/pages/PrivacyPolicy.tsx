import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <Card className="p-8 border-0 shadow-[var(--shadow-card)]">
          <div className="prose max-w-none">
            <p className="text-muted-foreground mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-muted-foreground mb-6">
              My Toy Shop ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              We may collect information about you in a variety of ways. The information we may collect includes:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Personal Data: Name, email address, phone number, and delivery address</li>
              <li>Payment Information: Credit card details and billing information</li>
              <li>Usage Data: Information about how you use our website</li>
              <li>Cookies and Tracking Technologies: Data collected through cookies and similar technologies</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your orders and our services</li>
              <li>Improve our website and services</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Detect and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Disclosure of Your Information</h2>
            <p className="text-muted-foreground mb-6">
              We may share your information with third parties only in the ways described in this policy. We do not sell your personal information to third parties.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Security</h2>
            <p className="text-muted-foreground mb-6">
              We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-muted-foreground mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground mb-2">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-muted-foreground">
              Email: info@mytoyshop.sg<br />
              Phone: +65 9127 3521
            </p>
          </div>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
