import { useNavigate } from "react-router-dom";

import { shopCategories } from "../../../../data/categories";
import products from "../../../../data/products";

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

    const getCategoryCount = (categoryId) => {
        return products.filter(
            (product) => product.categoryId === categoryId
        ).length;
    };

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

                <p className="shop-sidebar__description">
                    Explore everything available at Jwandoon.
                </p>
            </div>


            {/* Categories */}

            <div className="shop-sidebar__section">
                <h3 className="shop-sidebar__section-title">
                    Categories
                </h3>

                <div className="shop-sidebar__options">

                    <button
                        type="button"
                        className={
                            activeCategory === "all-products"
                                ? "shop-sidebar__option shop-sidebar__option--active"
                                : "shop-sidebar__option"
                        }
                        onClick={() =>
                            handleCategoryChange("all-products")
                        }
                    >
                        <span>All Products</span>

                        <span className="shop-sidebar__count">
                            {products.length}
                        </span>
                    </button>

                    {shopCategories.map((category) => {
                        const count = getCategoryCount(category.id);

                        return (
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

                                <span className="shop-sidebar__count">
                                    {count}
                                </span>
                            </button>
                        );
                    })}

                </div>
            </div>


            {/* Collections */}

            <div className="shop-sidebar__section">
                <h3 className="shop-sidebar__section-title">
                    Collections
                </h3>

                <div className="shop-sidebar__options">

                    {collections
                        .filter(
                            (collection) =>
                                collection.id !== "all-products"
                        )
                        .map((collection) => (
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


            {/* Clear */}

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