import {
    FiHeadphones,
    FiHome,
    FiMonitor,
    FiSmartphone,
    FiWatch,
    FiZap,
} from "react-icons/fi";

import { useState } from "react";

import "./MegaMenu.css";

const categories = [
    {
        name: "Electronics",
        icon: FiMonitor,
        subcategories: [
            "Smartphones",
            "Laptops",
            "Tablets",
            "Computer Accessories",
            "Gaming",
        ],
        brands: [
            "Samsung",
            "Xiaomi",
            "Apple",
            "Lenovo",
        ],
    },
    {
        name: "Mobile Accessories",
        icon: FiSmartphone,
        subcategories: [
            "Cases & Covers",
            "Chargers",
            "Power Banks",
            "Cables",
            "Screen Protectors",
        ],
        brands: [
            "Baseus",
            "Anker",
            "UGREEN",
            "JOYROOM",
        ],
    },
    {
        name: "Smart Watches",
        icon: FiWatch,
        subcategories: [
            "Smart Watches",
            "Fitness Bands",
            "Watch Straps",
            "Chargers",
            "Accessories",
        ],
        brands: [
            "Haylou",
            "Amazfit",
            "Xiaomi",
            "Colmi",
        ],
    },
    {
        name: "Audio & Headphones",
        icon: FiHeadphones,
        subcategories: [
            "Wireless Earbuds",
            "Headphones",
            "Bluetooth Speakers",
            "Gaming Audio",
            "Microphones",
        ],
        brands: [
            "JBL",
            "Anker",
            "Sony",
            "Hoco",
        ],
    },
    {
        name: "Home & Living",
        icon: FiHome,
        subcategories: [
            "Kitchen",
            "Home Accessories",
            "Lighting",
            "Storage",
            "Smart Home",
        ],
        brands: [
            "Xiaomi",
            "Philips",
            "Tefal",
            "Baseus",
        ],
    },
    {
        name: "Featured Products",
        icon: FiZap,
        subcategories: [
            "Best Sellers",
            "Trending Now",
            "New Arrivals",
            "Special Offers",
        ],
        brands: [
            "Jwandoon Picks",
            "Top Rated",
            "Popular",
        ],
    },
];

export default function MegaMenu() {
    const [activeCategory, setActiveCategory] = useState(0);

    const active = categories[activeCategory];

    return (
        <div className="mega-menu">

            <div className="mega-menu__inner">

                {/* Categories */}
                <div className="mega-menu__categories">

                    <div className="mega-menu__heading">
                        Categories
                    </div>

                    <div className="mega-menu__category-list">
                        {categories.map((category, index) => {
                            const Icon = category.icon;

                            return (
                                <button
                                    key={category.name}
                                    className={`mega-menu__category ${
                                        activeCategory === index
                                            ? "mega-menu__category--active"
                                            : ""
                                    }`}
                                    onMouseEnter={() =>
                                        setActiveCategory(index)
                                    }
                                >
                                    <span className="mega-menu__category-icon">
                                        <Icon />
                                    </span>

                                    <span>
                                        {category.name}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Popular */}
                <div className="mega-menu__popular">

                    <div className="mega-menu__heading">
                        Popular in {active.name}
                    </div>

                    <div className="mega-menu__items">
                        {active.subcategories.map((item) => (
                            <a
                                href="#"
                                key={item}
                                className="mega-menu__item"
                            >
                                {item}

                                <span>→</span>
                            </a>
                        ))}
                    </div>

                    <a
                        href="#"
                        className="mega-menu__view-all"
                    >
                        View all {active.name}
                    </a>
                </div>

                {/* Brands */}
                <div className="mega-menu__brands">

                    <div className="mega-menu__heading">
                        Top Brands
                    </div>

                    <div className="mega-menu__brand-list">
                        {active.brands.map((brand) => (
                            <a
                                href="#"
                                key={brand}
                                className="mega-menu__brand"
                            >
                                <span className="mega-menu__brand-logo">
                                    {brand.charAt(0)}
                                </span>

                                <span>{brand}</span>
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}