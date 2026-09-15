import {
    FiCheck,
    FiLock,
    FiMail,
    FiShield,
} from "react-icons/fi";

import "./Privacy.css";

const sections = [
    {
        number: "01",
        title: "Information We Collect",
        content: (
            <>
                <p>
                    When you use Jwandoon, we may collect information that you
                    provide while placing an order, contacting us, or using
                    features of our website.
                </p>

                <p>
                    This may include your name, phone number, email address,
                    delivery address, city, province, postal information, and
                    order details.
                </p>
            </>
        ),
    },
    {
        number: "02",
        title: "How We Use Your Information",
        content: (
            <>
                <p>
                    Information collected through our website may be used to
                    process and deliver your orders, communicate with you about
                    your purchases, and provide customer support.
                </p>

                <p>
                    We may also use information to improve our website,
                    products, services, and overall shopping experience.
                </p>
            </>
        ),
    },
    {
        number: "03",
        title: "Order & Payment Information",
        content: (
            <>
                <p>
                    When you place an order, we need certain information to
                    process and fulfill it. This includes delivery and contact
                    information associated with your order.
                </p>

                <p>
                    Payment information may be handled through the applicable
                    payment method or service used during checkout. We do not
                    intentionally request unnecessary payment information.
                </p>
            </>
        ),
    },
    {
        number: "04",
        title: "Cookies & Website Usage",
        content: (
            <>
                <p>
                    Our website may use cookies or similar technologies to
                    support essential functionality, remember preferences, and
                    understand how visitors interact with the website.
                </p>

                <p>
                    You can manage cookie preferences through your browser
                    settings. Disabling certain cookies may affect some
                    website functionality.
                </p>
            </>
        ),
    },
    {
        number: "05",
        title: "Information Sharing",
        content: (
            <>
                <p>
                    We do not sell your personal information as a business
                    practice.
                </p>

                <p>
                    Information may be shared with service providers when
                    necessary to fulfill an order or operate our services,
                    such as delivery partners, payment providers, hosting
                    providers, or technical service providers.
                </p>
            </>
        ),
    },
    {
        number: "06",
        title: "Data Security",
        content: (
            <>
                <p>
                    We take reasonable steps to protect information associated
                    with your use of Jwandoon and to reduce the risk of
                    unauthorized access, misuse, or disclosure.
                </p>

                <p>
                    However, no website or online transmission can be
                    guaranteed to be completely secure.
                </p>
            </>
        ),
    },
    {
        number: "07",
        title: "Third-Party Services",
        content: (
            <>
                <p>
                    Jwandoon may rely on third-party services for functions
                    such as payment processing, delivery, analytics, hosting,
                    or other website operations.
                </p>

                <p>
                    These services may have their own privacy policies and
                    terms governing how information is handled.
                </p>
            </>
        ),
    },
    {
        number: "08",
        title: "Your Information",
        content: (
            <>
                <p>
                    If you have questions about information associated with
                    your order or want to request assistance regarding your
                    personal information, you can contact our support team.
                </p>

                <p>
                    We will review requests and respond according to the
                    applicable circumstances and requirements.
                </p>
            </>
        ),
    },
];

export default function Privacy() {
    return (
        <main className="privacy-page">
            {/* HERO */}

            <section className="privacy-hero">
                <div className="container privacy-hero__container">
                    <div className="privacy-hero__content">
                        <span className="section-eyebrow">
                            Privacy & Security
                        </span>

                        <h1 className="heading-font privacy-hero__title">
                            Your privacy
                            <br />
                            <em>matters to us.</em>
                        </h1>

                        <p className="privacy-hero__description">
                            This Privacy Policy explains how Jwandoon
                            collects, uses, and protects information when you
                            use our website and services.
                        </p>

                        <span className="privacy-hero__updated">
                            Last updated: September 2026
                        </span>
                    </div>

                    <div className="privacy-hero__visual">
                        <div className="privacy-hero__icon">
                            <FiShield />
                        </div>

                        <span>JWANDOON</span>

                        <strong>
                            Privacy.
                            <br />
                            Security.
                            <br />
                            Trust.
                        </strong>
                    </div>
                </div>
            </section>

            {/* TRUST STRIP */}

            <section className="privacy-trust">
                <div className="container privacy-trust__grid">
                    <div className="privacy-trust__item">
                        <span>
                            <FiLock />
                        </span>

                        <div>
                            <strong>Information Protection</strong>
                            <small>
                                We take reasonable steps to protect your data.
                            </small>
                        </div>
                    </div>

                    <div className="privacy-trust__item">
                        <span>
                            <FiCheck />
                        </span>

                        <div>
                            <strong>Responsible Use</strong>
                            <small>
                                Information is used for legitimate business
                                purposes.
                            </small>
                        </div>
                    </div>

                    <div className="privacy-trust__item">
                        <span>
                            <FiMail />
                        </span>

                        <div>
                            <strong>Questions Welcome</strong>
                            <small>
                                Contact us if you have privacy-related
                                questions.
                            </small>
                        </div>
                    </div>
                </div>
            </section>

            {/* POLICY */}

            <section className="privacy-content">
                <div className="container privacy-content__container">
                    <div className="privacy-intro">
                        <span className="section-eyebrow">
                            Privacy Policy
                        </span>

                        <h2 className="heading-font">
                            How we handle
                            <br />
                            <em>your information.</em>
                        </h2>

                        <p>
                            At Jwandoon, we respect the privacy of our
                            customers and visitors. This policy describes the
                            general types of information we may collect and
                            how that information may be used when you interact
                            with our website.
                        </p>
                    </div>

                    <div className="privacy-sections">
                        {sections.map((section) => (
                            <article
                                className="privacy-section"
                                key={section.number}
                            >
                                <span className="privacy-section__number">
                                    {section.number}
                                </span>

                                <div className="privacy-section__content">
                                    <h3>{section.title}</h3>

                                    {section.content}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTACT */}

            <section className="privacy-contact">
                <div className="container privacy-contact__container">
                    <div>
                        <span className="section-eyebrow">
                            Privacy Questions
                        </span>

                        <h2 className="heading-font">
                            Need more
                            <br />
                            <em>information?</em>
                        </h2>
                    </div>

                    <div className="privacy-contact__card">
                        <FiMail />

                        <div>
                            <strong>Contact Jwandoon</strong>

                            <p>
                                For privacy-related questions or concerns,
                                contact our team.
                            </p>

                            <a href="mailto:jwandoon.info@gmail.com">
                                jwandoon.info@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}