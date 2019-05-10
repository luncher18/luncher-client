
import React from "react";
import Header from "./Components/Header/Header";
// import Registration from "./Components/Registration/Registration"
import RegistrationForm from "./Components/Registration/RegistrationForm";
import Login from "./Components/Login/Login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DonationsHeader from "./Components/Donations/DonationsHeader"

function AppRouter() {
  return (
    <Router>

      <div>
        {/* <DonationsPage />
        <Registration /> */}
        <Route exact path="/" exact component={Login} />
        <Route path="/RegistrationForm/" component={RegistrationForm} />
        <Route path="/Header/" component={Header} />
        <Route path="/DonationsHeader/" component={DonationsHeader} />
      </div>
    </Router>
  );
}

export default AppRouter;