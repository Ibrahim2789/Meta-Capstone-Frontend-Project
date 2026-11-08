function About() {
  return (
    <section className="about-section" id="about">
      <div className="container about-container">
        <div className="about-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved
            to the United States to pursue their shared passion for Mediterranean cuisine.
          </p>
          <p>
            Mario crafts exquisite dishes based on generational family recipes from the
            shores of Italy, while Adrian infuses each plate with contemporary culinary
            techniques and Chicago flair. Together, they create an unforgettable dining
            experience centered around warmth, freshness, and hospitality.
          </p>
        </div>
        <div className="about-images-wrapper">
          <img
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=500&q=80"
            alt="Little Lemon Chef preparing dishes"
            className="about-img about-img-top"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&w=500&q=80"
            alt="Little Lemon restaurant kitchen atmosphere"
            className="about-img about-img-bottom"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
