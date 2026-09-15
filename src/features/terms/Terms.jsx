import { Link } from "react-router-dom";
import {
    FiArrowRight,
    FiCheckCircle,
    FiCreditCard,
    FiInfo,
    FiShoppingBag,
    FiTruck,
} from "react-icons/fi";

import "./Terms.css";

const sections = [
    {
        number: "01",
        title: "Using Our Website",
        content:
            "By accessing or using the Jwandoon website, you agree to use it responsibly and in accordance with these Terms & Conditions. You should not use the website for unlawful purposes or in a way that could damage, disrupt, or interfere with the website or other customers.",
    },
    {
        number: "02",
        title: "Products & Availability",
        content:
            "We aim to provide accurate product names, descriptions, images, prices, and availability information. However, product details, colors, specifications, prices, and availability may change without prior notice. Product images may also vary slightly from the actual item due to lighting, displays, or photography.",
    },
    {
        number: "03",
        title: "Orders & Acceptance",
        content:
            "Placing an order through Jwandoon is a request to purchase the selected products. An order may be reviewed, confirmed, modified, or cancelled where necessary. We reserve the right to decline or cancel an order if product availability, pricing, payment, delivery information, or other circumstances require it.",
    },
    {
        number: "04",
        title: "Pricing & Payments",
        content:
            "All prices displayed on the website are shown in Pakistani Rupees unless stated otherwise. We may update prices or promotions at any time. Available payment methods and payment instructions will be presented during checkout or communicated when required.",
    },
    {
        number: "05",
        title: "Shipping & Delivery",
        content:
            "Delivery times may vary depending on the destination, product availability, courier operations, weather, holidays, and other circumstances. Jwandoon will make reasonable efforts to process and dispatch confirmed orders within the expected timeframe, but delivery dates cannot always be guaranteed.",
    },
    {
        number: "06",
        title: "Returns & Exchanges",
        content:
            "Returns and exchanges are handled according to our Returns & Exchanges policy. Products may need to meet applicable eligibility requirements, including their condition and supporting order information. Please review the Returns page before requesting a return or exchange.",
    },
    {
        number: "07",
        title: "Intellectual Property",
        content:
            "The Jwandoon name, branding, logo, website design, text, graphics, images, and other original website content are protected by applicable intellectual property laws. You may not reproduce, copy, modify, distribute, or commercially use our content without appropriate authorization.",
    },
    {
        number: "08",
        title: "Website Information",
        content:
            "We work to keep the information on our website accurate and useful. However, we do not guarantee that every page, description, image, price, or other piece of information will always be complete, current, or free from errors.",
    },
    {
        number: "09",
        title: "Third-Party Services",
        content:
            "Jwandoon may rely on third-party services such as payment providers, delivery companies, hosting providers, analytics tools, or other service providers. Their services may be subject to their own terms and policies.",
    },
    {
        number: "10",
        title: "Changes to These Terms",
        content:
            "We may update these Terms & Conditions when necessary to reflect changes to our website, services, business practices, or applicable requirements. Updated terms will be published on this page, and the latest version will apply to future use of the website.",
    },
];

export default function Terms() {
    return (
        <main className="terms-page">
            <section className="terms-hero">
                <div className="terms-container">
                    <span className="terms-eyebrow">
                        Jwandoon · Terms & Conditions
                    </span>

                    <h1>Simple, clear terms for shopping with us.</h1>

                    <p>
                        These terms explain the general rules that apply when
                        you browse, shop, and use the Jwandoon website.
                    </p>

                    <div className="terms-hero__meta">
                        <span>Last updated: September 2026</span>
                    </div>
                </div>
            </section>

            <section className="terms-trust">
                <div className="terms-container terms-trust__grid">
                    <div className="terms-trust__item">
                        <span className="terms-trust__icon">
                            <FiShoppingBag />
                        </span>
                        <div>
                            <strong>Shop responsibly</strong>
                            <span>Use our website fairly and lawfully.</span>
                        </div>
                    </div>

                    <div className="terms-trust__item">
                        <span className="terms-trust__icon">
                            <FiCreditCard />
                        </span>
                        <div>
                            <strong>Clear transactions</strong>
                            <span>Review your order before checkout.</span>
                        </div>
                    </div>

                    <div className="terms-trust__item">
                        <span className="terms-trust__icon">
                            <FiTruck />
                        </span>
                        <div>
                            <strong>Delivery matters</strong>
                            <span>Shipping depends on destination and service.</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="terms-content">
                <div className="terms-container">
                    <div className="terms-layout">
                        <aside className="terms-sidebar">
                            <div className="terms-sidebar__card">
                                <span className="terms-sidebar__label">
                                    On this page
                                </span>

                                <a href="#using-website">Using our website</a>
                                <a href="#products">Products & availability</a>
                                <a href="#orders">Orders & acceptance</a>
                                <a href="#pricing">Pricing & payments</a>
                                <a href="#shipping">Shipping & delivery</a>
                                <a href="#returns">Returns & exchanges</a>
                                <a href="#intellectual-property">
                                    Intellectual property
                                </a>
                                <a href="#website-information">
                                    Website information
                                </a>
                                <a href="#third-party">
                                    Third-party services
                                </a>
                                <a href="#changes">Changes to these terms</a>
                            </div>
                        </aside>

                        <div className="terms-main">
                            <div className="terms-intro">
                                <span className="terms-intro__icon">
                                    <FiInfo />
                                </span>

                                <div>
                                    <h2>Please read before shopping</h2>
                                    <p>
                                        These Terms & Conditions are intended
                                        to provide a clear overview of how the
                                        Jwandoon website and shopping experience
                                        work.
                                    </p>
                                </div>
                            </div>

                            {sections.map((section, index) => {
                                const ids = [
                                    "using-website",
                                    "products",
                                    "orders",
                                    "pricing",
                                    "shipping",
                                    "returns",
                                    "intellectual-property",
                                    "website-information",
                                    "third-party",
                                    "changes",
                                ];

                                return (
                                    <article
                                        className="terms-section"
                                        id={ids[index]}
                                        key={section.number}
                                    >
                                        <span className="terms-section__number">
                                            {section.number}
                                        </span>

                                        <div className="terms-section__body">
                                            <h2>{section.title}</h2>
                                            <p>{section.content}</p>
                                        </div>
                                    </article>
                                );
                            })}

                            <div className="terms-notice">
                                <span className="terms-notice__icon">
                                    <FiCheckCircle />
                                </span>

                                <div>
                                    <h3>Need help with an order?</h3>
                                    <p>
                                        If you have a question about an order,
                                        delivery, return, or another shopping
                                        matter, our support team is available
                                        to help.
                                    </p>

                                    <Link to="/contact">
                                        Contact Jwandoon
                                        <FiArrowRight />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}