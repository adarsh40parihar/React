import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { useAuth } from './AuthContext'
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth, storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

function Profile(props) {
  const { setUserData, userData } = useAuth();

  const navigate = useNavigate();

  //logout button
  const handleLogout = async () => {
    //auth step-5 logout of user
    await signOut(auth);
    setUserData(null);
    navigate("/login");
    console.log("Logged Out");
  };


  //change the profile picture
  // const handleProfilePicChnage = (e) => {
  //   const img = e.target.files[0];

  //   //address to store the image
  //   const storageRef = ref(storage, `userProfilePictures/${auth.currentUser.uid}/${img.name}`);

  //   //storage task
  //   const uploadTask = uploadBytesResumable(storageRef, img);
  //   uploadTask.on("state_changed", progressCB, errorCB, completeCB);
  //   //while uploading
  //   function progressCB(data) {
  //     console.log("data", data);
  //   }
  //   //if error
  //   function errorCB(error) {
  //     console.log("error", error);
  //   }
  //   //on success
  //   function completeCB() {
  //     console.log("Successfully Uploaded");
  //     getDownloadURL(uploadTask.snapshot.ref).then((url) => {
  //       console.log("url : ", url);
  //     });
  //   }
  // }

  return (
    <div className="bg-white w-[30vw]">
      <div className="bg-[#15b491] text-white py-4 text-lg px-4 flex items-center gap-6">
        <button onClick={props.onBack}>
          <ArrowLeft />
        </button>
        <div> Profile</div>
      </div>
      <div className="bg-grey-200">
        <div>
          <h2>Profile Pic</h2>
          {/* <input
            type="file"
            accept="image/png image/jpeg image/webp"
            onChange={handleProfilePicChnage}
          /> */}
          <img
            className="rounded-full h-10 w-10"
            src={userData.profile_pic}
            alt="IMG"
          />
        </div>

        <h2>{userData.name}</h2>
        <h2>{userData.email}</h2>
        <button
          className="bg-primary text-white p-2 m-2  rounded-md font-[500] hover:bg-primaryDense"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile