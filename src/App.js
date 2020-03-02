import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import NavBar from './components/NavBar';

// import './App.css';
import MovieContainer from './components/MovieContainer';
import ItemContainer from './components/ItemContainer';
import Bio from './components/Bio';
import MovieShowPage from './components/MovieShowPage';


class App extends React.Component {

 

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

      </div>
      )
  }

}


export default App;
