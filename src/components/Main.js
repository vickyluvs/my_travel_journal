import React from "react";
import Card from "./Card";
import data from "./data";

export default function Main() {
  const cardElement = data.map((info) => {
    return (
      <Card
        key={info.id}
        imageUrl={info.imageUrl}
        title={info.title}
        googleUrl={info.googleMapsUrl}
        country={info.location}
        date={info.date}
        description={info.description}
        alt={info.alt}
      />
    );
  });
  return <div className="main-component">{cardElement}</div>;
}
