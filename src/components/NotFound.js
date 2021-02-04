import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  let styles = {
    root: {
      width: "50%",
      top: "50%",
      left: "50%",
      transform: "translate(50%, 100%)",
      backgroundColor: "var(--secondary-color)",
      padding: "1.5rem 1.5rem 2rem",
      textAlign: "center",
      boxShadow: "var(--mainShadow)",
      fontSize: "17px",
    },
    page: {
      paddingBottom: "10px",
    },
    link: {
      color: "var(--secondary-color)",
      backgroundColor: "var(--tertiary-color",
      padding: "0.8rem .6rem",
      textDecoration: "none",
    },
  };
  return (
    <div style={styles.root}>
      <p>404 Error</p>
      <p style={styles.page}>Page not found</p>
      <Link to='/' style={styles.link}>
        Back Home
      </Link>
    </div>
  );
}
