import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={ "https://vignette.wikia.nocookie.net/vsbattles/images/b/b9/Ac.jpg/revision/latest?cb=20160510013432" } />
      </div>
    );
  }
}

export default App;