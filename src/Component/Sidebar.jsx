import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

      <h2 className="logo">EmployeeHub</h2>

      <nav className="sidebar-nav">

        <Link to="/">
          🏠 Dashboard
        </Link>

        <Link to="/employees">
          👥 Employees
        </Link>

        <Link to="/add-employee">
          ➕ Add Employee
        </Link>

        <Link to="/reports">
          📊 Reports
        </Link>

        <Link to="/settings">
          ⚙️ Settings
        </Link>

      </nav>

    </aside>
  );
}

export default Sidebar;