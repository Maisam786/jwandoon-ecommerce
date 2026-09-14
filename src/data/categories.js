import {
  FiHeadphones,
  FiHome,
  FiMonitor,
  FiPackage,
  FiSmartphone,
  FiWatch,
} from "react-icons/fi";

export const shopCategories = [
  {
    id: "all-products",
    name: "All Products",
    icon: FiPackage,
    subcategories: [
      "New Arrivals",
      "Best Sellers",
      "Trending Products",
      "Special Offers",
    ],
    brands: ["Samsung", "Apple", "Xiaomi", "Anker"],
  },

  {
    id: "electronics",
    name: "Electronics",
    description: "Smart tech & gadgets",
    image: "/assets/categories/electronics.webp",
    className: "category-card--large",
    icon: FiMonitor,
    subcategories: [
      "Smartphones",
      "Laptops",
      "Tablets",
      "Computer Accessories",
      "Gaming",
    ],
    brands: ["Samsung", "Xiaomi", "Apple", "Lenovo"],
  },

  {
    id: "mobile-accessories",
    name: "Mobile Accessories",
    description: "Everything for your phone",
    image: "/assets/categories/mobile-accessories.webp",
    icon: FiSmartphone,
    subcategories: [
      "Cases & Covers",
      "Chargers",
      "Power Banks",
      "Cables",
      "Screen Protectors",
    ],
    brands: ["Baseus", "Anker", "UGREEN", "JOYROOM"],
  },

  {
    id: "smart-watches",
    name: "Smart Watches",
    description: "Stay connected",
    image: "/assets/categories/smart-watches.webp",
    icon: FiWatch,
    subcategories: [
      "Smart Watches",
      "Fitness Bands",
      "Watch Straps",
      "Chargers",
      "Accessories",
    ],
    brands: ["Haylou", "Amazfit", "Xiaomi", "Colmi"],
  },

  {
    id: "audio-headphones",
    name: "Audio & Headphones",
    description: "Sound that moves you",
    image: "/assets/categories/headphones.webp",
    icon: FiHeadphones,
    subcategories: [
      "Wireless Earbuds",
      "Headphones",
      "Bluetooth Speakers",
      "Gaming Audio",
      "Microphones",
    ],
    brands: ["JBL", "Anker", "Sony", "Hoco"],
  },

  {
    id: "home-living",
    name: "Home & Living",
    description: "Everything for your home",
    image: "/assets/categories/home-living.webp",
    icon: FiHome,
    subcategories: [
      "Kitchen",
      "Home Accessories",
      "Lighting",
      "Storage",
      "Smart Home",
    ],
    brands: ["Xiaomi", "Philips", "Tefal", "Baseus"],
  },
];
