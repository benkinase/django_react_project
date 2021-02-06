import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router";
import classes from "./Styles.module.css";

export const Employee = ({ item }) => {
  // destructuring the item prop
  const { id, name, role } = item;
  // instantiate useHistory hook to handle click event
  const history = useHistory();
  return (
    <div
      className={classes.Employee}
      onClick={() => history.push(`/employees/${id}`)}
    >
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Role:</strong> {role}
      </p>
    </div>
  );
};

Employee.propTypes = {
  item: PropTypes.object.isRequired,
};
