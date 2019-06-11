import React, { Component } from "react";
import "./Scores.css";

//pass the image into each card so all 12 are rendered
class Scores extends Component{
    render(){
    return(
    <h1>Score: {this.props.score}</h1>
    )}
}
export default Scores;