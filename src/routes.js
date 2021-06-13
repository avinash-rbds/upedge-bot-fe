import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import PrivateRoute from "./common/hoc/private-route";

// include global stylings
import "./global.scss";

// without lazy load
import Authentication from "./features/authentication";
import Settings from "./features/settings";
import Dashboard from "./features/dashboard";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={Authentication} exact />

        <PrivateRoute path="/dashboard" component={Dashboard} />

        <PrivateRoute path="/settings" component={Settings} exact />

        <Redirect path="*" to="/" />
      </Switch>
    </>
  );
};

export default Routes;
