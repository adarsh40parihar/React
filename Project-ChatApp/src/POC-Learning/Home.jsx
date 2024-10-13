import React from 'react'
import { useNavigate } from "react-router-dom";
function Home(props) {
  const setisLoggedIn = props.setisLoggedIn;
  const navigate = useNavigate();
  const handleLogout = () => {
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