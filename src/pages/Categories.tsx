import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { categories } from "@/data/products";

const Categories = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Shop by Categories</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse our wide selection of toys organized by category. Find exactly what you're looking for!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link key={index} to="/shop">
              <Card className="group overflow-hidden border-0 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <span className="text-8xl group-hover:scale-110 transition-transform duration-300 group-hover:animate-float">
                    {category.icon}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {category.count} products available
                  </p>
                  <Button variant="ghost" className="group/btn p-0 h-auto hover:bg-transparent">
                    <span className="group-hover/btn:text-primary">Browse Collection</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Featured Category Banner */}
        <section className="mt-16 relative rounded-2xl overflow-hidden">
          <div className="gradient-hero h-64 flex items-center justify-center relative">
            <div className="text-center text-white z-10">
              <h2 className="text-4xl font-bold mb-4">Educational Toys</h2>
              <p className="text-lg mb-6">Learning through play - Explore our best-selling educational collection</p>
              <Link to="/shop">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  Explore Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Categories;
