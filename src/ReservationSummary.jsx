function ReservationSummary({ formData, reservationId = 'LL-2026' }) {
  const { date, time, guests, occasion, seating } = formData;

  const formatDate = (dateStr) => {
    if (!dateStr) return '--';
    const [year, month, day] = dateStr.split('-');
    return `${day} / ${month} / ${year}`;
  };

  return (
    <aside className="reservation-summary-card" aria-label="Reservation Summary Preview">
      <div className="summary-header">
        <h3>Your Reservation</h3>
      </div>

      <div className="summary-body">
        <div className="summary-row">
          <span className="summary-label">Date</span>
          <span className="summary-value">{formatDate(date)}</span>
        </div>

        <div className="summary-row">
          <span className="summary-label">Time</span>
          <span className="summary-value">{time || '--'}</span>
        </div>

        <div className="summary-row">
          <span className="summary-label">Guests</span>
          <span className="summary-value">{guests || '--'}</span>
        </div>

        <div className="summary-row">
          <span className="summary-label">Occasion</span>
          <span className="summary-value">{occasion || '--'}</span>
        </div>

        <hr className="summary-divider" />

        <div className="summary-row">
          <span className="summary-label">Seating</span>
          <span className="summary-value">{seating || '--'}</span>
        </div>

        <p className="summary-welcome-text">We look forward to welcoming you!</p>
      </div>

      <div className="summary-footer">
        <span className="summary-id">
          Reservation ID: {date && time ? reservationId : '--'}
        </span>
      </div>
    </aside>
  );
}

export default ReservationSummary;
