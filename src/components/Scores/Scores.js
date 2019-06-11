import React, { Component } from "react";
import "./Scores.css";

class Scores extends Component{
    render(){
    return(
    <h1>Score: {this.props.score} Games Won: {this.props.gamesWon}</h1>

    )}
}
export default Scores;