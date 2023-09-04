import React from "react";
import "./Reviews.css";
function Reviews({ profile, thoughts, name, rating }) {
  return (
    <div className="reviews">
      <img src={profile} alt="profile" />
      <div className="user__reviews">
        <h3>"{thoughts}"</h3>
        <div className="ratings">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
        <p> - {name}</p>
      </div>
    </div>
  );
}

export default Reviews;
