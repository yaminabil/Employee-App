import { Routes, Route } from "react-router-dom";
import EmployeePage from "./pages/EmployeePage";
import HomePage from "./pages/HomePage";
import Employee from "./components/Employee";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import "./style.css";
import { useState, useEffect, Fragment } from "react";
import axios from "axios";

//function get all the data from the back end
export default function App() {
  ////////////////////////////
  ///////////////////////////<==============start
  const [employees, setEmployees] = useState([]);

  //////////////////////////////////
  // function of getting all the data
  /////////////////////////////////////
  const getEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:8000/employees");
      setEmployees(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  ////////////////////////<==================end
  return (
    <Fragment>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage employees={employees} />} />
        <Route path="/:id" element={<EmployeePage />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Fragment>
  );
}
