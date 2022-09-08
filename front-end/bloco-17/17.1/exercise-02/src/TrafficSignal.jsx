import React from 'react';
import SignalContext from './contexts/SignalContext';
import greenSignal from './images/greenSignal.jpeg';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') return redSignal;
  if (signalColor === 'yellow') return yellowSignal;
  if (signalColor === 'green') return greenSignal;
  return null;
};

const TrafficSignal = () => {
  return (
    <SignalContext.Consumer>
      {({ signalColor, changeSignal }) => (
        <div>
          <div className="button-container">
            <button onClick={() => changeSignal('red')} type="button">
              Red
            </button>
            <button onClick={() => changeSignal('yellow')} type="button">
              Yellow
            </button>
            <button onClick={() => changeSignal('green')} type="button">
              Green
            </button>
          </div>
          <img className="signal" src={renderSignal(signalColor)} alt="" />
        </div>
      )}
    </SignalContext.Consumer>
  );
};

export default TrafficSignal;
