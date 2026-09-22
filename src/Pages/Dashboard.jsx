import useEmployees from "../hooks/useEmployees";
import { Link } from "react-router-dom";

function Dashboard() {
  const { employees, loading, error } = useEmployees();

  if (loading) {
    return <p>Loading dashboard...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const totalEmployees = employees.length;

  const itEmployees = employees.filter(
    (employee) => employee.department === "IT"
  ).length;

  const hrEmployees = employees.filter(
    (employee) => employee.department === "HR"
  ).length;

  const financeEmployees = employees.filter(
    (employee) => employee.department === "Finance"
  ).length;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to Employee Management Dashboard</p>

      <div className="dashboard-cards">

  <div className="dashboard-card">
    <div className="card-icon">👥</div>
    <div>
      <p>Total Employees</p>
      <h2>{totalEmployees}</h2>
      <span>All employees</span>
    </div>
  </div>

  <div className="dashboard-card">
    <div className="card-icon">💻</div>
    <div>
      <p>IT Department</p>
      <h2>{itEmployees}</h2>
      <span>Technology team</span>
    </div>
  </div>

  <div className="dashboard-card">
    <div className="card-icon">👤</div>
    <div>
      <p>HR Department</p>
      <h2>{hrEmployees}</h2>
      <span>Human resources</span>
    </div>
  </div>

  <div className="dashboard-card">
    <div className="card-icon">💰</div>
    <div>
      <p>Finance</p>
      <h2>{financeEmployees}</h2>
      <span>Finance team</span>
    </div>
  </div>
        </div>
        <div className="recent-employees">
  <div className="section-header">
    <div>
      <h2>Recent Employees</h2>
      <p>Recently added employees</p>
    </div>

    <Link to="/employees" className="view-all">
  View All
</Link>
  </div>

  <div className="recent-list">
    {employees.slice(0, 5).map((employee) => (
      <div className="recent-employee" key={employee.id}>
        <div className="employee-avatar">
          {employee.name.charAt(0)}
        </div>

        <div className="employee-info">
          <h3>{employee.name}</h3>
          <p>{employee.email}</p>
        </div>

        <span className="department-badge">
          {employee.department}
        </span>
      </div>
    ))}
  </div>
</div>
    </div>
  );
}

export default Dashboard;