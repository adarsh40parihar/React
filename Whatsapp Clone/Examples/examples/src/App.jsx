import React, { useState } from 'react'
import Home from './assets/Context/ThemeChanger/Home';
import PageNotFound from './assets/Context/ThemeChanger/PageNotFound';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import {useDarkTheme} from './assets/Context/ThemeChanger/ThemeContext';

function App() {
  const {handleToggleTheme} = useDarkTheme();
  return (
    <>
      <h1>App component</h1>
      {/* <PropdrillingSol /> */}

      <button onClick={handleToggleTheme}>Toggle Theme</button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
    </>
  );
}

export default App
