import React from 'react';
import App from '../App';
import {Route, Link} from 'react-router-dom';
import Cart from './Cart';


class NavBar extends React.Component {

   state = {
       viewCart: false
   }

   showModal = (e) => {
       this.setState({
           viewCart: !this.state.viewCart
       })
   }

  

    render(){
        return (
            <div id="header">
                    <h1>HANX!</h1>
               
                    <Link to='/movies'>Movies</Link>

                    <Link to='/bio'>Bio</Link>

                    <Link to='/items'>Items</Link>
                
                
                <Cart viewCart={this.state.viewCart} onClose={this.showModal}/>
                <button id="cart-button" onClick={e => {this.showModal()}}>View Cart</button>
            </div>
        )
    }
}

export default NavBar;