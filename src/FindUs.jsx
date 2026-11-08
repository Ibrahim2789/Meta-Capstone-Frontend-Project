function FindUs() {
  return (
    <section className="find-us-section">
      <div className="container">
        <h2 className="section-title">Find Us</h2>
        <div className="find-us-grid">
          {/* Map Display Card */}
          <div className="map-card" role="region" aria-label="Restaurant Location Map">
            <div className="map-visual">
              <div className="map-overlay">
                <div className="map-marker" title="Little Lemon Chicago">
                  <span className="marker-pin" aria-hidden="true">📍</span>
                  <span className="marker-label">Little Lemon</span>
                </div>
              </div>
            </div>
            <div className="map-badge">Chicago, Illinois</div>
          </div>

          {/* Location & Hours Details */}
          <div className="contact-details-card">
            <h3>Little Lemon</h3>
            <address className="address-info">
              <p className="address-line">263 W. Ontario St.</p>
              <p className="address-line">Chicago, IL 60654</p>
            </address>

            <div className="hours-block">
              <p><strong>Mon &ndash; Fri:</strong> 11:00 &ndash; 22:00</p>
              <p><strong>Sat &ndash; Sun:</strong> 10:00 &ndash; 23:00</p>
            </div>

            <div className="contact-links-block">
              <p>
                <a href="tel:+13125550199">+1 (312) 555-0199</a>
              </p>
              <p>
                <a href="mailto:hello@littlelemon.com">hello@littlelemon.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FindUs;
