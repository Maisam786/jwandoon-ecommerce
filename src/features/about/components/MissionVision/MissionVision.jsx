import {
    FiCompass,
    FiTarget,
} from "react-icons/fi";

import "./MissionVision.css";

const items = [
    {
        icon: FiTarget,
        label: "Our Mission",
        title: "Make better shopping accessible to everyone.",
        text:
            "Our mission is to connect customers with useful, modern products at fair prices while creating a shopping experience that feels simple, reliable, and worth coming back to.",
    },
    {
        icon: FiCompass,
        label: "Our Vision",
        title: "Build a trusted retail brand for tomorrow.",
        text:
            "We envision Jwandoon growing into a trusted destination where technology, everyday essentials, and thoughtful service come together to make modern shopping easier.",
    },
];

export default function MissionVision() {
    return (
        <section className="mission-vision">
            <div className="container">

                <div className="mission-vision__intro">
                    <span className="section-eyebrow">
                        What Drives Us
                    </span>

                    <h2 className="heading-font">
                        Where we are going
                        <br />
                        <em>and why it matters.</em>
                    </h2>
                </div>

                <div className="mission-vision__grid">
                    {items.map((item) => {
                        const Icon = item.icon;

                        return (
                            <article
                                key={item.label}
                                className="mission-vision__card"
                            >
                                <div className="mission-vision__icon">
                                    <Icon />
                                </div>

                                <div className="mission-vision__content">
                                    <span>
                                        {item.label}
                                    </span>

                                    <h3>
                                        {item.title}
                                    </h3>

                                    <p>
                                        {item.text}
                                    </p>
                                </div>
                            </article>
                        );
                    })}
                </div>

                <div className="mission-vision__statement">
                    <span>JWANDOON</span>

                    <p>
                        "Simple choices. Better value.
                        <strong> A better way to shop.</strong>"
                    </p>
                </div>

            </div>
        </section>
    );
}