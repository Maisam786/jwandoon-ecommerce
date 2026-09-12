import { useEffect, useState } from "react";
import {
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
  FiShield,
  FiTruck,
} from "react-icons/fi";

import hero1 from "../../../../assets/images/hero/hero-1.webp";
import hero2 from "../../../../assets/images/hero/hero-2.webp";
import hero3 from "../../../../assets/images/hero/hero-3.webp";
import hero4 from "../../../../assets/images/hero/hero-4.webp";
import hero5 from "../../../../assets/images/hero/hero-5.webp";

import "./ShowcaseHero.css";

const slides = [
  {
    id: 1,
    image: hero1,
    eyebrow: "WOMEN'S COLLECTION",
    title: "Style That.",
    highlight: "Speaks For You.",
    description:
      "Discover elegant purses, beautiful bracelets and carefully selected accessories designed to add the perfect touch to every look.",
    button: "Shop Women",
    link: "/shop?category=women",
  },
  {
    id: 2,
    image: hero2,
    eyebrow: "MEN'S COLLECTION",
    title: "Built For.",
    highlight: "Your Style.",
    description:
      "Explore stylish caps, men's accessories, glasses and everyday essentials made for a confident and modern look.",
    button: "Shop Men",
    link: "/shop?category=men",
  },
  {
    id: 3,
    image: hero3,
    eyebrow: "SMART TECHNOLOGY",
    title: "Tech That.",
    highlight: "Moves With You.",
    description:
      "Upgrade your everyday experience with headphones, wireless earbuds and smart watches built for modern life.",
    button: "Explore Tech",
    link: "/shop?category=electronics",
  },
  {
    id: 4,
    image: hero4,
    eyebrow: "KIDS COLLECTION",
    title: "Little Things.",
    highlight: "Big Smiles.",
    description:
      "Bring more joy to their world with fun toys, adorable teddy bears and playful products made for little moments.",
    button: "Shop Kids",
    link: "/shop?category=kids",
  },
  {
    id: 5,
    image: hero5,
    eyebrow: "TIMELESS COLLECTION",
    title: "Every Second.",
    highlight: "In Style.",
    description:
      "Complete your look with elegant men's watches that combine timeless design, confidence and everyday sophistication.",
    button: "Shop Watches",
    link: "/shop?category=watches",
  },
];

export default function ShowcaseHero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveSlide(
      (current) => (current - 1 + slides.length) % slides.length
    );
  };

  const slide = slides[activeSlide];

  return (
    <section className="showcase-hero">
      {/* BACKGROUND SLIDES */}

      <div className="showcase-hero__slides">
        {slides.map((item, index) => (
          <div
            key={item.id}
            className={`showcase-hero__slide ${
              index === activeSlide ? "showcase-hero__slide--active" : ""
            }`}
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          />
        ))}
      </div>

      {/* OVERLAY */}

      <div className="showcase-hero__overlay" />
      <div className="showcase-hero__light" />

      {/* CONTENT */}

      <div className="container showcase-hero__container">
        <div className="showcase-hero__content">
          <span className="showcase-hero__eyebrow">
            <i />
            {slide.eyebrow}
          </span>

          <h1
            key={slide.id}
            className="heading-font showcase-hero__title"
          >
            {slide.title}
            <br />
            <em>{slide.highlight}</em>
          </h1>

          <p
            key={`description-${slide.id}`}
            className="showcase-hero__description"
          >
            {slide.description}
          </p>

          <div className="showcase-hero__buttons">
            <a
              href={slide.link}
              className="btn btn--primary"
            >
              {slide.button}
              <FiArrowRight />
            </a>

            <a
              href="/deals"
              className="btn btn--outline showcase-hero__secondary"
            >
              Explore Deals
              <FiArrowRight />
            </a>
          </div>

          {/* TRUST */}

          <div className="showcase-hero__trust">
            <div className="trust-item">
              <span>
                <FiShield />
              </span>

              <div>
                <strong>Trusted Quality</strong>
                <small>Quality checked</small>
              </div>
            </div>

            <div className="trust-item">
              <span>
                <FiTruck />
              </span>

              <div>
                <strong>Fast Delivery</strong>
                <small>Delivered to your door</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SLIDER CONTROLS */}

      <div className="showcase-hero__controls">
        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous slide"
        >
          <FiChevronLeft />
        </button>

        <div className="showcase-hero__indicators">
          {slides.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              className={index === activeSlide ? "is-active" : ""}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <FiChevronRight />
        </button>
      </div>

      {/* SLIDE NUMBER */}

      <div className="showcase-hero__counter">
        <strong>
          {String(activeSlide + 1).padStart(2, "0")}
        </strong>

        <span>/</span>

        <small>
          {String(slides.length).padStart(2, "0")}
        </small>
      </div>
    </section>
  );
}