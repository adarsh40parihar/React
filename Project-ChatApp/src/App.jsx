import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Components/Login'
import Home from './Components/Home'
import Chat from './Components/Chat'
import Profile from './Components/Profile'
import PageNotFound  from './Components/PageNotFound'



function App() {

  return (
    <>
      <Routes> 
        {/* like switch case in routes */}
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/chat/:uniqueID" element={<Chat></Chat>}></Route>
        {/* it will look for /chat/eveything in above */}
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </>
  );
}

export default App
