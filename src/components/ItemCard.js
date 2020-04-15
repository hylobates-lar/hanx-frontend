import React from 'react';
import {withRouter} from 'react-router-dom';
import {Button, Card, message} from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';


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
    let user = this.props.currentUser
    let item = this.props.item
    let cart = user.cart
    
    if (user.id !== undefined) {
        let newItem = {item_id: item.id, cart_id: cart.id}
        fetch(`https://hanx-api.herokuapp.com/carts_items`, {
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
            message.success(`${item.name} has been added to your cart`, 2)
        })
    } else {
        this.props.history.push('/login')
    }  
  }



  render() {
    console.log(this.props.currentUser)
    let item = this.props.item
    const gridStyle = {
        textAlign: 'center',
    };
    return (
  
        <Card
            style={gridStyle}
            cover={<img className="item-image" alt={item.name} src={item.image}/>}
            hoverable={true}
            actions={[
                <span onClick={this.addToCart}>Add To Cart <ShoppingCartOutlined /></span>
            ]}
            >
            <Card.Meta title={item.name} description={this.state.showMore ? (
                <>
                    <p>Price: ${item.price}</p>
                    <p>{item.description}</p>
                    <Button onClick={this.handleClick}>Show Less</Button>
                </>
            ) : (
                <Button onClick={this.handleClick}>Show More</Button>
            )} />
        </Card>
    )
  }

}


export default withRouter (ItemCard);