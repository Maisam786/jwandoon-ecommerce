import { useEffect, useState } from "react";
import {
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
  FiShield,
  FiTruck,
} from "react-icons/fi";

import { heroSlides } from "../../../../data/heroSlides";

import "./ShowcaseHero.css";

export default function ShowcaseHero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  };

  const previousSlide = () => {
    setActiveSlide(
      (current) => (current - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  const slide = heroSlides[activeSlide];

  return (
    <section className="showcase-hero">
      {/* BACKGROUND SLIDES */}

      <div className="showcase-hero__slides">
        {heroSlides.map((item, index) => (
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

          <h1 key={slide.id} className="heading-font showcase-hero__title">
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
            <a href="/shop" className="btn btn--primary">
              Shop Now
              <FiArrowRight />
            </a>

            <a
              href="/shop?collection=deals"
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
          {heroSlides.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              className={index === activeSlide ? "is-active" : ""}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>

        <button type="button" onClick={nextSlide} aria-label="Next slide">
          <FiChevronRight />
        </button>
      </div>

      {/* SLIDE NUMBER */}

      <div className="showcase-hero__counter">
        <strong>{String(activeSlide + 1).padStart(2, "0")}</strong>

        <span>/</span>

        <small>{String(heroSlides.length).padStart(2, "0")}</small>
      </div>
    </section>
  );
}
