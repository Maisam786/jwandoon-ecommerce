import { useRef } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./NewArrivals.css";
import products from "../../../../data/products";
import ProductCard from "../../../../components/common/ProductCard/ProductCard";

export default function NewArrivals() {
  const sliderRef = useRef(null);

  const newArrivalProducts = products.filter((product) => product.newArrival);

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction === "next" ? 330 : -330,
      behavior: "smooth",
    });
  };

  return (
    <section id="new-arrivals" className="new-arrivals">
      <div className="container">
        <div className="new-arrivals__header">
          <div>
            <span className="new-arrivals__eyebrow">Fresh From Jwandoon</span>

            <h2 className="new-arrivals__title">
              New <span>Arrivals</span>
            </h2>

            <p className="new-arrivals__subtitle">
              Discover the latest products at prices you'll love.
            </p>
          </div>

          <div className="new-arrivals__actions">
            <Link
              to="/shop?collection=new-arrivals"
              className="new-arrivals__view-all"
            >
              View All
              <FiArrowRight />
            </Link>

            <button
              type="button"
              aria-label="Previous products"
              onClick={() => scroll("prev")}
            >
              <FiArrowLeft />
            </button>

            <button
              type="button"
              aria-label="Next products"
              onClick={() => scroll("next")}
            >
              <FiArrowRight />
            </button>
          </div>
        </div>

        <div className="new-arrivals__slider" ref={sliderRef}>
          {newArrivalProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
