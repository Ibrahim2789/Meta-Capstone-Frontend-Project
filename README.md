# Meta Front-End Developer Capstone

![Project status](https://img.shields.io/badge/status-in%20development-f4b942?style=flat-square)
![Built with JavaScript](https://img.shields.io/badge/built%20with-JavaScript-f7df1e?style=flat-square&logo=javascript&logoColor=111111)
![Powered by Vite](https://img.shields.io/badge/powered%20by-Vite-646cff?style=flat-square&logo=vite&logoColor=ffffff)

This repository contains my capstone project for the **Meta Front-End Developer Professional Certificate** on Coursera.

The project is being developed as a practical demonstration of the front-end skills covered throughout the certificate, including semantic HTML, modern CSS, JavaScript-driven interaction, responsive design, accessibility, and a maintainable development workflow.

> **Project note:** The application is currently in development. This README will be updated with the final product description, screenshots, live demo, and project-specific usage details as the capstone takes shape.

## Contents

- [Project Goals](#project-goals)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Development Principles](#development-principles)
- [Acknowledgements](#acknowledgements)

## Project Goals

The capstone is intended to bring the certificate's core learning outcomes together in one complete front-end experience:

- Build a clear, responsive, and user-focused interface.
- Use semantic markup and accessible interaction patterns.
- Create reusable styling and predictable UI states.
- Add meaningful client-side behavior with JavaScript.
- Test the experience across screen sizes and common user flows.
- Prepare a polished project suitable for a portfolio and final submission.

## Tech Stack

- **HTML5** for semantic page structure
- **CSS3** for responsive layout, visual design, and states
- **JavaScript (ES modules)** for application behavior
- **Vite** for local development and production builds
- **npm** for dependency and script management

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm 9 or newer

### Installation

Clone the repository and install its dependencies:

```bash
git clone <your-repository-url>
cd meta-capstone-project
npm install
```

### Run locally

Start the Vite development server:

```bash
npm run dev
```

Open the local URL printed in the terminal, typically `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server with hot module replacement. |
| `npm run build` | Creates an optimized production build in `dist/`. |
| `npm run preview` | Serves the production build locally for review. |

## Project Structure

```text
meta-capstone-project/
├── public/              # Static files served as-is
├── src/
│   ├── assets/          # Images and other imported assets
│   ├── counter.js       # Current interaction module
│   ├── main.js          # Application entry point and markup
│   └── style.css        # Global styles and responsive rules
├── index.html           # HTML entry document
├── package.json         # Scripts and project metadata
└── README.md            # Project documentation
```

## Development Principles

This project follows a few guiding principles while it is being built:

- **Accessibility first:** meaningful structure, keyboard-friendly controls, useful labels, and sufficient contrast.
- **Responsive by default:** layouts should remain usable on mobile, tablet, and desktop screens.
- **Clarity over decoration:** visual choices should support the user's task and the project's content.
- **Small, focused changes:** keep the code understandable and easy to extend.
- **Test the real experience:** validate interactions and layouts in the browser, not only in source code.

## Acknowledgements

This project was created as part of the [Meta Front-End Developer Professional Certificate](https://www.coursera.org/professional-certificates/meta-front-end-developer) on Coursera.

The development environment is powered by [Vite](https://vite.dev/).

## License

This project is intended for educational and portfolio purposes. Add a license here if you decide to distribute the source code publicly.