import React, { Component } from 'react';
import FilmRow from './FilmRow';
import Fave from './Fave.js'

class FilmListing extends Component{

  handleFaveClick(filter){
    console.log("Setting filter to ${filter}")
  }

  render(){
    const films = this.props.filmList
    let filmRows = films.map((film, key)=> (
      <FilmRow key={film.id} film={film}/>
    ))

    return(
      <div className="film-list">
        <h1 className="section-title">
          FILMS
        </h1>

        <div className="film-list-filters">
          <div className="film-list-filter">
            ALL
            <span className="section-count">{films.length}</span>
          </div>
          <div className="film-list-filter">
            FAVES
            <span className="section-count">0</span>
          </div>
        </div>

        {filmRows}
      </div>
    )
  }
}

export default FilmListing;
