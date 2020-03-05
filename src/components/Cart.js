import React from 'react';
import {Avatar, Drawer, List, message} from 'antd';
import {DeleteOutlined} from '@ant-design/icons';


class Cart extends React.Component {

    onClose = (e) => {
        this.props.onClose && this.props.onClose(e);
    }

    // deleteFromCart = (id) => {
        // this.props.currentUser.carts_items.find(function (element) {
        // console.log(id)
       
        // this.props.currentUser.carts_items.map(cartItem => {
            // cartItem.item.id === id ? (cartsItemId = cartItem.id) : (null)
           
            // console.log(e.target)
        //         if (element.id === id) {
                    
        //         fetch(`http://localhost:3000/carts_items/${id}`, {
        //             method: 'DELETE',
        //         })
        //         .then(r => r.json())
        //         .then((cartData) => {
        //             this.props.setCurrentUser(cartData)   
        //         })
        //     } 
        
        // })
    // }

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
            title="Cart"
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
            // <div id="modal" >
            //     <div id="cart">
            //     <h2>{this.props.currentUser.name}' Cart</h2>
                
            //     {this.props.currentUser.items.map((item, i) => 
            //         <p key={i}>{item.name} <button id={item.id} onClick={this.deleteFromCart}>X</button></p>)}
            //     <div className="actions">
            //         <Button className="toggle-button" onClick={e => {this.onClose(e)}}>Close</Button>
            //     </div>
            //     </div> 
            // </div>  
                            
           
        )
    }
}

export default Cart;