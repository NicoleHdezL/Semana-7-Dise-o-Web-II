import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

function MiComponente(){
  return <p>Mi primera experiencia en React</p>
}
class MiComponenteClase extends Component{
  render(){
    return <p>Mi nombre es Nicole</p>
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
        <MiComponente/>
        <MiComponenteClase/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
