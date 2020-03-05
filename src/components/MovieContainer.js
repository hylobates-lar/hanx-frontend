import React from 'react';
import MovieCard from './MovieCard';
import MovieShowPage from './MovieShowPage';
import {Col, Row} from 'antd';
import {Route, Switch, Link} from 'react-router-dom';


class MovieContainer extends React.Component {

  state = {
    movies: []
  }

  componentDidMount() {
     fetch("http://localhost:3000/movies")
        .then(r => r.json())
        .then(movieData => {
            this.setState({
                movies: movieData
            })
        }) 
  }

  movieToRender = (routerProps) => {
      let foundMovie = this.state.movies.find(movie => {
          return movie.id === routerProps.match.params.id
      })

      if (foundMovie){
          return <MovieShowPage movie={foundMovie} />
      } else {
          return null 
      }
  }

  render() {
    return (
        <div id="movie-container"> 
            
          <Row gutter={[48, 24]}>
            {this.state.movies.map((movie) => {
                return (
                    <Col key={movie.id} xs={8} lg={6}>
                        < MovieCard movie={movie} key={movie.id} /> 
                    </Col>
                )
            })}
            </Row>
            <Switch>
                <Route path="/movies/:id" render={this.movieToRender} />
            </Switch>
        </div>
    )
  }

}


export default MovieContainer;