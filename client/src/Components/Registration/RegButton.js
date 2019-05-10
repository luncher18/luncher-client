import React from "react";

class Button extends React.Component {
  // Using a class property instead of a constructor
  state = {
    label: "Button"
  };
  render() {
    return <button>{this.state.label}</button>;
  }
}

export default Button