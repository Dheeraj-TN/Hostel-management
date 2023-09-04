import React from "react";
import "./Compare.css";
import { Fade } from "react-reveal";
function Compare({ Icon, title, desc }) {
  return (
    <Fade left>
      <div className="compare">
        <Icon className="compare__icon" />

        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </Fade>
  );
}

export default Compare;
