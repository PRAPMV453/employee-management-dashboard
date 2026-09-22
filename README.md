# Employee Management Dashboard

A responsive employee management portal built with React.js for managing employee records through a clean and user-friendly admin interface.

## Overview

The Employee Management Dashboard is a frontend application that demonstrates how a modern React application can be structured using reusable components, client-side routing, centralized state management, API integration, form validation and browser persistence.

The application allows users to view, search, filter, add, edit, delete and view details of employees.

## Features

- Dashboard with employee summary
- Employee listing
- Search employees by name
- Filter employees by department
- Add new employees
- Edit existing employees
- Delete employees
- View employee details
- Form validation
- Duplicate email validation
- React Router navigation
- Context API for centralized employee state
- Axios API integration
- LocalStorage persistence
- Loading and error handling
- Reusable React components
- Responsive admin-style layout

## Tech Stack

- React.js
- JavaScript (ES6+)
- JSX
- React Router
- Context API
- Axios
- HTML5
- CSS3
- Vite
- Git & GitHub

## Project Structure

```text
src/
├── Component/
│   ├── EmployeeCard.jsx
│   ├── EmployeeList.jsx
│   └── Sidebar.jsx
│
├── Context/
│   └── EmployeeContext.jsx
│
├── Pages/
│   ├── Dashboard.jsx
│   ├── Employees.jsx
│   ├── AddEmployeePage.jsx
│   ├── EditEmployee.jsx
│   └── EmployeeDetailsPage.jsx
│
├── App.jsx
├── App.css
└── main.jsx