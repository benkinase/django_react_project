import React, { useEffect, useState } from "react";
import { axiosAPI } from "../utils/axios";
import classes from "./Styles.module.css";
import { Employee } from "./Employee";

export const NoEmployee = () => {
  return (
    <div className={classes.NoEmployee}>
      <p>Employee list is empty</p>
    </div>
  );
};
export default class Dashboard extends React.Component {
  state = {
    employees: [],
    loading: true,
    error: "",
  };

  componentDidMount() {
    this.getEmployees();
  }

  async getEmployees() {
    try {
      const { data } = await axiosAPI.get("/api/employees/");
      this.setState({ employees: data, loading: false });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  }
  render() {
    const { employees, error, loading } = this.state;

    return (
      <div className={classes.Employees}>
        {loading ? (
          <span>Loading...</span>
        ) : error ? (
          <span>{error}</span>
        ) : employees.length < 1 ? (
          <NoEmployee />
        ) : (
          employees.map((item) => {
            return <Employee key={item.id} item={item} />;
          })
        )}
      </div>
    );
  }
}
