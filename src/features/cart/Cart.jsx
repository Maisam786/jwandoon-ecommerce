import {
    FiArrowLeft,
    FiArrowRight,
    FiMinus,
    FiPlus,
    FiShoppingBag,
    FiTrash2,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import { useCart } from "../../context/CartContext";

import "./Cart.css";

export default function Cart() {
    const {
        cartItems,
        cartTotal,
        updateQuantity,
        removeFromCart,
    } = useCart();

    if (cartItems.length === 0) {
        return (
            <main className="cart-page cart-page--empty">
                <div className="container">
                    <div className="cart-empty">
                        <div className="cart-empty__icon">
                            <FiShoppingBag />
                        </div>

                        <span className="cart-empty__eyebrow">
                            Your Shopping Bag
                        </span>

                        <h1>
                            Your cart is
                            <em> empty.</em>
                        </h1>

                        <p>
                            You haven't added any products yet.
                            Explore our collection and find
                            something you'll love.
                        </p>

                        <Link
                            to="/shop"
                            className="cart-empty__button"
                        >
                            Start Shopping
                            <FiArrowRight />
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="cart-page">
            <div className="container">
                <div className="cart-page__heading">
                    <div>
                        <span className="section-eyebrow">
                            Your Shopping Bag
                        </span>

                        <h1>
                            Review your
                            <br />
                            <em>cart.</em>
                        </h1>
                    </div>

                    <span className="cart-page__count">
                        {cartItems.length}{" "}
                        {cartItems.length === 1
                            ? "Item"
                            : "Items"}
                    </span>
                </div>

                <div className="cart-layout">
                    <section className="cart-products">
                        <div className="cart-products__header">
                            <span>Product</span>
                            <span>Quantity</span>
                            <span>Total</span>
                        </div>

                        <div className="cart-products__list">
                            {cartItems.map((item) => (
                                <article
                                    key={item.id}
                                    className="cart-product"
                                >
                                    <div className="cart-product__details">
                                        <Link
                                            to={`/product/${item.id}`}
                                            className="cart-product__image"
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                            />
                                        </Link>

                                        <div className="cart-product__info">
                                            <span>
                                                {item.category}
                                            </span>

                                            <Link
                                                to={`/product/${item.id}`}
                                                className="cart-product__name"
                                            >
                                                {item.name}
                                            </Link>

                                            <strong>
                                                Rs.{" "}
                                                {item.price.toLocaleString()}
                                            </strong>

                                            <button
                                                type="button"
                                                className="cart-product__remove cart-product__remove--mobile"
                                                onClick={() =>
                                                    removeFromCart(
                                                        item.id
                                                    )
                                                }
                                            >
                                                <FiTrash2 />
                                                Remove
                                            </button>
                                        </div>
                                    </div>

                                    <div className="cart-product__quantity">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                updateQuantity(
                                                    item.id,
                                                    item.quantity -
                                                        1
                                                )
                                            }
                                            disabled={
                                                item.quantity <=
                                                1
                                            }
                                            aria-label="Decrease quantity"
                                        >
                                            <FiMinus />
                                        </button>

                                        <span>
                                            {item.quantity}
                                        </span>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                updateQuantity(
                                                    item.id,
                                                    item.quantity +
                                                        1
                                                )
                                            }
                                            aria-label="Increase quantity"
                                        >
                                            <FiPlus />
                                        </button>
                                    </div>

                                    <div className="cart-product__total">
                                        <strong>
                                            Rs.{" "}
                                            {(
                                                item.price *
                                                item.quantity
                                            ).toLocaleString()}
                                        </strong>

                                        <button
                                            type="button"
                                            className="cart-product__remove"
                                            onClick={() =>
                                                removeFromCart(
                                                    item.id
                                                )
                                            }
                                            aria-label={`Remove ${item.name}`}
                                        >
                                            <FiTrash2 />
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <Link
                            to="/shop"
                            className="cart-products__continue"
                        >
                            <FiArrowLeft />
                            Continue Shopping
                        </Link>
                    </section>

                    <aside className="cart-summary">
                        <div className="cart-summary__heading">
                            <span>Order Summary</span>

                            <FiShoppingBag />
                        </div>

                        <div className="cart-summary__rows">
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
                                    Calculated at checkout
                                </strong>
                            </div>
                        </div>

                        <div className="cart-summary__total">
                            <span>Total</span>

                            <strong>
                                Rs.{" "}
                                {cartTotal.toLocaleString()}
                            </strong>
                        </div>

                        <Link
                            to="/checkout"
                            className="cart-summary__checkout"
                        >
                            Proceed to Checkout
                            <FiArrowRight />
                        </Link>

                        <div className="cart-summary__trust">
                            <div>
                                <span>✓</span>
                                Secure checkout
                            </div>

                            <div>
                                <span>✓</span>
                                Fast delivery across Pakistan
                            </div>

                            <div>
                                <span>✓</span>
                                Quality products
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}