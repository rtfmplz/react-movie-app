import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

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

class App extends Component {

  // state는 React Component 안의 object
  // state가 바뀔 때 마다, Update 가 발생한다.
  state = {
  }

  componentDidMount() {
    console.log("componentDidMount")
    setTimeout( () => {
      // state는 setState()를 이용해서 update해야 LifeCycle의 메서드들이 정상 호출 된다.
      this.setState({
        movies: [
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
            poster: "http://www.impawards.com/2017/posters/star_wars_the_last_jedi_ver58.jpg"
          },
          {
            title: "007",
            poster: "https://66.media.tumblr.com/72eea0fd18af175c7e5ac365156f2220/tumblr_ourocddaad1qc2maxo1_500.png"
          },
          {
            title: "Dark Knight",
            poster: "https://i.ebayimg.com/images/g/BYwAAOSwmfhX5n5v/s-l300.jpg"
          }
        ]
      })
    }, 3000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map( (movie, index) => {
      console.log(index);
      // 엘리먼트가 많은 경우 key를 넣어 줘야 함
      return < Movie title={movie.title} poster={movie.poster} key={index}/>
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading ..."}
      </div> 
    );
  }
}

export default App;
