import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

class App extends Component {
  constructor(){
    super();

    this.state = {
      userInput:"",
      tasks: []
    }
  }

  handleChange(val){
    this.setState({
        userInput: val
    })
  }

  addToList(task){
    

  }

  render() {
    return (
      

      <div className="App">
      <input onChange={this.handleChange(e.target.val)} type ="text">Enter new task</input>
      <button onClick={this.addToList(e.target.val)}>Add</button>
      </div>
    );
  }
}

export default App;
