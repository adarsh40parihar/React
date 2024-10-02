import { useState } from "react";
function InputBox() {
    const [Content, setContent] = useState("");
    const handlealert = () => {
        alert(Content);
        setContent("")
    };
    const handleChange = (e) => {
        setContent(e.target.value);
        // console.log(e.target.value);
    }
    return (
      <div>
        <input type="text" value={Content} onChange={handleChange} />
        <button onClick={handlealert}>Alert Content</button>
      </div>
    );
}
export default InputBox 