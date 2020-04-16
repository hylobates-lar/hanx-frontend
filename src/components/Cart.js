import React from 'react';
import {Avatar, Drawer, List, message, Button} from 'antd';
import {DeleteOutlined} from '@ant-design/icons';
import {withRouter} from 'react-router-dom'


class Cart extends React.Component {

    onClose = (e) => {
        this.props.onClose && this.props.onClose(e);
    }

    deleteFromCart = (id) => {
        const foundCartItem = this.props.currentUser.carts_items.find(cartItem => cartItem.item_id === id)
        console.log(foundCartItem.id)
        fetch(`https://hanx-api.herokuapp.com/carts_items/${foundCartItem.id}`, {
            method: 'DELETE',
            })
            .then(r => r.json())
            .then((cartData) => {
                this.props.setCurrentUser(cartData)
                message.success(`This item has been deleted from your cart`, 2)   
            })
    }

    checkout = () => {
        console.log("CART", this.props.currentUser.cart)
        fetch(`https://hanx-api.herokuapp.com/carts/${this.props.currentUser.cart.id}`, {
            method: 'DELETE',
            })
            .then(r => r.json())
            .then((cartData) => {
                message.loading("T.Hanx for your order! Now Processing", 2)
                // pretend like we are completing the order
                setTimeout(() => {
                    this.props.setCurrentUser(cartData)
                    this.onClose()
                    this.props.history.push('/order-success')  
                }, 2100)  
            })
    }

    cartFooter = () => {
        const subtotal = this.props.currentUser.items.reduce((total, item) => (
            total + item.price
        ), 0)
        return (
        <div>
            <p>Subtotal: ${subtotal.toLocaleString()}</p>
            <Button type="primary" block onClick={this.checkout}>Checkout</Button>
        </div>
    )
    }

    render(){
        if(!this.props.viewCart){
            return null;
        }
        return (
            <Drawer
            title={`${this.props.currentUser.name}'s Cart`}
            placement="right"
            onClose={this.onClose}
            visible={this.props.viewCart}
            footer={this.cartFooter()}
            >
                <List
                    dataSource={this.props.currentUser.items}
                    renderItem={(item, i) => (
                        <List.Item>
                            <List.Item.Meta avatar={<Avatar shape="square" src={item.image} />} title={<p>{item.name} <DeleteOutlined  onClick={() => this.deleteFromCart(item.id)} /></p>} />
                        </List.Item>
                    )}
                />
            </Drawer>
        )
    }
}

export default withRouter(Cart);