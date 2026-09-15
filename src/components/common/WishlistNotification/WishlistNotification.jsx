import { FiCheck, FiHeart, FiX } from "react-icons/fi";

import { useEffect, useState } from "react";

import { useWishlist } from "../../../context/WishlistContext";

import "./WishlistNotification.css";

export default function WishlistNotification() {
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

  const { wishlistNotification, closeWishlistNotification } = useWishlist();

  if (!wishlistNotification) {
    return null;
  }

  const isAdded = wishlistNotification.type === "added";

  return (
    <div
      className={`wishlist-notification ${
        scrolled ? "wishlist-notification--scrolled" : ""
      }`}
    >
      <div className="wishlist-notification__icon">
        {isAdded ? <FiHeart /> : <FiCheck />}
      </div>

      <div className="wishlist-notification__content">
        <strong>{wishlistNotification.product.name}</strong>

        <span>
          {isAdded ? "Added to your wishlist" : "Removed from your wishlist"}
        </span>
      </div>

      <button
        type="button"
        className="wishlist-notification__close"
        onClick={closeWishlistNotification}
        aria-label="Close notification"
      >
        <FiX />
      </button>
    </div>
  );
}
