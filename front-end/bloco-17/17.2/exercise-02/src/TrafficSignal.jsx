import React, { useContext } from 'react';
import greenSignal from './images/greenSignal.jpeg';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import SignalContext from './context/SignalContext';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') return redSignal;
  if (signalColor === 'yellow') return yellowSignal;
  if (signalColor === 'green') return greenSignal;
  return null;
};

function TrafficSignal() {
  const { signalColor, changeSignal } = useContext(SignalContext);
  return (
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
  );
};

export default TrafficSignal;
