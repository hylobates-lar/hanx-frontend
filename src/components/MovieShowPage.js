import React from 'react';
import {Link} from 'react-router-dom';
import {Card, Col, Row, Typography} from 'antd';

class MovieShowPage extends React.Component {

    state = {
        movieRendered: ""
    }

    componentDidMount () {
        fetch(`https://hanx-api.herokuapp.com/movies/${this.props.match.params.id}`)
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
                <Row className="movie-show" gutter={64}>
                    <Col xs={24} md={{offset: 2, span: 5}}>
                        <Card bordered={false} cover={<img alt={movie.title} src={movie.image}/>}/>
                    </Col>
                    <Col xs={24} md={14}>
                        <Typography.Title id="movie-title">{movie.title}</Typography.Title>
                        <p><b>Release Year:</b> {movie.release_year}</p>
                        <p><b>Director:</b> {movie.director}</p>
                        <p><b>Summary:</b> {movie.storyline}</p>
                        <Link to='/movies'>Back to Movies</Link>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{span: 16, offset: 4}}>
                    <iframe width="896" height="504" title={movie.title} src={movie.trailer} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
                    </Col>
                </Row>

            </div>
        )
    }
}

export default MovieShowPage;