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
    this.handleDetailsClick = this.handleDetailsClick.bind(this);
  }

  onFaveToggle(film) {
    const faves = this.state.faves.slice()
    const filmIndex = faves.indexOf(film)

    if (filmIndex === -1){
      console.log(`Adding ${film.title} to faves...`)
      faves.push(film)
    } else if (filmIndex > -1){
      console.log(`Removing ${film.title} from faves.`)
      faves.splice(filmIndex, 1)
    }

    this.setState({faves});
  }

  handleDetailsClick(film){
    console.log(`Fetching details for ${film.title}!`)
    this.setState({
      current: film
    })
  }

  render() {
    return (
      <div className="film-library">
        <FilmListing filmList={this.state.films} faves={this.state.faves} onFaveToggle={this.onFaveToggle} handleDetailsClick={this.handleDetailsClick}/>
        <FilmDetails filmList={this.state.films} current={this.state.current} />
      </div>
    );
  }
}

export default App;
