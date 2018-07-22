import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

/**
 * stateless component
 * 
 *    - render(), update 등 LifeCycle이 필요없는 component
 *    - just return html code
 */

function Movie({title, poster, genres, synopsis}) {
  return (
    // className == class in css
    <div className = "Movie">
      <div className = "Movie__Columns">
        <MoviePoster poster={poster} alt={title} />
      </div>
      <div className = "Movie__Columns">
        <h1>{title}</h1>
        <div className = "Movie__Genres">
          {genres.map( (genre, index) => {
            return <MovieGenre genre={genre} key={index} />
          })}
        </div>
        <p className = "Movie__Synopsis">
          {synopsis}
        </p>
      </div>
    </div> 
  );
}

/**
 * propTypes를 override 해서 props의 type을 명시 할 수 있다.
 * isRequired: 필수 parameter를 정의할 수 있다.
 */ 
Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
}

function MovieGenre({genre}) {
  return (
    <span className = "Movie__Genre">{genre}</span>
  );
}

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
}

function MoviePoster({poster}) {
  return (
    <img src={poster} alt="Movie Poster" />
  );
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired
}

export default Movie;
