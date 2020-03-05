import React from 'react';
import {Link} from 'react-router-dom';
import Cart from './Cart';
import { Badge, Button, Menu, Typography } from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons';


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
            // <div id="header">
            //         <h1>HANX!</h1>
            //         <Link to='/movies'>Movies</Link>
            //         <Link to='/bio'>Bio</Link>
            //         <Link to='/items'>Items</Link>
            //         <Link to='/login'>Login</Link>
            //     <Cart viewCart={this.state.viewCart} onClose={this.showModal} currentUser={this.props.currentUser}/>
            //     <button id="cart-button" onClick={e => {this.showModal()}}>View Cart</button>
            // </div>
            <>
                <Menu style={{padding: '1em 0'}} mode="horizontal">
                    <Menu.Item key="title"><Typography.Title>HANX!</Typography.Title></Menu.Item>
                    <Menu.Item key="movies"><Link to='/movies'>Movies</Link></Menu.Item>
                    <Menu.Item key="bio"><Link to='/bio'>Bio</Link></Menu.Item>
                    <Menu.Item key="merch"><Link to='/items'>Merch</Link></Menu.Item>
                    {(this.props.currentUser.name === undefined) ? <Menu.Item key="login"><Link to='/login'>Login/Signup</Link></Menu.Item> : <Menu.Item key="login"><Link to='/login'>Logout</Link></Menu.Item>}                    
                    <Badge style={{ backgroundColor: '#52c41a' }} count={this.props.currentUser && this.props.currentUser.items ? this.props.currentUser.items.length : null}>
                        <Button onClick={this.showModal}>Cart <ShoppingCartOutlined /></Button>
                    </Badge>
                </Menu>
                <Cart viewCart={this.state.viewCart} onClose={this.showModal} currentUser={this.props.currentUser} setCurrentUser={this.props.setCurrentUser}/>
            </>
        )
    }
}

export default NavBar;