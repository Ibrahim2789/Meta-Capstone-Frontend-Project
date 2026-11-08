import { Link } from 'react-router-dom';

function AboutPage() {
  const values = [
    {
      title: 'Generational Recipes',
      description:
        'Every sauce, marinade, and pastry is rooted in Italian and Mediterranean heritage, handed down through generations of family cooking.',
      icon: '📜',
    },
    {
      title: 'Farm-Fresh Sourcing',
      description:
        'We partner with local Midwestern organic farms for produce and import artisanal cheeses, olives, and cold-pressed extra virgin olive oil directly from the Mediterranean.',
      icon: '🌿',
    },
    {
      title: 'Warm Hospitality',
      description:
        'To us, every diner is an honored guest in our home. We pride ourselves on creating an inviting, lively, and unforgettable dining ambiance.',
      icon: '🍋',
    },
  ];

  const milestones = [
    { year: '2015', event: 'Brothers Mario and Adrian move to Chicago with a dream of opening an authentic Mediterranean bistro.' },
    { year: '2017', event: 'Little Lemon opens its doors on Ontario Street in the heart of downtown Chicago.' },
    { year: '2020', event: 'Awarded Chicago Magazine’s "Best New Mediterranean Kitchen".' },
    { year: '2024', event: 'Launched online reservations and expanded outdoor patio seating for summer dining.' },
  ];

  return (
    <div className="about-page-view">
      {/* Hero Banner */}
      <section className="about-hero-banner">
        <div className="container">
          <h1>About Little Lemon</h1>
          <p className="lead-subtitle">
            A family-owned Mediterranean restaurant focused on traditional recipes served with a modern twist in Chicago.
          </p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="about-story-section">
        <div className="container about-story-grid">
          <div className="about-story-text">
            <span className="section-eyebrow">Our Story & Heritage</span>
            <h2>Mario & Adrian: Two Brothers, One Shared Culinary Dream</h2>
            <p>
              Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States
              to pursue their lifelong passion for Mediterranean gastronomy. Growing up along the sun-drenched
              coasts of Italy, food was never just sustenance—it was the heartbeat of family life.
            </p>
            <p>
              Mario crafts exquisite dishes based on generational family recipes, honoring time-tested techniques
              and authentic seasoning. Adrian infuses each plate with contemporary culinary innovation and Chicago
              flair, elevating classics into modern culinary masterpieces.
            </p>
            <p>
              Together, they have created a warm, vibrant dining sanctuary on West Ontario Street where friends,
              families, and food lovers come together to share memories over unforgettable meals.
            </p>
            <div className="about-story-actions">
              <Link to="/reservations" className="btn-primary" aria-label="Reserve a Table at Little Lemon">
                Reserve a Table
              </Link>
              <Link to="/menu" className="btn-secondary" aria-label="Explore Little Lemon Menu">
                View Full Menu
              </Link>
            </div>
          </div>

          <div className="about-story-media">
            <div className="about-dual-images">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80"
                alt="Chef preparing fresh Mediterranean cuisine"
                className="about-image-card image-one"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&w=600&q=80"
                alt="Little Lemon kitchen teamwork"
                className="about-image-card image-two"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / Values Section */}
      <section className="about-values-section">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-eyebrow">Our Philosophy</span>
            <h2>What Sets Little Lemon Apart</h2>
            <p>We treat every guest like family, and every plate like a work of art.</p>
          </div>

          <div className="about-values-grid">
            {values.map((val) => (
              <div key={val.title} className="about-value-card">
                <span className="value-icon" role="img" aria-hidden="true">
                  {val.icon}
                </span>
                <h3>{val.title}</h3>
                <p>{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="about-timeline-section">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-eyebrow">Our Journey</span>
            <h2>Milestones Along the Way</h2>
          </div>

          <div className="about-timeline-list">
            {milestones.map((m) => (
              <div key={m.year} className="timeline-item">
                <div className="timeline-year">{m.year}</div>
                <div className="timeline-content">
                  <p>{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="about-cta-section">
        <div className="container about-cta-box">
          <h2>Ready to Taste the Mediterranean?</h2>
          <p>Join us tonight for dinner or reserve your table in advance for any special occasion.</p>
          <div className="cta-button-group">
            <Link to="/reservations" className="btn-primary" aria-label="Book your table reservation">
              Book a Reservation
            </Link>
            <Link to="/order-online" className="btn-secondary" aria-label="Order online for delivery">
              Order Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
