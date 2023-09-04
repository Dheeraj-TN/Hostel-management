import React from "react";
import "./Features.css";
import { Fade } from "react-reveal";
function Features({ image, price, desc }) {
  return (
    <Fade bottom>
      <div className="features">
        <img src={image} alt="" />
        <div className="info">
          <h2>Rs.{price} / mo</h2>
          <p>{desc}</p>
        </div>
      </div>
    </Fade>
  );
}

export default Features;
