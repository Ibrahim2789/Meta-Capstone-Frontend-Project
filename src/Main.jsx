import { useReducer, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import MenuPage from './MenuPage';
import OrderOnlinePage from './OrderOnlinePage';
import LoginPage from './LoginPage';
import ScrollToTop from './ScrollToTop';
import { submitAPI } from './api';
import { initializeTimes, updateTimes } from './bookingTimesReducer';

function Main() {
  const navigate = useNavigate();

  // State lifted up to Main component with useReducer
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  // Persistent bookings in localStorage
  const [bookings, setBookings] = useState(() => {
    try {
      const saved = localStorage.getItem('bookings');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [confirmedBooking, setConfirmedBooking] = useState(null);

  // Submit form handler utilizing submitAPI and saving to localStorage
  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      const newBooking = {
        ...formData,
        id: `LL-${Date.now().toString().slice(-4)}`,
        submittedAt: new Date().toLocaleDateString(),
      };

      const updatedBookings = [...bookings, newBooking];
      setBookings(updatedBookings);

      try {
        localStorage.setItem('bookings', JSON.stringify(updatedBookings));
      } catch (e) {
        console.error('Failed to save to localStorage:', e);
      }

      setConfirmedBooking(newBooking);
      navigate('/confirmed');
    }
  };

  return (
    <main className="main-content" role="main">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/reservations"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route
          path="/confirmed"
          element={
            <ConfirmedBooking
              bookingData={confirmedBooking}
              allBookings={bookings}
            />
          }
        />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/order-online" element={<OrderOnlinePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </main>
  );
}

export default Main;
