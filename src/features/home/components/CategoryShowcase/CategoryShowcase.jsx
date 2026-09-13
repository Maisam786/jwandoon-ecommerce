import {
    FiHeadphones,
    FiHome,
    FiMonitor,
    FiMoreHorizontal,
    FiSmartphone,
    FiWatch,
} from "react-icons/fi";

import "./CategoryShowcase.css";

const categories = [
    {
        title: "Electronics",
        description: "Smart tech & gadgets",
        icon: FiMonitor,
        className: "category-card--large",
    },
    {
        title: "Mobile Accessories",
        description: "Everything for your phone",
        icon: FiSmartphone,
    },
    {
        title: "Smart Watches",
        description: "Stay connected",
        icon: FiWatch,
    },
    {
        title: "Audio & Headphones",
        description: "Sound that moves you",
        icon: FiHeadphones,
    },
    {
        title: "Home & Living",
        description: "Upgrade your space",
        icon: FiHome,
    },
    {
        title: "More Categories",
        description: "Explore everything",
        icon: FiMoreHorizontal,
    },
];

export default function CategoryShowcase() {
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
                                href="/shop"
                                className={`category-card ${
                                    category.className || ""
                                }`}
                                key={category.title}
                            >
                                <div className="category-card__glow" />

                                <div className="category-card__icon">
                                    <Icon />
                                </div>

                                <div className="category-card__content">
                                    <h3>{category.title}</h3>
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