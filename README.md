# Little Lemon Restaurant — Meta Front-End Developer Capstone Project

A modern, responsive, and accessible web application for **Little Lemon**, a family-owned Mediterranean restaurant based in Chicago. Built with **React 19**, **Vite**, and **React Router**, following semantic HTML5 best practices, WCAG accessibility guidelines, and the project wireframes (`Capstone Project` and `Group 24`).

---

## 🍋 Features

- **Semantic HTML5 & Accessible Landmarks**: Structured with `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<address>`, and `<footer>`.
- **Responsive Layout (Mobile-First)**: Fluid column grids and flexbox layouts that adapt seamlessly across Mobile (< 768px), Tablet (768px – 1024px), and Desktop (> 1024px).
- **Branding & Design System**: Styled according to the Little Lemon style guide with primary green (`#495E57`), lemon yellow (`#F4CE14`), salmon (`#EE9972`), dark charcoal (`#222222`), and deep burgundy (`#5A1017`).
- **Wireframe Compliance**:
  - **Homepage (`Capstone Project.png`)**: Hero banner with CTA, Weekly Specials with delivery links, Customer Testimonials with ratings, and an About section featuring founders Mario and Adrian.
  - **Table Reservation (`Group 24.png`)**: 2-column layout with comprehensive reservation details, guest contact inputs, seating preference toggle (Indoor/Outdoor), and a **live-updating reservation summary card**.
  - **Find Us Section**: Location card with styled Chicago map pin marker, business hours, and direct contact links.
- **Dynamic State Management (`useReducer`)**:
  - `initializeTimes`: Fetches available time slots for the current date.
  - `updateTimes`: Dynamically updates available reservation time slots when the user selects a new date.
  - Integrated with the official Coursera Capstone API script (`fetchAPI` and `submitAPI`).
- **Client-Side Form Validation**:
  - HTML5 constraints (`required`, `min`, `max`, `type="date"`, `type="email"`, etc.).
  - Real-time React validation with inline error messaging on touched/blurred fields.
  - Submission button disabled until all mandatory fields are valid.
- **Local Storage Persistence**:
  - Submitted reservations are automatically stored in `localStorage`.
  - Stored bookings are retrieved and displayed in an interactive **Your Bookings Log** table on the booking confirmation screen.
- **Accessibility & ARIA**:
  - `aria-label="On Click"` on the reservation submit button.
  - Form inputs explicitly labeled with `htmlFor` matching input `id` attributes.
  - Inline error alerts (`role="alert"`), `aria-required`, `aria-invalid`, and `aria-describedby` associations.
  - Radio group semantics on seating preference buttons (`role="radiogroup"`, `role="radio"`, `aria-checked`).

---

## 🧪 Unit Testing

Comprehensive test suites implemented with **Vitest** and **React Testing Library**:

1. **`BookingForm.test.jsx`**:
   - Static labels and heading text rendering.
   - HTML5 validation attribute enforcement on all inputs.
   - Client-side validation inline error display upon blur.
   - Submit button disabled when invalid, enabled when valid.
   - Successful form submission callback execution.
   - Date change dispatching `UPDATE_TIMES`.
2. **`BookingPage.test.jsx`**:
   - Static text verification on the Bookings page (hero, section headers, address).
3. **`bookingTimes.test.js`**:
   - `initializeTimes` returning non-empty arrays from `fetchAPI`.
   - `updateTimes` returning updated times for pre-selected dates.
4. **`localStorage.test.jsx`**:
   - Writing reservation data to `localStorage`.
   - Reading and rendering saved bookings into the DOM table.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm

### Installation

```bash
cd meta-capstone-project
npm install
```

### Running the App Locally

```bash
npm start
# or: npm run dev
```

Open your browser and navigate to **`http://localhost:3000`**.

### Running the Unit Tests

```bash
npm test
```

### Running Lint Checks

```bash
npm run lint
```

### Production Build

```bash
npm run build
```
The compiled production assets will be output to the `dist/` folder.

---

## 📁 Project Structure

```
meta-capstone-project/
├── public/
│   ├── Logo.png                   # Little Lemon favicon & preview image
│   └── hero.png                   # Mediterranean cuisine imagery
├── src/
│   ├── assets/
│   │   ├── Logo.png               # Official Little Lemon brand logo
│   │   └── hero.png               # Hero banner culinary dish
│   ├── api.js                     # Coursera API wrapper (fetchAPI & submitAPI)
│   ├── bookingTimesReducer.js     # initializeTimes & updateTimes reducer
│   ├── Navbar.jsx                 # Top navigation bar with logo & login button
│   ├── HomePage.jsx               # Hero, Specials, Testimonials & About
│   ├── Specials.jsx               # Weekly specials food cards
│   ├── Testimonials.jsx           # Customer reviews with ratings
│   ├── About.jsx                  # Founders Mario & Adrian story
│   ├── BookingPage.jsx            # Table reservation page & hero banner
│   ├── BookingForm.jsx            # Validated reservation form
│   ├── ReservationSummary.jsx     # Live reservation preview card (Group 24)
│   ├── FindUs.jsx                 # Map card, location, and hours section
│   ├── ConfirmedBooking.jsx       # Confirmation screen & bookings log table
│   ├── Footer.jsx                 # 4-column footer
│   ├── App.jsx                    # Root app component
│   ├── index.jsx                  # Application entry point with BrowserRouter
│   ├── App.css                    # Component & wireframe styles
│   ├── index.css                  # Design tokens, typography & reset
│   ├── setupTests.js              # Jest-DOM matchers for Vitest
│   ├── BookingForm.test.jsx       # Form rendering & validation test suite
│   ├── BookingPage.test.jsx       # Booking page static text test suite
│   ├── bookingTimes.test.js       # Reducer & API test suite
│   └── localStorage.test.jsx      # Local storage read/write test suite
├── index.html                     # HTML5 shell with meta tags & Google Fonts
├── vite.config.js                 # Vite & Vitest configuration (port 3000)
└── package.json                   # Scripts & dependencies
```
