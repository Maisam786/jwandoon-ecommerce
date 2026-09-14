import {
  FiHeart,
  FiSearch,
  FiShoppingBag,
  FiMenu,
  FiX,
  FiChevronDown,
} from "react-icons/fi";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import logo from "../../../assets/logo/jwandoon-logo.png";

import "./Header.css";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMobileOpen(false);
    setShopOpen(false);
  };

  const handleHomeClick = (event) => {
    event.preventDefault();

    closeMenu();

    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      if (location.hash) {
        navigate("/", {
          replace: true,
        });
      }

      return;
    }

    navigate("/");
  };

  const handleSectionClick = (event, hash) => {
    event.preventDefault();

    closeMenu();

    navigate({
      pathname: "/",
      hash,
    });
  };

  const isHome =
    location.pathname === "/" &&
    !location.hash;

  const isShop =
    location.pathname === "/shop";

  const isDeals =
    location.pathname === "/" &&
    location.hash === "#deals";

  const isNewArrivals =
    location.pathname === "/" &&
    location.hash === "#new-arrivals";

  return (
    <header
      className={`main-header ${
        scrolled ? "main-header--scrolled" : ""
      }`}
    >
      <div className="container main-header__container">
        <Link
          to="/"
          className="main-header__logo"
          onClick={handleHomeClick}
        >
          <img src={logo} alt="Jwandoon" />
        </Link>

        <div className="main-header__search">
          <FiSearch />

          <input
            type="search"
            placeholder="Search for products, brands and more..."
            aria-label="Search products"
          />
        </div>

        <div className="main-header__actions">
          <button
            type="button"
            className="header-action"
            aria-label="Wishlist"
          >
            <FiHeart />
            <span className="header-action__label">
              Wishlist
            </span>
          </button>

          <button
            type="button"
            className="header-action header-action--cart"
            aria-label="Shopping cart"
          >
            <FiShoppingBag />

            <span className="header-action__label">
              Cart
            </span>

            <span className="header-action__count">
              0
            </span>
          </button>

          <button
            type="button"
            className="header__mobile-menu"
            aria-label={
              mobileOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={mobileOpen}
            onClick={() =>
              setMobileOpen((prev) => !prev)
            }
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE NAVIGATION */}

      <div
        className={`header__mobile-nav ${
          mobileOpen
            ? "header__mobile-nav--open"
            : ""
        }`}
      >
        <div className="header__mobile-nav-inner">
          {/* HOME */}

          <Link
            to="/"
            className={
              isHome
                ? "header__mobile-link header__mobile-link--active"
                : "header__mobile-link"
            }
            onClick={handleHomeClick}
          >
            Home
          </Link>

          {/* SHOP */}

          <div className="header__mobile-shop">
            <Link
              to="/shop"
              className={
                isShop
                  ? "header__mobile-link header__mobile-link--active"
                  : "header__mobile-link"
              }
              onClick={closeMenu}
            >
              Shop
            </Link>

            <button
              type="button"
              className="header__mobile-shop-button"
              onClick={() =>
                setShopOpen((prev) => !prev)
              }
              aria-expanded={shopOpen}
            >
              <span>Shop Categories</span>

              <FiChevronDown
                className={
                  shopOpen ? "is-open" : ""
                }
              />
            </button>

            <div
              className={`header__mobile-shop-menu ${
                shopOpen
                  ? "header__mobile-shop-menu--open"
                  : ""
              }`}
            >
              <Link
                to="/shop"
                onClick={closeMenu}
              >
                All Products
              </Link>

              <Link
                to="/shop?category=electronics"
                onClick={closeMenu}
              >
                Electronics
              </Link>

              <Link
                to="/shop?category=mobile-accessories"
                onClick={closeMenu}
              >
                Mobile Accessories
              </Link>

              <Link
                to="/shop?category=smart-watches"
                onClick={closeMenu}
              >
                Smart Watches
              </Link>

              <Link
                to="/shop?category=audio-headphones"
                onClick={closeMenu}
              >
                Audio & Headphones
              </Link>

              <Link
                to="/shop?category=home-living"
                onClick={closeMenu}
              >
                Home & Living
              </Link>
            </div>
          </div>

          {/* DEALS */}

          <a
            href="/#deals"
            className={
              isDeals
                ? "header__mobile-link header__mobile-link--active"
                : "header__mobile-link"
            }
            onClick={(event) =>
              handleSectionClick(
                event,
                "#deals"
              )
            }
          >
            <span className="header__mobile-link-content">
              Deals

              <span className="header__mobile-hot">
                HOT
              </span>
            </span>
          </a>

          {/* NEW ARRIVALS */}

          <a
            href="/#new-arrivals"
            className={
              isNewArrivals
                ? "header__mobile-link header__mobile-link--active"
                : "header__mobile-link"
            }
            onClick={(event) =>
              handleSectionClick(
                event,
                "#new-arrivals"
              )
            }
          >
            New Arrivals
          </a>

          {/* ABOUT */}

          <Link
            to="/about"
            className={
              location.pathname === "/about"
                ? "header__mobile-link header__mobile-link--active"
                : "header__mobile-link"
            }
            onClick={closeMenu}
          >
            About
          </Link>

          {/* CONTACT */}

          <Link
            to="/contact"
            className={
              location.pathname === "/contact"
                ? "header__mobile-link header__mobile-link--active"
                : "header__mobile-link"
            }
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}