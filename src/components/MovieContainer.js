import React from 'react';
import MovieCard from './MovieCard';
import MovieShowPage from './MovieShowPage';
import {Col, Row, Spin} from 'antd';
import {Route, Switch} from 'react-router-dom';


class MovieContainer extends React.Component {

    state = {
        movies: [],
        loading: true
    }

    componentDidMount() {
        fetch("http://localhost:3000/movies")
            .then(r => r.json())
            .then(movieData => {
                this.setState({
                    movies: movieData,
                    loading: false
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

    sortByTitle = () => {
        let sortedTitleMovies = this.state.movies.sort(function(a, b) {
            return a.title.localeCompare(b.title);
        });
        this.setState({
            movies: sortedTitleMovies
        })
    }

    sortByYear = () => {
        let sortedYearMovies = this.state.movies.sort(function(a, b) {
            return (a.release_year) - (b.release_year);
        });
        this.setState({
            movies: sortedYearMovies
        })
    }

    render() {
        return (
            <div id="movie-container">
                <div className="sort-buttons">
                    <button onClick={this.sortByTitle}>Sort by Title</button> <button onClick={this.sortByYear}>Sort by Year</button>
                </div>
                <Spin className="spinner" tip="Loading..." spinning={this.state.loading} />
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