import { useState } from 'react';
import { Link } from 'react-router-dom';

function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const menuItems = [
    {
      id: 1,
      category: 'Starters',
      title: 'Greek Salad',
      price: '$12.99',
      tag: 'Vegetarian',
      desc: 'Crispy lettuce, peppers, Kalamata olives, authentic feta cheese, crunchy garlic and rosemary croutons.',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 2,
      category: 'Starters',
      title: 'Bruschetta',
      price: '$5.99',
      tag: 'Vegetarian',
      desc: 'Grilled artisanal bread rubbed with fresh garlic, topped with vine-ripened tomatoes, basil, and extra virgin olive oil.',
      image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 3,
      category: 'Mains',
      title: 'Mediterranean Grilled Steak',
      price: '$24.99',
      tag: 'Chef Special',
      desc: 'Prime ribeye seasoned with wild Mediterranean herbs, served with charred lemon, rosemary potatoes, and chimichurri.',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 4,
      category: 'Mains',
      title: 'Grilled Salmon with Asparagus',
      price: '$21.50',
      tag: 'Gluten-Free',
      desc: 'Pan-seared Atlantic salmon fillet glazed with lemon-dill butter, accompanied by roasted asparagus spears.',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 5,
      category: 'Desserts',
      title: 'Lemon Dessert',
      price: '$5.00',
      tag: 'House Special',
      desc: 'Authentic layered lemon curd tart with sweet flaky crust and dusted confectioner sugar from grandma’s recipe.',
      image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 6,
      category: 'Desserts',
      title: 'Baklava',
      price: '$6.50',
      tag: 'Vegetarian',
      desc: 'Crisp layers of golden filo pastry packed with crushed walnuts and pistachios, soaked in fragrant wildflower honey.',
      image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 7,
      category: 'Beverages',
      title: 'Sparkling Lemon Rosemary Soda',
      price: '$4.50',
      tag: 'Organic',
      desc: 'Fresh squeezed Sicilian lemons infused with mountain rosemary and chilled sparkling water.',
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80',
    },
  ];

  const categories = ['All', 'Starters', 'Mains', 'Desserts', 'Beverages'];

  const filteredItems =
    activeCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="menu-page-view">
      <section className="menu-hero-banner">
        <div className="container">
          <h1>Little Lemon Menu</h1>
          <p>
            Traditional Mediterranean recipes prepared daily with locally sourced ingredients.
          </p>
        </div>
      </section>

      <section className="menu-content-section">
        <div className="container">
          {/* Category Filter Pills */}
          <div className="menu-category-filters" role="tablist" aria-label="Menu Categories">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`btn-category-filter ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
                role="tab"
                aria-selected={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="menu-items-grid">
            {filteredItems.map((dish) => (
              <article key={dish.id} className="menu-dish-card">
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="menu-dish-img"
                  loading="lazy"
                />
                <div className="menu-dish-details">
                  <div className="dish-header-row">
                    <h3>{dish.title}</h3>
                    <span className="price-tag">{dish.price}</span>
                  </div>
                  <span className="dish-tag-badge">{dish.tag}</span>
                  <p className="dish-desc">{dish.desc}</p>
                  <Link to="/order-online" className="btn-order-dish">
                    Order for Delivery &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default MenuPage;
