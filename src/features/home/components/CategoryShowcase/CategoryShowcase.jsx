import { Link } from "react-router-dom";

import { shopCategories } from "../../../../data/categories";

import "./CategoryShowcase.css";

const featuredCategoryIds = [
    "electronics",
    "mobile-accessories",
    "audio-and-headphones",
    "home-and-living",
    "beauty-and-personal-care",
    "kitchen-and-dining",
    "kids-and-baby",
    "lighting",
];

const categoryDescriptions = {
    electronics: "Smart gadgets & everyday tech",
    "mobile-accessories": "Useful accessories for your devices",
    "audio-and-headphones": "Sound, speakers & wireless audio",
    "home-and-living": "Make everyday living easier",
    "beauty-and-personal-care": "Care, grooming & beauty essentials",
    "kitchen-and-dining": "Practical tools for your kitchen",
    "kids-and-baby": "Everyday essentials for little ones",
    lighting: "Lights for home & everyday use",
};

export default function CategoryShowcase() {
    const categories = featuredCategoryIds
        .map((id) =>
            shopCategories.find((category) => category.id === id)
        )
        .filter(Boolean);

    return (
        <section className="category-showcase">
            <div className="container">

                {/* HEADER */}

                <div className="category-showcase__header">

                    <div className="category-showcase__heading">

                        <span className="section-eyebrow">
                            DISCOVER JWANDOON
                        </span>

                        <h2 className="heading-font">
                            Shop by <em>Category</em>
                        </h2>

                        <p className="category-showcase__intro">
                            Explore thoughtfully selected products
                            across everyday categories.
                        </p>

                    </div>

                    <Link
                        to="/shop"
                        className="category-showcase__view-all"
                    >
                        <span>Explore all categories</span>
                        <strong>→</strong>
                    </Link>

                </div>

                {/* CATEGORIES */}

                <div className="category-showcase__grid">

                    {categories.map((category, index) => {
                        const Icon = category.icon;

                        return (
                            <Link
                                key={category.id}
                                to={`/shop?category=${category.id}`}
                                className={`category-card ${
                                    index === 0
                                        ? "category-card--featured"
                                        : ""
                                }`}
                            >

                                <div className="category-card__number">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <div className="category-card__icon">
                                    <Icon />
                                </div>

                                <div className="category-card__content">

                                    <span className="category-card__label">
                                        CATEGORY
                                    </span>

                                    <h3>
                                        {category.name}
                                    </h3>

                                    <p>
                                        {categoryDescriptions[
                                            category.id
                                        ]}
                                    </p>

                                </div>

                                <span className="category-card__arrow">
                                    →
                                </span>

                                <div className="category-card__shine" />

                            </Link>
                        );
                    })}

                </div>

                {/* BOTTOM LINK */}

                <div className="category-showcase__footer">

                    <span>
                        More categories available in our full collection
                    </span>

                    <Link to="/shop">
                        Browse all products
                        <span>→</span>
                    </Link>

                </div>

            </div>
        </section>
    );
}