import React from "react";
import Card from "./Card";
import data from "./components/data";

export default function Main() {
  const cardElement = data.map((info) => {
    return (
      <Card
        imageUrl={info.imageUrl}
        title={info.title}
        googleUrl={info.googleUrl}
        country={info.country}
        date={info.date}
        description={info.description}
      />
    );
  });
  return <div className="main-component">{cardElement}</div>;
}
