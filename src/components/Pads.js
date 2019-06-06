import React from "react";
import Pad from "./Pad";

const Pads = () => {
  return (
    <div className="pad-section">
      <div className="row">
        <Pad />
        <Pad />
        <Pad />
      </div>
      <div className="row">
        <Pad />
        <Pad />
        <Pad />
      </div>
      <div className="row">
        <Pad />
        <Pad />
        <Pad />
      </div>
    </div>
  );
};

export default Pads;
