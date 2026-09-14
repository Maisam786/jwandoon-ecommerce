import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import "./AboutCTA.css";

export default function AboutCTA() {
    return (
        <section className="about-cta">
            <div className="container">

                <div className="about-cta__inner">

                    <div className="about-cta__glow about-cta__glow--one" />
                    <div className="about-cta__glow about-cta__glow--two" />

                    <span className="about-cta__eyebrow">
                        Start Shopping
                    </span>

                    <h2 className="heading-font">
                        Find something
                        <br />
                        <em>you'll love.</em>
                    </h2>

                    <p>
                        Explore our growing collection of modern products,
                        everyday essentials, and smart finds — all in one
                        place.
                    </p>

                    <Link
                        to="/shop"
                        className="about-cta__button"
                    >
                        Explore All Products
                        <FiArrowRight />
                    </Link>

                </div>

            </div>
        </section>
    );
}