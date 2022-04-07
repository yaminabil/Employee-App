import Employee from "./Employee";
import { useState, useEffect } from "react";
import axios from "axios";

export default function EmployeesList({ employees }) {
  //////////////////////////////////
  // function of getting all the data
  /////////////////////////////////////

  return (
    <div>
      <ul>
        {employees.map((oneEmployee) => {
          return (
            <li id="employeeLi" key={oneEmployee._id}>
              <Employee singleData={oneEmployee} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
