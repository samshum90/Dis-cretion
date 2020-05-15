import React from 'react'
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
const routes = [
    {
      path: "/",
      exact: true,
      main: () => <h2>Dashboard</h2>
    },
    {
      path: "/change",
      main: () => <h2>Latest Changes</h2>
    },
    {
      path: "/request",
      main: () => <h2>Make a Request</h2>
    }
  ];

const Banner = () => (
    <Router style={{ flex: 1, padding: "10px" }}>
        <Switch>
            {routes.map((route, index) => (
                // Render more <Route>s with the same paths as
                // above, but different components this time.
                <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
                />
            ))}
        </Switch>
    </Router>
);
export default Banner