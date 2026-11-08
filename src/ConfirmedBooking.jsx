import { Link } from 'react-router-dom';

function ConfirmedBooking({ bookingData, allBookings = [] }) {
  // If user accesses directly or has a freshly confirmed booking
  const bookingsList =
    allBookings.length > 0
      ? allBookings
      : bookingData
      ? [bookingData]
      : [];

  return (
    <div className="confirmed-booking-page">
      <div className="container">
        <div className="confirmation-card">
          <div className="success-icon" aria-hidden="true">✓</div>
          <h1>Booking Confirmed!</h1>
          <h2>Your reservation at Little Lemon is set.</h2>
          <p className="confirmation-intro">
            A confirmation receipt and reminders have been sent to your email. We look forward to welcoming you!
          </p>

          {bookingData && bookingData.date && (
            <div className="confirmed-details-box">
              <div className="detail-item">
                <span className="label">Reservation ID:</span>
                <span className="value">{bookingData.id || 'LL-2026'}</span>
              </div>
              <div className="detail-item">
                <span className="label">Guest:</span>
                <span className="value">
                  {bookingData.firstName} {bookingData.lastName}
                </span>
              </div>
              <div className="detail-item">
                <span className="label">Date:</span>
                <span className="value">{bookingData.date}</span>
              </div>
              <div className="detail-item">
                <span className="label">Time:</span>
                <span className="value">{bookingData.time}</span>
              </div>
              <div className="detail-item">
                <span className="label">Guests:</span>
                <span className="value">{bookingData.guests}</span>
              </div>
              <div className="detail-item">
                <span className="label">Seating:</span>
                <span className="value">{bookingData.seating || 'Indoor'}</span>
              </div>
              <div className="detail-item">
                <span className="label">Occasion:</span>
                <span className="value">{bookingData.occasion || 'None'}</span>
              </div>
              <div className="detail-item">
                <span className="label">Contact:</span>
                <span className="value">{bookingData.email}</span>
              </div>
            </div>
          )}

          {/* Table showing all bookingData stored in state / localStorage */}
          {bookingsList.length > 0 && (
            <div className="bookings-table-section">
              <h3>Your Bookings Log</h3>
              <div className="table-responsive">
                <table className="bookings-data-table" aria-label="Bookings Summary Table">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Date</th>
                      <th scope="col">Time</th>
                      <th scope="col">Guests</th>
                      <th scope="col">Occasion</th>
                      <th scope="col">Seating</th>
                      <th scope="col">Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookingsList.map((item, idx) => (
                      <tr key={item.id || idx}>
                        <td>{item.id || `LL-${idx + 1}`}</td>
                        <td>{item.date}</td>
                        <td>{item.time}</td>
                        <td>{item.guests}</td>
                        <td>{item.occasion}</td>
                        <td>{item.seating || 'Indoor'}</td>
                        <td>
                          {item.firstName} {item.lastName}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="confirmation-actions">
            <Link to="/reservations" className="btn-secondary-action">
              Reserve Another Table
            </Link>
            <Link to="/" className="btn-primary">
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmedBooking;
