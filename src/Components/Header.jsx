import React, { Component } from "react";
import Button from "./UI/Button";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerMenu"
          aria-controls="navbarTogglerMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <img
          src="images/logo_code_and_co.png"
          width="75"
          height="44"
          className="d-inline-block align-top"
          alt=""
        />
        <div className="collapse navbar-collapse" id="navbarTogglerMenu">
          <ul className="navbar-nav ml-auto mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link fs-15" href="#a">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-15" href="#a">
                ABOUT US
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-15" href="#a">
                SERVICES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-15" href="#a">
                PRODUCTS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-15" href="#a">
                PRICING
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-15" href="#a">
                API
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-15 active" href="#a">
                SUPPORT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-15" href="#a">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
        <div className="form-inline my-2 my-lg-0">
          <Button
            styleBtn="btn btn-primary my-2 my-sm-0 fw-100 brr-100"
            title="TRY NOW"
          />
        </div>
      </nav>
    );
  }
}

export default Header;
