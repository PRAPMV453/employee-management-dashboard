import { useContext } from "react";
import { EmployeeContext } from "../Context/EmployeeContext";

function useEmployees() {
  return useContext(EmployeeContext);
}

export default useEmployees;