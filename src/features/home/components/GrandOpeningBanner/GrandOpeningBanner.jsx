import { FiArrowRight } from "react-icons/fi";

import "./GrandOpeningBanner.css";

export default function GrandOpeningBanner() {
  return (
    <section className="grand-opening">
      <div className="grand-opening__background" />

      <div className="container">
        <div className="grand-opening__content">
          <span className="grand-opening__eyebrow">
            Something Big Is Coming
          </span>

          <h2>
            Grand Mart
            <span> Opening</span>
          </h2>

          <p className="grand-opening__date">November 2026</p>

          <p className="grand-opening__text">
            Your new destination for smart products, everyday essentials and
            unbeatable prices.
            <br />
            <strong>Kacha Pakkah, Hangu Road, Kohat, Pakistan</strong>
          </p>

          <button className="grand-opening__button">
            Visit Our Store
            <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
