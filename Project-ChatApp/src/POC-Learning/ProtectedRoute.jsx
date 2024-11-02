import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";

function ProtectedRoute(props) {
  const isLoggedIn = props.isLoggedIn;
  const setisLoggedIn = props.setisLoggedIn;
  if (isLoggedIn) {
    return <Home setisLoggedIn={setisLoggedIn}></Home>;
  } else return <Navigate to="/login"></Navigate>;
}


export default ProtectedRoute