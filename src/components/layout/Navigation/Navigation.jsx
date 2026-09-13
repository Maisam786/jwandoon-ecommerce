import { useEffect, useState } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

import MegaMenu from "../MegaMenu/MegaMenu";

import "./Navigation.css";

const links = [
  {
    label: "Home",
    href: "/",
    active: true,
  },
  {
    label: "Deals",
    href: "/deals",
    hot: true,
  },
  {
    label: "New Arrivals",
    href: "/new-arrivals",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navigation() {
  const [navVisible, setNavVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentScrollY <= 20) {
        setNavVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setNavVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setNavVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setShopOpen(false);
  };

  return (
    <div
      className={`navigation ${
        navVisible ? "navigation--visible" : "navigation--hidden"
      } ${scrolled ? "navigation--scrolled" : ""}`}
    >
      <div className="container navigation__container">
        {/* DESKTOP NAVIGATION */}
        <nav className="navigation__links">
          <a href="/" className="navigation__link navigation__link--active">
            Home
          </a>

          <div
            className={`navigation__shop ${
              shopOpen ? "navigation__shop--open" : ""
            }`}
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <button
              type="button"
              className="navigation__link navigation__shop-button"
              onClick={() => setShopOpen((prev) => !prev)}
              aria-expanded={shopOpen}
            >
              Shop
              <FiChevronDown />
            </button>

            <MegaMenu variant="desktop" />
          </div>

          {links.slice(1).map((link) => (
            <a href={link.href} key={link.label} className="navigation__link">
              {link.hot && <span className="navigation__hot">HOT</span>}

              {link.label}
            </a>
          ))}
        </nav>

        {/* MOBILE BUTTON */}
        {/* <button
                    type="button"
                    className={`navigation__mobile-button ${
                        mobileOpen
                            ? "navigation__mobile-button--open"
                            : ""
                    }`}
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
                </button> */}
      </div>

      {/* MOBILE NAVIGATION */}
      <div
        className={`navigation__mobile-menu ${
          mobileOpen ? "navigation__mobile-menu--open" : ""
        }`}
      >
        <a
          href="/"
          className="navigation__mobile-link navigation__mobile-link--active"
          onClick={closeMobileMenu}
        >
          Home
        </a>

        <button
          type="button"
          className="navigation__mobile-link navigation__mobile-shop-button"
          onClick={() => setShopOpen((prev) => !prev)}
        >
          <span>Shop</span>

          <FiChevronDown
            className={shopOpen ? "navigation__mobile-chevron--open" : ""}
          />
        </button>

        {shopOpen && (
          <div className="navigation__mobile-shop-content">
            <MegaMenu />
          </div>
        )}

        {links.slice(1).map((link) => (
          <a
            href={link.href}
            key={link.label}
            className="navigation__mobile-link"
            onClick={closeMobileMenu}
          >
            {link.hot && <span className="navigation__hot">HOT</span>}

            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
