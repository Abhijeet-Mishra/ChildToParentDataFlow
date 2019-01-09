import React, { Component } from "react";
export default class Child extends Component {
  constructor() {
    super();
    this.state = {};
  }
  handleClick = () => {
    console.log(this.props.onClick);
    this.props.onClick("I am Child");
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          Data is coming from child to parent
        </button>
      </div>
    );
  }
}
