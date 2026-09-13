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
            <h2>Get the latest from Jwandoon</h2>
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
          <a href="/" className="main-footer__logo" >
            <img src={logo} alt="Jwandoon" />
          </a>
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
          <a href="/shop">All Products</a>
          <a href="/shop">New Arrivals</a>
          <a href="/shop">Best Sellers</a>
          <a href="/shop">Special Offers</a>
        </div>

        <div className="footer-column">
          <h3>Customer Care</h3>
          <a href="#">Contact Us</a>
          <a href="#">Shipping & Delivery</a>
          <a href="#">Returns & Exchanges</a>
          <a href="#">FAQs</a>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <a href="#">About Jwandoon</a>
          <a href="#">Our Story</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
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
