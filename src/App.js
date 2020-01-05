import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

//import axios from 'axios';

//https://yts.am/api/v2/list_movies.json?sort_by=rating


/** 
 * React Component LifeCycle (Deprecated 된 것들이 많으므로 실제 사용시 확인 필요)
 * 
 * Create
 * 
 *    constructor(): 컴포넌트가 생성되었을때 호출
 *    -> componentWillMount(): render() 전에 호출
 *    -> render(): view를 만들어주는 함수
 *    -> componentDidMount(): render() 후에 호출
 * 
 * Update
 * 
 *    componentWillReceiveProps(): Component가 새로운 Props를 받게 됐을때 호출
 *    -> shouldComponentUpdate(): Component의 Props나 State 변경 시 호출; default는 true이며 조건에 따라 render()를 호출
 *    -> componentWilUpdate(): shouldComponentUpdate에서 true를 return할 시 호출
 *    -> render() 
 *    -> componentDidUpdate(): Component가 업데이트 된 후 호출되며 preProps와 preState 조회가 가능
 * 
 * Destroy
 * 
 *    componentWillUnmount(): Component가 Destroy된 후 호출된다.
 */

const MOVIE_LIST = "https://yts-proxy.now.sh/list_movies.json?sort_by=rating";

class App extends Component {

  // state는 React Component 안의 object
  // state가 바뀔 때 마다, Update 가 발생한다.
  state = {
  }

  _callApi = () => {
    // return Promise<Response> by AJAX
    return fetch(MOVIE_LIST)
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))

    // using axios library
    // axios.get(MOVIE_LIST)
    // .then(response => response.data)
    // .then(response => console.log(response))
    // .catch(err => console.log(err))
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map( movie => {
      // 엘리먼트가 많은 경우 key를 넣어 줘야 함
      return < Movie 
        key={movie.id}
        title={movie.title_english}
        poster={movie.medium_cover_image}
        genres={movie.genres}
        synopsis={movie.synopsis}
        />
    })
    return movies
  }

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
