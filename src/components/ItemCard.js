import React from 'react';



class ItemCard extends React.Component {

  state = {
    showMore: false
  }

  handleClick = () => {
      this.setState({
          showMore: !this.state.showMore
      })
  }



  render() {
    let item = this.props.item

    return (
        <div className="item card" onClick={this.handleClick}> 

            <div className="image">
                <img src={item.image} alt={item.name} />
            </div>
            <div className="content">
                <div className="header">{item.name}</div>
            </div>
            {this.state.showMore ? 
                <div className="extra content">
                    <p>Price: ${item.price}</p>
                    <p>{item.description}</p>
                </div>
                : null }
        </div>
    )
  }

}


export default ItemCard;