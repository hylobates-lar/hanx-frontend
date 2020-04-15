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
        <div>
            <Typography.Title id="logo" style={{backgroundColor:'#20B2AA'}}  >HANX!</Typography.Title>
            <Menu className="nav-bar" mode="horizontal" defaultSelectedKeys={['2']} style={{backgroundColor:'#20B2AA'}}>
                <Menu.Item key="movies"><Link to='/movies'>Movies</Link></Menu.Item>
                <Menu.Item key="bio"><Link to='/bio'>Bio</Link></Menu.Item>
                <Menu.Item key="merch"><Link to='/items'>Merch</Link></Menu.Item>
                {(this.props.currentUser.name === undefined) ? <Menu.Item key="login"><Link to='/login'>Login/Signup</Link></Menu.Item> : <Menu.Item key="login"><Link to='/login'>Logout</Link></Menu.Item>}                    
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