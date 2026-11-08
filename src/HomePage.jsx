import { Link } from 'react-router-dom';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import heroImg from './assets/hero.png';

function HomePage() {
  return (
    <div className="home-page-view">
      {/* Hero Section */}
      <section className="hero-section" id="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text">
              <h1 className="hero-brand-name">Little Lemon</h1>
              <h2 className="hero-location-name">Chicago</h2>
              <p className="hero-desc">
                We are a family owned Mediterranean restaurant, focused on traditional
                recipes served with a modern twist. Fresh flavors, warm ambiance, and
                unforgettable hospitality.
              </p>
              <Link to="/reservations" className="btn-primary btn-reserve-cta">
                Reserve a table
              </Link>
            </div>
            <div className="hero-image-wrapper">
              <img
                src={heroImg}
                alt="Little Lemon delicious Mediterranean dish"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specials Section */}
      <Specials />

      {/* Testimonials Section */}
      <Testimonials />

      {/* About Section */}
      <About />
    </div>
  );
}

export default HomePage;
