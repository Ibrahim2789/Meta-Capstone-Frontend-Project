import { useState } from 'react';

function OrderOnlinePage() {
  const [orderType, setOrderType] = useState('Delivery');
  const [cart, setCart] = useState([]);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const items = [
    { id: 1, name: 'Greek Salad', price: 12.99, image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=300&q=80' },
    { id: 2, name: 'Bruschetta', price: 5.99, image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=300&q=80' },
    { id: 3, name: 'Lemon Dessert', price: 5.00, image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=300&q=80' },
    { id: 4, name: 'Grilled Steak Platter', price: 24.99, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=300&q=80' },
  ];

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0)
    );
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = orderType === 'Delivery' ? 3.5 : 0;
  const total = subtotal > 0 ? subtotal + deliveryFee : 0;

  return (
    <div className="order-online-view">
      <section className="order-hero-banner">
        <div className="container">
          <h1>Order Online</h1>
          <p>Fresh Mediterranean favorites delivered to your door in Chicago.</p>
        </div>
      </section>

      <section className="order-content-section">
        <div className="container">
          <div className="order-layout-grid">
            {/* Left: Food Selection */}
            <div className="order-items-col">
              <div className="order-type-switch" role="radiogroup" aria-label="Order Type">
                <button
                  type="button"
                  className={`btn-order-type ${orderType === 'Delivery' ? 'active' : ''}`}
                  onClick={() => setOrderType('Delivery')}
                >
                  🛵 Delivery (35-45 min)
                </button>
                <button
                  type="button"
                  className={`btn-order-type ${orderType === 'Pickup' ? 'active' : ''}`}
                  onClick={() => setOrderType('Pickup')}
                >
                  🥡 Pickup (15-20 min)
                </button>
              </div>

              <div className="order-cards-list">
                {items.map((item) => (
                  <article key={item.id} className="order-item-card">
                    <img src={item.image} alt={item.name} className="order-item-thumb" />
                    <div className="order-item-info">
                      <h4>{item.name}</h4>
                      <span className="price-tag">${item.price.toFixed(2)}</span>
                    </div>
                    <button
                      type="button"
                      className="btn-add-item"
                      onClick={() => addToCart(item)}
                      aria-label={`Add ${item.name} to cart`}
                    >
                      + Add
                    </button>
                  </article>
                ))}
              </div>
            </div>

            {/* Right: Cart & Checkout Summary */}
            <aside className="order-cart-col">
              <div className="cart-card">
                <h3>Your Order</h3>
                {orderSubmitted ? (
                  <div className="order-success-msg">
                    <p>🎉 Your order has been received!</p>
                    <p>Estimated {orderType}: 35 minutes.</p>
                  </div>
                ) : (
                  <>
                    {cart.length === 0 ? (
                      <p className="empty-cart-text">Your cart is currently empty. Add items from the menu!</p>
                    ) : (
                      <ul className="cart-items-list">
                        {cart.map((i) => (
                          <li key={i.id} className="cart-row">
                            <span className="cart-item-name">{i.name}</span>
                            <div className="cart-qty-controls">
                              <button type="button" onClick={() => removeFromCart(i.id)}>-</button>
                              <span>{i.quantity}</span>
                              <button type="button" onClick={() => addToCart(i)}>+</button>
                            </div>
                            <span className="cart-item-total">
                              ${(i.price * i.quantity).toFixed(2)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="cart-calc-box">
                      <div className="calc-row">
                        <span>Subtotal:</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      {orderType === 'Delivery' && (
                        <div className="calc-row">
                          <span>Delivery Fee:</span>
                          <span>${deliveryFee.toFixed(2)}</span>
                        </div>
                      )}
                      <div className="calc-row total-row">
                        <strong>Total:</strong>
                        <strong>${total.toFixed(2)}</strong>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="btn-primary btn-checkout"
                      disabled={cart.length === 0}
                      onClick={() => setOrderSubmitted(true)}
                    >
                      Place {orderType} Order
                    </button>
                  </>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OrderOnlinePage;
