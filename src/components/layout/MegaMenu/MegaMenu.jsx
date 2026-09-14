import { useState } from "react";
import { Link } from "react-router-dom";

import { shopCategories } from "../../../data/categories";

import "./MegaMenu.css";

export default function MegaMenu({ variant = "desktop" }) {
    const categories = shopCategories;

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
                                    key={category.id}
                                    type="button"
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

                                    <span>{category.name}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Subcategories */}

                <div className="mega-menu__popular">
                    <div className="mega-menu__heading">
                        Popular in {active.name}
                    </div>

                    <div className="mega-menu__items">
                        {active.subcategories.map((item) => (
                            <Link
                                key={item}
                                to={`/shop?category=${active.id}`}
                                className="mega-menu__item"
                            >
                                {item}
                                <span>→</span>
                            </Link>
                        ))}
                    </div>

                    <Link
                        to={`/shop?category=${active.id}`}
                        className="mega-menu__view-all"
                    >
                        View all {active.name}
                    </Link>
                </div>

                {/* Brands */}

                <div className="mega-menu__brands">
                    <div className="mega-menu__heading">
                        Top Brands
                    </div>

                    <div className="mega-menu__brand-list">
                        {active.brands.map((brand) => (
                            <Link
                                key={brand}
                                to={`/shop?category=${active.id}`}
                                className="mega-menu__brand"
                            >
                                <span className="mega-menu__brand-logo">
                                    {brand.charAt(0)}
                                </span>

                                <span className="mega-menu__brand-name">
                                    {brand}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}