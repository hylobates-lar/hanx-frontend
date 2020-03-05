import React from 'react';
import {Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';

import './App.css';
import MovieContainer from './components/MovieContainer';
import ItemContainer from './components/ItemContainer';
import Bio from './components/Bio';
import MovieShowPage from './components/MovieShowPage';
import Cart from './components/Cart';
import Login from './components/Login';
import { withRouter } from 'react-router';
import {Layout, Menu, Typography} from 'antd';
const {Header, Content} = Layout;


class App extends React.Component {

  state = {
    currentUser: {}
  }

  setCurrentUser = (data) => {
    this.setState({
      currentUser: data
    })
  }

  // componentDidMount = () => {
    // let user = {name: "Tom Hanks"}
  //   fetch("http://localhost:3000/login", {
  //     method: "POST",
  //     headers: {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json'
  //     },
  //     body: JSON.stringify(user)
  //   })
  //   .then(r => r.json())
  //   .then(data => this.setCurrentUser(data))
  // }



  render() {
    return (
      
      <div className='app'>
        <NavBar currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser}/>
        <Switch>
          <Route exact path='/login' render={(props) => <Login setCurrentUser={this.setCurrentUser} currentUser={this.state.currentUser} routerProps={props} />} />
          <Route exact path='/cart' render={() => {
            return this.state.currentUser ? (
              <Cart currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} />
            ) : (
              <Login setCurrentUser={this.setCurrentUser} currentUser={this.state.currentUser} />
            )
          }} />
          <Route exact path='/movies'  component={MovieContainer} />
          <Route exact path='/bio'  component={Bio} />
          <Route exact path='/items'  render={() => {
            return this.state.currentUser ? (
              <ItemContainer currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser}/>
              ) : (<ItemContainer />) 
          }} />
          <Route exact path='/movies/:id' component={MovieShowPage}/>
        </Switch>
  
      </div>
      )
  }

}


export default withRouter(App);
