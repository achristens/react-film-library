import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilmDetails from './FilmDetails';
import FilmListing from './FilmListing';

class App extends Component {
  render() {
    return (
      <div className="film-library">
        <FilmListing />
        <FilmDetails />
      </div>
    );
  }
}

export default App;
