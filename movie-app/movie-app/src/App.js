import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const cars = ["Saab", "Volvo", "BMW"];
const obj = {foo: 'bar'};

const movies = [
  {
    title: "Matrix",
    poster: "https://imgc.allpostersimages.com/img/posters/the-matrix_u-L-F4S5W20.jpg?src=gp&w=300&h=375"
  },
  {
    title: "Mission Impossible",
    poster: "https://vignette.wikia.nocookie.net/missionimpossible/images/c/cf/Mission_Impossible_Fallout_poster.jpg/revision/latest/scale-to-width-down/323?cb=20180202011058"
  },
  {
    title: "Star Wars",
    poster: "https://lumiere-a.akamaihd.net/v1/images/sb_payoff_1-sht_v6_lg_tm_lg_1db3a551.jpeg?region=0%2C625%2C1688%2C957"
  },
  {
    title: "007",
    poster: "https://66.media.tumblr.com/72eea0fd18af175c7e5ac365156f2220/tumblr_ourocddaad1qc2maxo1_500.png"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map( movie => 
          < Movie title={movie.title} poster={movie.poster} />
        )}
      </div>
    );
  }
}

export default App;
