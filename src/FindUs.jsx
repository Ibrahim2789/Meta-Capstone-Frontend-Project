function FindUs() {
  return (
    <section className="find-us-section">
      <div className="container">
        <h2 className="section-title">Find Us</h2>
        <div className="find-us-grid">
          {/* Interactive Map Card */}
          <div className="map-card" role="region" aria-label="Restaurant Location Map">
            <iframe
              title="Little Lemon Chicago Location Map"
              className="map-iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.3168297014467!2d-87.63851502353119!3d41.89360876421884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cb40e6c6e75%3A0x7d6f0c4bbd51381!2s263%20W%20Ontario%20St%2C%20Chicago%2C%20IL%2060654!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
