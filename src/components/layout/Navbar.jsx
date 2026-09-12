import { useState } from "react";
import {
    FiChevronDown,
    FiHeart,
    FiMenu,
    FiSearch,
    FiShoppingBag,
    FiUser,
    FiX,
} from "react-icons/fi";

import "./Navbar.css";

import logo from "../../assets/logo/jwandoon-logo.png";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

const categories = [
    "Electronics",
    "Fashion",
    "Accessories",
    "Home & Living",
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [categoryOpen, setCategoryOpen] = useState(false);

    return (
        <header className="navbar">
            <div className="container navbar__container">

                {/* Logo */}
                <a href="/" className="navbar__logo">
                    <img
                        src={logo}
                        alt="Jwandoon"
                    />
                </a>

                {/* Desktop Navigation */}
                <nav className="navbar__nav">

                    {navLinks.slice(0, 2).map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className={`navbar__link ${
                                link.label === "Home"
                                    ? "navbar__link--active"
                                    : ""
                            }`}
                        >
                            {link.label}
                        </a>
                    ))}

                    {/* Categories */}
                    <div
                        className="navbar__category"
                        onMouseEnter={() => setCategoryOpen(true)}
                        onMouseLeave={() => setCategoryOpen(false)}
                    >
                        <button className="navbar__link navbar__category-button">
                            Categories
                            <FiChevronDown
                                className={`navbar__chevron ${
                                    categoryOpen
                                        ? "navbar__chevron--open"
                                        : ""
                                }`}
                            />
                        </button>

                        <div
                            className={`category-dropdown ${
                                categoryOpen
                                    ? "category-dropdown--open"
                                    : ""
                            }`}
                        >
                            {categories.map((category) => (
                                <a
                                    href={`/shop?category=${category.toLowerCase()}`}
                                    key={category}
                                    className="category-dropdown__item"
                                >
                                    <span>{category}</span>
                                    <span>→</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {navLinks.slice(2).map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="navbar__link"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Right Actions */}
                <div className="navbar__actions">

                    {/* Search */}
                    <button
                        className="navbar__action navbar__search"
                        aria-label="Search products"
                    >
                        <FiSearch />

                        <span>Search products...</span>
                    </button>

                    {/* Account */}
                    <button
                        className="navbar__icon-button"
                        aria-label="Account"
                    >
                        <FiUser />
                    </button>

                    {/* Wishlist */}
                    <button
                        className="navbar__icon-button"
                        aria-label="Wishlist"
                    >
                        <FiHeart />
                    </button>

                    {/* Cart */}
                    <button
                        className="navbar__icon-button navbar__cart"
                        aria-label="Shopping cart"
                    >
                        <FiShoppingBag />

                        <span className="navbar__cart-count">
                            0
                        </span>
                    </button>

                    {/* Mobile Menu */}
                    <button
                        className="navbar__menu-button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`mobile-menu ${
                    menuOpen ? "mobile-menu--open" : ""
                }`}
            >
                <nav className="mobile-menu__nav">

                    {navLinks.map((link) => (
                        <a
                            href={link.href}
                            key={link.label}
                            className="mobile-menu__link"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}

                    <div className="mobile-menu__categories">
                        <span>Categories</span>

                        {categories.map((category) => (
                            <a
                                href={`/shop?category=${category.toLowerCase()}`}
                                key={category}
                                onClick={() => setMenuOpen(false)}
                            >
                                {category}
                            </a>
                        ))}
                    </div>
                </nav>
            </div>
        </header>
    );
}