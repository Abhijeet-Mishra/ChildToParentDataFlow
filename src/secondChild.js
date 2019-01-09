import React, { Component } from "react";

class SecondChild extends Component {
  constructor() {
    super();
    this.state = {
      myarray: [1, 2, 3, 4, 5]
    };
  }
  onClick = e => {
    var elems = document.querySelector(".active");
    if (elems !== null) {
      elems.classList.remove("active");
    }
    e.target.className = "active";
  };
  render() {
    var elementArr = this.state.myarray.map((ele, index) => {
      return <li key={index}>{ele}</li>;
    });
    return (
      <div>
        <button>Click me</button>
        <ul onClick={this.onClick}>{elementArr}</ul>
      </div>
    );
  }
}
export default SecondChild;
