import React, { Component } from "react";
import "./Scores.css";

class Scores extends Component{
    render(){
    return(
        <div>
    <h1>Score: {this.props.score}</h1>
    <h2>Games Won: {this.props.gamesWon}</h2>
        </div>
    )}
}
export default Scores;