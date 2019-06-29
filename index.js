import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

let nombre = "Nicole Paola Hernández Loaiza"

function A (props){
  console.log(props.children)
  return props.children
}
function B (props){
  return <p>Mi primera experiencia en React {props.nombre}</p>
}

class MiComponenteClase extends Component{
  render(){
    return <p>Mi nombre es {nombre}</p>
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
    let nombre = "Nicole"
    return (
      <div>
        <A nombre = "Paola">
        <p>{5+2}</p>
        <p>Mi primer caso</p>
        </A>
        <B nombre = {nombre}/>
        <MiComponenteClase/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
