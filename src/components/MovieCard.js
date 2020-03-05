import React from 'react';
import MovieShowPage from './MovieShowPage';
import {Route, Link} from 'react-router-dom';
import {Button, Card} from 'antd';



class MovieCard extends React.Component {

  state = {
    showMore: false
  }

  handleClick = () => {
      this.setState({
          showMore: !this.state.showMore
      })
  }

//   handleButton = () => {
//       console.log("you clicked me")
     
//   }

  render() {
    let movie = this.props.movie
    const gridStyle = {
        // height: '27rem',
        textAlign: 'center',
    };

    return (
        // <div className="movie-card" onClick={this.handleClick}> 

        //     <div >
        //         <img className="movie-image" src={movie.image} alt={movie.title} />
        //     </div>
        //     <div className="content">
        //         <div className="header">{movie.title}</div>
        //     </div>
        //     {this.state.showMore ? 
        //         <div className="extra content">
        //             <p>{movie.release_year}</p>
        //             <p>{movie.description}</p>
        //             <Link to={`/movies/${movie.id}`}>More Info</Link>
        //         </div>
        //         : null }
        // </div>

        <Card
            style={gridStyle}
            cover={<img className="movie-image" alt={movie.title} src={movie.image}/>}
            hoverable={true}
            actions={[<Link to={`/movies/${movie.id}`}>More Info</Link>]}
            >
            <Card.Meta title={movie.title} description={
                <>
                    <p>{movie.release_year}</p>
                    <p>{movie.description}</p>
                    
                </>
            } />
        </Card>
    )
  }

}


export default MovieCard;