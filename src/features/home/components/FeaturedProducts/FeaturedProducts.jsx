import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./FeaturedProducts.css";
import products from "../../../../data/products";
import ProductCard from "../../../../components/common/ProductCard/ProductCard";

export default function FeaturedProducts() {
  const featuredProducts = products
    .filter((product) => product.featured)
    .slice(0, 4);

  return (
    <section className="featured-products">
      <div className="container">
        <div className="featured-products__header">
          <div>
            <span className="section-eyebrow">JWANDOON COLLECTION</span>

            <h2 className="heading-font">
              Featured <em>Products</em>
            </h2>

            <p>Handpicked products customers are loving right now.</p>
          </div>

          <Link
            to="/shop?collection=best-sellers"
            className="featured-products__view-all"
          >
            View All Products
            <FiArrowRight />
          </Link>
        </div>

        <div className="featured-products__grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
