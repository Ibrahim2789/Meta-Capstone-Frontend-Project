import { Link, useLocation } from 'react-router-dom';
import logo from './assets/Logo.png';

function Navbar() {
  const location = useLocation();

  return (
    <header className="header-navbar">
      <div className="container nav-bar-container">
        <Link to="/" className="brand-logo" aria-label="Little Lemon Home">
          <img src={logo} alt="Little Lemon" className="logo" />
        </Link>

        <nav className="nav-menu" aria-label="Main Navigation">
          <ul className="nav-links">
            <li>
              <Link
                to="/"
                className={location.pathname === '/' ? 'active-link' : ''}
              >
                Home
              </Link>
            </li>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#menu">Menu</a>
            </li>
            <li>
              <Link
                to="/reservations"
                className={location.pathname === '/reservations' ? 'active-link' : ''}
              >
                Reservations
              </Link>
            </li>
            <li>
              <a href="/#order-online">Order Online</a>
            </li>
          </ul>
        </nav>

        <div className="nav-actions">
          <Link to="/login" className="btn-login">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
