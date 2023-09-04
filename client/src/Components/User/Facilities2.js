import React from "react";
import "./Facilities.css";
import { Fade } from "react-reveal";
function Facilities2({ image, title, desc }) {
  return (
    <Fade right>
      <div className="facilities">
        <div className="about__facility">
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
        <img style={{ marginRight: "30px" }} src={image} alt="" />
      </div>
    </Fade>
  );
}

export default Facilities2;
