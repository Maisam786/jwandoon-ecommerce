import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheck,
  FiHeart,
  FiShield,
  FiTruck,
} from "react-icons/fi";

import "./About.css";

import WhyJwandoon from "./components/WhyJwandoon/WhyJwandoon";
import MissionVision from "./components/MissionVision/MissionVision";
import AboutCTA from "./components/AboutCTA/AboutCTA";

export default function About() {
  return (
    <main className="about-page">
      {/* HERO */}

      <section className="about-hero">
        <div className="container about-hero__container">
          <div className="about-hero__content">
            <span className="about-hero__eyebrow">
              <i />
              About Jwandoon
            </span>

            <h1 className="heading-font about-hero__title">
              Shopping Made
              <br />
              <em>Simple & Better.</em>
            </h1>

            <p className="about-hero__description">
              Jwandoon is a modern retail brand built to bring quality products,
              honest value, and a smoother shopping experience to everyday
              customers.
            </p>

            <div className="about-hero__buttons">
              <Link to="/shop" className="about-btn about-btn--primary">
                Explore Products
                <FiArrowRight />
              </Link>

              <a href="#our-story" className="about-btn about-btn--outline">
                Our Story
              </a>
            </div>
          </div>

          <div className="about-hero__visual">
            <div className="about-hero__visual-card">
              <span className="about-hero__visual-label">JWANDOON</span>

              <strong>
                Quality.
                <br />
                Value.
                <br />
                Trust.
              </strong>

              <div className="about-hero__visual-line" />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}

      <section className="about-trust">
        <div className="container about-trust__grid">
          <div className="about-trust__item">
            <span>
              <FiShield />
            </span>

            <div>
              <strong>Trusted Quality</strong>
              <small>Products selected with care</small>
            </div>
          </div>

          <div className="about-trust__item">
            <span>
              <FiTruck />
            </span>

            <div>
              <strong>Reliable Delivery</strong>
              <small>From our store to your door</small>
            </div>
          </div>

          <div className="about-trust__item">
            <span>
              <FiHeart />
            </span>

            <div>
              <strong>Customer First</strong>
              <small>Built around your experience</small>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}

      <section id="our-story" className="about-story">
        <div className="container about-story__container">
          <div className="about-story__visual">
            <div className="about-story__image-card">
              <span>EST. 2026</span>

              <div className="about-story__wordmark">
                <svg viewBox="0 0 700 220" role="img" aria-label="Jwandoon">
                  <text
                    x="350"
                    y="145"
                    textAnchor="middle"
                    className="about-story__handwriting"
                  >
                    Jwandoon
                  </text>
                </svg>
              </div>

              <small>QUALITY • VALUE • TRUST</small>
            </div>
          </div>

          <div className="about-story__content">
            <span className="section-eyebrow">Our Story</span>

            <h2 className="heading-font">
              Built with a simple
              <br />
              <em>idea in mind.</em>
            </h2>

            <p>
              Jwandoon started with a simple goal: make it easier for people to
              discover useful, modern products without making shopping
              complicated.
            </p>

            <p>
              We source products directly from China and carefully bring them
              together under one growing marketplace. From electronics and
              mobile accessories to smart devices, audio products, and everyday
              essentials, our focus is on combining variety with value.
            </p>

            <div className="about-story__points">
              <div>
                <FiCheck />
                <span>Quality-focused products</span>
              </div>

              <div>
                <FiCheck />
                <span>Competitive everyday pricing</span>
              </div>

              <div>
                <FiCheck />
                <span>A smoother shopping experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyJwandoon />
      <MissionVision />
      <AboutCTA />
    </main>
  );
}
