import React, { Component } from 'react';
import './App.css';
import Words from './components/Words';
import Cards from './components/Cards';
import dbz from "../src/dbz.json"


class App extends Component {
state ={
  dbz
}
  render() {
    return (
      <div>
        <Words />
        <div className="container">
          {this.state.dbz.map(dbz => (
            <Cards
              image={dbz.image}
            />
          ))}
        </div>
      </div>
      
    )
  }
}


export default App;