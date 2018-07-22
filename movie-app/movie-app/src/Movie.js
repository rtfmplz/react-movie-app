import React, { Component } from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

class Movie extends Component {
  
  /**
   * static propTypes = { ... } 를 override 해서 props의 type을 명시 할 수 있다.
   * isRequired: 필수 parameter를 정의할 수 있다.
   */ 
  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  }
  
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        < MoviePoster poster={this.props.poster}/>
      </div> 
    );
  }
}

class MoviePoster extends Component {

  static propTypes = {
    poster: PropTypes.string.isRequired,
  }

  render() {
    return (
      <img src={this.props.poster} alt="Movie Poster" />
    )
  }
}

export default Movie;
