import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state={
      food: ['lumpia',
      'fried chicken',
      'spaghetti',
      'french fries'
      ]
  }
  }

  render() {
    let foodList = this.state.food.map((element,index)=>{
      return(
        <h2 key={index}> {element} </h2>
      )
   
    })
    return (
      <div className="App">
        {foodList}
        
      </div>
    );
  }
}

export default App;
