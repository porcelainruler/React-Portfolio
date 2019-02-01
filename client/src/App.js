import React, { Component } from 'react';
import './App.css';
import MainRouter from './components/MainRouter';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MainRouter />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
