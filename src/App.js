import React, { Component } from 'react';
import './App.css';
import Words from './components/Words';
import Cards from './components/Cards';
import Scores from './components/Scores';
import dbz from "../src/dbz.json"


class App extends Component {
  state = {
    dbz,
    clicked: [],
    score: 0
  };

  //when you click on a card ... the fish is taken out of the array
  imageClick = event => {
    const zfighter = event.target.alt;
    const alreadyClicked =
      this.state.clicked.indexOf(zfighter) > -1;

    //if you click on a fish that has already been selected, the game is reset and cards reordered
    if (alreadyClicked) {
      this.setState({
        dbz: this.state.dbz.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clicked: [],
        score: 0
      });
      alert("You already clicked that one, pal");

      //if you click on an available fish, your score is increased and cards reordered
    } else {
      this.setState(
        {
          dbz: this.state.dbz.sort(function (a, b) {
            return 0.5 - Math.random();
          }),
          clicked: this.state.clicked.concat(
            zfighter
          ),
          score: this.state.score + 1
        },
        //if you get all 12 fish corrent you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("You did it");
            this.setState({
              dbz: this.state.dbz.sort(function (a, b) {
                return 0.5 - Math.random();
              }),
              clicked: [],
              score: 0
            });
          }
        }
      );
    }
  };
  

  render() {
    return (
      <div>
        <Words />
        <div className="scores">
          <Scores score={this.state.score}
          />
        </div>
        <div className="container">
          {this.state.dbz.map(dbz => (
            <Cards
              imageClick={this.imageClick}
              id={dbz.id}
              key={dbz.key}
              image={dbz.image}
            />
          ))}
        </div>
      </div>

    )
  }
}


export default App;