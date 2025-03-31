// import React, { useRef, useState } from "react";

// function UseRefInput() {
//     const [input, setInput] = useState("");
//     const initalRef = useRef(10);
//     console.log("a", initalRef.current);
//     initalRef.current++;
//     console.log("a", initalRef.current);
//     console.log("render");
//     return (
//         <div>
//             <h1>UseRef Example</h1>
//             <input
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//             />
//             <p>{input}</p>
//         </div>
//     );
// }

// export default UseRefInput;


//******adding focus programattically */ 
import React, { useRef, useState } from "react";

function UseRefInput() {
    const [input, setInput] = useState("");
    const refVar = useRef(null);
    const addFocus = () => {
        refVar.current.focus();
    };
    return (
      <div>
        <h1>UseRef Example</h1>
        <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            ref={refVar}
        />
        <button onClick={addFocus}>Add focus</button>
      </div>
    );
}

export default UseRefInput;