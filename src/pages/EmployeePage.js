import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function EmployeePage() {
  const [Employee, setEmployee] = useState(0);
  const { id } = useParams();

  const getEmployee = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/employees/${id}`);
      setEmployee(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getEmployee();
  }, []);
  return <h1>this is the Employee page for {Employee.name} </h1>;
}
