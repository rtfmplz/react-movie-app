import React from 'react';
import './App.css';
import Movie from './Movie';
import axios from 'axios';


/** 
 * React Component LifeCycle (Deprecated 된 것들이 많으므로 실제 사용시 확인 필요)
 * 
 * @see https://ko.reactjs.org/docs/react-component.html
 * 
 * Mount
 * 
 *    constructor(): Component가 생성되었을때 호출
 *    -> static getDerivedStateFromProps()
 *    -> render(): view를 만들어주는 함수; 구현돼야하는 유일한 메서드
 *    -> componentDidMount(): Component가 마운트된 직후, 즉 트리에 삽입된 직후에 호출
 * 
 * Update
 * 
 *    static getDerivedStateFromProps()
 *    -> shouldComponentUpdate()
 *    -> render()
 *    -> getSnapshotBeforeUpdate()
 *    -> componentDidUpdate(): Component가 업데이트 된 후 호출되며 preProps와 preState 조회가 가능
 * 
 * Unmount
 * 
 *    componentWillUnmount(): Component가 Destroy된 후 호출된다.
 */

const MOVIE_LIST = "https://yts-proxy.now.sh/list_movies.json?sort_by=rating";

class App extends React.Component {

  // state는 React Component 안의 object
  // state가 바뀔 때 마다, Update 가 발생한다.
  state = {
  }

  _getMovies = async () => {
    // await 키워드는 async 함수 내에서만 사용될 수 있으며 동기적으로 프로미스를 기다릴 수 있도록 해준다.
    // 만약 async 밖에서 프로미스를 사용하면 여전히 then 콜백을 사용해야 한다.
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    // setState()를 이용해야 lifeCycle 함수들이 호출, render()가 호출된다.
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
        {movies ? this._renderMovies() : "Loading..."}
      </div>
    );
  }
}

export default App;
