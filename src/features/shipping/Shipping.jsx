import {
    FiClock,
    FiMapPin,
    FiPackage,
    FiTruck,
} from "react-icons/fi";

import "./Shipping.css";

export default function Shipping() {
    return (
        <main className="shipping-page">
            {/* HERO */}

            <section className="shipping-hero">
                <div className="container shipping-hero__container">
                    <div className="shipping-hero__content">
                        <span className="section-eyebrow">
                            Delivery Information
                        </span>

                        <h1 className="heading-font shipping-hero__title">
                            Shipping &
                            <br />
                            <em>Delivery</em>
                        </h1>

                        <p className="shipping-hero__description">
                            We want your Jwandoon order to reach you safely,
                            smoothly, and without unnecessary delays.
                        </p>
                    </div>

                    <div className="shipping-hero__visual">
                        <div className="shipping-hero__icon">
                            <FiTruck />
                        </div>

                        <span>JWANDOON</span>

                        <strong>
                            From our store
                            <br />
                            to your door.
                        </strong>
                    </div>
                </div>
            </section>

            {/* DELIVERY OVERVIEW */}

            <section className="shipping-overview">
                <div className="container">
                    <div className="shipping-overview__grid">
                        <div className="shipping-card">
                            <span className="shipping-card__icon">
                                <FiTruck />
                            </span>

                            <div>
                                <h3>Nationwide Delivery</h3>
                                <p>
                                    We deliver orders across Pakistan through
                                    reliable courier services.
                                </p>
                            </div>
                        </div>

                        <div className="shipping-card">
                            <span className="shipping-card__icon">
                                <FiClock />
                            </span>

                            <div>
                                <h3>Delivery Time</h3>
                                <p>
                                    Most orders are delivered within the
                                    estimated delivery window provided at
                                    checkout.
                                </p>
                            </div>
                        </div>

                        <div className="shipping-card">
                            <span className="shipping-card__icon">
                                <FiPackage />
                            </span>

                            <div>
                                <h3>Carefully Packed</h3>
                                <p>
                                    Orders are prepared and packed carefully
                                    before being handed to the courier.
                                </p>
                            </div>
                        </div>

                        <div className="shipping-card">
                            <span className="shipping-card__icon">
                                <FiMapPin />
                            </span>

                            <div>
                                <h3>Order Tracking</h3>
                                <p>
                                    Tracking information can be provided when
                                    available for your shipment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SHIPPING DETAILS */}

            <section className="shipping-details">
                <div className="container shipping-details__container">
                    <div className="shipping-details__content">
                        <span className="section-eyebrow">
                            What to Expect
                        </span>

                        <h2 className="heading-font">
                            Simple, clear &
                            <br />
                            <em>reliable delivery.</em>
                        </h2>

                        <p>
                            Once your order is confirmed, our team prepares
                            your products for dispatch. Delivery time can vary
                            depending on your location, courier availability,
                            and the nature of your order.
                        </p>

                        <p>
                            We recommend providing a complete and accurate
                            delivery address and an active phone number so our
                            courier can contact you when necessary.
                        </p>
                    </div>

                    <div className="shipping-steps">
                        <div className="shipping-step">
                            <span>01</span>

                            <div>
                                <h3>Order Confirmed</h3>
                                <p>
                                    Your order details are reviewed and
                                    prepared for processing.
                                </p>
                            </div>
                        </div>

                        <div className="shipping-step">
                            <span>02</span>

                            <div>
                                <h3>Order Prepared</h3>
                                <p>
                                    Your products are carefully checked and
                                    packed for dispatch.
                                </p>
                            </div>
                        </div>

                        <div className="shipping-step">
                            <span>03</span>

                            <div>
                                <h3>Handed to Courier</h3>
                                <p>
                                    Your package is handed over to the selected
                                    delivery service.
                                </p>
                            </div>
                        </div>

                        <div className="shipping-step">
                            <span>04</span>

                            <div>
                                <h3>Delivered to You</h3>
                                <p>
                                    Your order arrives at the delivery address
                                    provided during checkout.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* IMPORTANT INFORMATION */}

            <section className="shipping-info">
                <div className="container shipping-info__container">
                    <div className="shipping-info__heading">
                        <span className="section-eyebrow">
                            Important Information
                        </span>

                        <h2 className="heading-font">
                            Before your order
                            <br />
                            <em>leaves our store.</em>
                        </h2>
                    </div>

                    <div className="shipping-info__grid">
                        <article>
                            <h3>Delivery Address</h3>
                            <p>
                                Please make sure your address, city, phone
                                number, and other delivery details are correct
                                before placing your order.
                            </p>
                        </article>

                        <article>
                            <h3>Delivery Delays</h3>
                            <p>
                                Delivery times may occasionally be affected by
                                weather, public holidays, courier operations,
                                or other circumstances outside our control.
                            </p>
                        </article>

                        <article>
                            <h3>Cash on Delivery</h3>
                            <p>
                                If you choose Cash on Delivery, please remain
                                available to receive and verify your order
                                when the courier arrives.
                            </p>
                        </article>

                        <article>
                            <h3>Need Help?</h3>
                            <p>
                                If you have a question about an order or
                                delivery, our support team is available to
                                assist you.
                            </p>
                        </article>
                    </div>
                </div>
            </section>
        </main>
    );
}