import { useState } from "react";
import {
    FiChevronDown,
    FiHelpCircle,
    FiMail,
    FiShoppingBag,
    FiTruck,
} from "react-icons/fi";

import "./FAQs.css";

const faqGroups = [
    {
        title: "Orders & Products",
        icon: FiShoppingBag,
        questions: [
            {
                question: "How can I place an order?",
                answer:
                    "Browse our products, open the product you want, add it to your cart, and continue to checkout. Enter your delivery information and select your preferred payment method to complete the order.",
            },
            {
                question: "Are the products available in stock?",
                answer:
                    "Product availability is shown on the website whenever possible. If an item becomes unavailable after an order is placed, our team will contact you regarding the available options.",
            },
            {
                question: "Can I cancel my order?",
                answer:
                    "If you need to cancel an order, contact us as soon as possible with your order details. Cancellation depends on whether the order has already been processed or dispatched.",
            },
            {
                question: "Can product colors or specifications vary?",
                answer:
                    "Some products may have different colors, packaging, or specifications depending on the available stock. Product-specific information should be checked on the relevant product page.",
            },
        ],
    },
    {
        title: "Shipping & Delivery",
        icon: FiTruck,
        questions: [
            {
                question: "Do you deliver across Pakistan?",
                answer:
                    "Yes. Jwandoon offers delivery across Pakistan through available courier services.",
            },
            {
                question: "How long does delivery take?",
                answer:
                    "Delivery time can vary depending on your location, courier availability, and the nature of your order. An estimated delivery timeframe may be provided during the ordering process.",
            },
            {
                question: "How can I track my order?",
                answer:
                    "When tracking information is available for your shipment, it can be provided through the applicable courier or by contacting our support team.",
            },
            {
                question: "What if my package is delayed?",
                answer:
                    "Delivery can occasionally be affected by courier operations, weather, public holidays, or other circumstances. If your order appears to be delayed, contact us and we'll help you check its status.",
            },
        ],
    },
    {
        title: "Returns & Exchanges",
        icon: FiHelpCircle,
        questions: [
            {
                question: "Can I return a product?",
                answer:
                    "Eligible products may be returned depending on the product condition and reason for the return. Please contact us before sending anything back so our team can review your request.",
            },
            {
                question: "Can I exchange a product?",
                answer:
                    "Eligible products may be exchanged depending on availability and the circumstances of the request. Contact our support team with your order details for assistance.",
            },
            {
                question: "What should I do if I receive a damaged item?",
                answer:
                    "Please document the damage and contact us as soon as possible with your order details and relevant photos. Our team will review the issue and guide you through the next steps.",
            },
            {
                question: "What if I receive the wrong product?",
                answer:
                    "Contact us with your order details if you receive a product different from what you ordered. We'll review the order and help determine the appropriate resolution.",
            },
        ],
    },
    {
        title: "Payments",
        icon: FiShoppingBag,
        questions: [
            {
                question: "Which payment methods are available?",
                answer:
                    "Available payment methods are shown during checkout. Jwandoon currently supports Cash on Delivery and may provide other payment options when available.",
            },
            {
                question: "Is Cash on Delivery available?",
                answer:
                    "Cash on Delivery is available for eligible orders and locations. The available option will be shown during checkout.",
            },
            {
                question: "Can I change my payment method after ordering?",
                answer:
                    "If you need to change your payment method after placing an order, contact us as soon as possible. Changes may depend on the current status of your order.",
            },
        ],
    },
];

function FAQItem({ question, answer, isOpen, onToggle }) {
    return (
        <div
            className={`faq-item ${
                isOpen ? "faq-item--open" : ""
            }`}
        >
            <button
                type="button"
                className="faq-item__question"
                onClick={onToggle}
                aria-expanded={isOpen}
            >
                <span>{question}</span>

                <span className="faq-item__icon">
                    <FiChevronDown />
                </span>
            </button>

            <div className="faq-item__answer">
                <div>
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    );
}

export default function FAQs() {
    const [openItem, setOpenItem] = useState("0-0");

    const handleToggle = (id) => {
        setOpenItem((current) =>
            current === id ? null : id
        );
    };

    return (
        <main className="faqs-page">
            {/* HERO */}

            <section className="faqs-hero">
                <div className="container faqs-hero__container">
                    <div className="faqs-hero__content">
                        <span className="section-eyebrow">
                            Help Center
                        </span>

                        <h1 className="heading-font faqs-hero__title">
                            Frequently
                            <br />
                            <em>Asked Questions.</em>
                        </h1>

                        <p className="faqs-hero__description">
                            Find quick answers about orders, delivery,
                            payments, returns, and shopping with Jwandoon.
                        </p>
                    </div>

                    <div className="faqs-hero__visual">
                        <div className="faqs-hero__icon">
                            <FiHelpCircle />
                        </div>

                        <span>JWANDOON</span>

                        <strong>
                            Questions?
                            <br />
                            We've got
                            <br />
                            answers.
                        </strong>
                    </div>
                </div>
            </section>

            {/* FAQ CONTENT */}

            <section className="faqs-content">
                <div className="container faqs-content__container">
                    <div className="faqs-list">
                        {faqGroups.map((group, groupIndex) => {
                            const Icon = group.icon;

                            return (
                                <div
                                    className="faq-group"
                                    key={group.title}
                                >
                                    <div className="faq-group__heading">
                                        <span className="faq-group__icon">
                                            <Icon />
                                        </span>

                                        <div>
                                            <span className="section-eyebrow">
                                                {String(
                                                    groupIndex + 1
                                                ).padStart(2, "0")}
                                            </span>

                                            <h2>{group.title}</h2>
                                        </div>
                                    </div>

                                    <div className="faq-group__items">
                                        {group.questions.map(
                                            (item, itemIndex) => {
                                                const id = `${groupIndex}-${itemIndex}`;

                                                return (
                                                    <FAQItem
                                                        key={id}
                                                        question={
                                                            item.question
                                                        }
                                                        answer={
                                                            item.answer
                                                        }
                                                        isOpen={
                                                            openItem === id
                                                        }
                                                        onToggle={() =>
                                                            handleToggle(
                                                                id
                                                            )
                                                        }
                                                    />
                                                );
                                            }
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* SUPPORT CARD */}

                    <aside className="faqs-support">
                        <div className="faqs-support__card">
                            <span className="faqs-support__icon">
                                <FiMail />
                            </span>

                            <span className="section-eyebrow">
                                Still Need Help?
                            </span>

                            <h2 className="heading-font">
                                We're here
                                <br />
                                <em>to help.</em>
                            </h2>

                            <p>
                                Can't find the answer you're looking for?
                                Reach out to our support team and we'll be
                                happy to assist.
                            </p>

                            <a
                                href="mailto:jwandoon.info@gmail.com"
                                className="faqs-support__email"
                            >
                                jwandoon.info@gmail.com
                            </a>

                            <a
                                href="tel:+923338595878"
                                className="faqs-support__phone"
                            >
                                +92 333 8595878
                            </a>
                        </div>
                    </aside>
                </div>
            </section>
        </main>
    );
}