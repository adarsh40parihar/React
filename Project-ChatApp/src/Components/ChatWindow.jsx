import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MessageSquareText, PlusIcon, SendIcon ,Phone, Video, EllipsisVertical, } from "lucide-react";
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { Loader2Icon } from 'lucide-react';


function ChatWindow() {
  const params = useParams();

  const [msg, setMsg] = useState("");
  const [secondUser, setSecondUser] = useState();
  const [secondUserLoading, setSecondUserLoading] = useState(true);

  const recieverId = params.chatID;

  const handleSendMsg = () => {
    console.log(msg);
    if (msg === "") return;
    setMsg("");
  };

  //jiske sath chat karna chahte h:
  useEffect(() => {
    const fetchUserData = async () => {
      const userRef = doc(db, "users", recieverId); // Access 'users' collection with userId
      const userDoc = await getDoc(userRef);
      if (userDoc.exists())
        setSecondUser(userDoc.data());
    };
    fetchUserData();
    setSecondUserLoading(false);
  }, [recieverId]);

  if (secondUserLoading)
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-background">
        <Loader2Icon className="w-12 h-12 animate-spin" />
      </div>
    );

  if (!recieverId) {
    //empty chat window
    return (
      <section className="w-[70%] h-full flex flex-col gap-4 items-center justify-center">
        <MessageSquareText
          className="w-28 h-28 text-gray-400"
          strokeWidth={1.2}
        />
        <p className="text-base text-center text-gray-400">
          select any contact to
          <br />
          start a chat with.
        </p>
      </section>
    );
  }

  //individual chat window
  return (
    <section className="w-[70%] h-full flex flex-col gap-4 items-center justify-center">
      <div className="h-full w-full bg-chat-bg flex flex-col">
        {/* top bar */}
        <div className="bg-background py-2 px-4 flex justify-between items-center gap-2 shadow-sm">
          <div className=" flex items-center gap-3">
            <img
              src={secondUser?.profile_pic}
              alt="profile picture"
              className="w-9 h-9 rounded-full object-cover"
            />
            <h3>{secondUser?.name}</h3>
          </div>

          <div className="flex items-end justify-center gap-6 ">
            <Phone className="w-6 h-6" />
            <Video className="w-6 h-6" />
            <EllipsisVertical className="w-6 h-6" />
          </div>
        </div>

        {/* message list */}
        <div className="flex-grow flex flex-col gap-8 p-6  overflow-y-scroll ">
          <div>Message</div>
          <div>Message</div>
          <div>Message</div>
        </div>

        {/* chat input */}
        <div className="bg-background py-3 px-6 shadow flex items-center gap-6">
          <PlusIcon></PlusIcon>
          <input
            type="text"
            className="w-full py-2 px-4 rounded-lg"
            placeholder="Type a message..."
            value={msg}
            onChange={(e) => {
              setMsg(e.target.value);
            }}
          />
          <button onClick={handleSendMsg}>
            <SendIcon></SendIcon>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ChatWindow;