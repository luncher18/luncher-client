import React from "react";
import Header from "./Components /Header/Header";
import RegistrationForm from "./Components /Registration/RegistrationForm";

class App extends React.Component {
  render() {
    return (
      <div className="">
        <Header />
        <RegistrationForm />
      </div>
    );
  }
}

export default App;
