import React from "react";
import Header from "./Components /Header/Header";
import RegistrationForm from "./Components /Registration/RegistrationForm";
import Login from "./Components /Login/Login";
import { BrowserRouter as Router, Route, } from "react-router-dom";
import DonationsPage from "./components/donations/DonationsPage.js";
import "./Assets/App.css";
import DonationsHeader from "./components/donations/DonationsHeader";



function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/DonationsPage" component={DonationsPage} />
        <Route exact path="/" exact component={Login} />
        <Route path="/RegistrationForm/" component={RegistrationForm} />
        <Route path="/Header/" component={Header} />
        <Route path="/DonationsHeader/" component={DonationsHeader} />
       
      </div>
    </Router>
  );
}

export default AppRouter;