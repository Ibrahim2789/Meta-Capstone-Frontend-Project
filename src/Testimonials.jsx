function Testimonials() {
  const reviews = [
    {
      id: 1,
      rating: 5,
      name: 'Sara M.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
      comment: 'The Greek Salad was fresh and authentic. The best Mediterranean food in Chicago!',
    },
    {
      id: 2,
      rating: 5,
      name: 'John D.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      comment: 'Loved the ambiance and easy online table reservation. The Bruschetta is a must-try.',
    },
    {
      id: 3,
      rating: 5,
      name: 'Elena R.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      comment: 'Super fast confirmation and the Lemon Dessert was incredible. Will come back often!',
    },
    {
      id: 4,
      rating: 5,
      name: 'Michael T.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      comment: 'A true Chicago gem! Outstanding hospitality, fresh ingredients and warm vibes.',
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="testimonials-title">Testimonials</h2>
        <div className="testimonials-grid">
          {reviews.map((review) => (
            <article key={review.id} className="testimonial-card">
              <div className="rating-stars" aria-label={`${review.rating} out of 5 stars`}>
                {'★'.repeat(review.rating)}
              </div>
              <div className="user-profile">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="user-avatar"
                  loading="lazy"
                />
                <h4 className="user-name">{review.name}</h4>
              </div>
              <p className="user-comment">"{review.comment}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
