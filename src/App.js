import React, { Component } from 'react';
import './App.css';
import Words from './components/Words';
import Cards from './components/Cards';
import Scores from './components/Scores';
import dbz from "../src/dbz.json"


class App extends Component {
  state = {
    dbz,
    score: 0,
  }
  render() {
    return (
      <div>
        <Words />
        <div className="scores">
          <Scores />
        </div>
        <div className="container">
          {this.state.dbz.map(dbz => (
            <Cards
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