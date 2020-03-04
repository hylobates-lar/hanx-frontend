import React from 'react';
import App from '../App';
import {Route, Link} from 'react-router-dom';


class Cart extends React.Component {

  
  

    onClose = (e) => {
        this.props.onClose && this.props.onClose(e);
    }

    deleteFromCart = (e) => {
       
        this.props.currentUser.carts_items.map(cartItem => {
            // cartItem.item.id === id ? (cartsItemId = cartItem.id) : (null)
            // debugger
            console.log(cartItem)
            //     if (cartItem.id === e.target.id) {
                    
            //     fetch(`http://localhost:3000/carts_items/${cartItem.id}`, {
            //         method: 'DELETE',
            //     })
            //     .then(r => r.json())
            //     .then((cartData) => {
            //         this.props.setCurrentUser(cartData)   
            //     })
            // } 
        
        })
    }

    render(){
       
        if(!this.props.viewCart){
            return null;
        }
        return (
            <div id="modal" >
                <div id="cart">
                <h2>{this.props.currentUser.name}' Cart</h2>
                
                {this.props.currentUser.items.map(item => 
                    <p>{item.name} <button id={item.id} onClick={this.deleteFromCart}>X</button></p>)}
                <div className="actions">
                    <button className="toggle-button" onClick={e => {this.onClose(e)}}>Close</button>
                </div>
                </div> 
            </div>  
                            

           
        )
    }
}

export default Cart;