import { useState } from 'react';

function BookingForm({
  formData,
  setFormData,
  availableTimes = [],
  dispatch,
  submitForm,
}) {
  const [localFormData, setLocalFormData] = useState({
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

  const [touched, setTouched] = useState({});

  // Use passed formData if provided, otherwise fallback to localFormData
  const data = formData && Object.keys(formData).length > 0 ? formData : localFormData;
  const updateData = setFormData || setLocalFormData;

  const handleBlur = (field) => {
    setTouched((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'date' && dispatch) {
      dispatch({ type: 'UPDATE_TIMES', date: value });
    }
  };

  const handleSeatingSelect = (preference) => {
    updateData((prev) => ({
      ...prev,
      seating: preference,
    }));
  };

  // Client-Side Validation Rules
  const isDateValid = Boolean(data.date);
  const isTimeValid = Boolean(data.time);
  const isGuestsValid =
    Number(data.guests) >= 1 && Number(data.guests) <= 20;
  const isFirstNameValid =
    Boolean(data.firstName) && data.firstName.trim().length >= 2;
  const isLastNameValid =
    Boolean(data.lastName) && data.lastName.trim().length >= 2;
  const isEmailValid =
    Boolean(data.email) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
  const isPhoneValid =
    Boolean(data.phone) &&
    data.phone.replace(/\D/g, '').length >= 10;

  const isFormValid =
    isDateValid &&
    isTimeValid &&
    isGuestsValid &&
    isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isPhoneValid;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      setTouched({
        date: true,
        time: true,
        guests: true,
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
      });
      return;
    }

    if (submitForm) {
      submitForm(data);
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <form
      className="reservation-form"
      onSubmit={handleSubmit}
      aria-label="Table Reservation Form"
      noValidate
    >
      {/* 1. Reservation Details Group */}
      <fieldset className="form-section-group">
        <legend className="form-section-title">Reservation Details</legend>

        <div className="form-row-2">
          {/* Date Input with HTML5 & Client-Side Validation */}
          <div className="form-field">
            <label htmlFor="res-date">Choose date</label>
            <input
              type="date"
              id="res-date"
              name="date"
              min={today}
              value={data.date || ''}
              onChange={handleInputChange}
              onBlur={() => handleBlur('date')}
              required
              aria-required="true"
              aria-invalid={touched.date && !isDateValid}
              aria-describedby={
                touched.date && !isDateValid ? 'date-error' : undefined
              }
            />
            {touched.date && !isDateValid && (
              <span id="date-error" className="error-message" role="alert">
                Please select a valid date.
              </span>
            )}
          </div>

          {/* Time Select with HTML5 & Client-Side Validation */}
          <div className="form-field">
            <label htmlFor="res-time">Choose time</label>
            <select
              id="res-time"
              name="time"
              value={data.time || ''}
              onChange={handleInputChange}
              onBlur={() => handleBlur('time')}
              required
              aria-required="true"
              aria-invalid={touched.time && !isTimeValid}
              aria-describedby={
                touched.time && !isTimeValid ? 'time-error' : undefined
              }
            >
              {availableTimes.length > 0 ? (
                availableTimes.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))
              ) : (
                <>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                  <option value="21:00">21:00</option>
                </>
              )}
            </select>
            {touched.time && !isTimeValid && (
              <span id="time-error" className="error-message" role="alert">
                Please select a reservation time.
              </span>
            )}
          </div>
        </div>

        <div className="form-row-2">
          {/* Guests Input with HTML5 & Client-Side Validation */}
          <div className="form-field">
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="20"
              id="guests"
              name="guests"
              value={data.guests || ''}
              onChange={handleInputChange}
              onBlur={() => handleBlur('guests')}
              required
              aria-required="true"
              aria-invalid={touched.guests && !isGuestsValid}
              aria-describedby={
                touched.guests && !isGuestsValid ? 'guests-error' : undefined
              }
            />
            {touched.guests && !isGuestsValid && (
              <span id="guests-error" className="error-message" role="alert">
                Number of guests must be between 1 and 20.
              </span>
            )}
          </div>

          {/* Occasion Select */}
          <div className="form-field">
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              name="occasion"
              value={data.occasion || 'Birthday'}
              onChange={handleInputChange}
            >
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Engagement">Engagement</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Seating Preference Toggle Buttons (from Group 24 Wireframe) */}
        <div className="form-field">
          <label className="field-label">Seating Preference</label>
          <div
            className="seating-toggle-group"
            role="radiogroup"
            aria-label="Seating Preference"
          >
            <button
              type="button"
              className={`btn-seating ${data.seating === 'Indoor' ? 'active' : ''}`}
              onClick={() => handleSeatingSelect('Indoor')}
              role="radio"
              aria-checked={data.seating === 'Indoor'}
            >
              Indoor
            </button>
            <button
              type="button"
              className={`btn-seating ${data.seating === 'Outdoor' ? 'active' : ''}`}
              onClick={() => handleSeatingSelect('Outdoor')}
              role="radio"
              aria-checked={data.seating === 'Outdoor'}
            >
              Outdoor
            </button>
          </div>
        </div>

        {/* Special Requests */}
        <div className="form-field">
          <label htmlFor="special-requests">Special Requests</label>
          <textarea
            id="special-requests"
            name="specialRequests"
            rows="3"
            placeholder="Any dietary requirements, accessibility needs, celebrations..."
            value={data.specialRequests || ''}
            onChange={handleInputChange}
          ></textarea>
        </div>
      </fieldset>

      {/* 2. Guest & Contact Details Group (from Group 24 Wireframe) */}
      <fieldset className="form-section-group">
        <legend className="form-section-title">Guest &amp; Contact Details</legend>

        <div className="form-row-2">
          {/* First Name with Client-Side Validation */}
          <div className="form-field">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              name="firstName"
              placeholder="Enter first name"
              value={data.firstName || ''}
              onChange={handleInputChange}
              onBlur={() => handleBlur('firstName')}
              required
              aria-required="true"
              aria-invalid={touched.firstName && !isFirstNameValid}
              aria-describedby={
                touched.firstName && !isFirstNameValid
                  ? 'first-name-error'
                  : undefined
              }
            />
            {touched.firstName && !isFirstNameValid && (
              <span id="first-name-error" className="error-message" role="alert">
                First name must be at least 2 characters.
              </span>
            )}
          </div>

          {/* Last Name with Client-Side Validation */}
          <div className="form-field">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              name="lastName"
              placeholder="Enter last name"
              value={data.lastName || ''}
              onChange={handleInputChange}
              onBlur={() => handleBlur('lastName')}
              required
              aria-required="true"
              aria-invalid={touched.lastName && !isLastNameValid}
              aria-describedby={
                touched.lastName && !isLastNameValid ? 'last-name-error' : undefined
              }
            />
            {touched.lastName && !isLastNameValid && (
              <span id="last-name-error" className="error-message" role="alert">
                Last name must be at least 2 characters.
              </span>
            )}
          </div>
        </div>

        <div className="form-row-2">
          {/* Email with Client-Side Validation */}
          <div className="form-field">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
              value={data.email || ''}
              onChange={handleInputChange}
              onBlur={() => handleBlur('email')}
              required
              aria-required="true"
              aria-invalid={touched.email && !isEmailValid}
              aria-describedby={
                touched.email && !isEmailValid ? 'email-error' : undefined
              }
            />
            {touched.email && !isEmailValid && (
              <span id="email-error" className="error-message" role="alert">
                Please enter a valid email address.
              </span>
            )}
          </div>

          {/* Phone with Client-Side Validation */}
          <div className="form-field">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+1 (000) 000-0000"
              value={data.phone || ''}
              onChange={handleInputChange}
              onBlur={() => handleBlur('phone')}
              required
              aria-required="true"
              aria-invalid={touched.phone && !isPhoneValid}
              aria-describedby={
                touched.phone && !isPhoneValid ? 'phone-error' : undefined
              }
            />
            {touched.phone && !isPhoneValid && (
              <span id="phone-error" className="error-message" role="alert">
                Please enter a valid phone number (at least 10 digits).
              </span>
            )}
          </div>
        </div>
      </fieldset>

      {/* 3. Submit Button (Disabled when form is invalid) */}
      <div className="form-submit-group">
        <input
          type="submit"
          value="Make Your reservation"
          className="btn-confirm-reservation"
          aria-label="On Click"
          disabled={!isFormValid}
        />
        <p className="cancellation-policy-note">
          By confirming you agree to our cancellation policy. We hold your table for 15 minutes.
        </p>
      </div>
    </form>
  );
}

export default BookingForm;
