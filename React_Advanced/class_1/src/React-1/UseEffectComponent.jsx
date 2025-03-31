import React, { useEffect, useState } from 'react'

const firstCb = () => {
    console.log("useEffect with empty Dependecy");
}
const secondCb = () => {
    console.log("useEffect with no dependency")
}
const thirdCb = () => {
  console.log("useEffect with some dependency (count)");
};

const firstCleanup = () => {
  console.log("cleanup function with empty dependency ");
};
const secondCleanup = () => {
  console.log("cleanup function with no dependency");
};
const thirdCleanup = () => {
  console.log("cleanup function without dependency array");
};


function UseEffectComponent() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");

    // with empty dependency  => Runs once when the component mounts (reload the page)
    useEffect(() => {
        firstCb();
        return firstCleanup;
    }, []);

    // with no dependency => Runs once when the component mounts and on every re-render
    useEffect(() => {
        secondCb();
        return secondCleanup;
    })

    // with dependency => Runs once when the component mounts and on every re-render when the count change
    useEffect(() => {
        thirdCb();
        console.log("`````````````````````````````````````");
        return thirdCleanup;
    }, [count])

    console.log("render, component", `count ${count}`, `input ${input}`);
    return (
        <>
            <h2>UseEffectComponent</h2>
            <p>count :{count}</p>
            <button onClick={() => { setCount(prevCount => prevCount + 1) }}>+</button>
            <br />
            <input type="text" value={input} onChange={(e) => { setInput(e.target.value) }} />
        </>
    )
}

export default UseEffectComponent;