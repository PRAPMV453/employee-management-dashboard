# Employee Management Dashboard

A responsive employee management dashboard built with React. The application provides a practical admin-style interface for viewing, searching, filtering, and maintaining employee records.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=20232A)](https://react.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=111827)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev/)

## Overview

This project demonstrates how a modern React application can be organized around reusable components, client-side routing, centralized state, validation, and a responsive user interface.

## Features

- Dashboard with employee summaries
- Employee listing with search and department filtering
- Add, edit, delete, and view employee records
- Client-side form validation
- Duplicate email validation
- React Router navigation
- Context API for centralized employee state
- Axios API integration
- LocalStorage persistence
- Loading and error states
- Reusable React components
- Responsive admin-style layout

## Tech stack

- React 19
- JavaScript (ES6+)
- React Router
- Context API
- Axios
- HTML5 and CSS3
- Vite
- Git and GitHub

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
git clone https://github.com/PRAPMV453/employee-management-dashboard.git
cd employee-management-dashboard
npm install
```

### Run locally

```bash
npm run dev
```

Open the local URL shown by Vite in your browser.

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```text
src/
├── Component/
│   ├── EmployeeCard.jsx
│   ├── EmployeeList.jsx
│   └── Sidebar.jsx
├── Context/
│   └── EmployeeContext.jsx
├── Pages/
│   ├── Dashboard.jsx
│   ├── Employees.jsx
│   ├── AddEmployeePage.jsx
│   ├── EditEmployee.jsx
│   └── EmployeeDetailsPage.jsx
├── App.jsx
├── App.css
└── main.jsx
```

## Development notes

Employee data is persisted in the browser with LocalStorage. Axios is included for API integration and future backend connectivity.

## Roadmap

- Add automated component and integration tests
- Add TypeScript support
- Improve accessibility and keyboard navigation
- Add a production API and authentication
- Add deployment documentation

## Contributing

Suggestions and improvements are welcome. Please open an issue to discuss a change before submitting a pull request.

## License

This project is currently available for learning and portfolio purposes. Add a license before redistributing it as an open-source package.
