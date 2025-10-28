import { Link } from "react-router-dom";
import { ShoppingCart, Heart, Search, Phone, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import logo from "@/assets/logo.png";

export const Header = () => {
  const { totalItems } = useCart();
  const [wishlistCount] = useState(0);

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b">
      {/* Top Bar */}
      <div className="bg-topbar text-topbar-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>Call: +65 9127 3521</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-topbar-foreground hover:text-topbar-foreground/80">
              <User className="h-4 w-4 mr-1" />
              Sign In
            </Button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="My Toy Shop" className="h-12 w-auto" />
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search for toys, games, and more..."
                className="w-full pr-12"
              />
              <Button
                size="sm"
                className="absolute right-0 top-0 h-full rounded-l-none bg-accent hover:bg-accent/90"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Cart & Wishlist */}
          <div className="flex items-center gap-4">
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-accent">
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-5 w-5" />
              {wishlistCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-accent">
                  {wishlistCount}
                </Badge>
              )}
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-center gap-8 py-3 text-sm font-medium">
            <li>
              <Link to="/" className="hover:text-primary transition-colors">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-primary transition-colors">
                SHOP
              </Link>
            </li>
            <li>
              <Link to="/categories" className="hover:text-primary transition-colors">
                SHOP BY CATEGORIES
              </Link>
            </li>
            <li>
              <Link to="/brands" className="hover:text-primary transition-colors">
                SHOP BY BRAND
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-primary transition-colors">
                BLOG
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary transition-colors">
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
