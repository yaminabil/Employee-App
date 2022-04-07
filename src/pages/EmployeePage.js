import { useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";

export default function EmployeePage() {
  const [Employee, setEmployee] = useState(0);
  const { id } = useParams();

  const getEmployee = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/employees/${id}`);
      setEmployee(await response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getEmployee();
  }, []);
  return (
    <Fragment>
      <div className="total">
        <div className="part-one">
          <img src={`${Employee.image}`} alt="hello" />
        </div>
        <div className="part-two">
          <h2>{Employee.name}</h2>
          <h4 className="title">{Employee.title}</h4>
          <h4>{Employee.email}</h4>
        </div>
      </div>
      <h3>phone number :{Employee.phoneNumber}</h3>
      <h3>office number : {Employee.officeNumber}</h3>
    </Fragment>
  );
}
