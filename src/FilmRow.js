import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave.js'

class FilmRow extends Component{

  constructor(props){
    super()
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.stopPropagation()
    this.props.handleDetailsClick()
  }

  render(){
    const film = this.props.film

    return(
      <div className="film-row" onClick={this.handleClick}>
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
