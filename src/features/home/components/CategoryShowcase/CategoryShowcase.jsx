import { shopCategories } from "../../../../data/categories";

import "./CategoryShowcase.css";

export default function CategoryShowcase() {
    const categories = shopCategories.filter(
        (category) => category.id !== "all-products"
    );

    return (
        <section className="category-showcase">
            <div className="container">
                <div className="category-showcase__header">
                    <div>
                        <span className="section-eyebrow">
                            DISCOVER JWANDOON
                        </span>

                        <h2 className="heading-font">
                            Shop by <em>Category</em>
                        </h2>
                    </div>

                    <a
                        href="/shop"
                        className="category-showcase__view-all"
                    >
                        View All Categories
                        <span>→</span>
                    </a>
                </div>

                <div className="category-showcase__grid">
                    {categories.map((category) => {
                        const Icon = category.icon;

                        return (
                            <a
                                href={`/shop?category=${category.id}`}
                                className={`category-card ${
                                    category.className || ""
                                }`}
                                key={category.id}
                                style={{
                                    "--category-image": `url(${category.image})`,
                                }}
                            >
                                <div className="category-card__image" />

                                <div className="category-card__overlay" />

                                <div className="category-card__glow" />

                                <div className="category-card__icon">
                                    <Icon />
                                </div>

                                <div className="category-card__content">
                                    <h3>{category.name}</h3>
                                    <p>{category.description}</p>
                                </div>

                                <span className="category-card__arrow">
                                    →
                                </span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}