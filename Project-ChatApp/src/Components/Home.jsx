import React from "react";
import ChatPanel from "./ChatPanel";
import ChatWindow from "./ChatWindow";

function Home(props) {
  return (
    <>
      <main className=" relative w-full h-screen bg-[#E3E1DB]">
        <div className="absolute top-0 h-[130px] bg-primary  w-full " />
        <div className="h-screen absolute w-full p-3 ">
          <div className="bg-[#eff2f5] w-full h-full shadow-lg flex rounded-xl overflow-hidden ">
            {/* conditonal rehne waale hai -> chat list , profile */}
            <ChatPanel />
            {/* <div>Empty Chat</div>:<div>Individual CHat</div> */}
            <ChatWindow></ChatWindow>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
