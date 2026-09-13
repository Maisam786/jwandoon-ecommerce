import {
  FiHeart,
  FiSearch,
  FiShoppingBag,
  FiMenu,
  FiX,
  FiChevronDown,
} from "react-icons/fi";
import { useEffect, useState } from "react";

import logo from "../../../assets/logo/jwandoon-logo.png";

import "./Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  const closeMenu = () => {
    setMobileOpen(false);
    setShopOpen(false);
  };

  return (
    <header className={`main-header ${scrolled ? "main-header--scrolled" : ""}`}>
      <div className="container main-header__container">
        <a href="/" className="main-header__logo" onClick={closeMenu}>
          <img src={logo} alt="Jwandoon" />
        </a>

        <div className="main-header__search">
          <FiSearch />

          <input
            type="search"
            placeholder="Search for products, brands and more..."
            aria-label="Search products"
          />
        </div>

        <div className="main-header__actions">
          <button className="header-action" aria-label="Wishlist">
            <FiHeart />
            <span className="header-action__label">Wishlist</span>
          </button>

          <button
            className="header-action header-action--cart"
            aria-label="Shopping cart"
          >
            <FiShoppingBag />

            <span className="header-action__label">Cart</span>

            <span className="header-action__count">0</span>
          </button>

          <button
            type="button"
            className="header__mobile-menu"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`header__mobile-nav ${
          mobileOpen ? "header__mobile-nav--open" : ""
        }`}
      >
        <div className="header__mobile-nav-inner">
          <a href="/" onClick={closeMenu}>
            Home
          </a>

          <div className="header__mobile-shop">
            <button
              type="button"
              className="header__mobile-shop-button"
              onClick={() => setShopOpen((prev) => !prev)}
              aria-expanded={shopOpen}
            >
              <span>Shop</span>
              <FiChevronDown className={shopOpen ? "is-open" : ""} />
            </button>

            <div
              className={`header__mobile-shop-menu ${
                shopOpen ? "header__mobile-shop-menu--open" : ""
              }`}
            >
              <a href="/shop" onClick={closeMenu}>
                All Products
              </a>

              <a href="/shop?category=electronics" onClick={closeMenu}>
                Electronics
              </a>

              <a href="/shop?category=mobile-accessories" onClick={closeMenu}>
                Mobile Accessories
              </a>

              <a href="/shop?category=smart-watches" onClick={closeMenu}>
                Smart Watches
              </a>

              <a href="/shop?category=audio" onClick={closeMenu}>
                Audio & Headphones
              </a>

              <a href="/shop?category=home-living" onClick={closeMenu}>
                Home & Living
              </a>
            </div>
          </div>

          <a href="/about" onClick={closeMenu}>
            About
          </a>

          <a href="/contact" onClick={closeMenu}>
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
