const products = [
  {
    id: 1,
    name: "Wireless Noise Cancelling Headphones",
    description:
    "Enjoy immersive, detailed sound with a balanced audio profile designed for everyday listening. The comfortable over-ear design helps reduce outside distractions while delivering clear vocals, rich bass, and a smooth listening experience. Built with a modern finish and practical controls, these headphones are a reliable choice for music, calls, entertainment, and daily use.",
    category: "Audio & Headphones",
    categoryId: "audio-headphones",
    price: 7499,
    oldPrice: 8999,
    rating: 4.8,
    reviews: 124,

    image: "/images/products/headphones.webp",

    images: [
      "/images/products/headphones.webp",
      "/images/products/headphones-2.webp",
      "/images/products/headphones-3.webp",
      "/images/products/headphones-4.webp",
      "/images/products/headphones-5.webp",
    ],

    badge: {
      label: "Best Seller",
      type: "best-seller",
    },

    featured: true,
    newArrival: false,
    deal: false,
  },

  {
    id: 2,
    name: "Premium Smart Watch Series",
    description:
    "Designed for modern everyday use, this smart watch combines a clean premium look with practical smart features. Its bright display, comfortable fit, and responsive interface make it easy to stay connected, monitor daily activity, and access essential functions throughout the day.",
    category: "Smart Watches",
    categoryId: "smart-watches",
    price: 5499,
    oldPrice: 6999,
    rating: 4.7,
    reviews: 98,

    image: "/images/products/smart-watch.webp",

    images: [
    "/images/products/smart-watch.webp",
    "/images/products/smart-watch.webp",
    "/images/products/smart-watch.webp",
    "/images/products/smart-watch.webp",
    "/images/products/smart-watch.webp",
],

    badge: {
      label: "Popular",
      type: "popular",
    },

    featured: true,
    newArrival: true,
    deal: false,
  },

  {
    id: 3,
    name: "Wireless Bluetooth Earbuds",
    description:
    "Enjoy clear wireless audio in a compact and comfortable design. These earbuds deliver crisp vocals, enjoyable bass, and reliable connectivity for music, calls, videos, and everyday listening. Their lightweight design makes them convenient for use at home, at work, or while travelling.",
    category: "Audio & Headphones",
    categoryId: "audio-headphones",
    price: 2999,
    oldPrice: 3999,
    rating: 4.6,
    reviews: 86,

    image: "/images/products/earbuds.webp",

    images: [
    "/images/products/earbuds.webp",
    "/images/products/earbuds.webp",
    "/images/products/earbuds.webp",
    "/images/products/earbuds.webp",
    "/images/products/earbuds.webp",
],

    badge: {
      label: "Sale",
      type: "sale",
    },

    featured: true,
    newArrival: false,
    deal: true,
  },

  {
    id: 4,
    name: "Portable Bluetooth Speaker",
    description:
    "Built for convenient everyday entertainment, this portable Bluetooth speaker delivers clear audio with a punchy sound profile in a compact design. Its wireless connectivity and portable form make it easy to enjoy music, podcasts, and other audio wherever you go.",
    category: "Audio & Headphones",
    categoryId: "audio-headphones",
    price: 4299,
    oldPrice: 4999,
    rating: 4.8,
    reviews: 73,

    image: "/images/products/speaker.webp",

    images: [
    "/images/products/speaker.webp",
    "/images/products/speaker.webp",
    "/images/products/speaker.webp",
    "/images/products/speaker.webp",
    "/images/products/speaker.webp",
],

    badge: {
      label: "Trending",
      type: "trending",
    },

    featured: true,
    newArrival: true,
    deal: true,
  },
];

export default products;
