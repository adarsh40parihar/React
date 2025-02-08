import React from "react";

function Propdrilling() {
  const value = 10;
  return (
    <>
      <div>Propdrilling</div>
      <GrandParent value={value} />
    </>
  );
}

function GrandParent({ value }) {
  return (
    <>
      <h2>Grand Parent</h2>
      <Parent value={value} />
    </>
  );
}

function Parent({ value }) {
  return (
    <>
      <h2>Parent</h2>
      <Child value={value} />
    </>
  );
}

function Child({ value }) {
  return (
    <>
      <h2>Child</h2>
      <div>Value : {value}</div>
    </>
  );
}

export default Propdrilling;
