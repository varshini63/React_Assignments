import React, { useState } from "react";

const ThirdAssignmenta = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [newNumber, setNewNumber] = useState("");
  const [index, setIndex] = useState("");

  const addToStart = () => {
    if (newNumber !== "") {
      setNumbers([parseInt(newNumber), ...numbers]);
      setNewNumber("");
    }
  };

  const addToEnd = () => {
    if (newNumber !== "") {
      setNumbers([...numbers, parseInt(newNumber)]);
      setNewNumber("");
    }
  };

  const deleteAtIndex = () => {
    const idx = parseInt(index);
    if (!isNaN(idx) && idx >= 0 && idx < numbers.length) {
      setNumbers(numbers.filter((_, i) => i !== idx));
      setIndex("");
    }
  };

  return (
    <div>
      <h2>Array Operations</h2>
      <p>Current Array: {JSON.stringify(numbers)}</p>
      <input
        type="number"
        value={newNumber}
        onChange={(e) => setNewNumber(e.target.value)}
        placeholder="Enter number"
      />
      <button onClick={addToStart}>Add to Start</button>
      <button onClick={addToEnd}>Add to End</button>
      <br />
      <input
        type="number"
        value={index}
        onChange={(e) => setIndex(e.target.value)}
        placeholder="Enter index to delete"
      />
      <button onClick={deleteAtIndex}>Delete at Index</button>
    </div>
  );
};

export default ThirdAssignmenta;
