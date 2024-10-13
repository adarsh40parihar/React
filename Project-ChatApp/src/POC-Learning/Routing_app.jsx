import React, { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home"
import Login from  "./Login"
/*
/login -> Login
/ -> Home

*/
function Routing_app() {
  const [isLoggedIn, setisLoggedIn] = useState(true); // state to check if user is logged in
  return (
    <>
      <h1>Routing App</h1>
      <Routes>
        {/* like switch case in routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute
              isLoggedIn={isLoggedIn}
              setisLoggedIn={setisLoggedIn}
            ></ProtectedRoute>
          }
        ></Route>
        <Route
          path="/login"
          element={<Login setisLoggedIn={setisLoggedIn}></Login>}
        ></Route>
      </Routes>
    </>
  );
}

function ProtectedRoute(props) {
  const isLoggedIn = props.isLoggedIn;
  const setisLoggedIn = props.setisLoggedIn;
  if (isLoggedIn) {
    return <Home setisLoggedIn={setisLoggedIn}></Home>;
  }
  else return <Navigate to="/login" ></Navigate>
}

export default Routing_app

/*
Final version
isLoggedIn-> true -> Home page  ->"/"
isLoggedIn -> false -> login -> /login

Intermediate cases
* isLoggedIn-> true -> /login -> /
* isLoggedIn -> false -> /-> "/login"

WHat is the duty of Logout button : 
* isLoggedIN -> false,
* navigate -> /login
***/ 

// WHat is the duty of Login button:
// * isLoggedIN -> true
// navigate -> /