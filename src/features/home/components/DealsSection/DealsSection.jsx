import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./DealsSection.css";
import products from "../../../../data/products";
import ProductCard from "../../../../components/common/ProductCard/ProductCard";

export default function DealsSection() {
  const dealProducts = products.filter((product) => product.deal);

  return (
    <section id="deals" className="deals-section">
      <div className="container">
        <div className="deals-section__layout">
          <div className="deals-section__intro">
            <span className="deals-section__eyebrow">Limited Time</span>

            <h2>
              Best
              <span> Deals</span>
            </h2>

            <p>
              Premium products, exceptional prices. Grab your favorites before
              the deals end.
            </p>

            <div className="deals-section__offer">
              <strong>Up to 40%</strong>
              <span>OFF</span>
            </div>

            <Link to="/shop?collection=deals" className="deals-section__button">
              Shop All Deals
              <FiArrowRight />
            </Link>
          </div>

          <div className="deals-section__products">
            {dealProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
