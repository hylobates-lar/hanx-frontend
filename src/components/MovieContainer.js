import React from 'react';
import MovieCard from './MovieCard';


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

  render() {
    return (
        <div> 
            <h2>Hello from MovieContainer</h2>
            {this.state.movies.map(movie => {
                return < MovieCard movie={movie} key={movie.id} />    
            })}
        </div>
    )
  }

}


export default MovieContainer;