import React, { useState } from 'react';
import './FifthAssignmentb.css';

const CounterControls = ({ count, onIncrement, onDecrement }) => {
  return (
    <div className="counter-controls">
      <h3>Child Component</h3>
      <p>Current Count: <span className="count-display">{count}</span></p>
      <div className="button-container">
        <button 
          className="control-button increment"
          onClick={onIncrement}
        >
          Increment
        </button>
        <button 
          className="control-button decrement"
          onClick={onDecrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};


const FifthAssignmentb = () => {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCounter(prevCount => prevCount - 1);
  };

  return (
    <div className="counter-container">
      <div className="parent-component">
        <h2>Parent Component</h2>
        <p>Counter Value: <span className="count-value">{counter}</span></p>
        
        <CounterControls 
          count={counter}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      </div>
    </div>
  );
};

export default FifthAssignmentb;