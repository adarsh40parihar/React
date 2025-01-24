import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Chat from "./Components/Chat";
import Profile from "./Components/Profile";
import PageNotFound from "./Components/PageNotFound";
/*
/login -> Login
/ -> Home

*/
function App() {
  return (
    <>
      <Routes>
        {/* like switch case in routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
            <Home></Home>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/chat/:uniqueID"
          element={
            <ProtectedRoute>
              <Chat></Chat>
            </ProtectedRoute>
          }
        ></Route>

        <Route path="/login" element={<Login></Login>}></Route>

        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </>
  );
}

export default App;

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
