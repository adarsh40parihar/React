import React, { useState } from 'react'
import { ArrowLeft, CheckIcon, Edit2Icon, LogOut, Loader2Icon } from 'lucide-react'
import { useAuth } from './AuthContext'
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";


function Profile(props) {
  const { userData, updateName, updateStatus, updatePhoto, isUploading, error , setUserData} = useAuth();
  const [name, setName] = useState(userData?.name || "");
  const [status, setStatus] = useState(userData?.status || "");

  const navigate = useNavigate();

  //logout button
  const handleLogout = async () => {
    //auth step-5 logout of user
    await signOut(auth);
    setUserData(null);
    navigate("/login");
    console.log("Logged Out");
  };

  return (
    <div className="bg-background w-[30vw]">
      <div className="bg-green-400 text-white py-4 text-lg px-4 flex items-center gap-6">
        <button onClick={props.onBack}>
          <ArrowLeft />
        </button>
        <div> Profile</div>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 mt-8">
        {/* Profile Pic Change*/}
        <label
          className={` group relative cursor-pointer   rounded-full  overflow-hidden ${
            isUploading ? "pointer-events-none" : ""
          }`}
        >
          <div></div>
          <img
            src={userData.profile_pic}
            className="w-[160px] h-[160px]  object-cover "
            alt="profile picture"
          />
          {isUploading ? (
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 z-10">
              <Loader2Icon className="w-8 h-8 text-primary-dense animate-spin z-10" />
            </div>
          ) : (
            <div className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-black/30 z-10">
              <Edit2Icon className="w-6 h-6 text-white" />
            </div>
          )}
          <input
            type="file"
            accept="image/png, image/gif, image/jpeg"
            onChange={(e) => {
              updatePhoto(e.target.files?.[0]);
            }}
            className="hidden"
          />
        </label>
        {error && <p className="text-red-600 text-sm">{error}</p>}

        {/* status name */}
        <div className="flex flex-col bg-white w-full py-4 px-8">
          <label className="text-sm text-primaryDense mb-2">Your name</label>
          <div className="flex items-center w-full">
            <input
              value={name}
              className="w-full bg-transparent border-b-2 border-white focus:border-primary focus:outline-none"
              placeholder="Update your name..."
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <button
              onClick={() => {
                updateName(name);
                setUserData({ ...userData, name });
              }}
            >
              <CheckIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* status update */}
        <div className="flex flex-col bg-white w-full py-4 px-8">
          <label className="text-sm text-primaryDense mb-2">Your Status</label>
          <div className="flex items-center w-full">
            <input
              value={status}
              className="w-full bg-transparent border-b-2 border-white focus:border-primary focus:outline-none"
              placeholder="Update your status..."
              onChange={(e) => {
                setStatus(e.target.value);
              }}
            />
            <button
              onClick={() => {
                updateStatus(status);
                setUserData({ ...userData, status });
              }}
            >
              <CheckIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* LogOut */}
        <button
          className="text-white px-4 py-3 rounded bg-primary hover:bg-primaryDense flex gap-2"
          onClick={handleLogout}
        >
          Logout <LogOut />
        </button>
      </div>
    </div>
  );
}

export default Profile