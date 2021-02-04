// export a navigation component (use react-router-dom)
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ROUTES } from "../utils/routes";

export default function Navigation() {
  const location = useLocation();

  return (
    <div style={styles.root}>
      <div>
        <p style={styles.teraki}>Teraki GmbH</p>
      </div>
      <NavLink to={ROUTES.Dashboard} exact style={styles.link}>
        {location.pathname === "/" ? "Homepage" : "Back-Home"}
      </NavLink>
    </div>
  );
}

const colors = {
  link: "#ecb78c",
  others: "#ffaa64",
};

const styles = {
  root: {
    display: "flex",
    alignItems: "center",
    padding: "20px",
    justifyContent: "space-between",
    fontSize: "20px",
    fontWeight: "bold",
    letterSpacing: 1.5,
  },

  link: {
    textDecoration: "none",
    color: "var(--tertiary-color)",
    padding: "12px",
  },
  teraki: {
    color: "var(--tertiary-color)",
  },
};
