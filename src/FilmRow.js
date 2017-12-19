import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave.js'

class FilmRow extends Component{

  handleDetailsClick(film){
    console.log(`Fetching details for ${film.title}!`)
  }
  render(){
    const film = this.props.film

    return(
      <div className="film-row" onClick={(e) => this.handleDetailsClick(film)}>
        <FilmPoster film={film}/>

        <div className="film-summary">
          <h1>{ film.title }</h1>
          <p>{ new Date(film.release_date).getFullYear() }</p>
        </div>
        <Fave onFaveToggle={this.props.onFaveToggle} isFave={this.props.isFave}/>
      </div>
    )
  }
}

export default FilmRow;
