import ProductCard from "../../../../components/common/ProductCard/ProductCard";

import "./ShopGrid.css";

export default function ShopGrid({
    products = [],
    view = "grid",
}) {
    if (products.length === 0) {
        return (
            <div className="shop-grid__empty">
                <h3>No products found</h3>

                <p>
                    Try changing your filters or browse all products.
                </p>
            </div>
        );
    }

    return (
        <div
            className={
                view === "list"
                    ? "shop-grid shop-grid--list"
                    : "shop-grid"
            }
        >
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
}