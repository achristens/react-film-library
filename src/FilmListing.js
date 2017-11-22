import React, { Component } from 'react';

class FilmListing extends Component{

  render(){
    const films = this.props.filmList
    console.log(films);
    return(
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <h1>{films[0].title}</h1>
        {films.map((film) =>
          <article key={film.id}>
            {/* <img src="../src/tmdb.js/" + {film.poster_path}></img> */}
            <p>{ film.title }</p>
            <p>{ film.release_date }</p>
          </article>)
        }
      </div>
    )
  }
}

export default FilmListing;
