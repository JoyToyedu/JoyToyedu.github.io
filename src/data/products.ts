export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  brand: string;
  badge?: string;
  description: string;
  features: string[];
  ageRange: string;
  inStock: boolean;
}

export const products: Product[] = [
  // Educational Toys
  {
    id: 1,
    name: "Smart Games IQ Puzzler Pro",
    price: 24.90,
    originalPrice: 29.90,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    category: "Educational Toys",
    brand: "Smart Games",
    badge: "NEW",
    description: "Challenge your brain with 120 multi-level logic puzzles in 2D and 3D! Perfect for developing critical thinking and problem-solving skills.",
    features: [
      "120 challenges across 3 playing modes",
      "Portable travel case for on-the-go fun",
      "Develops problem-solving and spatial reasoning",
      "Award-winning brain teaser game"
    ],
    ageRange: "6+ years",
    inStock: true
  },
  {
    id: 5,
    name: "VTech Marble Rush Discovery Set",
    price: 64.90,
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80",
    category: "Educational Toys",
    brand: "VTech",
    badge: "POPULAR",
    description: "STEM learning toy with 60 pieces to build exciting marble runs! Watch marbles speed through twists, turns, and drops.",
    features: [
      "60 construction pieces for endless combinations",
      "Multiple track configurations",
      "Color-coded building guides",
      "Develops engineering and problem-solving skills"
    ],
    ageRange: "4+ years",
    inStock: true
  },
  {
    id: 7,
    name: "Melissa & Doug Wooden Puzzle Set",
    price: 29.90,
    image: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=800&q=80",
    category: "Educational Toys",
    brand: "Melissa & Doug",
    description: "High-quality wooden puzzles perfect for developing fine motor skills and hand-eye coordination.",
    features: [
      "4 puzzles with different themes included",
      "Chunky wooden pieces easy to grasp",
      "Colorful illustrations",
      "Storage box included for easy cleanup"
    ],
    ageRange: "2+ years",
    inStock: true
  },
  {
    id: 9,
    name: "Learning Resources Coding Critters",
    price: 49.90,
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80",
    category: "Educational Toys",
    brand: "Learning Resources",
    description: "Introduce coding concepts to young learners with this adorable interactive pet that teaches programming basics.",
    features: [
      "Screen-free coding for kids",
      "Interactive storytelling mode",
      "22 coding pieces included",
      "Develops critical thinking and sequencing"
    ],
    ageRange: "4+ years",
    inStock: true
  },
  {
    id: 10,
    name: "Osmo Genius Starter Kit",
    price: 139.90,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    category: "Educational Toys",
    brand: "Osmo",
    badge: "NEW",
    description: "Award-winning learning games that blend physical play with digital interaction using iPad technology.",
    features: [
      "5 educational games included",
      "Develops math, spelling, and problem-solving",
      "Works with iPad (not included)",
      "Ages 6-10 curriculum aligned"
    ],
    ageRange: "6+ years",
    inStock: true
  },
  {
    id: 11,
    name: "ThinkFun Gravity Maze",
    price: 44.90,
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80",
    category: "Educational Toys",
    brand: "ThinkFun",
    description: "Award-winning marble run logic game that builds spatial reasoning and planning skills through 60 challenges.",
    features: [
      "60 challenges from beginner to expert",
      "Combines logic game with marble run",
      "Develops critical thinking",
      "STEM toy of the year winner"
    ],
    ageRange: "8+ years",
    inStock: true
  },
  
  // Building Toys
  {
    id: 2,
    name: "LEGO Classic Creative Building Set",
    price: 49.90,
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80",
    category: "Building Toys",
    brand: "LEGO",
    description: "Build anything you can imagine with 790 colorful LEGO bricks in 35 different colors!",
    features: [
      "790 pieces in 35 different colors",
      "Includes building ideas and inspiration",
      "Compatible with all LEGO building sets",
      "Develops creativity and fine motor skills"
    ],
    ageRange: "4+ years",
    inStock: true
  },
  {
    id: 12,
    name: "LEGO City Police Station",
    price: 89.90,
    originalPrice: 99.90,
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80",
    category: "Building Toys",
    brand: "LEGO",
    badge: "SALE",
    description: "Build an exciting 3-level police station with jail cells, office, and garage for police vehicles.",
    features: [
      "743 pieces with 6 minifigures",
      "Includes police vehicles and accessories",
      "Interactive features like breakout wall",
      "Compatible with LEGO City sets"
    ],
    ageRange: "6+ years",
    inStock: true
  },
  {
    id: 13,
    name: "LEGO Star Wars Millennium Falcon",
    price: 179.90,
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80",
    category: "Building Toys",
    brand: "LEGO",
    badge: "POPULAR",
    description: "Build the iconic Millennium Falcon from Star Wars with incredible detail and authentic features.",
    features: [
      "1351 pieces for advanced builders",
      "7 minifigures including Han Solo",
      "Removable cockpit and detailed interior",
      "Display stand included"
    ],
    ageRange: "9+ years",
    inStock: true
  },
  {
    id: 14,
    name: "Mega Bloks Building Bag",
    price: 34.90,
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80",
    category: "Building Toys",
    brand: "Mega Bloks",
    description: "Perfect first building set with 80 big blocks in bright colors, ideal for little hands.",
    features: [
      "80 big building blocks",
      "Storage bag included",
      "Compatible with other Mega Bloks sets",
      "BPA-free and safe for toddlers"
    ],
    ageRange: "1+ years",
    inStock: true
  },
  {
    id: 15,
    name: "K'NEX Thrill Rides Roller Coaster",
    price: 69.90,
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80",
    category: "Building Toys",
    brand: "K'NEX",
    description: "Build a working roller coaster with twists, turns, and a motorized chain lift!",
    features: [
      "473 pieces including motor",
      "Over 2 feet tall when built",
      "Working coaster car",
      "STEM construction toy"
    ],
    ageRange: "9+ years",
    inStock: true
  },
  
  // Vehicles
  {
    id: 3,
    name: "Hot Wheels Track Builder Mega Set",
    price: 79.90,
    originalPrice: 99.90,
    image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=800&q=80",
    category: "Vehicles",
    brand: "Hot Wheels",
    badge: "SALE",
    description: "Build the ultimate racing track with loops, jumps, and stunts! Over 3 feet of track included.",
    features: [
      "Over 3 feet of track pieces",
      "Includes 2 Hot Wheels cars",
      "Multiple configuration options",
      "Connects to other Hot Wheels sets"
    ],
    ageRange: "5+ years",
    inStock: true
  },
  {
    id: 16,
    name: "Hot Wheels Monster Trucks Arena",
    price: 54.90,
    image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=800&q=80",
    category: "Vehicles",
    brand: "Hot Wheels",
    description: "Epic monster truck battles with crushable cars and a massive arena play set!",
    features: [
      "2 monster trucks included",
      "5 crushable cars",
      "Arena battle stadium",
      "Launcher mechanism"
    ],
    ageRange: "4+ years",
    inStock: true
  },
  {
    id: 17,
    name: "Matchbox Car Collection 20-Pack",
    price: 39.90,
    image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=800&q=80",
    category: "Vehicles",
    brand: "Matchbox",
    badge: "POPULAR",
    description: "Classic Matchbox die-cast vehicles featuring cars, trucks, and emergency vehicles.",
    features: [
      "20 die-cast vehicles",
      "Realistic details",
      "Compatible with all Matchbox tracks",
      "Perfect for collectors"
    ],
    ageRange: "3+ years",
    inStock: true
  },
  {
    id: 18,
    name: "Remote Control Off-Road Truck",
    price: 89.90,
    image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=800&q=80",
    category: "Vehicles",
    brand: "RC Pro",
    description: "High-speed remote control truck with all-terrain wheels and rechargeable battery.",
    features: [
      "30+ MPH top speed",
      "2.4GHz remote control",
      "Rechargeable battery included",
      "All-terrain performance"
    ],
    ageRange: "8+ years",
    inStock: true
  },
  
  // Dolls & Playsets
  {
    id: 4,
    name: "Barbie Dreamhouse Playset",
    price: 189.90,
    image: "https://images.unsplash.com/photo-1560015534-cee980ba7e13?w=800&q=80",
    category: "Dolls & Playsets",
    brand: "Barbie",
    description: "The ultimate Barbie house with 3 floors, 8 rooms, and over 70 accessories for endless play!",
    features: [
      "3 floors and 8 rooms of fun",
      "Working elevator with sounds",
      "Pool with slide",
      "Over 70 accessories included"
    ],
    ageRange: "3+ years",
    inStock: true
  },
  {
    id: 19,
    name: "Barbie Career Doll Collection",
    price: 29.90,
    image: "https://images.unsplash.com/photo-1560015534-cee980ba7e13?w=800&q=80",
    category: "Dolls & Playsets",
    brand: "Barbie",
    description: "Inspire future careers with Barbie dolls dressed as doctor, teacher, astronaut, and more!",
    features: [
      "Career-themed outfit and accessories",
      "Fully articulated doll",
      "Multiple career options available",
      "Promotes role-play and imagination"
    ],
    ageRange: "3+ years",
    inStock: true
  },
  {
    id: 20,
    name: "LOL Surprise! Bigger Surprise",
    price: 79.90,
    image: "https://images.unsplash.com/photo-1560015534-cee980ba7e13?w=800&q=80",
    category: "Dolls & Playsets",
    brand: "LOL Surprise",
    badge: "NEW",
    description: "Over 60 surprises including exclusive dolls, pets, accessories, and more!",
    features: [
      "60+ surprises to unbox",
      "Limited edition dolls",
      "Fashion accessories",
      "Storage case included"
    ],
    ageRange: "4+ years",
    inStock: true
  },
  {
    id: 21,
    name: "Disney Princess Castle",
    price: 149.90,
    image: "https://images.unsplash.com/photo-1560015534-cee980ba7e13?w=800&q=80",
    category: "Dolls & Playsets",
    brand: "Disney",
    description: "Magical castle playset with multiple rooms, light-up features, and accessories.",
    features: [
      "4 feet tall castle",
      "Lights and sounds",
      "16 accessories included",
      "Compatible with Disney Princess dolls"
    ],
    ageRange: "3+ years",
    inStock: true
  },
  
  // Arts & Crafts
  {
    id: 8,
    name: "Play-Doh Super Color Pack",
    price: 19.90,
    image: "https://images.unsplash.com/photo-1513239839508-c21091004b40?w=800&q=80",
    category: "Arts & Crafts",
    brand: "Play-Doh",
    description: "20 cans of colorful Play-Doh compound for endless creative fun and imagination!",
    features: [
      "20 cans of Play-Doh (3 oz each)",
      "Rainbow of vibrant colors",
      "Non-toxic formula",
      "Great for parties and playdates"
    ],
    ageRange: "3+ years",
    inStock: true
  },
  {
    id: 22,
    name: "Crayola Inspiration Art Case",
    price: 34.90,
    image: "https://images.unsplash.com/photo-1513239839508-c21091004b40?w=800&q=80",
    category: "Arts & Crafts",
    brand: "Crayola",
    badge: "POPULAR",
    description: "Complete art set with 140 pieces including crayons, markers, colored pencils, and more!",
    features: [
      "140 art supplies",
      "Portable case with handle",
      "Crayons, markers, and pencils",
      "Paper pad included"
    ],
    ageRange: "5+ years",
    inStock: true
  },
  {
    id: 23,
    name: "Perler Beads Deluxe Kit",
    price: 44.90,
    image: "https://images.unsplash.com/photo-1513239839508-c21091004b40?w=800&q=80",
    category: "Arts & Crafts",
    brand: "Perler",
    description: "Create amazing designs with 11,000 colorful beads and reusable pegboards.",
    features: [
      "11,000 beads in 50+ colors",
      "6 reusable pegboards",
      "Pattern sheets included",
      "Storage container"
    ],
    ageRange: "6+ years",
    inStock: true
  },
  {
    id: 24,
    name: "Melissa & Doug Easel Bundle",
    price: 79.90,
    image: "https://images.unsplash.com/photo-1513239839508-c21091004b40?w=800&q=80",
    category: "Arts & Crafts",
    brand: "Melissa & Doug",
    description: "Wooden art easel with chalkboard, whiteboard, paper roll, and art supplies included.",
    features: [
      "Double-sided easel",
      "Adjustable height",
      "Storage trays",
      "Includes paint, chalk, and markers"
    ],
    ageRange: "3+ years",
    inStock: true
  },
  
  // Outdoor & Sports
  {
    id: 6,
    name: "Nerf Elite 2.0 Phoenix Blaster",
    price: 39.90,
    image: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=800&q=80",
    category: "Outdoor & Sports",
    brand: "Nerf",
    description: "Customizable blaster with tactical accessories for ultimate foam dart battles!",
    features: [
      "Includes 10 Nerf Elite darts",
      "Customizable with tactical rails",
      "Up to 90 feet range",
      "Quick-reload clip mechanism"
    ],
    ageRange: "8+ years",
    inStock: true
  },
  {
    id: 25,
    name: "Little Tikes Basketball Set",
    price: 59.90,
    image: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=800&q=80",
    category: "Outdoor & Sports",
    brand: "Little Tikes",
    description: "Adjustable basketball hoop that grows with your child from toddler to school age.",
    features: [
      "Adjustable height 2.5 to 4 feet",
      "Oversized rim for easy scoring",
      "Junior-size basketball included",
      "Stable base fills with sand or water"
    ],
    ageRange: "18 months+",
    inStock: true
  },
  {
    id: 26,
    name: "Water Blaster Super Soaker Pack",
    price: 49.90,
    image: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=800&q=80",
    category: "Outdoor & Sports",
    brand: "Nerf",
    badge: "SALE",
    originalPrice: 64.90,
    description: "Twin pack of high-capacity water blasters perfect for summer fun and pool parties!",
    features: [
      "2 water blasters included",
      "30-foot water stream range",
      "Large water tank capacity",
      "Easy pump action"
    ],
    ageRange: "6+ years",
    inStock: true
  },
  {
    id: 27,
    name: "Trampoline with Safety Net",
    price: 249.90,
    image: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=800&q=80",
    category: "Outdoor & Sports",
    brand: "JumpKing",
    description: "8-foot trampoline with safety enclosure net for hours of outdoor bouncing fun.",
    features: [
      "8-foot jumping surface",
      "Safety enclosure net",
      "Padded frame and springs",
      "Supports up to 175 lbs"
    ],
    ageRange: "6+ years",
    inStock: true
  },
  
  // Board Games
  {
    id: 28,
    name: "Monopoly Classic Edition",
    price: 39.90,
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80",
    category: "Board Games",
    brand: "Hasbro",
    description: "The classic property trading board game that brings families together for hours of fun.",
    features: [
      "Classic gameplay for 2-6 players",
      "Includes tokens, money, and cards",
      "Build houses and hotels",
      "Ages 8 and up"
    ],
    ageRange: "8+ years",
    inStock: true
  },
  {
    id: 29,
    name: "Catan Board Game",
    price: 59.90,
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80",
    category: "Board Games",
    brand: "Catan Studio",
    badge: "POPULAR",
    description: "Award-winning strategy game where players settle the island of Catan through resource management.",
    features: [
      "3-4 players (expandable to 6)",
      "60-120 minute gameplay",
      "Multiple strategies to win",
      "Bestselling board game"
    ],
    ageRange: "10+ years",
    inStock: true
  },
  {
    id: 30,
    name: "Jenga Classic Game",
    price: 24.90,
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80",
    category: "Board Games",
    brand: "Hasbro",
    description: "The classic block-stacking game that tests your steady hand and strategic thinking!",
    features: [
      "54 precision-crafted blocks",
      "Stacks to over 3 feet",
      "1 or more players",
      "Quick 5-minute games"
    ],
    ageRange: "6+ years",
    inStock: true
  },
  {
    id: 31,
    name: "Uno Card Game",
    price: 14.90,
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80",
    category: "Board Games",
    brand: "Mattel",
    description: "The classic card game of matching colors and numbers, perfect for family game night!",
    features: [
      "108 cards",
      "2-10 players",
      "Easy to learn, fast-paced",
      "Portable fun anywhere"
    ],
    ageRange: "7+ years",
    inStock: true
  },
  {
    id: 32,
    name: "Codenames Party Game",
    price: 34.90,
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80",
    category: "Board Games",
    brand: "Czech Games",
    badge: "NEW",
    description: "Award-winning word game where teams compete to identify secret agents through clever clues.",
    features: [
      "2-8+ players",
      "15-minute games",
      "400 word cards",
      "Great for parties"
    ],
    ageRange: "14+ years",
    inStock: true
  },
  
  // Action Figures
  {
    id: 33,
    name: "Marvel Avengers Action Figure Set",
    price: 69.90,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    category: "Action Figures",
    brand: "Marvel",
    badge: "POPULAR",
    description: "Complete set of 6 Marvel superheroes including Iron Man, Captain America, and Thor!",
    features: [
      "6 highly detailed figures",
      "Multiple points of articulation",
      "Includes accessories",
      "6-inch scale figures"
    ],
    ageRange: "4+ years",
    inStock: true
  },
  {
    id: 34,
    name: "Star Wars Black Series Figure",
    price: 34.90,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    category: "Action Figures",
    brand: "Hasbro",
    description: "Premium 6-inch action figure with incredible detail and accessories from Star Wars.",
    features: [
      "Premium articulation",
      "Movie-accurate details",
      "Includes weapon accessories",
      "Display-worthy packaging"
    ],
    ageRange: "4+ years",
    inStock: true
  },
  {
    id: 35,
    name: "Transformers Optimus Prime",
    price: 54.90,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    category: "Action Figures",
    brand: "Hasbro",
    badge: "NEW",
    description: "Classic Autobot leader transforms from robot to truck in 24 steps!",
    features: [
      "2-in-1 robot and vehicle",
      "24-step conversion",
      "Includes weapon accessories",
      "10-inch tall robot mode"
    ],
    ageRange: "8+ years",
    inStock: true
  },
  {
    id: 36,
    name: "Power Rangers Megazord",
    price: 79.90,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    category: "Action Figures",
    brand: "Bandai",
    description: "Iconic Megazord with 5 individual Zords that combine into one massive robot!",
    features: [
      "5 Zords combine into Megazord",
      "Highly articulated",
      "Light and sound effects",
      "12 inches tall when combined"
    ],
    ageRange: "5+ years",
    inStock: true
  }
];

export const categories = [
  { name: "Educational Toys", count: 6, icon: "🎓" },
  { name: "Building Toys", count: 5, icon: "🧱" },
  { name: "Dolls & Playsets", count: 4, icon: "🎎" },
  { name: "Vehicles", count: 4, icon: "🚗" },
  { name: "Arts & Crafts", count: 4, icon: "🎨" },
  { name: "Outdoor & Sports", count: 4, icon: "⚽" },
  { name: "Board Games", count: 5, icon: "🎲" },
  { name: "Action Figures", count: 4, icon: "🦸" }
];

export const brands = [
  { name: "LEGO", logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80", productCount: 67 },
  { name: "Barbie", logo: "https://images.unsplash.com/photo-1560015534-cee980ba7e13?w=300&q=80", productCount: 45 },
  { name: "Hot Wheels", logo: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=300&q=80", productCount: 38 },
  { name: "Nerf", logo: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=300&q=80", productCount: 29 },
  { name: "Smart Games", logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80", productCount: 34 },
  { name: "VTech", logo: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=300&q=80", productCount: 42 }
];
