import React from 'react';



class MovieCard extends React.Component {

  state = {
    showMore: false
  }

  handleClick = () => {
      this.setState({
          showMore: !this.state.showMore
      })
  }

  handleButton = () => {
      console.log("you clicked me")
  }

  render() {
    let movie = this.props.movie

    return (
        <div className="movie card" onClick={this.handleClick}> 

            <div className="image">
                <img src={movie.image} alt={movie.title} />
            </div>
            <div className="content">
                <div className="header">{movie.title}</div>
            </div>
            {this.state.showMore ? 
                <div className="extra content">
                    <p>{movie.release_year}</p>
                    <p>{movie.description}</p>
                    <button onClick={this.handleButton}>More Info</button>
                </div>
                : null }
        </div>
    )
  }

}


export default MovieCard;