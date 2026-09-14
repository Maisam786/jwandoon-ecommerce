const products = [
    {
        id: 1,
        name: "Wireless Noise Cancelling Headphones",
        category: "Audio & Headphones",
        categoryId: "audio-headphones",
        price: 7499,
        oldPrice: 8999,
        rating: 4.8,
        reviews: 124,
        image: "/images/products/headphones.webp",

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
        category: "Smart Watches",
        categoryId: "smart-watches",
        price: 5499,
        oldPrice: 6999,
        rating: 4.7,
        reviews: 98,
        image: "/images/products/smart-watch.webp",

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
        category: "Audio & Headphones",
        categoryId: "audio-headphones",
        price: 2999,
        oldPrice: 3999,
        rating: 4.6,
        reviews: 86,
        image: "/images/products/earbuds.webp",

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
        category: "Audio & Headphones",
        categoryId: "audio-headphones",
        price: 4299,
        oldPrice: 4999,
        rating: 4.8,
        reviews: 73,
        image: "/images/products/speaker.webp",

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