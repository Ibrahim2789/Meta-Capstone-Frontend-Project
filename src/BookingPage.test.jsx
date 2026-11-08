import { render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import BookingPage from './BookingPage';

describe('BookingPage (Bookings) Component', () => {
  const mockTimes = ['17:00', '18:00', '19:00', '20:00'];

  // Question 1: Did you test for some static text being rendered in the Bookings component?
  test('Renders static text in the Bookings/BookingPage component', () => {
    render(
      <BookingPage
        availableTimes={mockTimes}
        dispatch={vi.fn()}
        submitForm={vi.fn()}
      />
    );

    // Static text in Hero banner
    expect(
      screen.getByRole('heading', { level: 1, name: /little lemon/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /reserve your table online – quick, easy and confirmed instantly/i
      )
    ).toBeInTheDocument();

    // Static text in Table Reservation header
    expect(
      screen.getByRole('heading', { level: 2, name: /table reservation/i })
    ).toBeInTheDocument();

    // Static text in Find Us section
    expect(
      screen.getByRole('heading', { level: 2, name: /find us/i })
    ).toBeInTheDocument();
    expect(screen.getByText('263 W. Ontario St.')).toBeInTheDocument();
  });
});
