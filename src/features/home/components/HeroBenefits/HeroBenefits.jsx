import {
    FiTruck,
    FiShield,
    FiHeadphones,
} from "react-icons/fi";

import "./HeroBenefits.css";

const benefits = [
    {
        icon: FiTruck,
        title: "Fast Delivery",
        description: "Quick & reliable delivery",
    },
    {
        icon: FiShield,
        title: "Secure Shopping",
        description: "Safe & trusted checkout",
    },
    {
        icon: FiHeadphones,
        title: "Customer Support",
        description: "We're here to help you",
    },
];

export default function HeroBenefits() {
    return (
        <section className="hero-benefits">
            <div className="container hero-benefits__container">
                {benefits.map((benefit) => {
                    const Icon = benefit.icon;

                    return (
                        <div className="hero-benefit" key={benefit.title}>
                            <div className="hero-benefit__icon">
                                <Icon />
                            </div>

                            <div className="hero-benefit__content">
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}