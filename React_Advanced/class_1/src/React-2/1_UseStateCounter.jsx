import React, { useState } from "react";

function UseStateCounter() {
  // State variable for the counter
  const [count, setCount] = useState(0);

  // Function to increment the counter by 1
  const increment = () => {
    setCount((preCount) => preCount + 1);
  };

  // Function to decrement the counter by 1
  const decrement = () => {
    setCount((preCount) => preCount - 1);
  };

  // Function to increment the counter by 5
  const incrementBy5 = () => {
    setCount((preCount) => preCount + 5);
  };

  // Function to decrement the counter by 5
  const decrementBy5 = () => {
    setCount((preCount) => preCount - 5);
  };

  return (
    <>
      <h2>UseStateCounter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={incrementBy5}>Increment by 5</button>
      <button onClick={decrementBy5}>Decrement by 5</button>

      <h2>`````````````````````````````</h2>
    </>
  );
}

export default UseStateCounter;
