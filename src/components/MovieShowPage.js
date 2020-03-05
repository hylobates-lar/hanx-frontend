import React from 'react';
import MovieContainer from './MovieContainer';
import {Link} from 'react-router-dom';
import {Layout, Card, Content, Typography} from 'antd';

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

                <div className="movie-show">
                    <div id="movie-poster">
                        <img className="movie-show-image" src={movie.image} alt={movie.title} />
                        <Link to='/movies'>Back to Movies</Link>
                    </div>
                    {/* <Card
                        cover={<img className="movie-show-image" alt={movie.title} src={movie.image}/>}
                        hoverable={true}
                        >
                    </Card> */}
                    <div className="movie-show-content">
                    <Typography.Title id="movie-title">{movie.title}</Typography.Title>
                        <p><b>Release Year:</b> {movie.release_year}</p>
                        <p><b>Director:</b> {movie.director}</p>
                        <p><b>Summary:</b> {movie.storyline}</p>
                        <iframe width="896" height="504" src={movie.trailer} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
                    </div>
                </div>
                
            </div>
        )
    }
}

export default MovieShowPage;