import { FiArrowRight, FiMail } from "react-icons/fi";

import "./Newsletter.css";

export default function Newsletter() {
    return (
        <section className="newsletter">
            <div className="container">
                <div className="newsletter__box">
                    <div className="newsletter__decor newsletter__decor--one" />
                    <div className="newsletter__decor newsletter__decor--two" />

                    <div className="newsletter__content">
                        <span className="newsletter__eyebrow">
                            Stay In The Loop
                        </span>

                        <h2>
                            Get the latest
                            <span> from Jwandoon.</span>
                        </h2>

                        <p>
                            Subscribe for new arrivals, exclusive deals,
                            and special offers delivered straight to your inbox.
                        </p>
                    </div>

                    <form className="newsletter__form">
                        <div className="newsletter__input">
                            <FiMail />

                            <input
                                type="email"
                                placeholder="Enter your email address"
                                aria-label="Email address"
                            />
                        </div>

                        <button type="submit">
                            Subscribe
                            <FiArrowRight />
                        </button>
                    </form>

                    <span className="newsletter__note">
                        No spam. Unsubscribe anytime.
                    </span>
                </div>
            </div>
        </section>
    );
}