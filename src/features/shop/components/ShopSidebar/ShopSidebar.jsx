import { useNavigate } from "react-router-dom";

import { shopCategories } from "../../../../data/categories";

import "./ShopSidebar.css";

const collections = [
    {
        id: "all-products",
        name: "All Products",
    },
    {
        id: "best-sellers",
        name: "Best Sellers",
    },
    {
        id: "new-arrivals",
        name: "New Arrivals",
    },
    {
        id: "deals",
        name: "Deals",
    },
];

export default function ShopSidebar({
    activeCategory = "all-products",
    activeCollection = "all-products",
}) {
    const navigate = useNavigate();

    const handleCategoryChange = (categoryId) => {
        if (categoryId === "all-products") {
            navigate("/shop");
            return;
        }

        navigate(`/shop?category=${categoryId}`);
    };

    const handleCollectionChange = (collectionId) => {
        if (collectionId === "all-products") {
            navigate("/shop");
            return;
        }

        navigate(`/shop?collection=${collectionId}`);
    };

    const handleClearFilters = () => {
        navigate("/shop");
    };

    return (
        <aside className="shop-sidebar">
            <div className="shop-sidebar__header">
                <span className="shop-sidebar__eyebrow">
                    Browse
                </span>

                <h2 className="shop-sidebar__title">
                    Shop
                </h2>
            </div>

            <div className="shop-sidebar__section">
                <h3 className="shop-sidebar__section-title">
                    Categories
                </h3>

                <div className="shop-sidebar__options">
                    {shopCategories.map((category) => (
                        <button
                            key={category.id}
                            type="button"
                            className={
                                activeCategory === category.id
                                    ? "shop-sidebar__option shop-sidebar__option--active"
                                    : "shop-sidebar__option"
                            }
                            onClick={() =>
                                handleCategoryChange(category.id)
                            }
                        >
                            <span>{category.name}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="shop-sidebar__section">
                <h3 className="shop-sidebar__section-title">
                    Collections
                </h3>

                <div className="shop-sidebar__options">
                    {collections.map((collection) => (
                        <button
                            key={collection.id}
                            type="button"
                            className={
                                activeCollection === collection.id
                                    ? "shop-sidebar__option shop-sidebar__option--active"
                                    : "shop-sidebar__option"
                            }
                            onClick={() =>
                                handleCollectionChange(
                                    collection.id
                                )
                            }
                        >
                            <span>{collection.name}</span>
                        </button>
                    ))}
                </div>
            </div>

            <button
                type="button"
                className="shop-sidebar__clear"
                onClick={handleClearFilters}
            >
                Clear Filters
            </button>
        </aside>
    );
}