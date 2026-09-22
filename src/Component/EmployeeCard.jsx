import useEmployees from "../hooks/useEmployees";
import { Link } from "react-router-dom";
import { memo } from "react";


function EmployeeCard({ employee }) {

  const { deleteEmployee } = useEmployees();

  return (
    <div className="employee-card">

      <h3>{employee.name}</h3>

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
  Edit
</Link>
<Link
  to={`/employees/${employee.id}`}
  className="details-button"
>
  View Details
</Link>

      <button
        className="delete-button"
        onClick={() => deleteEmployee(employee.id)}
      >
        Delete
      </button>

    </div>
  );
}

export default memo(EmployeeCard);