import React from "react";
import ChatPanel from "./ChatPanel";
import Chat from "./Chat";

function Home(props) {
return (
  <>
    <h1>Home</h1>
    <ChatPanel></ChatPanel>
    <Chat></Chat>
      
      {/* <div>Empty Chat</div>
        <div>Individual Chat</div> */}
  </>
);
}

export default Home;
