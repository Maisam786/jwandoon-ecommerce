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
    image: "/assets/categories/electronics.webp",
    className: "category-card--large",
  },
  {
    title: "Mobile Accessories",
    description: "Everything for your phone",
    icon: FiSmartphone,
    image: "/assets/categories/mobile-accessories.webp",
  },
  {
    title: "Smart Watches",
    description: "Stay connected",
    icon: FiWatch,
    image: "/assets/categories/smart-watches.webp",
  },
  {
    title: "Audio & Headphones",
    description: "Sound that moves you",
    icon: FiHeadphones,
    image: "/assets/categories/headphones.webp",
  },
//   {
//     title: "Home & Living",
//     description: "Upgrade your space",
//     icon: FiHome,
//     image: "/assets/categories/home-living.webp",
//   },
  {
    title: "More Categories",
    description: "Explore everything",
    icon: FiMoreHorizontal,
    image: "/assets/categories/more.webp",
  },
];

export default function CategoryShowcase() {
  return (
    <section className="category-showcase">
      <div className="container">
        <div className="category-showcase__header">
          <div>
            <span className="section-eyebrow">DISCOVER JWANDOON</span>

            <h2 className="heading-font">
              Shop by <em>Category</em>
            </h2>
          </div>

          <a href="/shop" className="category-showcase__view-all">
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
                className={`category-card ${category.className || ""}`}
                key={category.title}
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
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>

                <span className="category-card__arrow">→</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
