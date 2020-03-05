import React from 'react';
import App from '../App';
import {Route, Link} from 'react-router-dom';
import Cart from './Cart';
import { Layout, Badge, Button, Menu, Typography } from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons';
const { Header } = Layout;


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
         
        <div>
            {/* <div className="logo"><Typography.Title>HANX!</Typography.Title></div> */}
            <link href="https://fonts.googleapis.com/css?family=Bungee+Shade&display=swap" rel="stylesheet"></link>
            <Menu style={{ lineHeight: '64px' }} mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="title"><Typography.Title id="logo" >HANX!</Typography.Title></Menu.Item>
                <Menu.Item key="movies"><Link to='/movies'>Movies</Link></Menu.Item>
                <Menu.Item key="bio"><Link to='/bio'>Bio</Link></Menu.Item>
                <Menu.Item key="merch"><Link to='/items'>Merch</Link></Menu.Item>
                <Menu.Item key="login"><Link to='/login'>Login</Link></Menu.Item>
                <Badge style={{ backgroundColor: '#52c41a' }} count={this.props.currentUser && this.props.currentUser.items ? this.props.currentUser.items.length : null}>
                    <Button onClick={this.showModal}>Cart <ShoppingCartOutlined /></Button>
                </Badge>
            </Menu>
            <Cart viewCart={this.state.viewCart} onClose={this.showModal} currentUser={this.props.currentUser} setCurrentUser={this.props.setCurrentUser}/>
        </div>
        )
    }
}

export default NavBar;