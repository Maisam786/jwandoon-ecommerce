import { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
    const [activeSection, setActiveSection] = useState(null);

    /* =========================================
       CLOSE MENUS AFTER NAVIGATION
    ========================================= */

    useEffect(() => {
        setShopOpen(false);
        setMobileOpen(false);
    }, [
        location.pathname,
        location.search,
        location.hash,
    ]);

    /* =========================================
       NAVIGATION SCROLL BEHAVIOR
    ========================================= */

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

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );
        };
    }, []);

    /* =========================================
       ACTIVE HOME SECTIONS
    ========================================= */

    useEffect(() => {
        if (location.pathname !== "/") {
            setActiveSection(null);
            return;
        }

        const sections = [
            {
                id: "new-arrivals",
                hash: "#new-arrivals",
            },
            {
                id: "deals",
                hash: "#deals",
            },
        ];

        const observers = [];

        sections.forEach(({ id, hash }) => {
            const section =
                document.getElementById(id);

            if (!section) return;

            const observer =
                new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                setActiveSection(hash);
                            }
                        });
                    },
                    {
                        root: null,
                        rootMargin:
                            "-35% 0px -50% 0px",
                        threshold: 0,
                    }
                );

            observer.observe(section);
            observers.push(observer);
        });

        const handleScroll = () => {
            if (window.scrollY < 250) {
                setActiveSection(null);
                return;
            }

            const newArrivals =
                document.getElementById(
                    "new-arrivals"
                );

            const deals =
                document.getElementById("deals");

            if (!newArrivals || !deals) return;

            const navigationOffset = 140;

            const currentPosition =
                window.scrollY +
                navigationOffset;

            const newArrivalsTop =
                newArrivals.offsetTop;

            const dealsTop =
                deals.offsetTop;

            if (
                currentPosition >= newArrivalsTop &&
                currentPosition < dealsTop
            ) {
                setActiveSection(
                    "#new-arrivals"
                );
            } else if (
                currentPosition >= dealsTop
            ) {
                setActiveSection("#deals");
            } else {
                setActiveSection(null);
            }
        };

        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );

        handleScroll();

        return () => {
            observers.forEach((observer) =>
                observer.disconnect()
            );

            window.removeEventListener(
                "scroll",
                handleScroll
            );
        };
    }, [location.pathname]);

    /* =========================================
       SCROLL TO HASHED SECTION
    ========================================= */

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
                section.getBoundingClientRect()
                    .top +
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

    /* =========================================
       CLOSE ALL MENUS
    ========================================= */

    const closeMenus = () => {
        setShopOpen(false);
        setMobileOpen(false);
    };

    /* =========================================
       HOME
    ========================================= */

    const handleHomeClick = (event) => {
        event.preventDefault();

        closeMenus();
        setActiveSection(null);

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

    /* =========================================
       DEALS / NEW ARRIVALS
    ========================================= */

    const handleSectionClick = (
        event,
        hash
    ) => {
        event.preventDefault();

        closeMenus();
        setActiveSection(hash);

        navigate({
            pathname: "/",
            hash,
        });
    };

    /* =========================================
       SHOP MENU
    ========================================= */

    const handleShopMouseEnter = () => {
        setShopOpen(true);
    };

    const handleShopMouseLeave = () => {
        setShopOpen(false);
    };

    const handleShopClick = () => {
        setShopOpen(false);
        setMobileOpen(false);
    };

    /* =========================================
       ACTIVE STATES
    ========================================= */

    const isHome =
        location.pathname === "/" &&
        activeSection === null;

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
                        onMouseEnter={
                            handleShopMouseEnter
                        }
                        onMouseLeave={
                            handleShopMouseLeave
                        }
                    >
                        <Link
                            to="/shop"
                            className={`navigation__link navigation__shop-button ${
                                isShop
                                    ? "navigation__link--active"
                                    : ""
                            }`}
                            onClick={
                                handleShopClick
                            }
                        >
                            Shop

                            <FiChevronDown />
                        </Link>

                        <MegaMenu
                            variant="desktop"
                        />
                    </div>

                    {/* DEALS / NEW ARRIVALS / OTHER LINKS */}

                    {links.map((link) => {
                        const active = link.hash
                            ? activeSection ===
                              link.hash
                            : location.pathname ===
                              link.href;

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
                                    onClick={(
                                        event
                                    ) =>
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
                                onClick={
                                    closeMenus
                                }
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
                    onClick={
                        handleHomeClick
                    }
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
                    onClick={
                        closeMenus
                    }
                >
                    Shop
                </Link>

                <button
                    type="button"
                    className="navigation__mobile-link navigation__mobile-shop-button"
                    onClick={() =>
                        setShopOpen(
                            (previous) =>
                                !previous
                        )
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

                {/* DEALS */}

                <a
                    href="/#deals"
                    className={`navigation__mobile-link ${
                        activeSection ===
                        "#deals"
                            ? "navigation__mobile-link--active"
                            : ""
                    }`}
                    onClick={(event) =>
                        handleSectionClick(
                            event,
                            "#deals"
                        )
                    }
                >
                    <span className="navigation__mobile-hot-wrapper">
                        Deals

                        <span className="navigation__hot">
                            HOT
                        </span>
                    </span>
                </a>

                {/* NEW ARRIVALS */}

                <a
                    href="/#new-arrivals"
                    className={`navigation__mobile-link ${
                        activeSection ===
                        "#new-arrivals"
                            ? "navigation__mobile-link--active"
                            : ""
                    }`}
                    onClick={(event) =>
                        handleSectionClick(
                            event,
                            "#new-arrivals"
                        )
                    }
                >
                    New Arrivals
                </a>

                {/* ABOUT / CONTACT */}

                {links
                    .filter(
                        (link) =>
                            !link.hash
                    )
                    .map((link) => (
                        <Link
                            key={link.label}
                            to={link.href}
                            className={`navigation__mobile-link ${
                                location.pathname ===
                                link.href
                                    ? "navigation__mobile-link--active"
                                    : ""
                            }`}
                            onClick={
                                closeMenus
                            }
                        >
                            {link.label}
                        </Link>
                    ))}
            </div>
        </div>
    );
}