import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button className={this.props.styleBtn} type={this.props.type}>
        {this.props.title}
      </button>
    );
  }
}

export default Button;
