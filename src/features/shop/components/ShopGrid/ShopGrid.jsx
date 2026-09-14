import ProductCard from "../../../../components/common/ProductCard/ProductCard";

import "./ShopGrid.css";

export default function ShopGrid({
    products = [],
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
        <div className="shop-grid">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    showQuickView={false}
                />
            ))}
        </div>
    );
}