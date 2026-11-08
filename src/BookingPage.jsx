import { useState } from 'react';
import BookingForm from './BookingForm';
import ReservationSummary from './ReservationSummary';
import FindUs from './FindUs';
import heroImg from './assets/hero.png';

function BookingPage({ availableTimes, dispatch, submitForm }) {
  const [formData, setFormData] = useState({
    date: '',
    time: availableTimes[0] || '17:00',
    guests: 2,
    occasion: 'Birthday',
    seating: 'Indoor',
    specialRequests: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  return (
    <div className="booking-page-view">
      {/* Hero Banner matching Group 24 wireframe */}
      <section className="booking-hero-banner">
        <div className="container">
          <div className="booking-hero-grid">
            <div className="booking-hero-text">
              <h1 className="hero-brand-name">Little Lemon</h1>
              <h2 className="hero-location-name">Chicago</h2>
              <p className="hero-tagline">
                Reserve your table online &ndash; quick, easy and confirmed instantly.
              </p>
            </div>
            <div className="booking-hero-img-box">
              <img
                src={heroImg}
                alt="Little Lemon Restaurant Interior"
                className="booking-hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Reservation Section */}
      <section className="reservation-main-section">
        <div className="container">
          <div className="section-header-bar">
            <h2 className="main-section-title">Table Reservation</h2>
          </div>

          <div className="reservation-layout-grid">
            {/* Form Column */}
            <div className="reservation-form-col">
              <BookingForm
                formData={formData}
                setFormData={setFormData}
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm}
              />
            </div>

            {/* Summary Preview Column */}
            <div className="reservation-summary-col">
              <ReservationSummary formData={formData} />
            </div>
          </div>
        </div>
      </section>

      {/* Find Us Section matching Group 24 wireframe */}
      <FindUs />
    </div>
  );
}

export default BookingPage;
