import React, { Component } from 'react';
import TMDB from './TMDB.js';
import FilmListing from './FilmListing.js';
import FilmDetails from './FilmDetails.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleFaveToggle = this.handleFaveToggle.bind(this);

    this.state = {
      films: TMDB.films,
      faves: [],
      current: {}
    }
  }

  handleFaveToggle(film) {
    const faves = this.state.faves.slice();
    const filmIndex = faves.indexOf(film);

    if ( filmIndex > -1 ) {
      console.log(`Removing ${film.title} from faves`);
      faves.splice(filmIndex, 1)
    } else {
      console.log(`Adding ${film.title} to faves`);
      faves.push(film)
    }

    this.setState({faves: faves})
  }

  render() {
    return (
      <div className="film-library">
        <FilmListing films={this.state.films} faves={this.state.faves} onFaveToggle={this.handleFaveToggle} />
        <FilmDetails films={TMDB.films} />
      </div>
    );
  }
}

export default App;
