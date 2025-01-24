import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { CircleFadingPlusIcon, Loader2Icon, MessageSquare, SearchIcon, UserRoundIcon, ArrowLeft } from "lucide-react";
import Profile from "./Profile";
import { useAuth } from "./AuthContext";

function ChatPanel() {
    // lsit of user lana h fire base se
    const [users, setUsers] = useState([]);
    const [isloading, setLoading] = useState(true);
  const [showProfile, setShowProfile] = useState(false);
  const {userData:myData} = useAuth();

  
  //always same geeting data from firebase database storage
  useEffect(() => {
    const getUsers = async () => {
        try {
            // isme collection pass and data milta hai
            const data = await getDocs(collection(db, "users"));
            const arrayOfUser = data.docs.map((docs) => {
                return  { userData: docs.data(), id: docs.id }
            });
            setUsers(arrayOfUser); // Set users to state
            setLoading(false); // Set loading to false
        } catch (error) {
            console.error("Error fetching users: ", error);
        }
    };

    getUsers();  
  }, []);
    
  const onBack = () => {setShowProfile(false) }
    if (showProfile) {
        return <Profile onBack={onBack} />;
    }
    
    return (
      <>
        {/* top-bar */}
        <div className="bg-grey-400 py-2 px-4 border-r  flex justify-between items-center gap-2">
          <button
            onClick={() => {
              setShowProfile(true);
            }}
          >
            <img
              src={myData.profile_pic || "/default-user.png"}
              alt="profile picture"
              className="w-10 h-10 rounded-full object-cover"
            />
          </button>

          <div className="flex items-end justify-center gap-6 mx-4">
            <CircleFadingPlusIcon className="w-6 h-6" />
            <MessageSquare className="w-6 h-6" />
            <UserRoundIcon className="w-6 h-6" />
          </div>
        </div>
        {/* chat list */}
        {isloading ? (
          <div>Loading...</div>
        ) : (
          <div className="flex flex-col gap-3">
            {users.map((userObject) => (
              <div key={userObject.id}>
                <div className="flex gap-3 border-2">
                  <img
                    className="rounded-full h-10 w-10"
                    src={userObject.userData.profile_pic}
                    alt=""
                  />
                  <h2>{userObject.userData.name}</h2>
                </div>
              </div>
            ))}
          </div>
        )}
      </>
    );
};

export default ChatPanel;
