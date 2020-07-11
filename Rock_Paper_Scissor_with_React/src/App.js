import React, { Component } from 'react';
import './App.css';
import RpsGame from './components/RpsGame.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <RpsGame />
        </header>
      </div>
    );
  }
}

export default App;
