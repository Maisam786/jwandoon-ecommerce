import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiHeart,
  FiMinus,
  FiPlus,
  FiShoppingBag,
  FiStar,
  FiTruck,
  FiShield,
} from "react-icons/fi";
import { useState } from "react";

import products from "../../data/products";
import RelatedProducts from "./components/RelatedProducts/RelatedProducts";

import "./ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);

  if (!product) {
    return (
      <main className="product-page product-page--not-found">
        <div className="container">
          <FiShoppingBag />

          <h1>Product Not Found</h1>

          <p>
            The product you're looking for doesn't exist or may have been
            removed.
          </p>

          <Link to="/shop" className="product-page__back-button">
            <FiArrowLeft />
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <main className="product-page">
      <div className="container">
        {/* BREADCRUMB */}

        <div className="product-page__breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/shop">Shop</Link>
          <span>/</span>
          <span>{product.name}</span>
        </div>

        {/* PRODUCT */}

        <section className="product-details">
          {/* GALLERY */}

          <div className="product-gallery">
            <div className="product-gallery__main">
              {product.badge && (
                <span
                  className={`product-gallery__badge product-gallery__badge--${product.badge.type}`}
                >
                  {product.badge.label}
                </span>
              )}

              {discount > 0 && (
                <span className="product-gallery__discount">-{discount}%</span>
              )}

              <button
                type="button"
                className={`product-gallery__wishlist ${
                  wishlist ? "product-gallery__wishlist--active" : ""
                }`}
                onClick={() => setWishlist((prev) => !prev)}
                aria-label="Add to wishlist"
              >
                <FiHeart />
              </button>

              <img src={product.image} alt={product.name} />
            </div>

            <div className="product-gallery__thumbs">
              <button
                type="button"
                className="product-gallery__thumb product-gallery__thumb--active"
              >
                <img src={product.image} alt="" />
              </button>
            </div>
          </div>

          {/* INFORMATION */}

          <div className="product-info">
            <span className="product-info__category">{product.category}</span>

            <h1>{product.name}</h1>

            <div className="product-info__rating">
              <span>
                <FiStar />
                {product.rating}
              </span>

              <span>({product.reviews} Reviews)</span>

              <i />
              <span className="product-info__availability">In Stock</span>
            </div>

            <div className="product-info__price">
              <strong>Rs. {product.price.toLocaleString()}</strong>

              {product.oldPrice && (
                <del>Rs. {product.oldPrice.toLocaleString()}</del>
              )}

              {discount > 0 && <span>Save {discount}%</span>}
            </div>

            <p className="product-info__description">
              Experience reliable quality and modern design with this carefully
              selected Jwandoon product. Built to bring everyday convenience,
              useful features, and excellent value to your lifestyle.
            </p>

            <div className="product-info__divider" />

            {/* QUANTITY */}

            <div className="product-info__quantity">
              <span>Quantity</span>

              <div className="quantity-control">
                <button
                  type="button"
                  onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                  aria-label="Decrease quantity"
                >
                  <FiMinus />
                </button>

                <strong>{quantity}</strong>

                <button
                  type="button"
                  onClick={() => setQuantity((value) => value + 1)}
                  aria-label="Increase quantity"
                >
                  <FiPlus />
                </button>
              </div>
            </div>

            {/* ACTIONS */}

            <div className="product-info__actions">
              <button type="button" className="product-info__add">
                <FiShoppingBag />
                Add to Cart
              </button>

              <button type="button" className="product-info__buy">
                Buy Now
              </button>
            </div>

            {/* BENEFITS */}

            <div className="product-info__benefits">
              <div>
                <span>
                  <FiTruck />
                </span>

                <div>
                  <strong>Fast Delivery</strong>
                  <small>Reliable delivery to your doorstep</small>
                </div>
              </div>

              <div>
                <span>
                  <FiShield />
                </span>

                <div>
                  <strong>Secure Shopping</strong>
                  <small>Safe and trusted checkout</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT DETAILS */}

        <section className="product-description">
          <div className="product-description__heading">
            <span>Product Information</span>
            <h2 className="heading-font">
              Details you
              <em> should know.</em>
            </h2>
          </div>

          <div className="product-description__content">
            <p>
              At Jwandoon, we carefully select products that combine
              functionality, modern design, and everyday value. Every product is
              chosen with our customers' shopping experience in mind.
            </p>

            <div className="product-description__specs">
              <div>
                <span>Category</span>
                <strong>{product.category}</strong>
              </div>

              <div>
                <span>Product Rating</span>
                <strong>{product.rating} / 5</strong>
              </div>

              <div>
                <span>Customer Reviews</span>
                <strong>{product.reviews}</strong>
              </div>

              <div>
                <span>Availability</span>
                <strong>In Stock</strong>
              </div>
            </div>
          </div>
        </section>

        <RelatedProducts products={products} currentProductId={product.id} />
      </div>
    </main>
  );
}
