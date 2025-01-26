import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MessageSquareText, PlusIcon, SendIcon ,Phone, Video, EllipsisVertical, } from "lucide-react";
import { arrayUnion, doc, getDoc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { db } from '../../firebase';
import { useAuth } from './AuthContext';


function ChatWindow() {
  const params = useParams();
  const receiverId = params.chatID;
  const { userData } = useAuth();
  
  const [msg, setMsg] = useState("");
  const [secondUser, setSecondUser] = useState();
  const [msgList, setMsgList] = useState([]);

  // For creatig a unique chat id between two users.
  const chatId =
    userData?.id > receiverId
      ? `${userData?.id}-${receiverId}`
      : `${receiverId}-${userData?.id}`;
  
  const handleSendMsg = async () => {
    if (msg === "") return;
    const date = new Date();
    const timeStamp = date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
      // start chat with user 
      if (msgList?.length === 0) {

        await setDoc(doc(db, "user-chats", chatId), {
          chatId: chatId,
          messages: [
            {
              text: msg,
              time: timeStamp,
              sender: userData.id,
              receiver: receiverId,
            },
          ],
        });
      } else {
        // update in the message list
        await updateDoc(doc(db, "user-chats", chatId), {
          chatId: chatId,
          // arrayUnion is used here to append to last message to the array list.
          messages: arrayUnion({
            text: msg,
            time: timeStamp,
            sender: userData.id,
            receiver: receiverId,
          }),
        });
      }
      setMsg("");

  };
  //jiske sath chat karna chahte h:
  useEffect(() => {
    const fetchUserData = async () => {
      const userRef = doc(db, "users", receiverId); // Access 'users' collection with userId
      const userDoc = await getDoc(userRef);
      if (userDoc.exists())
        setSecondUser(userDoc.data());
    };
    fetchUserData();

    const msgUnsubcribe = onSnapshot(doc(db, "user-chats", chatId), (doc) => {
      setMsgList(doc.data()?.messages || []);
    })

    return () => {
      msgUnsubcribe();
    }

  }, [receiverId]);

  //empty chat window
  if (!receiverId) {
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
  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView();
  }, [msgList]);
  
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
            <div>
              <h3>{secondUser?.name}</h3>
              {secondUser?.lastSeen && (
                <p className="text-xs text-neutral-400">
                  last seen at {secondUser?.lastSeen}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-end justify-center gap-6 ">
            <Phone className="w-6 h-6" />
            <Video className="w-6 h-6" />
            <EllipsisVertical className="w-6 h-6" />
          </div>
        </div>

        {/* message list */}
        <div className="flex-grow flex flex-col gap-8 p-6  overflow-y-scroll scrollbar-always">
          {msgList?.map((m, index) => (
            <div
              key={index}
              data-sender={m.sender === userData.id}
              // break-words is the edge case where a single word is quite long, so we need to break that word before it breaks our ui.
              className={`bg-white  w-fit rounded-md p-2 shadow-sm max-w-[400px] break-words data-[sender=true]:ml-auto data-[sender=true]:bg-primary-light `}
            >
              <p>{m?.text}</p>
              <p className="text-xs text-neutral-500  text-end">{m?.time}</p>
            </div>
          ))}
          <div ref={messagesEndRef} />
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
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSendMsg();
              }
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