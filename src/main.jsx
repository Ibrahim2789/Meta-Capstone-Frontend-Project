import heroImage from './assets/hero.png';

function Main() {
  const specials = [
    {
      id: 1,
      title: 'Greek Salad',
      price: '$12.99',
      description:
        'The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    },
    {
      id: 2,
      title: 'Bruschetta',
      price: '$5.99',
      description:
        'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    },
    {
      id: 3,
      title: 'Lemon Dessert',
      price: '$5.00',
      description:
        'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    },
  ];

  return (
    <main className="main">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text">
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <p>
                We are a family owned Mediterranean restaurant, focused on
                traditional recipes served with a modern twist.
              </p>
              <a href="/reservations" className="btn-primary">
                Reserve a Table
              </a>
            </div>
            <div className="hero-image-wrapper">
              <img
                src={heroImage}
                alt="Little Lemon restaurant specialties"
                className="hero-image shadowed"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights / Specials Section */}
      <section className="specials-section">
        <div className="container">
          <div className="specials-header">
            <h2>This Week's Specials!</h2>
            <button type="button" className="btn-primary">
              Online Menu
            </button>
          </div>

          <div className="grid-3-col">
            {specials.map((item) => (
              <article key={item.id} className="special-card">
                <div className="special-card-body">
                  <div className="special-card-title-row">
                    <h3>{item.title}</h3>
                    <span className="price-tag">{item.price}</span>
                  </div>
                  <p>{item.description}</p>
                  <a href="/order-online" className="order-delivery-link">
                    Order a delivery <span>&rarr;</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
