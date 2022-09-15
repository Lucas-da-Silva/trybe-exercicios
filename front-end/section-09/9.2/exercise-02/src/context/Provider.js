import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';
import SignalContext from './SignalContext';

function Provider({ children }) {
  const [cars, setCars] = useState({
    red: false,
    blue: false,
    yellow: false,
  });

  const [signal, setSignal] = useState({
    color: 'red',
  });

  function moveCar(car, side) {
    setCars({
      ...cars,
      [car]: side,
    });
  }

  function changeSignal(signal) {
    setSignal({
      color: signal,
    });
  }

  const carContext = {
    cars,
    moveCar,
  };

  const signalContext = {
    signalColor: signal.color,
    changeSignal,
  };

  return (
    <CarsContext.Provider value={carContext}>
      <SignalContext.Provider value={signalContext}>
        {children}
      </SignalContext.Provider>
    </CarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
