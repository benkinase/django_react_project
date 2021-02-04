import React, { useState, useEffect } from "react";
import { axiosAPI } from "../utils/axios";
import { useParams } from "react-router";
import classes from "./Styles.module.css";

export default function EmployeeDetails() {
  const { id } = useParams();

  const [state, setState] = useState({
    employee: {},
    loading: true,
    error: "",
  });

  // call function to fetch employee on page load
  useEffect(() => {
    getEmployee(id);
  }, [id]);

  // fetch a single employee with supplied param id
  const getEmployee = (id) => {
    axiosAPI
      .get(`/api/employees/${id}/`)
      .then((res) => {
        setState({ employee: res.data, loading: false, error: "" });
      })
      .catch((error) => {
        setState({ ...state, error: error.message, loading: false });
      });
  };
  //destructuring the state and employee
  const {
    employee: { name, role, department, salary, address },
    loading,
    error,
  } = state;
  return (
    <div className={classes.DetailPage}>
      <div className={classes.square}></div>
      {error && <span>{error}</span>}
      {loading && <span>Loading...</span>}
      <div className={classes.Details}>
        <div>
          <p>
            <strong>Name: </strong> {name}
          </p>
          <p>
            <strong>Role:</strong> {role}
          </p>
        </div>
        <div>
          <p>
            <strong>Department:</strong> {department}
          </p>
          <p>
            <strong>Salary:</strong> €{salary}
          </p>
        </div>
        <p>
          <strong>Address:</strong> {address}
        </p>
      </div>
    </div>
  );
}
