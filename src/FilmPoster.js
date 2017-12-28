import React from 'react';

function FilmPoster(props) {
  return(
  <figure className="film-poster">
    <img src={`https://image.tmdb.org/t/p/w780/${props.film.poster_path}`} alt={props.film.title}/>
  </figure>
)
}

export default FilmPoster;
