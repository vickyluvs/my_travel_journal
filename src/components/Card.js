import React from "react";

export default function Card() {
  return (
    <div className="card-component">
      <div className="img-div">
        <img
          src="./assets/tokeh.jpg"
          alt="tokeh beach in sierra leone"
          className="location-img"
        />
      </div>

      <section>
        <h1>Location title</h1>
        <div>
          <span className="emoji-pin">📍</span>
          <span>
            <a href="#">Google Map link</a>
          </span>
          <span>Country Name</span>
          <span>Date</span>
        </div>
        <p>Description</p>
      </section>
    </div>
  );
}
