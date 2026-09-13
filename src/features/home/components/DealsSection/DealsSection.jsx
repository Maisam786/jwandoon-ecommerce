import { FiArrowRight, FiHeart, FiStar } from "react-icons/fi";

import "./DealsSection.css";

const products = [
    {
        id: 1,
        name: "Premium Wireless Headphones",
        category: "Audio",
        image: "/images/products/headphones.webp",
        price: 3999,
        oldPrice: 4999,
        rating: 4.8,
        reviews: 124,
    },
    {
        id: 2,
        name: "Smart Watch Pro",
        category: "Smart Watches",
        image: "/images/products/smart-watch.webp",
        price: 2999,
        oldPrice: 3999,
        rating: 4.7,
        reviews: 98,
    },
    {
        id: 3,
        name: "Wireless Earbuds",
        category: "Audio",
        image: "/images/products/earbuds.webp",
        price: 1999,
        oldPrice: 2799,
        rating: 4.9,
        reviews: 156,
    },
];

export default function DealsSection() {
    return (
        <section className="deals-section">
            <div className="container">
                <div className="deals-section__layout">

                    <div className="deals-section__intro">
                        <span className="deals-section__eyebrow">
                            Limited Time
                        </span>

                        <h2>
                            Best
                            <span> Deals</span>
                        </h2>

                        <p>
                            Premium products, exceptional prices.
                            Grab your favorites before the deals end.
                        </p>

                        <div className="deals-section__offer">
                            <strong>Up to 40%</strong>
                            <span>OFF</span>
                        </div>

                        <button className="deals-section__button">
                            Shop All Deals
                            <FiArrowRight />
                        </button>
                    </div>

                    <div className="deals-section__products">
                        {products.map((product) => (
                            <article
                                className="deals-card"
                                key={product.id}
                            >
                                <div className="deals-card__image">
                                    <span className="deals-card__badge">
                                        Sale
                                    </span>

                                    <button
                                        className="deals-card__wishlist"
                                        aria-label="Add to wishlist"
                                    >
                                        <FiHeart />
                                    </button>

                                    <img
                                        src={product.image}
                                        alt={product.name}
                                    />
                                </div>

                                <div className="deals-card__content">
                                    <span className="deals-card__category">
                                        {product.category}
                                    </span>

                                    <h3>{product.name}</h3>

                                    <div className="deals-card__rating">
                                        <FiStar />
                                        <strong>{product.rating}</strong>
                                        <span>
                                            ({product.reviews})
                                        </span>
                                    </div>

                                    <div className="deals-card__price">
                                        <strong>
                                            Rs.{" "}
                                            {product.price.toLocaleString()}
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
            </div>
        </section>
    );
}