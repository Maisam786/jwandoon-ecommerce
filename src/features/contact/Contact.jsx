import {
    FiArrowRight,
    FiClock,
    FiMail,
    FiMapPin,
    FiMessageCircle,
    FiPhone,
    FiSend,
} from "react-icons/fi";
import { useState } from "react";

import "./Contact.css";

const contactDetails = [
    {
        icon: FiMail,
        title: "Email Us",
        value: "jwandoon.info@gmail.com",
        description: "Send us your questions anytime.",
    },
    {
        icon: FiPhone,
        title: "Call Us",
        value: "+92 333 8595878",
        description: "Available during business hours.",
    },
    {
        icon: FiMapPin,
        title: "Our Location",
        value: "Kacha Pakkah, Hangu Road, Kohat, Pakistan",
        description: "Serving customers across Pakistan.",
    },
    {
        icon: FiClock,
        title: "Working Hours",
        value: "10:00 AM – 8:00 PM",
        description: "Monday to Saturday.",
    },
];

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        setSubmitted(true);

        event.currentTarget.reset();
    };

    return (
        <main className="contact-page">
            {/* HERO */}
            <section className="contact-hero">
                <div className="container">
                    <div className="contact-hero__content">
                        <span className="section-eyebrow">
                            Get In Touch
                        </span>

                        <h1>
                            We'd love to
                            <br />
                            <em>hear from you.</em>
                        </h1>

                        <p>
                            Have a question about an order, a product,
                            or anything else? Our team is here to help.
                        </p>
                    </div>
                </div>
            </section>

            {/* CONTACT DETAILS */}
            <section className="contact-details">
                <div className="container">
                    <div className="contact-details__grid">
                        {contactDetails.map((item) => {
                            const Icon = item.icon;

                            return (
                                <article
                                    className="contact-detail"
                                    key={item.title}
                                >
                                    <div className="contact-detail__icon">
                                        <Icon />
                                    </div>

                                    <div>
                                        <span>
                                            {item.title}
                                        </span>

                                        <strong>
                                            {item.value}
                                        </strong>

                                        <p>
                                            {item.description}
                                        </p>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FORM + INFO */}
            <section className="contact-main">
                <div className="container">
                    <div className="contact-main__grid">
                        <div className="contact-form-wrapper">
                            <div className="contact-form__heading">
                                <span className="section-eyebrow">
                                    Send A Message
                                </span>

                                <h2>
                                    Let's start a
                                    <em> conversation.</em>
                                </h2>

                                <p>
                                    Fill out the form and we'll get
                                    back to you as soon as possible.
                                </p>
                            </div>

                            {submitted ? (
                                <div className="contact-success">
                                    <div className="contact-success__icon">
                                        <FiSend />
                                    </div>

                                    <span>
                                        Message Sent
                                    </span>

                                    <h3>
                                        Thanks for reaching out.
                                    </h3>

                                    <p>
                                        Your message has been received.
                                        Our team will get back to you soon.
                                    </p>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setSubmitted(false)
                                        }
                                    >
                                        Send Another Message
                                        <FiArrowRight />
                                    </button>
                                </div>
                            ) : (
                                <form
                                    className="contact-form"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="contact-form__row">
                                        <label>
                                            <span>
                                                First Name
                                            </span>

                                            <input
                                                type="text"
                                                name="firstName"
                                                placeholder="Your first name"
                                                required
                                            />
                                        </label>

                                        <label>
                                            <span>
                                                Last Name
                                            </span>

                                            <input
                                                type="text"
                                                name="lastName"
                                                placeholder="Your last name"
                                                required
                                            />
                                        </label>
                                    </div>

                                    <div className="contact-form__row">
                                        <label>
                                            <span>
                                                Email Address
                                            </span>

                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="you@example.com"
                                                required
                                            />
                                        </label>

                                        <label>
                                            <span>
                                                Phone Number
                                            </span>

                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="+92 300 0000000"
                                            />
                                        </label>
                                    </div>

                                    <label>
                                        <span>
                                            Subject
                                        </span>

                                        <select
                                            name="subject"
                                            defaultValue=""
                                            required
                                        >
                                            <option
                                                value=""
                                                disabled
                                            >
                                                Select a subject
                                            </option>

                                            <option value="order">
                                                Order Support
                                            </option>

                                            <option value="product">
                                                Product Question
                                            </option>

                                            <option value="delivery">
                                                Delivery
                                            </option>

                                            <option value="return">
                                                Returns & Exchange
                                            </option>

                                            <option value="other">
                                                Other
                                            </option>
                                        </select>
                                    </label>

                                    <label>
                                        <span>
                                            Your Message
                                        </span>

                                        <textarea
                                            name="message"
                                            rows="6"
                                            placeholder="How can we help you?"
                                            required
                                        />
                                    </label>

                                    <button
                                        type="submit"
                                        className="contact-form__submit"
                                    >
                                        Send Message
                                        <FiArrowRight />
                                    </button>
                                </form>
                            )}
                        </div>

                        <aside className="contact-sidebar">
                            <div className="contact-sidebar__card">
                                <div className="contact-sidebar__icon">
                                    <FiMessageCircle />
                                </div>

                                <span>
                                    Customer Support
                                </span>

                                <h3>
                                    We're here when
                                    <br />
                                    you need us.
                                </h3>

                                <p>
                                    Whether you're looking for
                                    product information, need help
                                    with an order, or simply have
                                    a question, don't hesitate to
                                    reach out.
                                </p>

                                <div className="contact-sidebar__line" />

                                <div className="contact-sidebar__support">
                                    <span>
                                        Response time
                                    </span>

                                    <strong>
                                        Usually within 24 hours
                                    </strong>
                                </div>
                            </div>

                            <div className="contact-sidebar__bottom">
                                <span>
                                    Shopping with Jwandoon
                                </span>

                                <strong>
                                    Simple. Reliable. Better.
                                </strong>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}