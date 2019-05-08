import React from "react";
import Header from "./Components /Header/Header";
import RegistrationForm from "./Components /Registration/RegistrationForm";
import Login from "./Components /Login/Login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PrivateComponent from "./Components /PrivateComponent"

import PrivateRoute from './Components /PrivateRoute';

function AppRouter() {
  return (
    <Router>
      <div>
        <h1>
            Welcome To Luncher
          </h1>
          <nav>
            <a>
              <Link to="/login">Login </Link>
            </a>
            <a>
            <Link to="/protected">Protected Page</Link>
            </a>
          </nav>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/protected" component={PrivateComponent} />
          <Route exact path="/" exact component={Login} />
          <Route path="/RegistrationForm/" component={RegistrationForm} />
          <Route path="/Header/" component={Header} />
        </div>
    </Router>             
  );
}

export default AppRouter;