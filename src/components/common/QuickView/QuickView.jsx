import {
    FiArrowRight,
    FiCheck,
    FiHeart,
    FiMinus,
    FiPlus,
    FiShoppingBag,
    FiStar,
    FiX,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { useCart } from "../../../context/CartContext";
import { useWishlist } from "../../../context/WishlistContext";

import "./QuickView.css";

export default function QuickView({
    product,
    isOpen,
    onClose,
}) {
    const { addToCart } = useCart();
    const { toggleWishlist, isInWishlist } = useWishlist();

    const [quantity, setQuantity] = useState(1);

    const isWishlisted = product
        ? isInWishlist(product.id)
        : false;

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) {
            setQuantity(1);
        }
    }, [isOpen]);

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
            window.addEventListener(
                "keydown",
                handleEscape
            );
        }

        return () => {
            window.removeEventListener(
                "keydown",
                handleEscape
            );
        };
    }, [isOpen, onClose]);

    if (!isOpen || !product) {
        return null;
    }

    const handleAddToCart = () => {
        addToCart(product, quantity);
        onClose();
    };

    const handleQuantityDecrease = () => {
        setQuantity((current) => Math.max(1, current - 1));
    };

    const handleQuantityIncrease = () => {
        setQuantity((current) => current + 1);
    };

    const handleWishlist = () => {
        toggleWishlist(product);
    };

    return (
        <div className="quick-view">
            <button
                type="button"
                className="quick-view__overlay"
                onClick={onClose}
                aria-label="Close quick view"
            />

            <div
                className="quick-view__modal"
                role="dialog"
                aria-modal="true"
                aria-label={`Quick view of ${product.name}`}
            >
                <button
                    type="button"
                    className="quick-view__close"
                    onClick={onClose}
                    aria-label="Close quick view"
                >
                    <FiX />
                </button>

                <div className="quick-view__image">
                    {product.badge && (
                        <span
                            className={`quick-view__badge quick-view__badge--${product.badge.type}`}
                        >
                            {product.badge.label}
                        </span>
                    )}

                    <img
                        src={product.image}
                        alt={product.name}
                    />
                </div>

                <div className="quick-view__content">
                    <span className="quick-view__category">
                        {product.category}
                    </span>

                    <h2>{product.name}</h2>

                    <div className="quick-view__rating">
                        <span>
                            <FiStar />
                            {product.rating}
                        </span>

                        <span>
                            ({product.reviews} reviews)
                        </span>
                    </div>

                    <div className="quick-view__price">
                        <strong>
                            Rs.{" "}
                            {product.price.toLocaleString()}
                        </strong>

                        {product.oldPrice && (
                            <del>
                                Rs.{" "}
                                {product.oldPrice.toLocaleString()}
                            </del>
                        )}
                    </div>

                    <p className="quick-view__description">
                        {product.description ||
                            "Discover quality, style and everyday convenience with this Jwandoon product."}
                    </p>

                    <div className="quick-view__divider" />

                    <div className="quick-view__quantity-row">
                        <span>Quantity</span>

                        <div className="quick-view__quantity">
                            <button
                                type="button"
                                onClick={handleQuantityDecrease}
                                disabled={quantity <= 1}
                                aria-label="Decrease quantity"
                            >
                                <FiMinus />
                            </button>

                            <span>{quantity}</span>

                            <button
                                type="button"
                                onClick={handleQuantityIncrease}
                                aria-label="Increase quantity"
                            >
                                <FiPlus />
                            </button>
                        </div>
                    </div>

                    <div className="quick-view__actions">
                        <button
                            type="button"
                            className="quick-view__add"
                            onClick={handleAddToCart}
                        >
                            <FiShoppingBag />
                            Add to Cart
                        </button>

                        <button
                            type="button"
                            className={`quick-view__wishlist ${
                                isWishlisted
                                    ? "quick-view__wishlist--active"
                                    : ""
                            }`}
                            onClick={handleWishlist}
                            aria-label={
                                isWishlisted
                                    ? "Remove from wishlist"
                                    : "Add to wishlist"
                            }
                        >
                            <FiHeart />
                        </button>
                    </div>

                    <Link
                        to={`/product/${product.id}`}
                        className="quick-view__details"
                        onClick={onClose}
                    >
                        View Full Product Details
                        <FiArrowRight />
                    </Link>

                    <div className="quick-view__benefit">
                        <FiCheck />
                        <span>
                            Fast delivery across Pakistan
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}