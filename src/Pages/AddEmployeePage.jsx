import { useState, useContext,useRef,useEffect } from "react";
import { EmployeeContext } from "../Context/EmployeeContext";

function AddEmployeePage() {
  const { employees, addEmployee } = useContext(EmployeeContext);

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const nameInputRef = useRef(null);

  useEffect(() => {
  nameInputRef.current.focus();
}, []);

function handleSubmit(event) {
  event.preventDefault();

  const newErrors = {};

  if (!name.trim()) {
    newErrors.name = "Name is required";
  }

  if (!department) {
    newErrors.department = "Please select a department";
  }

if (email.trim()) {
  const existingEmployee = employees.find(
    (employee) =>
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

  const employee = {
    name: name.trim(),
    department,
    email: email.trim()
  };

  addEmployee(employee);
  setSuccessMessage("Employee added successfully.");

  setName("");
  setDepartment("");
  setEmail("");
  setErrors({});
}


  return (
    <div>

      <h1>Add Employee</h1>

      <p>Create a new employee record.</p>
      {successMessage && (
  <p className="success-message">
    {successMessage}
  </p>
)}

      <form onSubmit={handleSubmit}>

        <div>
          <label>Name <span className="required">*</span></label>

          <input
          ref={nameInputRef}
            type="text"
            placeholder="Enter employee name"
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
          <label>Department <span className="required">*</span></label>

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
            <option value="">
              Select Department
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
          {errors.department && (
  <p className="form-error">{errors.department}</p>
)}
        </div>

        <div>
          <label>Email <span className="required">*</span></label>

          <input
            type="email"
            placeholder="Enter email"
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
          Add Employee
        </button>

      </form>

    </div>
  );
}

export default AddEmployeePage;