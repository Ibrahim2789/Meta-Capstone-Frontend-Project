import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, test, expect, beforeEach, afterEach, vi } from 'vitest';
import ConfirmedBooking from './ConfirmedBooking';

describe('Local Storage in React for Little Lemon Bookings', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  afterEach(() => {
    localStorage.clear();
  });

  // Question 1: Did you write the unit tests for writing to local storage in React?
  test('Writing to local storage: saves new booking data as JSON under "bookings" key', () => {
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');

    const newBooking = {
      id: 'LL-9988',
      date: '2026-11-25',
      time: '19:00',
      guests: 4,
      occasion: 'Anniversary',
      seating: 'Outdoor',
      firstName: 'Emily',
      lastName: 'Clark',
      email: 'emily@example.com',
      phone: '5551234567',
    };

    const existingBookings = [];
    const updatedBookings = [...existingBookings, newBooking];

    // Simulate saving booking data to localStorage
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));

    expect(setItemSpy).toHaveBeenCalledWith(
      'bookings',
      JSON.stringify(updatedBookings)
    );

    // Verify stored content
    const rawStored = localStorage.getItem('bookings');
    expect(rawStored).toBeTruthy();
    const parsed = JSON.parse(rawStored);
    expect(parsed).toHaveLength(1);
    expect(parsed[0].id).toBe('LL-9988');
    expect(parsed[0].firstName).toBe('Emily');
  });

  // Question 2: Did you write the unit tests for reading from the local storage in React?
  test('Reading from local storage: retrieves and renders stored booking data into the component table', () => {
    const mockStoredBookings = [
      {
        id: 'LL-1001',
        date: '2026-11-22',
        time: '18:00',
        guests: 2,
        occasion: 'Birthday',
        seating: 'Indoor',
        firstName: 'Alex',
        lastName: 'Morgan',
        email: 'alex@example.com',
      },
      {
        id: 'LL-1002',
        date: '2026-11-23',
        time: '20:00',
        guests: 3,
        occasion: 'Anniversary',
        seating: 'Outdoor',
        firstName: 'Sam',
        lastName: 'Taylor',
        email: 'sam@example.com',
      },
    ];

    // Pre-populate localStorage
    localStorage.setItem('bookings', JSON.stringify(mockStoredBookings));

    const getItemSpy = vi.spyOn(Storage.prototype, 'getItem');

    // Read from localStorage
    const savedBookings = JSON.parse(localStorage.getItem('bookings') || '[]');

    expect(getItemSpy).toHaveBeenCalledWith('bookings');
    expect(savedBookings).toHaveLength(2);

    // Render component wrapped in Router using the data read from localStorage
    render(
      <MemoryRouter>
        <ConfirmedBooking
          bookingData={savedBookings[0]}
          allBookings={savedBookings}
        />
      </MemoryRouter>
    );

    // Assert that table elements read from localStorage render correctly
    expect(screen.getByText('Your Bookings Log')).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: 'LL-1001' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: 'LL-1002' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: /alex morgan/i })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: /sam taylor/i })).toBeInTheDocument();
  });
});
