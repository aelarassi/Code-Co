import React, { Component } from "react";
import Button from "../UI/Button";

class Hero extends Component {
  render() {
    return (
      <div className="hero d-flex align-items-center justify-content-center">
        <div className="col-md-7 text-center">
          <h4 className="mb-4 text-white">
            Get help about our products, basic knowledge and more
          </h4>
          <form
            action=""
            className="input-group bg-white d-flex align-items-center rounded mb-3"
          >
            <input
              type="text"
              className="form-control fw-100 border-0"
              placeholder="Search for features.."
              aria-label="Search for features.."
              aria-describedby="basic-addon2"
            />
            <Button
              styleBtn="bg-white border-0 mr-2"
              type="submit"
              title={
                <i className="fa fa-search text-secondary" aria-hidden="true" />
              }
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Hero;
