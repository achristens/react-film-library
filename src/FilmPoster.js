import React, { Component } from 'react';

class FilmPoster extends Component{

  render(){
    const film = this.props.film

    return(
      <figure className="film-poster">
        <img src={`https://image.tmdb.org/t/p/w780/${film.poster_path}`} alt={film.title}/>
      </figure>
    )
  }
}

export default FilmPoster;
