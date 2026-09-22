import { useState, useMemo} from "react";
import EmployeeList from "../Component/EmployeeList";
import useEmployees from "../hooks/useEmployees";

function Employees() {

  const {
    employees,
    loading,
    error
  } = useEmployees();

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedDepartment, setSelectedDepartment] =
    useState("All");

const filteredEmployees = useMemo(() => {
  return employees.filter((employee) => {
    const matchesSearch = employee.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesDepartment =
      selectedDepartment === "All" ||
      employee.department === selectedDepartment;

    return matchesSearch && matchesDepartment;
  });
}, [employees, searchTerm, selectedDepartment]);

  if (loading) {
    return <p>Loading employees...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>

      <h1>Employees</h1>

      <p>Manage all employees here.</p>

      <div className="search-section">

        <input
          type="text"
          placeholder="Search employees..."
          value={searchTerm}
          onChange={(event) =>
            setSearchTerm(event.target.value)
          }
        />

        <select
          value={selectedDepartment}
          onChange={(event) =>
            setSelectedDepartment(event.target.value)
          }
        >
          <option value="All">
            All Departments
          </option>

          <option value="IT">
            IT
          </option>

          <option value="HR">
            HR
          </option>

          <option value="Finance">
            Finance
          </option>
        </select>

      </div>

      <EmployeeList
        employees={filteredEmployees}
      />

    </div>
  );
}

export default Employees;