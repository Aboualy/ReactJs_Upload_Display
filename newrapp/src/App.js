import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Upload from "./Component/Upload";

class App extends Component {
  render() {

    return (
        <div className="backG">
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Upload App</h1>
        </header>

              <p className="App-intro">

                  <Upload/>
              </p>
          </div>

      </div>
    );
  }
}

export default App;
