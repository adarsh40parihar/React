import React from "react";

function InputBox(props) {
  const { handleInput, Content, handleAddItem } = props;
  return (
    <div className="input-box">
      <input type="text" onChange={handleInput} value={Content} />
      <button onClick={handleAddItem}>Add item</button>
    </div>
  );
}
export default InputBox;
