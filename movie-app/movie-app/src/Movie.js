import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
  render() {
    return (
      <div>
        <h1>This is Movie.</h1>
        <MoviePoster />         
      </div>
    );
  }
}

class MoviePoster extends Component {
  render() {
    return (
      <img src="https://imgc.allpostersimages.com/img/posters/the-matrix_u-L-F4S5W20.jpg?src=gp&w=300&h=375" />
    )
  }
}

export default Movie;
