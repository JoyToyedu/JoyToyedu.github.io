import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                How do I place an order?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Simply browse our products, add items to your cart, and proceed to checkout. You can checkout as a guest or create an account for faster future purchases.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                What payment methods do you accept?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. All payments are processed securely.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                How long does delivery take?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Standard delivery within Singapore takes 2-5 business days. Express delivery (1-2 business days) is available for an additional fee.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Is there a minimum order amount?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No minimum order amount is required. However, free shipping is available for orders over S$50.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Can I return or exchange a product?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! We accept returns within 14 days of delivery. Items must be in original condition with packaging intact. Some items like opened games may not be eligible for return.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Are the toys safe for children?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely! All our toys meet international safety standards and are tested for quality. Age recommendations are clearly marked on each product.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Do you offer gift wrapping?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, we offer gift wrapping services for a small additional fee. You can select this option during checkout.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                How can I track my order?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Once your order ships, you'll receive a tracking number via email. You can use this to track your package through our delivery partner's website.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                What if I receive a damaged product?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                If you receive a damaged product, please contact us immediately with photos. We'll arrange for a replacement or refund at no cost to you.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Do you have a physical store?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Currently, we operate as an online store only. However, you can contact us to arrange product viewing by appointment.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
