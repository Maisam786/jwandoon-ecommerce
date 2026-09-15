import { Link } from "react-router-dom";
import { FiArrowRight, FiZap } from "react-icons/fi";

import "./PromoBanner.css";

export default function PromoBanner() {
    return (
        <section className="promo-banner">
            <div className="container">
                <div className="promo-banner__inner">
                    <div className="promo-banner__glow" />

                    <div className="promo-banner__content">
                        <span className="promo-banner__eyebrow">
                            <FiZap />
                            LIMITED TIME OFFER
                        </span>

                        <h2 className="heading-font">
                            Smart Products.
                            <br />
                            <em>Smarter Prices.</em>
                        </h2>

                        <p>
                            Upgrade your everyday essentials with
                            exclusive deals available for a limited time.
                        </p>

                        <Link
                            to="/shop?collection=deals"
                            className="promo-banner__button"
                        >
                            Explore Deals
                            <FiArrowRight />
                        </Link>
                    </div>

                    <div className="promo-banner__visual">
                        <div className="promo-banner__circle promo-banner__circle--one" />
                        <div className="promo-banner__circle promo-banner__circle--two" />

                        <div className="promo-banner__discount">
                            <span>UP TO</span>
                            <strong>40%</strong>
                            <small>OFF</small>
                        </div>

                        <div className="promo-banner__floating promo-banner__floating--one">
                            ✦
                        </div>

                        <div className="promo-banner__floating promo-banner__floating--two">
                            ✦
                        </div>
                    </div>

                    <div className="promo-banner__tag">
                        <span>JWANDOON</span>
                        <small>Better products. Better prices.</small>
                    </div>
                </div>
            </div>
        </section>
    );
}