import React from "react";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "./utils/routes";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import Details from "./components/EmployeeDetails";
import NotFound from "./components/NotFound";

export default () => (
  <div style={styles.container}>
    <Navigation />
    <hr />
    <Switch>
      <Route exact path={ROUTES.Dashboard} component={Dashboard} />
      <Route exact path={ROUTES.Employee} component={Details} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

const styles = {
  container: {
    width: "95%",
    margin: "auto",
    padding: "10px",
    height: "100vh",
  },
  hr: { backgroundColor: "red" },
};
