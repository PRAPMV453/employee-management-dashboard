import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useEmployees from "../hooks/useEmployees";

function EditEmployee() {

  const { employees, updateEmployee } = useEmployees();

  const { id } = useParams();

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
const [successMessage, setSuccessMessage] = useState("");

  const employee = employees.find(
    (employee) => employee.id === Number(id)
  );

  useEffect(() => {

    if (employee) {
      setName(employee.name);
      setDepartment(employee.department);
      setEmail(employee.email);
    }

  }, [employee]);

  function handleSubmit(event) {
  event.preventDefault();

  const newErrors = {};

  if (!name.trim()) {
    newErrors.name = "Name is required";
  }

  if (!department) {
    newErrors.department = "Please select a department";
  }

  if (!email.trim()) {
    newErrors.email = "Email is required";
  } else if (!email.includes("@")) {
    newErrors.email = "Enter a valid email";
  }

  if (email.trim()) {
    const existingEmployee = employees.find(
      (employee) =>
        employee.id !== Number(id) &&
        employee.email.toLowerCase() === email.trim().toLowerCase()
    );

    if (existingEmployee) {
      newErrors.email = "Employee already exists.";
    }
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0) {
    return;
  }

  updateEmployee({
    id: employee.id,
    name: name.trim(),
    department,
    email: email.trim()
  });

  setSuccessMessage("Employee updated successfully.");

  setTimeout(() => {
    navigate("/employees");
  }, 1000);
}

  if (!employee) {
    return <p>Employee not found.</p>;
  }

  return (
    <div>

      <h1>Edit Employee</h1>
      {successMessage && (
      <p className="success-message">
        {successMessage}
      </p>
    )}

      <form onSubmit={handleSubmit}>

        <div>
          <label>
  Name <span className="required">*</span>
</label>

        <input
  type="text"
  value={name}
  onChange={(event) => {
    setName(event.target.value);

    setErrors((currentErrors) => ({
      ...currentErrors,
      name: ""
    }));
  }}
/>

{errors.name && (
  <p className="form-error">{errors.name}</p>
)}
        </div>

        <div>
          <label>
  Department <span className="required">*</span>
</label>

         <select
  value={department}
  onChange={(event) => {
    setDepartment(event.target.value);

    setErrors((currentErrors) => ({
      ...currentErrors,
      department: ""
    }));
  }}
>
  <option value="IT">IT</option>
  <option value="HR">HR</option>
  <option value="Finance">Finance</option>
</select>

{errors.department && (
  <p className="form-error">{errors.department}</p>
)}
        </div>

        <div>
          <label>
  Email <span className="required">*</span>
</label>

          <input
  type="email"
  value={email}
  onChange={(event) => {
    setEmail(event.target.value);

    setErrors((currentErrors) => ({
      ...currentErrors,
      email: ""
    }));
  }}
/>

{errors.email && (
  <p className="form-error">{errors.email}</p>
)}
        </div>

        <button type="submit">
          Update Employee
        </button>

      </form>

    </div>
  );
}

export default EditEmployee;