import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state={
      text: 'Type Here',
    }
  }

  handleChange(val){
    this.setState ({
      text: val
    })
  }

  render() {
    return (
      <div className="App">
        <input onChange={(event)=> this.handleChange(event.target.value)}></input>
        <p>{JSON.stringify(this.state.text)}</p>
      </div>
    );
  }
}

export default App;
