import React from 'react'
import { useNavigate } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { auth } from "../../firebase";
function Home(props) {
  const setisLoggedIn = props.setisLoggedIn;
  const navigate = useNavigate();

  const handleLogout = async () => {
    //auth step-5 logout of user
    await  signOut(auth);
    setisLoggedIn(false);
    navigate('/login');
    console.log("Logged Out")
  }
  
  return (
    <>
      <div>
        <h2>Home Page</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
}

export default Home