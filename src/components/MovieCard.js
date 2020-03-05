import React from 'react';
import {Link} from 'react-router-dom';
import {Card} from 'antd';



class MovieCard extends React.Component {

  state = {
    showMore: false
  }

  handleClick = () => {
      this.setState({
          showMore: !this.state.showMore
      })
  }



  render() {
    let movie = this.props.movie
    const gridStyle = {
        // height: '27rem',
        textAlign: 'center',
    };

    return (
  

        <Card
            style={gridStyle}
            cover={<img className="movie-image" alt={movie.title} src={movie.image}/>}
            hoverable={true}
            actions={[<Link to={`/movies/${movie.id}`}>More Info</Link>]}
            >
            <Card.Meta title={movie.title} description={
                <>
                    <p>{movie.release_year}</p>
                    <p id="description">{movie.description}</p>
                    
                </>
            } />
        </Card>
    )
  }

}


export default MovieCard;