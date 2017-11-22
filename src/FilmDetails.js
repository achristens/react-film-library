import React, { Component } from 'react';

class FilmDetails extends Component{
  render(){
    const films = this.props.filmList

    return(
      <div className="film-details">
        <h1 className="section-title">DETAILS</h1>
        {/* {films.map((film, index) =>
          <li key={index}>{film.title}</li>)
        } */}

      </div>
    )
  }
}

export default FilmDetails
