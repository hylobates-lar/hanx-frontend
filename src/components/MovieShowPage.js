import React from 'react';

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
            <div className="movie show"> 
            <h1>Movie Show Page</h1>

            <div className="image">
                <img src={movie.image} alt={movie.title} />
            </div>
            
                <div className="header">{movie.title}</div>
           
                <div className="content">
                    <p>{movie.release_year}</p>
                    <p>Director: {movie.director}</p>
                    <p>Summary: {movie.storyline}</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/bLvqoHBptjg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>/>   
                </div>
                
        </div>
        )
    }
}

export default MovieShowPage;