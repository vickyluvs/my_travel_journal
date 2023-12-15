import React from "react";

export default function Card(props) {
  return (
    <div className="card-component">
      <div className="img-div">
        <img
          src={`../assets/${props.imageUrl}`}
          alt={props.alt}
          className="location-img"
        />
      </div>

      <section>
        <h1>{props.title}</h1>
        <div>
          <span>
            <a href={props.googleUrl} target="_blank" rel="noreferrer">
              📍
            </a>
          </span>
          <span>{props.country}</span>
          <span>{props.date}</span>
        </div>
        <p>{props.description}</p>
      </section>
    </div>
  );
}
