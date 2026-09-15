import {
    FiArrowRight,
    FiHeart,
    FiShoppingBag,
    FiTrash2,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import ProductCard from "../../components/common/ProductCard/ProductCard";
import { useWishlist } from "../../context/WishlistContext";

import "./Wishlist.css";

export default function Wishlist() {
    const {
        wishlistItems,
        clearWishlist,
    } = useWishlist();

    if (wishlistItems.length === 0) {
        return (
            <main className="wishlist-page wishlist-page--empty">
                <div className="container">
                    <div className="wishlist-empty">
                        <div className="wishlist-empty__icon">
                            <FiHeart />
                        </div>

                        <span className="wishlist-empty__eyebrow">
                            Your Wishlist
                        </span>

                        <h1>
                            Your wishlist is
                            <em> waiting.</em>
                        </h1>

                        <p>
                            Save the products you love and
                            come back to them whenever you're
                            ready.
                        </p>

                        <Link
                            to="/shop"
                            className="wishlist-empty__button"
                        >
                            Explore Products
                            <FiArrowRight />
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="wishlist-page">
            <div className="container">
                <div className="wishlist-page__heading">
                    <div>
                        <span className="section-eyebrow">
                            Your Collection
                        </span>

                        <h1>
                            Things you
                            <br />
                            <em>love.</em>
                        </h1>
                    </div>

                    <div className="wishlist-page__actions">
                        <span className="wishlist-page__count">
                            {wishlistItems.length}{" "}
                            {wishlistItems.length === 1
                                ? "Item"
                                : "Items"}
                        </span>

                        <button
                            type="button"
                            onClick={clearWishlist}
                            className="wishlist-page__clear"
                        >
                            <FiTrash2 />
                            Clear Wishlist
                        </button>
                    </div>
                </div>

                <div className="wishlist-grid">
                    {wishlistItems.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            showQuickView={false}
                        />
                    ))}
                </div>

                <div className="wishlist-page__footer">
                    <Link
                        to="/shop"
                        className="wishlist-page__continue"
                    >
                        <FiShoppingBag />
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </main>
    );
}