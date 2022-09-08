import React, { Component } from 'react';
import './App.css';
import Cars from './Cars';
import CarContext from './contexts/CarContext';
import SignalContext from './contexts/SignalContext';
import TrafficSignal from './TrafficSignal';

class App extends Component {
  state = {
    cars: {
      red: false,
      blue: false,
      yellow: false,
    },
    signal: {
      color: 'red',
    },
  };

  moveCar = (car, side) => {
    this.setState({
      ...this.state,
      cars: {
        ...this.state.cars,
        [car]: side,
      },
    });
  };

  changeSignal = (payload) => {
    this.setState({
      ...this.state,
      signal: {
        color: payload,
      },
    });
  };

  render() {
    const carContextValue = {
      redCar: this.state.cars.red,
      blueCar: this.state.cars.blue,
      yellowCar: this.state.cars.yellow,
      moveCar: this.moveCar,
    };
    const signalContextValue = {
      signalColor: this.state.signal.color,
      changeSignal: this.changeSignal,
    };
    return (
      <div className="container">
        <CarContext.Provider value={carContextValue}>
          <Cars />
        </CarContext.Provider>
        <SignalContext.Provider value={signalContextValue}>
          <TrafficSignal />
        </SignalContext.Provider>
      </div>
    );
  }
}

export default App;
