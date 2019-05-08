import React from "react";
import Header from "./Components /Header/Header";
import RegistrationForm from "./Components /Registration/RegistrationForm";
import Login from "./Components /Login/Login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function AppRouter() {
  return (
    <Router>
      <div>
        <Route exact path="/" exact component={Login} />
        <Route path="/RegistrationForm/" component={RegistrationForm} />
        <Route path="/Header/" component={Header} />
      </div>
    </Router>
  );
}

export default AppRouter;
