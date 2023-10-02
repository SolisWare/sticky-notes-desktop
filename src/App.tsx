import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navigate } from "react-router-dom";
import { Router, Route } from 'electron-router-dom'
import WelcomeScreen from './WelcomeScreen';
import Home from './Home';

function App() {
  return (
    <div className="App">      
      <Router main={
        <>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />} />
          <Route path='/welcome' element={<WelcomeScreen />} />
        </>
      }/>
    </div>
  );
}

export default App;
