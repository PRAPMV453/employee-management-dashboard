import EmployeeCard from "./EmployeeCard";

function EmployeeList({ employees }) {

  return (
    <div className="employee-section">

      <h2>Employees</h2>

      <div className="employee-list">

        {employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
          />
        ))}

      </div>

    </div>
  );
}

export default EmployeeList;