import React, { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home"
import Login from "./Login"
import Chat from "./Chat"
import ProtectedRoute from './ProtectedRoute';
/*
/login -> Login
/ -> Home

*/
function Routing_app() {
  const [isLoggedIn, setisLoggedIn] = useState(false); // state to check if user is logged in
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
            >
              <Home setisLoggedIn={setisLoggedIn}></Home>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/chat/:uniqueID"
          element={
            <ProtectedRoute
              isLoggedIn={isLoggedIn}
              setisLoggedIn={setisLoggedIn}
            >
              <Chat></Chat>
            </ProtectedRoute>
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