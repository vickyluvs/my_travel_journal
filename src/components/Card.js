import React from "react";

export default function Card(props) {
  return (
    <section className="card-component">
      <div className="card-img-div">
        <img src={props.imageUrl} alt={props.alt} className="location-img" />
      </div>
      <div className="card-title">
        <h1>{props.title}</h1>
      </div>

      <div className="card-detail">
        <span>
          <a href={props.googleUrl} target="_blank" rel="noreferrer">
            📍
          </a>
        </span>
        <span>{props.country}</span>
        <span>{props.date}</span>
      </div>

      <div className="card-description">
        <p>{props.description}</p>
      </div>
    </section>
  );
}
