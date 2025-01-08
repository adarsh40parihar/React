import React,{useContext} from "react";

//Step 1:
const ContextWrapper = React.createContext();

function PropdrillingSol() {
  const value = 10;
  return (
    <>
        <div>Propdrilling Solution</div>
          
        {/*Step 2: */}
        <ContextWrapper.Provider value={value}>
            <GrandParent></GrandParent>
        </ContextWrapper.Provider>
    </>
  );
}
function GrandParent() {
  return (
    <>
      <h2>Grand Parent</h2>
      <Parent />
    </>
  );
}
function Parent() {
  return (
    <>
      <h2>Parent</h2>
      <Child />
    </>
  );
}
function Child() {
  //Step 3:
  const message = useContext(ContextWrapper);
  return (
    <>
      <h2>Child</h2>
      <div>Value : {message}</div>
    </>
  );
}

export default PropdrillingSol;
