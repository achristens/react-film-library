import React, { Component } from 'react';

class Fave extends Component{

  constructor(props){
    super()
    // this.state = {
    //   isFave: false,
    // }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.stopPropagation()
    console.log("handling Fave click!")
    this.props.onFaveToggle()
    // this.setState({
    //   isFave: !this.state.isFave
    // })

  }

  render(){

    return(
      <div onClick={this.handleClick} className={"film-row-fave " + (this.props.isFave ? 'remove_from_queue' : 'add_to_queue')}>
        <i className="material-icons">add_to_queue</i>
      </div>
    )
  }
}

export default Fave;
