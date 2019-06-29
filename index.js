import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';



class Formulario extends Component{
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:''
    }
  }

    syncEmailChange(email){
    console.log(this.state.email)
    this.setState({
      email:email
    })
  }
    syncPasswordChange(password){
    console.log(this.state.password)
    this.setState({
      password:password
    })
  }

  render(){
    return (
      <form>
      <input 
      onChange={(ev)=>{this.syncEmailChange
      (ev.target.value)}}
      value={this.state.email}
      type="email" 
      placeholder="email"/>
      <input 
      value={this.state.password}
      onChange={(ev)=>{this.syncPasswordChange
       (ev.target.value)}}
      type="password" placeholder="********"/>
      <div>
        <input type="submit" placeholder="enviar"/>
      </div>
      </form>
    )
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }



  render() {
    return (
      <div>
        <Formulario/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
