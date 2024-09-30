import React from "react";
function Counter(props) {
  // create a state for that
  const [value, setValue] = React.useState(props.initialValue);
  /*  jb bhi update -> react 
                const value = arr[0];
                the function that is given to you by react
                const setValue = arr[1];
            */

  const handleIncrement = () => {
    if (value == 20) {
      return;
    }
    setValue(value + 1);
  };
  const handledecrement = () => {
    if (value == 0) {
      return;
    }
    setValue(value - 1);
  };
  return (
    <div>
      <div>{value}</div>
      <button onClick={handleIncrement}>+ Plus</button>
      <button onClick={handledecrement}>- Minus</button>
    </div>
  );
}

export default Counter;