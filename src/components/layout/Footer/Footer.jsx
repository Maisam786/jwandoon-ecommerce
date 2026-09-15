import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiYoutube,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

import logo from "../../../assets/logo/logo-footer.png";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Newsletter */}
      <div className="footer-newsletter">
        <div className="footer-newsletter-content">
          <div>
            <span className="footer-eyebrow">STAY CONNECTED</span>
            <h2>
              Get the latest from <em>Jwandoon</em>
            </h2>
            <p>
              Subscribe for new arrivals, exclusive offers and special updates.
            </p>
          </div>

          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="main-footer__logo">
            <img src={logo} alt="Jwandoon" />
          </Link>
          <p>
            Your trusted destination for quality products, great value and a
            better shopping experience.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="Facebook">
              <FiFacebook />
            </a>
            <a href="#" aria-label="Instagram">
              <FiInstagram />
            </a>
            <a href="#" aria-label="Twitter">
              <FiTwitter />
            </a>
            <a href="#" aria-label="YouTube">
              <FiYoutube />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Shop</h3>

          <Link to="/shop">All Products</Link>
          <Link to="/shop?collection=new-arrivals">New Arrivals</Link>
          <Link to="/shop?collection=best-sellers">Best Sellers</Link>
          <Link to="/shop?collection=deals">Special Offers</Link>
        </div>

        <div className="footer-column">
          <h3>Customer Care</h3>

          <Link to="/contact">Contact Us</Link>
          <Link to="/shipping">Shipping & Delivery</Link>
          <Link to="/returns">Returns & Exchanges</Link>
          <Link to="/faqs">FAQs</Link>
        </div>

        <div className="footer-column">
          <h3>Company</h3>

          <Link to="/about#about-jwandoon">About Jwandoon</Link>
          <Link to="/about#our-story">Our Story</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>

        <div className="footer-column footer-contact">
          <h3>Contact</h3>

          <div className="contact-item">
            <FiMapPin />
            <span>Kacha Pakkah, Hangu Road, Kohat, Pakistan</span>
          </div>

          <div className="contact-item">
            <FiPhone />
            <span>+92 333 8595878</span>
          </div>

          <div className="contact-item">
            <FiMail />
            <span>jwandoon.info@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2026 Jwandoon. All rights reserved.</p>

        <div className="footer-bottom-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
