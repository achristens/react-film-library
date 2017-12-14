import React, { Component } from 'react';

class Fave extends Component{

  handleClick(e) {
    e.preventDefault()
    console.log("handling Fave click!")
  }

  render(){
    return(
      <div onClick={this.handleClick} className="film-row-fave add_to_queue">
        <i className="material-icons">add_to_queue</i>
      </div>
    )
  }
}

export default Fave;
