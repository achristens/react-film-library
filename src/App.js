import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilmDetails from './FilmDetails';
import FilmListing from './FilmListing';
import TMDB from './TMDB.js'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      films: TMDB.films
    }
  }


  render() {
    return (
      <div className="film-library">
        <FilmListing filmList={this.state.films}/>
        <FilmDetails filmList={this.state.films}/>
      </div>
    );
  }
}

export default App;
