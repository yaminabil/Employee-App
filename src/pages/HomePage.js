import { Fragment } from "react";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import EmployeesList from "../components/EmployeesList";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

//
//
//
//
//Home page that wrap everything
export default function HomePage({ employees }) {
  // declaring the variable

  /////////////////////
  //search employe function
  /////////////////////
  const [searchedEmployee, setSearchedEmployee] = useState([]);
  const { id } = useParams();
  const getEmployee = async (employee) => {
    const response = await axios.get(`http://localhost:8000/employees/${id}`);
    setSearchedEmployee(response.data);
  };

  return (
    <Fragment>
      <div className="Table">
        <Header Title="Employees directory" />
        <Searchbar getEmployee={getEmployee} />
        <EmployeesList employees={employees} />
      </div>
    </Fragment>
  );
}
