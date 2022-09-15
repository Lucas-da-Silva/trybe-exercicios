import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.click = this.click.bind(this);
    this.dontClick = this.dontClick.bind(this);
    this.clicked = this.clicked.bind(this);

    this.state= {
      click: 0,
      dontClick: 0,
      clicked: 0,
    }
  }

  click(event) {
    this.setState((previousState, _props) => ({
      click: previousState.click + 1,
    }))

    const number = this.state.click + 1;

    if (number % 2 === 0) {
      event.target.style.color = 'green';
      console.log(event.target.style.color);
    } else {
      event.target.style.color = 'black';
      console.log(event.target.style.color);
    }
  }
  
  dontClick(event) {
    this.setState((previousState, _props) => ({
      dontClick: previousState.dontClick + 1
    }))

    const number = this.state.dontClick + 1;

    if (number % 2 === 0) {
      event.target.style.color = 'green';
      console.log(event.target.style.color);
    } else {
      event.target.style.color = 'black';
      console.log(event.target.style.color);
    }
  }
  
  clicked(event) {
    this.setState((previousState, _props) => ({
      clicked: previousState.clicked + 1
    }))

    const number = this.state.clicked + 1;
    
    if (number % 2 === 0) {
      event.target.style.color = 'green';
      console.log(event.target.style.color);
    } else {
      event.target.style.color = 'black';
      console.log(event.target.style.color);
    }
  }

  render() {
    return(
      <div> 
        <button onClick={ (e) => this.click(e) }>{this.state.click}</button>
        <button onClick={ (e) => this.dontClick(e) }>{this.state.dontClick}</button>
        <button onClick={ (e) => this.clicked(e) }>{this.state.clicked}</button>
      </div>
    )
  }
}

export default App;
