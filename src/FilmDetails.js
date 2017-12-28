import React from 'react';
// const backdropUrl = `https://image.tmdb.org/t/p/w1280/${props.current.backdrop_path}`
// const posterUrl = `https://image.tmdb.org/t/p/w780/${props.current.poster_path}`

function FilmDetails(props) {
    return(

      <div className="film-details">
        <h1 className="section-title">DETAILS</h1>
        <div className="film-detail">
        <p>
          <i className="material-icons">subscriptions</i>
          <span>No film selected</span>
        </p>
        </div>
      </div>
    )
}

export default FilmDetails
