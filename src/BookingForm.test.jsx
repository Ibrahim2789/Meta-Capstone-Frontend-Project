import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, test, expect, vi } from 'vitest';
import BookingForm from './BookingForm';

describe('BookingForm Component & Validation', () => {
  const mockTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
  const validFormData = {
    date: '2026-11-20',
    time: '18:00',
    guests: 4,
    occasion: 'Birthday',
    seating: 'Indoor',
    specialRequests: '',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '5551234567',
  };

  const invalidFormData = {
    date: '',
    time: '',
    guests: 0,
    occasion: 'Birthday',
    seating: 'Indoor',
    specialRequests: '',
    firstName: '',
    lastName: '',
    email: 'invalid-email',
    phone: '123',
  };

  // Test static text and labels
  test('Renders static text, fieldset legends, and labels', () => {
    render(
      <BookingForm
        formData={validFormData}
        setFormData={vi.fn()}
        availableTimes={mockTimes}
        dispatch={vi.fn()}
        submitForm={vi.fn()}
      />
    );

    expect(screen.getByText('Reservation Details')).toBeInTheDocument();
    expect(screen.getByText('Guest & Contact Details')).toBeInTheDocument();
    expect(screen.getByText('Choose date')).toBeInTheDocument();
    expect(screen.getByText('Choose time')).toBeInTheDocument();
    expect(screen.getByText('Number of guests')).toBeInTheDocument();
    expect(screen.getByText('Occasion')).toBeInTheDocument();
    expect(screen.getByText('Seating Preference')).toBeInTheDocument();
  });

  // Step 1: Validate HTML5 validation is applied to each input field
  describe('HTML5 Validation Attributes on Form Input Fields', () => {
    it('applies correct HTML5 attributes to date input', () => {
      render(
        <BookingForm
          formData={validFormData}
          setFormData={vi.fn()}
          availableTimes={mockTimes}
        />
      );
      const dateInput = screen.getByLabelText(/choose date/i);
      expect(dateInput).toHaveAttribute('type', 'date');
      expect(dateInput).toBeRequired();
      expect(dateInput).toHaveAttribute('min');
    });

    it('applies correct HTML5 attributes to time select', () => {
      render(
        <BookingForm
          formData={validFormData}
          setFormData={vi.fn()}
          availableTimes={mockTimes}
        />
      );
      const timeSelect = screen.getByLabelText(/choose time/i);
      expect(timeSelect).toBeRequired();
    });

    it('applies correct HTML5 attributes to number of guests input', () => {
      render(
        <BookingForm
          formData={validFormData}
          setFormData={vi.fn()}
          availableTimes={mockTimes}
        />
      );
      const guestsInput = screen.getByLabelText(/number of guests/i);
      expect(guestsInput).toHaveAttribute('type', 'number');
      expect(guestsInput).toHaveAttribute('min', '1');
      expect(guestsInput).toHaveAttribute('max', '20');
      expect(guestsInput).toBeRequired();
    });

    it('applies correct HTML5 attributes to guest contact fields', () => {
      render(
        <BookingForm
          formData={validFormData}
          setFormData={vi.fn()}
          availableTimes={mockTimes}
        />
      );
      const firstNameInput = screen.getByLabelText(/first name/i);
      expect(firstNameInput).toHaveAttribute('type', 'text');
      expect(firstNameInput).toBeRequired();

      const lastNameInput = screen.getByLabelText(/last name/i);
      expect(lastNameInput).toHaveAttribute('type', 'text');
      expect(lastNameInput).toBeRequired();

      const emailInput = screen.getByLabelText(/email address/i);
      expect(emailInput).toHaveAttribute('type', 'email');
      expect(emailInput).toBeRequired();

      const phoneInput = screen.getByLabelText(/phone number/i);
      expect(phoneInput).toHaveAttribute('type', 'tel');
      expect(phoneInput).toBeRequired();
    });
  });

  // Step 2: Add unit tests for JavaScript validation functions (valid & invalid states)
  describe('JavaScript Client-Side Validation Functions', () => {
    it('disables the submit button when the form state is invalid', () => {
      render(
        <BookingForm
          formData={invalidFormData}
          setFormData={vi.fn()}
          availableTimes={mockTimes}
          submitForm={vi.fn()}
        />
      );

      const submitButton = screen.getByRole('button', {
        name: /on click/i,
      });
      expect(submitButton).toBeDisabled();
    });

    it('enables the submit button when all form fields are valid', () => {
      render(
        <BookingForm
          formData={validFormData}
          setFormData={vi.fn()}
          availableTimes={mockTimes}
          submitForm={vi.fn()}
        />
      );

      const submitButton = screen.getByRole('button', {
        name: /on click/i,
      });
      expect(submitButton).not.toBeDisabled();
    });

    it('displays client-side error message when date is blurred and invalid', () => {
      render(
        <BookingForm
          formData={{ ...invalidFormData, date: '' }}
          setFormData={vi.fn()}
          availableTimes={mockTimes}
        />
      );

      const dateInput = screen.getByLabelText(/choose date/i);
      fireEvent.blur(dateInput);

      expect(screen.getByText(/please select a valid date/i)).toBeInTheDocument();
    });

    it('displays client-side error message when guests count is blurred and invalid', () => {
      render(
        <BookingForm
          formData={{ ...validFormData, guests: 0 }}
          setFormData={vi.fn()}
          availableTimes={mockTimes}
        />
      );

      const guestsInput = screen.getByLabelText(/number of guests/i);
      fireEvent.blur(guestsInput);

      expect(
        screen.getByText(/number of guests must be between 1 and 20/i)
      ).toBeInTheDocument();
    });

    it('displays client-side error message when email is blurred and invalid', () => {
      render(
        <BookingForm
          formData={{ ...validFormData, email: 'bademail' }}
          setFormData={vi.fn()}
          availableTimes={mockTimes}
        />
      );

      const emailInput = screen.getByLabelText(/email address/i);
      fireEvent.blur(emailInput);

      expect(
        screen.getByText(/please enter a valid email address/i)
      ).toBeInTheDocument();
    });

    it('submits successfully when user clicks submit button with valid data', () => {
      const handleSubmit = vi.fn();
      render(
        <BookingForm
          formData={validFormData}
          setFormData={vi.fn()}
          availableTimes={mockTimes}
          submitForm={handleSubmit}
        />
      );

      const submitButton = screen.getByRole('button', {
        name: /on click/i,
      });
      expect(submitButton).not.toBeDisabled();
      fireEvent.click(submitButton);

      expect(handleSubmit).toHaveBeenCalledTimes(1);
      expect(handleSubmit).toHaveBeenCalledWith(validFormData);
    });

    it('dispatches UPDATE_TIMES when date input is changed', () => {
      const handleDispatch = vi.fn();
      render(
        <BookingForm
          formData={validFormData}
          setFormData={vi.fn()}
          availableTimes={mockTimes}
          dispatch={handleDispatch}
        />
      );

      const dateInput = screen.getByLabelText(/choose date/i);
      fireEvent.change(dateInput, {
        target: { name: 'date', value: '2026-11-28' },
      });

      expect(handleDispatch).toHaveBeenCalledWith({
        type: 'UPDATE_TIMES',
        date: '2026-11-28',
      });
    });
  });
});
