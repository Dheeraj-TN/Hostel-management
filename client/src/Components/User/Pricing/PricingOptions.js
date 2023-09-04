import React, { useEffect, useState } from "react";
import "./PricingOptions.css";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../../Firebase/Firebase";
import { collection, onSnapshot, query } from "firebase/firestore";

function PricingOptions({ image, bookNow, viewList, desc, title, price }) {
  const navigate = useNavigate();

  const [view, setView] = useState(false);

  return (
    <div className="pricingOptions">
      <div className="pricing__left">
        <h2>{title}</h2>
        <p className="desc">{desc}</p>
        <p className="price">₹{price}/mo</p>
        {bookNow && (
          <button
            onClick={() =>
              auth.currentUser?.email
                ? navigate("/bookingForm")
                : navigate("/user_login")
            }
          >
            {bookNow}
          </button>
        )}
        {viewList && (
          <button onClick={() => navigate("/menu")}>{viewList}</button>
        )}
      </div>
      <div className="pricing__right">
        <img src={image} alt="pricing" />
      </div>
    </div>
  );
}

export default PricingOptions;
