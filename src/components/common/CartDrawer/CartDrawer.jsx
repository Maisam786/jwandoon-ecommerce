import {
    FiArrowRight,
    FiMinus,
    FiPlus,
    FiShoppingBag,
    FiTrash2,
    FiX,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import { useCart } from "../../../context/CartContext";

import "./CartDrawer.css";

export default function CartDrawer({
    isOpen,
    onClose,
}) {
    const {
        cartItems,
        cartTotal,
        updateQuantity,
        removeFromCart,
    } = useCart();

    return (
        <>
            {isOpen && (
                <button
                    type="button"
                    className="cart-drawer__overlay"
                    onClick={onClose}
                    aria-label="Close cart"
                />
            )}

            <aside
                className={`cart-drawer ${
                    isOpen ? "cart-drawer--open" : ""
                }`}
                aria-hidden={!isOpen}
            >
                <div className="cart-drawer__header">
                    <div>
                        <span className="cart-drawer__eyebrow">
                            Your Bag
                        </span>

                        <h2>
                            Shopping Cart
                            {cartItems.length > 0 && (
                                <span>
                                    {cartItems.length}
                                </span>
                            )}
                        </h2>
                    </div>

                    <button
                        type="button"
                        className="cart-drawer__close"
                        onClick={onClose}
                        aria-label="Close shopping cart"
                    >
                        <FiX />
                    </button>
                </div>

                {cartItems.length === 0 ? (
                    <div className="cart-drawer__empty">
                        <div className="cart-drawer__empty-icon">
                            <FiShoppingBag />
                        </div>

                        <h3>Your cart is empty</h3>

                        <p>
                            Looks like you haven't added
                            anything to your cart yet.
                        </p>

                        <Link
                            to="/shop"
                            className="cart-drawer__shop"
                            onClick={onClose}
                        >
                            Start Shopping
                            <FiArrowRight />
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className="cart-drawer__items">
                            {cartItems.map((item) => (
                                <article
                                    key={item.id}
                                    className="cart-item"
                                >
                                    <Link
                                        to={`/product/${item.id}`}
                                        className="cart-item__image"
                                        onClick={onClose}
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                        />
                                    </Link>

                                    <div className="cart-item__content">
                                        <div className="cart-item__top">
                                            <div>
                                                <span className="cart-item__category">
                                                    {item.category}
                                                </span>

                                                <Link
                                                    to={`/product/${item.id}`}
                                                    className="cart-item__name"
                                                    onClick={onClose}
                                                >
                                                    {item.name}
                                                </Link>
                                            </div>

                                            <button
                                                type="button"
                                                className="cart-item__remove"
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

                                        <div className="cart-item__bottom">
                                            <div className="cart-item__quantity">
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

                                            <strong className="cart-item__price">
                                                Rs.{" "}
                                                {(
                                                    item.price *
                                                    item.quantity
                                                ).toLocaleString()}
                                            </strong>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <div className="cart-drawer__footer">
                            <div className="cart-drawer__summary">
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

                                <div className="cart-drawer__total">
                                    <span>Total</span>
                                    <strong>
                                        Rs.{" "}
                                        {cartTotal.toLocaleString()}
                                    </strong>
                                </div>
                            </div>

                            <Link
                                to="/cart"
                                className="cart-drawer__view"
                                onClick={onClose}
                            >
                                View Cart
                            </Link>

                            <Link
                                to="/checkout"
                                className="cart-drawer__checkout"
                                onClick={onClose}
                            >
                                Proceed to Checkout
                                <FiArrowRight />
                            </Link>

                            <p className="cart-drawer__note">
                                Secure checkout · Fast delivery
                                across Pakistan
                            </p>
                        </div>
                    </>
                )}
            </aside>
        </>
    );
}