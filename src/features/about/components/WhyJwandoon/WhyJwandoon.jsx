import {
    FiHeart,
    FiPackage,
    FiShield,
    FiTrendingUp,
} from "react-icons/fi";

import "./WhyJwandoon.css";

const features = [
    {
        icon: FiShield,
        number: "01",
        title: "Quality First",
        description:
            "We focus on products that offer dependable quality, useful features, and real everyday value.",
    },
    {
        icon: FiTrendingUp,
        number: "02",
        title: "Better Value",
        description:
            "Our direct sourcing approach helps us offer competitive prices without compromising the shopping experience.",
    },
    {
        icon: FiPackage,
        number: "03",
        title: "Growing Selection",
        description:
            "From smart technology to everyday essentials, our collection continues to grow with changing customer needs.",
    },
    {
        icon: FiHeart,
        number: "04",
        title: "Customer First",
        description:
            "Every part of Jwandoon is built around making shopping simpler, clearer, and more enjoyable.",
    },
];

export default function WhyJwandoon() {
    return (
        <section className="why-jwandoon">
            <div className="container">

                <div className="why-jwandoon__heading">
                    <div>
                        <span className="section-eyebrow">
                            Why Jwandoon
                        </span>

                        <h2 className="heading-font">
                            More than just
                            <br />
                            <em>another store.</em>
                        </h2>
                    </div>

                    <p>
                        We are building Jwandoon around the things that
                        matter most: useful products, fair value, and
                        an experience customers can trust.
                    </p>
                </div>

                <div className="why-jwandoon__grid">
                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <article
                                key={feature.number}
                                className="why-jwandoon__card"
                            >
                                <div className="why-jwandoon__card-top">
                                    <span className="why-jwandoon__number">
                                        {feature.number}
                                    </span>

                                    <span className="why-jwandoon__icon">
                                        <Icon />
                                    </span>
                                </div>

                                <h3>{feature.title}</h3>

                                <p>{feature.description}</p>

                                <span className="why-jwandoon__line" />
                            </article>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}