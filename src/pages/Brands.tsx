import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { brands } from "@/data/products";

const Brands = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Shop by Brand</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover products from your favorite toy brands. Quality and trust guaranteed!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <Link key={index} to="/shop">
              <Card className="group overflow-hidden border-0 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden bg-secondary/30">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {brand.name}
                    </h3>
                    <Badge variant="secondary">
                      {brand.productCount} items
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">
                    Explore the complete {brand.name} collection
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Featured Brands Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {brands.map((brand, idx) => (
              <Link key={idx} to="/shop">
                <Card className="p-6 text-center hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 hover:-translate-y-1 cursor-pointer border-0">
                  <div className="aspect-square rounded-full bg-secondary/30 flex items-center justify-center mb-3 overflow-hidden">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-semibold text-sm">{brand.name}</p>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Brands;
