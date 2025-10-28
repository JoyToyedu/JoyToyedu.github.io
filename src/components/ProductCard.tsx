import { Link } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/data/products";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  badge?: string;
}

export const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  badge,
}: ProductCardProps) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    const product: Product = {
      id,
      name,
      price,
      originalPrice,
      image,
      category,
      badge,
      description: "",
      features: [],
      ageRange: "",
      brand: "",
      inStock: true
    };
    addToCart(product);
    toast.success("Added to cart!");
  };

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.success("Added to wishlist!");
  };

  return (
    <Link to={`/product/${id}`}>
      <Card className="group overflow-hidden border-0 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 hover:-translate-y-1">
        <div className="relative overflow-hidden bg-secondary/30">
          {badge && (
            <Badge className="absolute top-3 left-3 z-10 bg-accent text-accent-foreground">
              {badge}
            </Badge>
          )}
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          {/* Quick Actions */}
          <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              size="icon"
              variant="secondary"
              className="h-9 w-9 rounded-full"
              onClick={handleAddToWishlist}
            >
              <Heart className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              className="h-9 w-9 rounded-full bg-accent hover:bg-accent/90"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="p-4">
          <p className="text-xs text-muted-foreground mb-1">{category}</p>
          <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <div className="flex items-center gap-2">
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                S$ {originalPrice.toFixed(2)}
              </span>
            )}
            <span className="text-lg font-bold text-primary">
              S$ {price.toFixed(2)}
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
};
