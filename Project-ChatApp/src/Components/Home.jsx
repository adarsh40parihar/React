import React from "react";
import ChatPanel from "./ChatPanel";

function Home(props) {
return (
  <>
    <h1>Home</h1>
    <div>
      <div>
        <ChatPanel></ChatPanel>
      </div>
      {/* <div>Empty Chat</div>
        <div>Individual Chat</div> */}
    </div>
  </>
);
}

export default Home;
