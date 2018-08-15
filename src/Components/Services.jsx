import React, { Component } from "react";

import dataServices from "./data.json";
import Card from "./UI/Card";

class Services extends Component {
  render() {
    return (
      <div className="mt-5 mb-5 pt-3 pb-3">
        <div className="row">
          {dataServices.map(data => (
            <Card
              key={data.title}
              imageService={data.image}
              titleService={data.title}
              textService={data.text}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Services;
