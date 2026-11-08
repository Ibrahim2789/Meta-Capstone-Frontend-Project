import { Link } from 'react-router-dom';

function Specials() {
  const specialsData = [
    {
      id: 1,
      title: 'Greek Salad',
      price: '$12.99',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
      description:
        'The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    },
    {
      id: 2,
      title: 'Bruschetta',
      price: '$5.99',
      image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=600&q=80',
      description:
        'Our Bruschetta is made from grilled sourdough smeared with fresh garlic, topped with ripe diced tomatoes, fragrant basil, and extra virgin olive oil.',
    },
    {
      id: 3,
      title: 'Lemon Dessert',
      price: '$5.00',
      image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80',
      description:
        'Straight from grandma’s recipe book, every ingredient has been sourced to guarantee an authentic, refreshing Mediterranean lemon pie.',
    },
  ];

  return (
    <section className="specials-section" id="menu">
      <div className="container">
        <div className="specials-header">
          <h2>Specials</h2>
          <Link to="/#menu" className="btn-menu-action">
            Go to menu
          </Link>
        </div>

        <div className="grid-3-col specials-grid">
          {specialsData.map((item) => (
            <article key={item.id} className="special-card">
              <div className="special-card-img-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="special-card-img"
                  loading="lazy"
                />
              </div>
              <div className="special-card-body">
                <div className="special-card-title-row">
                  <h3>{item.title}</h3>
                  <span className="price-tag">{item.price}</span>
                </div>
                <p>{item.description}</p>
                <div className="special-card-footer">
                  <a href="/#order-online" className="order-delivery-link">
                    Order &amp; delivery
                    <span className="delivery-icon" aria-hidden="true">🛵</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specials;
