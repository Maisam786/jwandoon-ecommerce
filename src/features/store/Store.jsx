import {
    FiArrowRight,
    FiClock,
    FiMail,
    FiMapPin,
    FiNavigation,
    FiPhone,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import "./Store.css";

const storeAddress = "Kacha Pakkah, Hangu Road, Kohat, Pakistan";

const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=Kacha+Pakkah+Hangu+Road+Kohat+Pakistan";

const mapEmbedUrl =
    "https://www.google.com/maps?q=Kacha+Pakkah,+Hangu+Road,+Kohat,+Pakistan&output=embed";

export default function Store() {
    return (
        <main className="store-page">
            <section className="store-hero">
                <div className="store-container">
                    <span className="store-eyebrow">
                        <FiMapPin />
                        Visit Jwandoon
                    </span>

                    <h1>
                        Come visit us
                        <span> in person.</span>
                    </h1>

                    <p>
                        Discover Jwandoon products at our physical store in
                        Kohat. We would love to welcome you.
                    </p>
                </div>
            </section>

            <section className="store-content">
                <div className="store-container">
                    <div className="store-layout">
                        <div className="store-details">
                            <span className="store-section-label">
                                Our Physical Store
                            </span>

                            <h2>Find us in Kohat.</h2>

                            <p className="store-description">
                                Visit our store to explore our products,
                                discover new arrivals and experience Jwandoon
                                in person.
                            </p>

                            <div className="store-info">
                                <div className="store-info__item">
                                    <span className="store-info__icon">
                                        <FiMapPin />
                                    </span>

                                    <div>
                                        <span>Store Address</span>
                                        <strong>{storeAddress}</strong>
                                    </div>
                                </div>

                                <div className="store-info__item">
                                    <span className="store-info__icon">
                                        <FiPhone />
                                    </span>

                                    <div>
                                        <span>Phone</span>
                                        <a href="tel:+923338595878">
                                            +92 333 8595878
                                        </a>
                                    </div>
                                </div>

                                <div className="store-info__item">
                                    <span className="store-info__icon">
                                        <FiMail />
                                    </span>

                                    <div>
                                        <span>Email</span>
                                        <a href="mailto:jwandoon.info@gmail.com">
                                            jwandoon.info@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="store-info__item">
                                    <span className="store-info__icon">
                                        <FiClock />
                                    </span>

                                    <div>
                                        <span>Store Hours</span>
                                        <strong>
                                            Please contact us for current
                                            opening hours.
                                        </strong>
                                    </div>
                                </div>
                            </div>

                            <div className="store-actions">
                                <a
                                    href={mapUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="store-button store-button--primary"
                                >
                                    <FiNavigation />
                                    Get Directions
                                    <FiArrowRight />
                                </a>

                                <Link
                                    to="/contact"
                                    className="store-button store-button--secondary"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>

                        <div className="store-map">
                            <div className="store-map__header">
                                <div>
                                    <span>Location</span>
                                    <strong>Kacha Pakkah, Kohat</strong>
                                </div>

                                <a
                                    href={mapUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Open location in Google Maps"
                                >
                                    <FiNavigation />
                                </a>
                            </div>

                            <div className="store-map__frame">
                                <iframe
                                    title="Jwandoon store location"
                                    src={mapEmbedUrl}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>

                            <div className="store-map__address">
                                <FiMapPin />
                                <span>{storeAddress}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="store-bottom">
                <div className="store-container">
                    <div className="store-bottom__inner">
                        <div>
                            <span className="store-section-label">
                                Grand Opening
                            </span>

                            <h2>
                                Something exciting is
                                <span> coming soon.</span>
                            </h2>

                            <p>
                                Our Grand Mart opening is planned for November
                                2026. Follow Jwandoon for updates.
                            </p>
                        </div>

                        <Link
                            to="/shop"
                            className="store-bottom__button"
                        >
                            Explore Shop
                            <FiArrowRight />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}