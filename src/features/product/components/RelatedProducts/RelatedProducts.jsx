import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import ProductCard from "../../../../components/common/ProductCard/ProductCard";

import "./RelatedProducts.css";

export default function RelatedProducts({
    products = [],
    currentProductId,
}) {
    const relatedProducts = products
        .filter((product) => product.id !== currentProductId)
        .slice(0, 4);

    if (relatedProducts.length === 0) {
        return null;
    }

    return (
        <section className="related-products">
            <div className="related-products__heading">
                <div>
                    <span className="section-eyebrow">
                        You May Also Like
                    </span>

                    <h2 className="heading-font">
                        More to
                        <br />
                        <em>explore.</em>
                    </h2>
                </div>

                <Link
                    to="/shop"
                    className="related-products__link"
                >
                    View All Products
                    <FiArrowRight />
                </Link>
            </div>

            <div className="related-products__grid">
                {relatedProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        showQuickView={false}
                    />
                ))}
            </div>
        </section>
    );
}