import { FiCheck, FiShoppingBag, FiX } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useCart } from "../../../context/CartContext";

import "./CartNotification.css";

export default function CartNotification() {
    const {
        cartNotification,
        closeCartNotification,
    } = useCart();

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    if (!cartNotification) {
        return null;
    }

    return (
        <div
            className={`cart-notification ${
                scrolled
                    ? "cart-notification--scrolled"
                    : ""
            }`}
        >
            <div className="cart-notification__icon">
                <FiCheck />
            </div>

            <div className="cart-notification__content">
                <strong>
                    {cartNotification.product.name}
                </strong>

                <span>Added to your cart</span>

                <button
                    type="button"
                    className="cart-notification__view"
                    onClick={() => {
                        closeCartNotification();
                        window.location.href = "/cart";
                    }}
                >
                    View Cart
                    <FiShoppingBag />
                </button>
            </div>

            <button
                type="button"
                className="cart-notification__close"
                onClick={closeCartNotification}
                aria-label="Close notification"
            >
                <FiX />
            </button>
        </div>
    );
}