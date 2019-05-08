import React from "react";
import Header from "./Components /Header/Header";
import RegistrationForm from "./Components /Registration/RegistrationForm";
import Login from "./Components /Login/Login";


class App extends React.Component {
  render() {
    return (
      <div className="">
        <Header />
        <Login />
      </div>
    );
  }
}

export default App;
