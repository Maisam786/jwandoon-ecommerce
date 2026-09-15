import { FiEye, FiHeart, FiShoppingBag, FiStar } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useCart } from "../../../context/CartContext";
import { useWishlist } from "../../../context/WishlistContext";

import QuickView from "../QuickView/QuickView";

import "./ProductCard.css";

export default function ProductCard({ product, showQuickView = true }) {
  const { addToCart } = useCart();

  const { toggleWishlist, isInWishlist } = useWishlist();

  const isWishlisted = isInWishlist(product.id);
  const [quickViewOpen, setQuickViewOpen] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  const handleWishlist = () => {
    toggleWishlist(product);
  };

  return (
    <>
      <article className="product-card">
        <div className="product-card__image">
          {product.badge && (
            <span
              className={`product-card__badge product-card__badge--${product.badge.type}`}
            >
              {product.badge.label}
            </span>
          )}

          <div className="product-card__actions">
            <button
              type="button"
              className={`product-card__action ${
                isWishlisted ? "product-card__action--active" : ""
              }`}
              aria-label={
                isWishlisted
                  ? `Remove ${product.name} from wishlist`
                  : `Add ${product.name} to wishlist`
              }
              onClick={handleWishlist}
            >
              <FiHeart
                className={isWishlisted ? "product-card__heart--filled" : ""}
              />
            </button>

            {showQuickView && (
              <button
                type="button"
                className="product-card__action"
                aria-label={`Quick view ${product.name}`}
                onClick={() => setQuickViewOpen(true)}
              >
                <FiEye />
              </button>
            )}
          </div>

          <Link
            to={`/product/${product.id}`}
            className="product-card__image-link"
          >
            <img src={product.image} alt={product.name} />
          </Link>

          <button
            type="button"
            className="product-card__quick-add"
            onClick={handleAddToCart}
          >
            <FiShoppingBag />
            <span>Add to Cart</span>
          </button>
        </div>

        <div className="product-card__content">
          <span className="product-card__category">{product.category}</span>

          <h3 className="product-card__name">
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </h3>

          <div className="product-card__rating">
            <span className="product-card__stars">
              <FiStar />
              {product.rating}
            </span>

            <span className="product-card__reviews">({product.reviews})</span>
          </div>

          <div className="product-card__price">
            <strong>Rs. {product.price.toLocaleString()}</strong>

            {product.oldPrice && (
              <del>Rs. {product.oldPrice.toLocaleString()}</del>
            )}
          </div>
        </div>
      </article>

      <QuickView
        product={product}
        isOpen={quickViewOpen}
        onClose={() => setQuickViewOpen(false)}
      />
    </>
  );
}
