import React from 'react';

// import './App.css';
import MovieContainer from './components/MovieContainer';
import ItemContainer from './components/ItemContainer';


class App extends React.Component {

 

  render() {
    return (
      <div>
        <h1>Hello from App</h1>
        <ItemContainer />
        <MovieContainer />
      </div>
      )
  }

}


export default App;
