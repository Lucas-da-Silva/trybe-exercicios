import React, { Component } from 'react';
import './App.css';
import CarContext from './CarContext';
import Cars from './Cars';

class App extends Component {
  state = {
    cars: {
      red: false,
      blue: false,
      yellow: false,
    },
  }

  moveCar = (car, side) => {
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: side,
      }
    });
  }

  render() {
    const contextValue = {
      redCar: this.state.cars.red,
      blueCar: this.state.cars.blue,
      yellowCar: this.state.cars.yellow,
      moveCar: this.moveCar,
    }
    return (
      <CarContext.Provider value={contextValue}>
        <Cars />
      </CarContext.Provider>
    )
  }
}


export default App;
