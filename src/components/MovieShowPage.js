import React from 'react';
import MovieContainer from './MovieContainer';
import {Route, Link} from 'react-router-dom';

class MovieShowPage extends React.Component {

    state = {
        movieRendered: ""
    }

    componentDidMount () {
        fetch(`http://localhost:3000/movies/${this.props.match.params.id}`)
        .then(r => r.json())
        .then(movieData => {
            this.setState({
                movieRendered: movieData
            })
        })
        
    }

    render () {
        let movie = this.state.movieRendered
        console.log(movie)
        return ( 
            <div>  
                <h1>{movie.title}</h1>

                <div className="movie-show">
                    <img className="movie-image" src={movie.image} alt={movie.title} />
                
                    <div className="content">
                        <p>Release Year: {movie.release_year}</p>
                        <p>Director: {movie.director}</p>
                        <p>Summary: {movie.storyline}</p>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/bLvqoHBptjg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
                        <Link to='/movies'>Back to Movies</Link>
                    </div>
                </div>
                
        </div>
        )
    }
}

export default MovieShowPage;