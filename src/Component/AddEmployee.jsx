import { useState, useEffect } from "react";

function AddEmployee({addEmployee , editingEmployee,updateEmployee}) {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
  if (editingEmployee) {
    setName(editingEmployee.name);
    setDepartment(editingEmployee.department);
    setEmail(editingEmployee.email);
  }
}, [editingEmployee]);

   function handleAddEmployee(event) {
  event.preventDefault();

  const employeeData = {
    name: name,
    department: department,
    email: email
  };

  if (editingEmployee) {
    updateEmployee({
      id: editingEmployee.id,
      ...employeeData
    });
  } else {
    addEmployee(employeeData);
  }
}

  

  return (
  <div className="add-employee">
    <h2>Add Employee</h2>

    <form className="form-group" onSubmit={handleAddEmployee}>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        required
        onChange={(event) => setName(event.target.value)}
      />

      <input
        type="text"
        placeholder="Enter department"
        value={department}
        required
        onChange={(event) => setDepartment(event.target.value)}
      />

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        required
        onChange={(event) => setEmail(event.target.value)}
      />

      <button type="submit">
          {editingEmployee ? "Update Employee" : "Add Employee"}
      </button>
    </form>
  </div>
  );
}

export default AddEmployee;