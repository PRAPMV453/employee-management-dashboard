import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./Pages/Dashboard";
import Employees from "./Pages/Employees";
import Sidebar from "./Component/Sidebar";
import AddEmployeePage from "./Pages/AddEmployeePage";
import EmployeeProvider from "./Context/EmployeeContext";
import EditEmployee from "./Pages/EditEmployee";
import EmployeeDetails from "./Pages/EmployeeDetailsPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <EmployeeProvider>

      <div className="app-layout">

        <Sidebar />

        <main className="main-content">

          <Routes>

            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/employees"
              element={<Employees />}
            />
            <Route
  path="/add-employee"
  element={<AddEmployeePage />}
/>
<Route
  path="/employees/edit/:id"
  element={<EditEmployee />}
/>
<Route
  path="/employees/:id"
  element={<EmployeeDetails />}
/>
          </Routes>

        </main>

      </div>
     </EmployeeProvider>
    </BrowserRouter>
  );
}

export default App;