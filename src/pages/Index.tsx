import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sparkles, TrendingUp, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { products, categories } from "@/data/products";
import heroBanner from "@/assets/hero-banner.jpg";
import smartGamesBanner from "@/assets/smart-games-banner.jpg";

const Index = () => {
  const featuredProducts = products.slice(0, 4);
  const newArrivals = products.filter(p => p.badge === "NEW");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div 
            className="w-full h-[500px] bg-cover bg-center relative"
            style={{ backgroundImage: `url(${heroBanner})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
            <div className="container mx-auto px-4 h-full flex items-center relative z-10">
              <div className="max-w-2xl text-white animate-fade-in">
                <h1 className="text-5xl font-bold mb-4">
                  Discover Joy in Every Toy!
                </h1>
                <p className="text-xl mb-8 text-white/90">
                  Explore our collection of educational toys, games, and more. Making childhood magical.
                </p>
                <Link to="/shop">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Banner */}
        <section className="container mx-auto px-4 py-12">
          <Link to="/brands">
            <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
              <img 
                src={smartGamesBanner} 
                alt="Smart Games" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
                <div className="container mx-auto px-8">
                  <h2 className="text-4xl font-bold text-white mb-2">Smart Games Collection</h2>
                  <p className="text-white/90 text-lg">Challenge your mind with award-winning puzzles</p>
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* New Arrivals */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-6 w-6 text-accent" />
                <h2 className="text-3xl font-bold">New Arrivals</h2>
              </div>
              <p className="text-muted-foreground">Check out the latest additions to our collection</p>
            </div>
            <Link to="/shop">
              <Button variant="outline">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        {/* Shop by Categories */}
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">Shop by Categories</h2>
              <p className="text-muted-foreground">Find the perfect toy for every interest</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <Link key={index} to="/categories">
                  <Card className="p-6 text-center hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 hover:-translate-y-1 cursor-pointer group border-0">
                    <div className="text-5xl mb-3 group-hover:animate-float">{category.icon}</div>
                    <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{category.count} products</p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center border-0 shadow-[var(--shadow-card)]">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Best Prices</h3>
              <p className="text-muted-foreground">
                Competitive pricing on all our quality toys and games
              </p>
            </Card>
            <Card className="p-6 text-center border-0 shadow-[var(--shadow-card)]">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quality Products</h3>
              <p className="text-muted-foreground">
                Only the best brands and highest quality toys
              </p>
            </Card>
            <Card className="p-6 text-center border-0 shadow-[var(--shadow-card)]">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Quick and reliable shipping across Singapore
              </p>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
