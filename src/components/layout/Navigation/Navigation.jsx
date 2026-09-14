import { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import {
    Link,
    useLocation,
    useNavigate,
} from "react-router-dom";

import MegaMenu from "../MegaMenu/MegaMenu";

import "./Navigation.css";

const links = [
    {
        label: "Deals",
        hash: "#deals",
        hot: true,
    },
    {
        label: "New Arrivals",
        hash: "#new-arrivals",
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
    const location = useLocation();
    const navigate = useNavigate();

    const [navVisible, setNavVisible] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const [shopOpen, setShopOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    /* NAVIGATION SCROLL BEHAVIOR */
    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            setScrolled(currentScrollY > 10);

            if (currentScrollY <= 20) {
                setNavVisible(true);
            } else if (currentScrollY > lastScrollY) {
                setNavVisible(false);
            } else {
                setNavVisible(true);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );
        };
    }, []);

    /* SCROLL TO HASHED SECTION */
    useEffect(() => {
        if (!location.hash) return;

        const sectionId =
            location.hash.substring(1);

        const timer = setTimeout(() => {
            const section =
                document.getElementById(sectionId);

            if (!section) return;

            const navigationOffset = 120;

            const position =
                section.getBoundingClientRect().top +
                window.scrollY -
                navigationOffset;

            window.scrollTo({
                top: position,
                behavior: "smooth",
            });
        }, 100);

        return () => clearTimeout(timer);
    }, [
        location.pathname,
        location.hash,
    ]);

    const closeMobileMenu = () => {
        setMobileOpen(false);
        setShopOpen(false);
    };

    /* HOME */
    const handleHomeClick = (event) => {
        event.preventDefault();

        closeMobileMenu();

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

    /* DEALS / NEW ARRIVALS */
    const handleSectionClick = (
        event,
        hash
    ) => {
        event.preventDefault();

        closeMobileMenu();

        navigate({
            pathname: "/",
            hash: hash,
        });
    };

    const isHome =
        location.pathname === "/" &&
        !location.hash;

    const isShop =
        location.pathname === "/shop";

    return (
        <div
            className={`navigation ${
                navVisible
                    ? "navigation--visible"
                    : "navigation--hidden"
            } ${
                scrolled
                    ? "navigation--scrolled"
                    : ""
            }`}
        >
            <div className="container navigation__container">

                {/* DESKTOP NAVIGATION */}

                <nav className="navigation__links">

                    {/* HOME */}

                    <Link
                        to="/"
                        className={`navigation__link ${
                            isHome
                                ? "navigation__link--active"
                                : ""
                        }`}
                        onClick={handleHomeClick}
                    >
                        Home
                    </Link>

                    {/* SHOP */}

                    <div
                        className={`navigation__shop ${
                            shopOpen
                                ? "navigation__shop--open"
                                : ""
                        }`}
                        onMouseEnter={() =>
                            setShopOpen(true)
                        }
                        onMouseLeave={() =>
                            setShopOpen(false)
                        }
                    >
                        <Link
                            to="/shop"
                            className={`navigation__link navigation__shop-button ${
                                isShop
                                    ? "navigation__link--active"
                                    : ""
                            }`}
                            onClick={() =>
                                setShopOpen(false)
                            }
                        >
                            Shop

                            <FiChevronDown />
                        </Link>

                        <MegaMenu variant="desktop" />
                    </div>

                    {/* OTHER LINKS */}

                    {links.map((link) => {
                        const active = link.hash
                            ? location.pathname === "/" &&
                              location.hash === link.hash
                            : location.pathname === link.href;

                        if (link.hash) {
                            return (
                                <a
                                    key={link.label}
                                    href={`/${link.hash}`}
                                    className={`navigation__link ${
                                        active
                                            ? "navigation__link--active"
                                            : ""
                                    }`}
                                    onClick={(event) =>
                                        handleSectionClick(
                                            event,
                                            link.hash
                                        )
                                    }
                                >
                                    {link.hot && (
                                        <span className="navigation__hot">
                                            HOT
                                        </span>
                                    )}

                                    {link.label}
                                </a>
                            );
                        }

                        return (
                            <Link
                                key={link.label}
                                to={link.href}
                                className={`navigation__link ${
                                    active
                                        ? "navigation__link--active"
                                        : ""
                                }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* MOBILE MENU */}

            <div
                className={`navigation__mobile-menu ${
                    mobileOpen
                        ? "navigation__mobile-menu--open"
                        : ""
                }`}
            >
                <Link
                    to="/"
                    className={`navigation__mobile-link ${
                        isHome
                            ? "navigation__mobile-link--active"
                            : ""
                    }`}
                    onClick={handleHomeClick}
                >
                    Home
                </Link>

                <Link
                    to="/shop"
                    className={`navigation__mobile-link ${
                        isShop
                            ? "navigation__mobile-link--active"
                            : ""
                    }`}
                    onClick={closeMobileMenu}
                >
                    Shop
                </Link>

                <button
                    type="button"
                    className="navigation__mobile-link navigation__mobile-shop-button"
                    onClick={() =>
                        setShopOpen((prev) => !prev)
                    }
                >
                    <span>
                        Shop Categories
                    </span>

                    <FiChevronDown
                        className={
                            shopOpen
                                ? "navigation__mobile-chevron--open"
                                : ""
                        }
                    />
                </button>

                {shopOpen && (
                    <div className="navigation__mobile-shop-content">
                        <MegaMenu />
                    </div>
                )}

                {links.map((link) => {
                    const active = link.hash
                        ? location.pathname === "/" &&
                          location.hash === link.hash
                        : location.pathname === link.href;

                    if (link.hash) {
                        return (
                            <a
                                key={link.label}
                                href={`/${link.hash}`}
                                className={`navigation__mobile-link ${
                                    active
                                        ? "navigation__mobile-link--active"
                                        : ""
                                }`}
                                onClick={(event) =>
                                    handleSectionClick(
                                        event,
                                        link.hash
                                    )
                                }
                            >
                                {link.hot && (
                                    <span className="navigation__hot">
                                        HOT
                                    </span>
                                )}

                                {link.label}
                            </a>
                        );
                    }

                    return (
                        <Link
                            key={link.label}
                            to={link.href}
                            className={`navigation__mobile-link ${
                                active
                                    ? "navigation__mobile-link--active"
                                    : ""
                            }`}
                            onClick={closeMobileMenu}
                        >
                            {link.label}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}