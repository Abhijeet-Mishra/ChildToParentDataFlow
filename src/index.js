import React, { Component } from "react";
import ReactDOM from "react-dom";
import Child from "./Child";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello Who are you"
    };
  }
  showData = e => {
    this.setState({ message: e });
  };
  render() {
    return (
      <div className="App">
        <Child onClick={this.showData} />
        Message : {this.state.message}
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
