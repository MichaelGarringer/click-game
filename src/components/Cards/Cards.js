import React from "react";
import "./Cards.css";

const Cards = props => (
  
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.id}src={require("../../images/" + props.image)} key={props.key}/>
    </div>
  </div>
);

export default Cards;