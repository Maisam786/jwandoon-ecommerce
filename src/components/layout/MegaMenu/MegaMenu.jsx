import { useState } from "react";
import { Link } from "react-router-dom";

import { shopCategories } from "../../../data/categories";
import products from "../../../data/products";

import "./MegaMenu.css";

export default function MegaMenu({ variant = "desktop" }) {
    const categories = shopCategories;

    const [activeCategory, setActiveCategory] = useState(0);

    const active = categories[activeCategory];

    const getCategoryCount = (categoryId) => {
        return products.filter(
            (product) => product.categoryId === categoryId
        ).length;
    };

    return (
        <div className="mega-menu">
            <div className="mega-menu__inner">

                {/* Categories */}

                <div className="mega-menu__categories">
                    <div className="mega-menu__heading">
                        <span>Shop by</span>
                        <strong>Category</strong>
                    </div>

                    <div className="mega-menu__category-list">
                        {categories.map((category, index) => {
                            const Icon = category.icon;
                            const count = getCategoryCount(category.id);

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

                                    <span className="mega-menu__category-content">
                                        <span className="mega-menu__category-name">
                                            {category.name}
                                        </span>

                                        <span className="mega-menu__category-count">
                                            {count}{" "}
                                            {count === 1
                                                ? "product"
                                                : "products"}
                                        </span>
                                    </span>

                                    <span className="mega-menu__category-arrow">
                                        →
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Subcategories */}

                <div className="mega-menu__popular">
                    <div className="mega-menu__section-top">
                        <div>
                            <span className="mega-menu__eyebrow">
                                Explore
                            </span>

                            <h3 className="mega-menu__section-title">
                                {active.name}
                            </h3>
                        </div>

                        <span className="mega-menu__product-count">
                            {getCategoryCount(active.id)} products
                        </span>
                    </div>

                    <div className="mega-menu__items">
                        {active.subcategories.map((item) => (
                            <Link
                                key={item}
                                to={`/shop?category=${active.id}`}
                                className="mega-menu__item"
                            >
                                <span>{item}</span>

                                <span className="mega-menu__item-arrow">
                                    →
                                </span>
                            </Link>
                        ))}
                    </div>

                    <Link
                        to={`/shop?category=${active.id}`}
                        className="mega-menu__view-all"
                    >
                        View all {active.name}
                        <span>→</span>
                    </Link>
                </div>

                {/* Brands */}

                <div className="mega-menu__brands">
                    <div className="mega-menu__heading">
                        <span>Featured</span>
                        <strong>Brands</strong>
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