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
    score: 0,
    gamesWon: 0
  };
  imageClick = event => {
    const zfighter = event.target.alt;
    const alreadyClicked =
      this.state.clicked.indexOf(zfighter) > -1;
    if (alreadyClicked) {
      this.setState({
        dbz: this.state.dbz.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clicked: [],
        score: 0
      });
      alert("You already clicked that one, pal");
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
        () => {
          if (this.state.score === 12) {
            alert("You did it");
            this.setState({
              dbz: this.state.dbz.sort(function (a, b) {
                return 0.5 - Math.random();
              }),
              gamesWon: this.state.gamesWon +1,
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
                  gamesWon={this.state.gamesWon}
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