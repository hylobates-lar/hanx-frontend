import React from 'react';
import {Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';

import './App.css';
import MovieContainer from './components/MovieContainer';
import ItemContainer from './components/ItemContainer';
import OrderSuccess from './components/OrderSuccess';
import Bio from './components/Bio';
import MovieShowPage from './components/MovieShowPage';
import Cart from './components/Cart';
import Login from './components/Login';
import { withRouter } from 'react-router';
import {Layout} from 'antd';


class App extends React.Component {

    state = {
        currentUser: {}
    }

    setCurrentUser = (data) => {
        this.setState({
        currentUser: data
        })
    }


    render() {
        return (
        
        <div className='app'>
            <NavBar currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser}/>
            <Layout.Content>
            <Switch>
            <Route exact path='/login' render={(props) => <Login setCurrentUser={this.setCurrentUser} currentUser={this.state.currentUser} routerProps={props} />} />
            <Route exact path='/cart' render={() => {
                return this.state.currentUser ? (
                <Cart currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} />
                ) : (
                <Login setCurrentUser={this.setCurrentUser} currentUser={this.state.currentUser} />
                )
            }} />
            <Route exact path='/order-success' component={OrderSuccess} />
            <Route exact path='/movies'  component={MovieContainer} />
            <Route exact path='/'  component={Bio} />
            <Route exact path='/items'  render={() => {
                return this.state.currentUser ? (
                <ItemContainer currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser}/>
                ) : (<ItemContainer />) 
            }} />
            <Route exact path='/movies/:id' component={MovieShowPage}/>
            </Switch>
            </Layout.Content>
            <div id="footer">
                <h4>created by <a href="https://github.com/hylobates-lar/hanx-frontend">@hylobates-lar + @radbahi</a> // 2020 </h4>
            </div>
        </div>
        )
    }

}


export default withRouter(App);
