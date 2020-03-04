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

  addToCart = () => {
    
    let item = this.props.item
    let cart = this.props.currentUser.cart
    let newItem = {item_id: item.id, cart_id: cart.id}

    fetch(`http://localhost:3000/carts_items`, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(newItem)
    })
    .then(r => r.json())
    .then((cartData) => {
        this.props.setCurrentUser(cartData)   
    })
    
  }

    // sendCartData = () => {
    //     this.props.setCartItems(this.props.currentcartData.items)
    // }



  render() {
    let item = this.props.item

    return (
        <div className="item-card" > 

            <div className="image-container" >
                <img className="item-image" src={item.image} alt={item.name} onClick={this.handleClick}/>
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
            <button onClick={this.addToCart}>Add to Cart</button>
        </div>
    )
  }

}


export default ItemCard;