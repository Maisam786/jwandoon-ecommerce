import { FiEye, FiHeart, FiShoppingBag, FiStar } from "react-icons/fi";

import { Link } from "react-router-dom";

import "./ProductCard.css";

export default function ProductCard({ product, showQuickView = true }) {
  return (
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
            className="product-card__action"
            aria-label={`Add ${product.name} to wishlist`}
          >
            <FiHeart />
          </button>

          {showQuickView && (
            <button
              type="button"
              className="product-card__action"
              aria-label={`Quick view ${product.name}`}
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

        <button type="button" className="product-card__quick-add">
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
  );
}
