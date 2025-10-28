import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Award, Users, Heart, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">About My Toy Shop</h1>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 mb-8 border-0 shadow-[var(--shadow-card)]">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Founded in 2020, My Toy Shop has been Singapore's trusted destination for quality toys, games, and educational products. We believe in making childhood magical by providing carefully curated toys that inspire creativity, learning, and joy.
            </p>
            <p className="text-muted-foreground mb-4">
              Our mission is to offer parents and children the best selection of toys from renowned brands worldwide. We carefully select each product to ensure it meets our high standards for quality, safety, and educational value.
            </p>
            <p className="text-muted-foreground">
              With thousands of satisfied customers across Singapore, we continue to grow and expand our collection to bring you the latest and greatest in toys and games.
            </p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 border-0 shadow-[var(--shadow-card)]">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quality Guaranteed</h3>
              <p className="text-muted-foreground">
                Every product is carefully selected and tested to meet international safety standards.
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-[var(--shadow-card)]">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Customer First</h3>
              <p className="text-muted-foreground">
                Our dedicated team is always ready to help you find the perfect toy for your needs.
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-[var(--shadow-card)]">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Community Focus</h3>
              <p className="text-muted-foreground">
                We actively support local communities and educational initiatives across Singapore.
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-[var(--shadow-card)]">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Always Growing</h3>
              <p className="text-muted-foreground">
                We continuously expand our collection to bring you the latest trends and innovations.
              </p>
            </Card>
          </div>

          <Card className="p-8 border-0 shadow-[var(--shadow-card)]">
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>✓ Wide selection of toys from top international brands</li>
              <li>✓ Competitive prices with regular promotions and discounts</li>
              <li>✓ Fast and reliable delivery across Singapore</li>
              <li>✓ Excellent customer service and support</li>
              <li>✓ Easy returns and exchange policy</li>
              <li>✓ Secure online shopping experience</li>
              <li>✓ Educational focus on learning through play</li>
            </ul>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
