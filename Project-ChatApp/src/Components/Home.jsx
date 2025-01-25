import React from "react";
import ChatPanel from "./ChatPanel";
import ChatWindow from "./ChatWindow";

function Home(props) {
  return (
    <>
      <main className="w-full h-screen bg-[#E3E1DB]">
        <div className="bg-[#eff2f5] w-full h-full flex shadow-md">
          <ChatPanel></ChatPanel>
          <ChatWindow></ChatWindow>
        </div>
      </main>

      {/* <div>Empty Chat</div>
        <div>Individual Chat</div> */}
    </>
  );
}

export default Home;
