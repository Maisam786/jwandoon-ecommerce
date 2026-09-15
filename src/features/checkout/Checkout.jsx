import {
    FiArrowLeft,
    FiCheck,
    FiLock,
    FiMapPin,
    FiShoppingBag,
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { useCart } from "../../context/CartContext";

import "./Checkout.css";

export default function Checkout() {
    const {
        cartItems,
        cartTotal,
        clearCart,
    } = useCart();

    const navigate = useNavigate();

    const [paymentMethod, setPaymentMethod] =
        useState("cod");

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        province: "",
        postalCode: "",
    });

    const [orderPlaced, setOrderPlaced] =
        useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((current) => ({
            ...current,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setOrderPlaced(true);
        clearCart();
    };

    if (cartItems.length === 0 && !orderPlaced) {
        return (
            <main className="checkout-page checkout-page--empty">
                <div className="container">
                    <div className="checkout-empty">
                        <div className="checkout-empty__icon">
                            <FiShoppingBag />
                        </div>

                        <span>
                            Checkout
                        </span>

                        <h1>
                            Your cart is
                            <em> empty.</em>
                        </h1>

                        <p>
                            Add some products to your cart
                            before proceeding to checkout.
                        </p>

                        <Link
                            to="/shop"
                            className="checkout-empty__button"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    if (orderPlaced) {
        return (
            <main className="checkout-page checkout-page--success">
                <div className="container">
                    <div className="checkout-success">
                        <div className="checkout-success__icon">
                            <FiCheck />
                        </div>

                        <span className="checkout-success__eyebrow">
                            Order Confirmed
                        </span>

                        <h1>
                            Thank you for
                            <br />
                            <em>shopping with us.</em>
                        </h1>

                        <p>
                            Your order has been received
                            successfully. We'll contact you
                            shortly to confirm your delivery
                            details.
                        </p>

                        <Link
                            to="/shop"
                            className="checkout-success__button"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="checkout-page">
            <div className="container">
                <div className="checkout-heading">
                    <div>
                        <span className="section-eyebrow">
                            Secure Checkout
                        </span>

                        <h1>
                            Complete your
                            <br />
                            <em>order.</em>
                        </h1>
                    </div>

                    <div className="checkout-secure">
                        <FiLock />
                        Secure & Protected
                    </div>
                </div>

                <form
                    className="checkout-layout"
                    onSubmit={handleSubmit}
                >
                    <div className="checkout-main">
                        {/* CUSTOMER INFORMATION */}

                        <section className="checkout-section">
                            <div className="checkout-section__heading">
                                <div className="checkout-section__number">
                                    01
                                </div>

                                <div>
                                    <h2>
                                        Contact Information
                                    </h2>

                                    <p>
                                        How can we reach you?
                                    </p>
                                </div>
                            </div>

                            <div className="checkout-fields">
                                <label>
                                    <span>
                                        First Name
                                    </span>

                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="Your first name"
                                        required
                                    />
                                </label>

                                <label>
                                    <span>
                                        Last Name
                                    </span>

                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Your last name"
                                        required
                                    />
                                </label>

                                <label>
                                    <span>
                                        Phone Number
                                    </span>

                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="03XX XXXXXXX"
                                        required
                                    />
                                </label>

                                <label>
                                    <span>
                                        Email Address
                                    </span>

                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                    />
                                </label>
                            </div>
                        </section>

                        {/* DELIVERY */}

                        <section className="checkout-section">
                            <div className="checkout-section__heading">
                                <div className="checkout-section__number">
                                    02
                                </div>

                                <div>
                                    <h2>
                                        Delivery Address
                                    </h2>

                                    <p>
                                        Where should we deliver
                                        your order?
                                    </p>
                                </div>
                            </div>

                            <div className="checkout-fields">
                                <label className="checkout-field--full">
                                    <span>
                                        Street Address
                                    </span>

                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        placeholder="House number, street and area"
                                        required
                                    />
                                </label>

                                <label>
                                    <span>City</span>

                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        placeholder="Your city"
                                        required
                                    />
                                </label>

                                <label>
                                    <span>Province</span>

                                    <select
                                        name="province"
                                        value={formData.province}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">
                                            Select province
                                        </option>
                                        <option value="kpk">
                                            Khyber Pakhtunkhwa
                                        </option>
                                        <option value="punjab">
                                            Punjab
                                        </option>
                                        <option value="sindh">
                                            Sindh
                                        </option>
                                        <option value="balochistan">
                                            Balochistan
                                        </option>
                                        <option value="islamabad">
                                            Islamabad Capital Territory
                                        </option>
                                        <option value="gilgit">
                                            Gilgit-Baltistan
                                        </option>
                                        <option value="ajk">
                                            Azad Jammu & Kashmir
                                        </option>
                                    </select>
                                </label>

                                <label>
                                    <span>
                                        Postal Code
                                    </span>

                                    <input
                                        type="text"
                                        name="postalCode"
                                        value={formData.postalCode}
                                        onChange={handleChange}
                                        placeholder="Postal code"
                                    />
                                </label>
                            </div>
                        </section>

                        {/* PAYMENT */}

                        <section className="checkout-section">
                            <div className="checkout-section__heading">
                                <div className="checkout-section__number">
                                    03
                                </div>

                                <div>
                                    <h2>
                                        Payment Method
                                    </h2>

                                    <p>
                                        Choose how you'd like
                                        to pay.
                                    </p>
                                </div>
                            </div>

                            <div className="checkout-payment">
                                <label
                                    className={`checkout-payment__option ${
                                        paymentMethod === "cod"
                                            ? "checkout-payment__option--active"
                                            : ""
                                    }`}
                                >
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="cod"
                                        checked={
                                            paymentMethod ===
                                            "cod"
                                        }
                                        onChange={(event) =>
                                            setPaymentMethod(
                                                event.target
                                                    .value
                                            )
                                        }
                                    />

                                    <span className="checkout-payment__radio">
                                        <FiCheck />
                                    </span>

                                    <span className="checkout-payment__content">
                                        <strong>
                                            Cash on Delivery
                                        </strong>

                                        <small>
                                            Pay when your order
                                            arrives.
                                        </small>
                                    </span>
                                </label>

                                <label
                                    className={`checkout-payment__option ${
                                        paymentMethod ===
                                        "bank"
                                            ? "checkout-payment__option--active"
                                            : ""
                                    }`}
                                >
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="bank"
                                        checked={
                                            paymentMethod ===
                                            "bank"
                                        }
                                        onChange={(event) =>
                                            setPaymentMethod(
                                                event.target
                                                    .value
                                            )
                                        }
                                    />

                                    <span className="checkout-payment__radio">
                                        <FiCheck />
                                    </span>

                                    <span className="checkout-payment__content">
                                        <strong>
                                            Bank Transfer
                                        </strong>

                                        <small>
                                            Payment details will
                                            be provided after
                                            ordering.
                                        </small>
                                    </span>
                                </label>
                            </div>
                        </section>
                    </div>

                    {/* ORDER SUMMARY */}

                    <aside className="checkout-summary">
                        <div className="checkout-summary__heading">
                            <div>
                                <span>
                                    Your Order
                                </span>

                                <h2>
                                    Order Summary
                                </h2>
                            </div>

                            <FiShoppingBag />
                        </div>

                        <div className="checkout-summary__items">
                            {cartItems.map((item) => (
                                <div
                                    className="checkout-summary__item"
                                    key={item.id}
                                >
                                    <div className="checkout-summary__image">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                        />

                                        <span>
                                            {item.quantity}
                                        </span>
                                    </div>

                                    <div>
                                        <strong>
                                            {item.name}
                                        </strong>

                                        <span>
                                            Rs.{" "}
                                            {item.price.toLocaleString()}
                                        </span>
                                    </div>

                                    <strong>
                                        Rs.{" "}
                                        {(
                                            item.price *
                                            item.quantity
                                        ).toLocaleString()}
                                    </strong>
                                </div>
                            ))}
                        </div>

                        <div className="checkout-summary__rows">
                            <div>
                                <span>Subtotal</span>

                                <strong>
                                    Rs.{" "}
                                    {cartTotal.toLocaleString()}
                                </strong>
                            </div>

                            <div>
                                <span>Shipping</span>

                                <strong>
                                    Calculated after order
                                </strong>
                            </div>
                        </div>

                        <div className="checkout-summary__total">
                            <span>Total</span>

                            <strong>
                                Rs.{" "}
                                {cartTotal.toLocaleString()}
                            </strong>
                        </div>

                        <button
                            type="submit"
                            className="checkout-summary__submit"
                        >
                            Place Order
                            <FiCheck />
                        </button>

                        <p className="checkout-summary__secure">
                            <FiLock />
                            Your information is securely
                            handled.
                        </p>

                        <Link
                            to="/cart"
                            className="checkout-summary__back"
                        >
                            <FiArrowLeft />
                            Back to Cart
                        </Link>
                    </aside>
                </form>
            </div>
        </main>
    );
}