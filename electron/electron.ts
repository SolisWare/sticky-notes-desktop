/**
 * Copyright (c) 2023 X-SiGMA Systems.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { Platform } from './../src/utils/Platform';
import { app, BrowserWindow, LoadFileOptions, Menu } from "electron";
import * as path from "path";
import { createFileRoute, createURLRoute } from 'electron-router-dom'
import menubar from "./menu";
import * as isDev from "electron-is-dev"

// Load index.html as the app entry point for production
// and listen on "http://localhost:3000" in 'dev' mode.
const dev = (handle: string): string => {
  return createURLRoute(
    "http://localhost:3000",
    handle
  ).toString();
};

const production = (handle: string): [string, LoadFileOptions] => {
  return createFileRoute(
    path.join(__dirname, "/../index.html"),
    handle
  );
};

const createMainWindow = () => {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1235,
    height: 800,
    minWidth: 335,
    minHeight: 250,
    webPreferences: {
      webSecurity: false,
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js")

    }
  });
  
  if (isDev) {
    // Load the URL for the main window
    win.loadURL(dev("main"));
    // Open DevTools when running in dev mode
    win.webContents.openDevTools({ mode: "detach" });
  } else {
    win.loadFile(...production("main"));
  }
};

// Load the menubar items
Menu.setApplicationMenu(menubar);

// This method is called when Electron has finished the initialization
// and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", () => {
  createMainWindow();
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (!Platform.isMac) {
    app.quit();
  }
});

// On macOS it's common to re-create a window in the app 
// when the dock icon is clicked and there are no other windows opened.
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow();
  }
});

// "About" dialog window customization
app.setAboutPanelOptions({
  applicationName: "X-NoTES",
  applicationVersion: "0.1.0",
  version: "Unreleased Milestone",
  authors: [
    "X-SiGMA Systems"
  ],
  copyright: "Copyright © 2023-2024 X-SiGMA Systems.\nAll rights reserved."
});
