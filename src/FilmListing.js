import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component{

  constructor(props){
    super()
    this.state = {
      filter: 'all'
    }
    this.handleFilterClick = this.handleFilterClick.bind(this);
  }

  handleFilterClick(e, filter){
    let faves = document.getElementById('faves-div')
    let all   = document.getElementById('all-div')

    if (e.target.innerText.startsWith('ALL') === true){
      e.target.className = "film-list-filter is-active";
      faves.className = "film-list-filter"
    } else if (e.target.innerText.startsWith("FAVES") === true){
      e.target.className = "film-list-filter is-active";
      all.className = "film-list-filter"
    }
    this.setState({
      filter: filter
    })
  }

  render(){
    if (this.state.filter === 'faves'){
      var films = this.props.faves
    } else {
      var films = this.props.filmList
    }

    const filmRows = films.map((film) => (
      <FilmRow key={film.id} film={film} onFaveToggle={() => this.props.onFaveToggle(film)} handleDetailsClick={() => this.props.handleDetailsClick(film)} isFave={ this.props.faves.includes(film) }/>
    ))
    return(
      <div className="film-list">
        <h1 className="section-title">
          FILMS
        </h1>

        <div className="film-list-filters">
          <div id="all-div" className="film-list-filter is-active" onClick={(e) => this.handleFilterClick(e, 'all')}>
            ALL
            <span className="section-count">{this.props.filmList.length}</span>
          </div>
          <div id="faves-div" className="film-list-filter" onClick={(e) => this.handleFilterClick(e, 'faves')}>
            FAVES
            <span className="section-count">{this.props.faves.length}</span>
          </div>
        </div>

        {filmRows}
      </div>
    )
  }
}

export default FilmListing;
