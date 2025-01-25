import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MessageSquareText } from 'lucide-react'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';

function ChatWindow() {
  const [secondUser, setSecondUser] = useState();
  const [secondUserLoading, setSecondUserLoading] = useState(true);

  const params = useParams()
  if (!params.chatID) {
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

  //jiske sath chat karna chahte h:
  // const receiverId = params.chatID;
  
  // useEffect(() => {
  //   const getUsers = async () => {
  //     const docRef = doc(db, "users", receiverId);
  //     const docSnap = await getDoc(docRef);
  //     if (docSnap.exists()) {
  //       setSecondUser(docSnap.data());
  //     }
  //     setSecondUser(false);
  //   };
  //   getUsers();
  // }, []);

  //individual chat window
  return (
    <h2>Chat: {params.chatID}</h2>

    // <>
    //   <h2>Top Bar</h2>
    //   {secondUserLoading ? <div>....Loading</div> :
    //     <div>
    //       use present
    //     </div>
    //   }
    // </>
 )

}

export default ChatWindow;