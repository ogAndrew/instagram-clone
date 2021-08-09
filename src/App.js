import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";

const Login = lazy(() => import("./pages/login"));

function App() {
  return (
    <Router>
      <Switch>
        <Suspense fallback={<p>Loading...</p>}>
          <Route path={ROUTES.LOGIN} component={Login} />
        </Suspense>
      </Switch>
    </Router>
  );
}

export default App;
