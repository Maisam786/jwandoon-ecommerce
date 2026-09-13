import { useRef } from "react";
import {
    FiArrowLeft,
    FiArrowRight,
    FiHeart,
    FiStar,
} from "react-icons/fi";

import "./NewArrivals.css";

const products = [
    {
        id: 1,
        name: "Premium Wireless Headphones",
        category: "Audio & Headphones",
        image: "/images/products/headphones.webp",
        price: 4999,
        oldPrice: 5999,
        rating: 4.8,
        reviews: 124,
    },
    {
        id: 2,
        name: "Smart Watch Pro Series",
        category: "Smart Watches",
        image: "/images/products/smart-watch.webp",
        price: 3999,
        oldPrice: 4999,
        rating: 4.7,
        reviews: 98,
    },
    {
        id: 3,
        name: "True Wireless Earbuds",
        category: "Audio & Headphones",
        image: "/images/products/earbuds.webp",
        price: 2499,
        oldPrice: 3299,
        rating: 4.9,
        reviews: 156,
    },
    {
        id: 4,
        name: "Portable Bluetooth Speaker",
        category: "Audio & Headphones",
        image: "/images/products/speaker.webp",
        price: 2999,
        oldPrice: 3799,
        rating: 4.6,
        reviews: 87,
    },
    {
        id: 5,
        name: "Next Gen Smartphone",
        category: "Electronics",
        image: "/images/products/smartphone.png",
        price: 54999,
        oldPrice: 59999,
        rating: 4.8,
        reviews: 72,
    },
    {
        id: 6,
        name: "4K Digital Camera",
        category: "Electronics",
        image: "/images/products/camera.png",
        price: 28999,
        oldPrice: 32999,
        rating: 4.7,
        reviews: 64,
    },
];

export default function NewArrivals() {
    const sliderRef = useRef(null);

    const scroll = (direction) => {
        if (!sliderRef.current) return;

        sliderRef.current.scrollBy({
            left: direction === "next" ? 330 : -330,
            behavior: "smooth",
        });
    };

    return (
        <section className="new-arrivals">
            <div className="container">
                <div className="new-arrivals__header">
                    <div>
                        <span className="new-arrivals__eyebrow">
                            Fresh From Jwandoon
                        </span>

                        <h2 className="new-arrivals__title">
                            New <span>Arrivals</span>
                        </h2>

                        <p className="new-arrivals__subtitle">
                            Discover the latest products at prices you'll love.
                        </p>
                    </div>

                    <div className="new-arrivals__actions">
                        <button
                            type="button"
                            aria-label="Previous products"
                            onClick={() => scroll("prev")}
                        >
                            <FiArrowLeft />
                        </button>

                        <button
                            type="button"
                            aria-label="Next products"
                            onClick={() => scroll("next")}
                        >
                            <FiArrowRight />
                        </button>
                    </div>
                </div>

                <div className="new-arrivals__slider" ref={sliderRef}>
                    {products.map((product) => (
                        <article
                            className="new-arrivals__card"
                            key={product.id}
                        >
                            <div className="new-arrivals__image">
                                <span className="new-arrivals__badge">
                                    New
                                </span>

                                <button
                                    type="button"
                                    className="new-arrivals__wishlist"
                                    aria-label={`Add ${product.name} to wishlist`}
                                >
                                    <FiHeart />
                                </button>

                                <img
                                    src={product.image}
                                    alt={product.name}
                                />

                                <button
                                    type="button"
                                    className="new-arrivals__quick-add"
                                >
                                    Quick Add
                                </button>
                            </div>

                            <div className="new-arrivals__content">
                                <span className="new-arrivals__category">
                                    {product.category}
                                </span>

                                <h3>{product.name}</h3>

                                <div className="new-arrivals__rating">
                                    <FiStar />
                                    <strong>{product.rating}</strong>
                                    <span>({product.reviews})</span>
                                </div>

                                <div className="new-arrivals__price">
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