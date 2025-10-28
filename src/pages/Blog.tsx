import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Educational Toys for 2025",
    excerpt: "Discover the best educational toys that combine fun and learning for children of all ages.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    category: "Educational",
    date: "March 15, 2025",
    author: "Sarah Johnson"
  },
  {
    id: 2,
    title: "Building Creativity with LEGO",
    excerpt: "Learn how LEGO sets help develop problem-solving skills and creativity in children.",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80",
    category: "Building Toys",
    date: "March 12, 2025",
    author: "Mike Chen"
  },
  {
    id: 3,
    title: "Choosing Age-Appropriate Toys",
    excerpt: "A comprehensive guide to selecting the right toys for different age groups.",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80",
    category: "Guides",
    date: "March 10, 2025",
    author: "Emma Wilson"
  },
  {
    id: 4,
    title: "The Benefits of Outdoor Play",
    excerpt: "Why outdoor toys are essential for child development and physical health.",
    image: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=800&q=80",
    category: "Outdoor",
    date: "March 8, 2025",
    author: "David Lee"
  },
  {
    id: 5,
    title: "STEM Toys That Inspire Learning",
    excerpt: "Explore toys that make science, technology, engineering, and math fun for kids.",
    image: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=800&q=80",
    category: "STEM",
    date: "March 5, 2025",
    author: "Lisa Park"
  },
  {
    id: 6,
    title: "Creative Arts and Crafts Ideas",
    excerpt: "Fun and easy craft projects to do with your kids using everyday materials.",
    image: "https://images.unsplash.com/photo-1513239839508-c21091004b40?w=800&q=80",
    category: "Arts & Crafts",
    date: "March 1, 2025",
    author: "Tom Anderson"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Toy Shop Blog</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tips, guides, and inspiration for parents and toy enthusiasts
          </p>
        </div>

        {/* Featured Post */}
        <Card className="mb-12 overflow-hidden border-0 shadow-[var(--shadow-card)]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-80 lg:h-auto">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-accent">Featured</Badge>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <Badge className="w-fit mb-3" variant="secondary">{blogPosts[0].category}</Badge>
              <h2 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
              <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{blogPosts[0].date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{blogPosts[0].author}</span>
                </div>
              </div>
              <Button className="w-fit">
                Read More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Card key={post.id} className="group overflow-hidden border-0 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <Badge className="mb-3" variant="secondary">{post.category}</Badge>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <Button variant="ghost" className="p-0 h-auto hover:bg-transparent group/btn">
                  <span className="group-hover/btn:text-primary">Read More</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Load More Posts
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
