import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navigate } from "react-router-dom";
import { Router, Route } from 'electron-router-dom'
import WelcomeScreen from './views/MainWindow/pages/WelcomeScreen';
import Home from './views/MainWindow/pages/Home';
import MainWindow from './views/MainWindow/MainWindow';

export enum AppView {
  home = "/home",
  welcome = "/welcome"
}

function App() {
  return (
    <div className="App">      
      <Router main={
        <>
          <Route path={AppView.home} element={
            <MainWindow view={AppView.home}/>
          } />
          <Route path={AppView.welcome} element={
            <MainWindow view={AppView.welcome} />
          } />
          <Route path="/" element={
            <MainWindow view={AppView.home} />
          } />
        </>
      }/>
    </div>
  );
}

export default App;
