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
          <div className="film-row" key={film.id}>
              <figure className="film-poster">
                <img src={`https://image.tmdb.org/t/p/w780/${film.poster_path}`} alt={film.title}/>
              </figure>

            <p>{ film.title }</p>
            <p>{ film.release_date }</p>
          </div>)
        }
      </div>
    )
  }
}

export default FilmListing;
