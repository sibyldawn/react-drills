import React, { Component } from 'react';

class Login extends Component {
  constructor(){
      super();

      this.state = {
          userName: "",
          passWord: "",
      };
      this.handleLogIn = this.handleLogIn.bind(this);
    //   this.handleUserNameChange = this.handleUserNameChange(this);
    //   this.handleUserPasswordChange = this.handleUserPasswordChange(this);
  }
  handleUserNameChange(name){
      this.setState({
          userName: name
      });
  }
  handleUserPasswordChange(pass){
      this.setState({
          passWord: pass
      });
  }
  handleLogIn(){
      alert(`Username: ${this.state.userName} Password: ${this.state.passWord}`);

  }

  render() {
    return (
      <div>
      <input onChange ={e => this.handleUserNameChange(e.target.value)} type="text"/>
      <input onChange ={e => this.handleUserPasswordChange(e.target.value)} type="text"/> 
      <button onClick ={this.handleLogIn}>Login</button>
      </div>
    );
  }
}

export default Login;


