import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

/**
 * stateless component
 * 
 *    - render(), update 등 LifeCycle이 필요없는 component
 *    - just return html code
 */

function Movie({title, poster}) {
  return (
    <div>
      <h1>{title}</h1>
      < MoviePoster poster={poster}/>
    </div> 
  );
}

/**
 * propTypes를 override 해서 props의 type을 명시 할 수 있다.
 * isRequired: 필수 parameter를 정의할 수 있다.
 */ 
Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
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
