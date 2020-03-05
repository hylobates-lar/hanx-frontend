import React from 'react';
import {Avatar, Drawer, List, message} from 'antd';
import {DeleteOutlined} from '@ant-design/icons';


class Cart extends React.Component {

    onClose = (e) => {
        this.props.onClose && this.props.onClose(e);
    }

    

    deleteFromCart = (id) => {
        const foundCartItem = this.props.currentUser.carts_items.find(cartItem => cartItem.item_id === id)
        console.log(foundCartItem.id)
        fetch(`http://localhost:3000/carts_items/${foundCartItem.id}`, {
            method: 'DELETE',
            })
            .then(r => r.json())
            .then((cartData) => {
                
                this.props.setCurrentUser(cartData)
                message.success(`This item has been deleted from your cart`)   
            })
      }


    render(){
        if(!this.props.viewCart){
            return null;
        }
        return (
            
            <Drawer
            title={`${this.props.currentUser.name}' Cart`}
            placement="right"
            width="400px"
            onClose={this.onClose}
            visible={this.props.viewCart}
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

export default Cart;