import React, { Component } from "react";

class Card extends Component {
  render() {
    const { imageService, textService, titleService } = this.props;
    return (
      <div className="col-sm-6 col-md-6 col-lg-3 pt-4 pb-4 text-center">
        <img
          className="mb-3 img-services"
          src={imageService}
          alt={titleService}
        />
        <h5>{titleService}</h5>
        <p className="pr-3 pl-3 fw-100">{textService}</p>
      </div>
    );
  }
}

export default Card;
