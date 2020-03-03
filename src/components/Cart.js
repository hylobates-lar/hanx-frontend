import React from 'react';
import App from '../App';
import {Route, Link} from 'react-router-dom';


class Cart extends React.Component {

    state = {
        cartItems: []
    }

    onClose = (e) => {
        
        this.props.onClose && this.props.onClose(e);
    }

    render(){
        if(!this.props.viewCart){
            return null;
        }
        return (
            <div id="modal" >
                <div id="cart">
                <h2>This is the Cart</h2>
                <p>this is dummy text</p>
                <div class="actions">
                    <button class="toggle-button" onClick={e => {this.onClose(e)}}>Close</button>
                </div>
                </div> 
            </div>  
                            

           
        )
    }
}

export default Cart;