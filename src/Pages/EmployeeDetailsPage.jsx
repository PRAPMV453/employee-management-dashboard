import { Link, useParams } from "react-router-dom";
import useEmployees from "../hooks/useEmployees";

function EmployeeDetails() {
  const { employees } = useEmployees();

  const { id } = useParams();

  const employee = employees.find(
    (employee) => employee.id === Number(id)
  );

  if (!employee) {
    return (
      <div>
        <h2>Employee not found</h2>

        <Link to="/employees">
          Back to Employees
        </Link>
      </div>
    );
  }

  return (
    <div>

      <h1>Employee Details</h1>

      <div className="employee-details-card">

        <h2>{employee.name}</h2>

        <p>
          <strong>Employee ID:</strong>{" "}
          {employee.id}
        </p>

        <p>
          <strong>Department:</strong>{" "}
          {employee.department}
        </p>

        <p>
          <strong>Email:</strong>{" "}
          {employee.email}
        </p>

        <Link
          to={`/employees/edit/${employee.id}`}
          className="edit-button"
        >
          Edit Employee
        </Link>

        <Link
          to="/employees"
          className="back-button"
        >
          Back to Employees
        </Link>

      </div>

    </div>
  );
}

export default EmployeeDetails;