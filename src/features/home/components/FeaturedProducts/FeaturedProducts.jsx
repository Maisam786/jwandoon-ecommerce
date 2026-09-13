import {
    FiArrowRight,
    FiHeart,
    FiShoppingBag,
    FiStar,
} from "react-icons/fi";

import "./FeaturedProducts.css";

const products = [
    {
        id: 1,
        name: "Wireless Noise Cancelling Headphones",
        category: "Audio",
        price: 7499,
        oldPrice: 8999,
        rating: 4.8,
        reviews: 124,
        image: "/images/products/headphones.webp",
        badge: "Best Seller",
    },
    {
        id: 2,
        name: "Premium Smart Watch Series",
        category: "Smart Watches",
        price: 5499,
        oldPrice: 6999,
        rating: 4.7,
        reviews: 98,
        image: "/images/products/smart-watch.webp",
        badge: "Popular",
    },
    {
        id: 3,
        name: "Wireless Bluetooth Earbuds",
        category: "Audio",
        price: 2999,
        oldPrice: 3999,
        rating: 4.6,
        reviews: 86,
        image: "/images/products/earbuds.webp",
        badge: "Sale",
    },
    {
        id: 4,
        name: "Portable Bluetooth Speaker",
        category: "Audio",
        price: 4299,
        oldPrice: 4999,
        rating: 4.8,
        reviews: 73,
        image: "/images/products/speaker.webp",
        badge: "Trending",
    },
];

export default function FeaturedProducts() {
    return (
        <section className="featured-products">
            <div className="container">
                <div className="featured-products__header">
                    <div>
                        <span className="section-eyebrow">
                            JWANDOON COLLECTION
                        </span>

                        <h2 className="heading-font">
                            Featured <em>Products</em>
                        </h2>

                        <p>
                            Handpicked products customers are loving
                            right now.
                        </p>
                    </div>

                    <a
                        href="/shop"
                        className="featured-products__view-all"
                    >
                        View All Products
                        <FiArrowRight />
                    </a>
                </div>

                <div className="featured-products__grid">
                    {products.map((product) => (
                        <article
                            className="product-card"
                            key={product.id}
                        >
                            <div className="product-card__image">
                                <span className="product-card__badge">
                                    {product.badge}
                                </span>

                                <button
                                    className="product-card__wishlist"
                                    aria-label={`Add ${product.name} to wishlist`}
                                >
                                    <FiHeart />
                                </button>

                                <a href="/shop">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                    />
                                </a>

                                <button className="product-card__quick-add">
                                    <FiShoppingBag />
                                    Quick Add
                                </button>
                            </div>

                            <div className="product-card__content">
                                <span className="product-card__category">
                                    {product.category}
                                </span>

                                <h3>{product.name}</h3>

                                <div className="product-card__rating">
                                    <span className="stars">
                                        <FiStar />
                                        {product.rating}
                                    </span>

                                    <span className="reviews">
                                        ({product.reviews})
                                    </span>
                                </div>

                                <div className="product-card__price">
                                    <strong>
                                        Rs. {product.price.toLocaleString()}
                                    </strong>

                                    <del>
                                        Rs.{" "}
                                        {product.oldPrice.toLocaleString()}
                                    </del>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}