import logo from './assets/logo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid-4-col">
          <div className="footer-logo">
            <img src={logo} alt="Little Lemon logo" />
          </div>

          <div className="footer-links">
            <h4>Navigation</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/reservations">Reservations</a></li>
              <li><a href="/order-online">Order Online</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <ul>
              <li>123 Lemon Street, Chicago, IL</li>
              <li>(555) 123-4567</li>
              <li>info@littlelemon.com</li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Social Media</h4>
            <ul>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
