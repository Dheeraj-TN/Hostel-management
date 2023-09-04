import React from "react";
import "./Facilities.css";
import { Fade } from "react-reveal";
function Facilities({ image, title, desc }) {
  return (
    <Fade left>
      <div className="facilities">
        <img src={image} alt="" />
        <div className="about__facility">
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </Fade>
  );
}

export default Facilities;
