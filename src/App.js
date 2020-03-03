import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import NavBar from './components/NavBar';

import './App.css';
import MovieContainer from './components/MovieContainer';
import ItemContainer from './components/ItemContainer';
import Bio from './components/Bio';
import MovieShowPage from './components/MovieShowPage';
import Cart from './components/Cart';


class App extends React.Component {

  state = {
    user: {
      items: [],
      name: "",
      id: 0
    },
    token: ""
  }

  componentDidMount() {
    if (localStorage.getItem("token")) {
      fetch("http://localhost:3000/persist", {
        headers: {
          "Authorization": `Bearer ${localStorage.token}`
        }
      })
      .then(r => r.json())
      .then(this.handleResp)
    }
  }

  addOneItem = (item) => {

  }

  handleResp = (resp) => {
    if (resp.user) {
      localStorage.token = resp.token
      this.setState(resp, () => {
        this.props.history.push("/")
      })
    } else {
      alert(resp.error)
    }
  }

  handleLoginSubmit = (userInfo) => {
    return fetch (`http://localhost:3000/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(this.handleResp)
  }

  handleRegisterSubmit = (userInfo) => {
    return fetch (`http://localhost:3000/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(this.handleResp)
  }

  render() {
    return (
      
      <div className='app'>
        <NavBar />
        <Switch>
          <Route exact path='/movies'  component={MovieContainer} />
          <Route exact path='/bio'  component={Bio} />
          <Route exact path='/items'  component={ItemContainer} />
          <Route exact path='/movies/:id' component={MovieShowPage}/>
        </Switch>
        <Cart />

      </div>
      )
  }

}


export default withRouter(App);
