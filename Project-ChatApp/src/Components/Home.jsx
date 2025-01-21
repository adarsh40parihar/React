import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth, storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytesResumable,} from "firebase/storage";
function Home(props) {
  const setisLoggedIn = props.setisLoggedIn;
  const navigate = useNavigate();

  const handleLogout = async () => {
    //auth step-5 logout of user
    await signOut(auth);
    setisLoggedIn(false);
    navigate("/login");
    console.log("Logged Out");
  };

  const handleProfilePicChnage = (e) => {
    const img = e.target.files[0];

    //address to store the image
    const storageRef = ref(storage, `userProfilePictures/${auth.currentUser.uid}/${img.name}`);

    //storage task
    const uploadTask = uploadBytesResumable(storageRef, img);
    uploadTask.on("state_changed", progressCB, errorCB, completeCB);
    //while uploading
    function progressCB(data) {
      console.log("data", data);
    }
    //if error
    function errorCB(error) {
      console.log("error", error);
    }
    //on success
    function completeCB() {
      console.log("Successfully Uploaded");
      getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        console.log("url : ", url);
      });
    }
  }

  return (
    <>
      <div>
        <h2>Home Page</h2>
        <button
          className="bg-[#15b491] text-white p-2 m-2  rounded-md font-[550]"
          onClick={handleLogout}
        >
          Logout
        </button>

        <div >
          <h2>Profile Pic</h2>
          <input type="file" accept="image/png image/jpeg image/webp" onChange={handleProfilePicChnage} />
        </div>
      </div>
    </>
  );
}

export default Home;
