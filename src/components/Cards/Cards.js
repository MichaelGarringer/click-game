import React from "react";
import "./Cards.css";

//pass the image into each card so all 12 are rendered
const Cards = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img src={require("../../images/" + props.image)} />
    </div>
  </div>
);

export default Cards;