/**
 * Copyright (c) 2023 X-SiGMA Systems.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import './App.css';
import { BrowserRouter, Routes, Route as WebRoute } from "react-router-dom";
import { Router, Route } from 'electron-router-dom'
import MainWindow from './views/MainWindow/MainWindow';
import { Platform } from './utils/Platform';

export enum AppView {
  home = "/home",
  welcome = "/welcome"
}

function App() {
  return (
    <div className="App"> 
      { Platform.isElectron ?
        /* Router for an Electron "native" app */
        <Router main={
          <>
            <Route path={AppView.home} element={
              <MainWindow view={AppView.home} />
            } />
            <Route path={AppView.welcome} element={
              <MainWindow view={AppView.welcome} />
            } />
            <Route path="/" element={
              <MainWindow view={AppView.home} />
            } />
          </>
        } />
        :
        /* Router for a React web app */
        <BrowserRouter>
          <Routes>
            <WebRoute path={AppView.home} element={
              <MainWindow view={AppView.home} />
            } />
            <WebRoute path={AppView.welcome} element={
              <MainWindow view={AppView.welcome} />
            } />
            <WebRoute path="/" element={
              <MainWindow view={AppView.home} />
            } />
          </Routes>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
