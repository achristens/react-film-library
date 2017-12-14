import React, { Component } from 'react';
import FilmPoster from './FilmPoster';

class FilmRow extends Component{

  render(){
    const film = this.props.film

    return(
      <div className="film-row" >
        <FilmPoster film={film}/>

        <div className="film-summary">
          <h1>{ film.title }</h1>
          <p>{ new Date(film.release_date).getFullYear() }</p>
        </div>
      </div>
    )
  }
}

export default FilmRow;
