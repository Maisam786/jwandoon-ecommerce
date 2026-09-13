import { FiTruck, FiShield, FiRefreshCw, FiHeart } from "react-icons/fi";

import "./Newsletter.css";

const benefits = [
  {
    icon: FiTruck,
    title: "Fast Delivery",
    text: "Quick and reliable delivery to your doorstep.",
  },
  {
    icon: FiShield,
    title: "Secure Payments",
    text: "Your payment information is always protected.",
  },
  {
    icon: FiRefreshCw,
    title: "Easy Returns",
    text: "Simple and hassle-free returns when needed.",
  },
  {
    icon: FiHeart,
    title: "Trusted Shopping",
    text: "Quality products and a shopping experience you can trust.",
  },
];

export default function Newsletter() {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter__header">
          <span>WHY JWANDOON</span>

          <div className="newsletter__title">
            <h2>
              Shopping made
              <em> simple.</em>
            </h2>

            <svg
              className="newsletter__marker"
              viewBox="0 0 600 45"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M5 25 Q80 38 380 20" />
            </svg>
          </div>

          <p>
            Everything you need for a smooth, secure and enjoyable shopping
            experience.
          </p>
        </div>

        <div className="newsletter__benefits">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div className="newsletter__benefit" key={title}>
              <div className="newsletter__icon">
                <Icon />
              </div>

              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
