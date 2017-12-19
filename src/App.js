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
      films: TMDB.films,
      faves: [],
      current: ''
    }
    this.onFaveToggle = this.onFaveToggle.bind(this);
  }

  onFaveToggle(film) {
    const faves = this.state.faves.slice()
    const filmIndex = faves.indexOf(film)

    if (filmIndex === -1){
      console.log(`Adding ${film} to faves...`)
      faves.push(film)
    } else if (filmIndex > -1){
      console.log(`Removing ${film} from faves.`)
      faves.splice(filmIndex, 1)
    }

    this.setState({faves});
  }

  render() {
    return (
      <div className="film-library">
        <FilmListing filmList={this.state.films} faves={this.state.faves} onFaveToggle={this.onFaveToggle}/>
        <FilmDetails filmList={this.state.films} current={this.state.current}/>
      </div>
    );
  }
}

export default App;
