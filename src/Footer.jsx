import { Link } from 'react-router-dom';
import logo from './assets/Logo.png';

function Footer() {
  return (
    <footer className="footer-site" role="contentinfo">
      <div className="container footer-container">
        <div className="footer-grid">
          {/* Logo Card */}
          <div className="footer-logo-box">
            <Link to="/" aria-label="Little Lemon Home">
              <img src={logo} alt="Little Lemon logo" className="footer-logo" />
            </Link>
          </div>

          {/* Navigation Column */}
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul className="footer-nav-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="/#about">About</a>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/reservations">Reservations</Link>
              </li>
              <li>
                <Link to="/order-online">Order Online</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="footer-contact-list">
              <li>263 W. Ontario St., Chicago, IL</li>
              <li>
                <a href="tel:+13125550199">+1 (312) 555-0199</a>
              </li>
              <li>
                <a href="mailto:hello@littlelemon.com">hello@littlelemon.com</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links Column */}
          <div className="footer-col">
            <h4>Social Media Links</h4>
            <ul className="footer-social-list">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter/X
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>&copy; {new Date().getFullYear()} Little Lemon Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
