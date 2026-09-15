import {
    FiCheckCircle,
    FiClock,
    FiHelpCircle,
    FiRefreshCw,
    FiShield,
} from "react-icons/fi";

import "./Returns.css";

export default function Returns() {
    return (
        <main className="returns-page">
            {/* HERO */}

            <section className="returns-hero">
                <div className="container returns-hero__container">
                    <div className="returns-hero__content">
                        <span className="section-eyebrow">
                            Returns & Exchanges
                        </span>

                        <h1 className="heading-font returns-hero__title">
                            Shop with
                            <br />
                            <em>confidence.</em>
                        </h1>

                        <p className="returns-hero__description">
                            We want you to feel comfortable with every Jwandoon
                            purchase. Here's how our return and exchange
                            process works.
                        </p>
                    </div>

                    <div className="returns-hero__visual">
                        <div className="returns-hero__icon">
                            <FiRefreshCw />
                        </div>

                        <span>JWANDOON</span>

                        <strong>
                            Simple.
                            <br />
                            Fair.
                            <br />
                            Transparent.
                        </strong>
                    </div>
                </div>
            </section>

            {/* QUICK INFO */}

            <section className="returns-overview">
                <div className="container">
                    <div className="returns-overview__grid">
                        <div className="returns-card">
                            <span className="returns-card__icon">
                                <FiClock />
                            </span>

                            <div>
                                <h3>Contact Us Promptly</h3>
                                <p>
                                    Contact our support team as soon as you
                                    notice an issue with your order.
                                </p>
                            </div>
                        </div>

                        <div className="returns-card">
                            <span className="returns-card__icon">
                                <FiShield />
                            </span>

                            <div>
                                <h3>Product Condition</h3>
                                <p>
                                    Returned items should be unused and in
                                    their original condition and packaging.
                                </p>
                            </div>
                        </div>

                        <div className="returns-card">
                            <span className="returns-card__icon">
                                <FiCheckCircle />
                            </span>

                            <div>
                                <h3>Order Verification</h3>
                                <p>
                                    Our team reviews each return or exchange
                                    request before approval.
                                </p>
                            </div>
                        </div>

                        <div className="returns-card">
                            <span className="returns-card__icon">
                                <FiHelpCircle />
                            </span>

                            <div>
                                <h3>Need Assistance?</h3>
                                <p>
                                    Contact us if you're unsure whether your
                                    order qualifies for a return or exchange.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ELIGIBILITY */}

            <section className="returns-details">
                <div className="container returns-details__container">
                    <div className="returns-details__content">
                        <span className="section-eyebrow">
                            Return Eligibility
                        </span>

                        <h2 className="heading-font">
                            When can you
                            <br />
                            <em>request a return?</em>
                        </h2>

                        <p>
                            If your order arrives damaged, defective, incorrect,
                            or has another qualifying issue, please contact us
                            promptly so we can review the situation.
                        </p>

                        <p>
                            Products submitted for return should generally be
                            unused, undamaged, and accompanied by their
                            original packaging and relevant order details.
                        </p>

                        <div className="returns-checklist">
                            <div>
                                <FiCheckCircle />
                                <span>Item is unused and in original condition</span>
                            </div>

                            <div>
                                <FiCheckCircle />
                                <span>Original packaging is available</span>
                            </div>

                            <div>
                                <FiCheckCircle />
                                <span>Order details can be verified</span>
                            </div>

                            <div>
                                <FiCheckCircle />
                                <span>Issue is reported promptly</span>
                            </div>
                        </div>
                    </div>

                    <div className="returns-policy-card">
                        <span className="returns-policy-card__label">
                            Please Note
                        </span>

                        <h3>
                            Not every product may be eligible for return or
                            exchange.
                        </h3>

                        <p>
                            Eligibility can depend on the product, its
                            condition, and the reason for the request. Our
                            support team will review the details and guide you
                            through the available options.
                        </p>

                        <div className="returns-policy-card__line" />
                    </div>
                </div>
            </section>

            {/* PROCESS */}

            <section className="returns-process">
                <div className="container">
                    <div className="returns-process__heading">
                        <span className="section-eyebrow">
                            The Process
                        </span>

                        <h2 className="heading-font">
                            How returns &
                            <br />
                            <em>exchanges work.</em>
                        </h2>
                    </div>

                    <div className="returns-process__grid">
                        <div className="returns-step">
                            <span>01</span>

                            <div>
                                <h3>Contact Us</h3>
                                <p>
                                    Get in touch with our support team and
                                    provide your order details and the reason
                                    for your request.
                                </p>
                            </div>
                        </div>

                        <div className="returns-step">
                            <span>02</span>

                            <div>
                                <h3>Request Reviewed</h3>
                                <p>
                                    We'll review the order and the reported
                                    issue to determine the available solution.
                                </p>
                            </div>
                        </div>

                        <div className="returns-step">
                            <span>03</span>

                            <div>
                                <h3>Return Instructions</h3>
                                <p>
                                    If approved, we'll provide the necessary
                                    instructions for returning the item.
                                </p>
                            </div>
                        </div>

                        <div className="returns-step">
                            <span>04</span>

                            <div>
                                <h3>Resolution</h3>
                                <p>
                                    Depending on the situation, an eligible
                                    order may be exchanged, replaced, or
                                    otherwise resolved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* IMPORTANT */}

            <section className="returns-info">
                <div className="container returns-info__container">
                    <div className="returns-info__heading">
                        <span className="section-eyebrow">
                            Important Information
                        </span>

                        <h2 className="heading-font">
                            A few things to
                            <br />
                            <em>keep in mind.</em>
                        </h2>
                    </div>

                    <div className="returns-info__grid">
                        <article>
                            <h3>Damaged on Arrival</h3>
                            <p>
                                If your package arrives visibly damaged, please
                                document the issue and contact us as soon as
                                possible.
                            </p>
                        </article>

                        <article>
                            <h3>Incorrect Product</h3>
                            <p>
                                If you receive a product different from what
                                you ordered, contact us so our team can review
                                the order.
                            </p>
                        </article>

                        <article>
                            <h3>Change of Mind</h3>
                            <p>
                                Returns based solely on a change of mind may
                                depend on the product and its condition.
                                Contact us before sending anything back.
                            </p>
                        </article>

                        <article>
                            <h3>Contact Before Returning</h3>
                            <p>
                                Please do not send an item back without first
                                contacting our support team and receiving
                                return instructions.
                            </p>
                        </article>
                    </div>
                </div>
            </section>
        </main>
    );
}