import React, { Component } from 'react';
import Nav from './components/Nav.js'
import ImageContainer from './components/Images/ImageContainer.js'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
          <Nav/>
          <ImageContainer />
      </div>
    );
  }
}


export default App
