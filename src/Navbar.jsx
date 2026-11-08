import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from './assets/Logo.png';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMobileOpen(false);
  };

  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    closeMenu();

    if (location.pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className="header-navbar">
      <div className="container nav-bar-container">
        {/* Left: Brand Logo */}
        <div className="nav-brand-wrapper">
          <Link
            to="/"
            className="brand-logo"
            aria-label="Little Lemon Home"
            onClick={closeMenu}
          >
            <img src={logo} alt="Little Lemon Restaurant" className="logo" />
          </Link>
        </div>

        {/* Center: Navigation Links in a single continuous line */}
        <nav
          className={`nav-menu ${isMobileOpen ? 'mobile-open' : ''}`}
          aria-label="Main Navigation"
        >
          <ul className="nav-links">
            <li>
              <Link
                to="/"
                className={`nav-item-link ${location.pathname === '/' ? 'active-link' : ''}`}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#about"
                className="nav-item-link"
                onClick={(e) => handleSectionClick(e, 'about')}
              >
                About
              </a>
            </li>
            <li>
              <Link
                to="/menu"
                className={`nav-item-link ${location.pathname === '/menu' ? 'active-link' : ''}`}
                onClick={closeMenu}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/reservations"
                className={`nav-item-link ${location.pathname === '/reservations' ? 'active-link' : ''}`}
                onClick={closeMenu}
              >
                Reservations
              </Link>
            </li>
            <li>
              <Link
                to="/order-online"
                className={`nav-item-link ${location.pathname === '/order-online' ? 'active-link' : ''}`}
                onClick={closeMenu}
              >
                Order Online
              </Link>
            </li>
          </ul>

          <div className="nav-actions-mobile">
            <Link to="/login" className="btn-login" onClick={closeMenu}>
              Login
            </Link>
          </div>
        </nav>

        {/* Right: Actions (Desktop Login button & Mobile Toggle) in a single line */}
        <div className="nav-right-actions">
          <Link to="/login" className="btn-login btn-login-desktop">
            Login
          </Link>

          <button
            type="button"
            className="btn-hamburger"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileOpen}
            aria-label="Toggle navigation menu"
          >
            <span className={`hamburger-bar ${isMobileOpen ? 'bar-open-1' : ''}`}></span>
            <span className={`hamburger-bar ${isMobileOpen ? 'bar-open-2' : ''}`}></span>
            <span className={`hamburger-bar ${isMobileOpen ? 'bar-open-3' : ''}`}></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
