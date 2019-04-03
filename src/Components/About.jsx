import React, { Component } from "react";
import Button from "./UI/Button";

class About extends Component {
  render() {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center text-center pt-5 pb-5 bg-dark">
        <h3 className="text-white m-4">
          Didn’t find what you are looking for?
        </h3>
        <p className="text-white pb-5 fw-100">
          Don’t worry! Let’s chat with US
        </p>
        <Button
          styleBtn="btn btn-primary mb-4 pr-5 pl-5 brr-100"
          title="REQUEST A CHAT"
        />
      </div>
    );
  }
}

export default About;
