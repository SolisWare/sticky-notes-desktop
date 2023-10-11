import { app, BrowserWindow, Menu } from "electron";
import * as path from "path";
import { createFileRoute, createURLRoute } from 'electron-router-dom'
import menubar from "./menu";
import * as isDev from "electron-is-dev"

function createWindow() {
  
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1235,
    height: 800,
    minWidth: 335,
    minHeight:250,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, "preload.js")
      
    },
  });
  
  // Load index.html as the app entry point for production
  // and listen on "http://localhost:3000" in 'dev' mode.
  const devConfig = createURLRoute("http://localhost:3000", 'main');
  const productionConfig = createFileRoute(path.join(__dirname, "index.html"), 'main');
  
  if (isDev) {
    win.loadURL(devConfig);
  } else {
    win.loadFile(...productionConfig);
  }
  
  // Open DevTools in 'dev' mode only
  if (isDev) {
    win.webContents.openDevTools({ mode: "detach" });
  }
  
  // Load the menubar items
  Menu.setApplicationMenu(menubar);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// On macOS it's common to re-create a window in the app when the
// dock icon is clicked and there are no other windows open.
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// "About" dialog window customization
// TODO: Move to a dedicated file and add more information.
app.setAboutPanelOptions({
  applicationName: "X-NoTES",
  applicationVersion: "0.1.0",
  version: "Unreleased Milestone",
  authors: [
    "X-SiGMA Systems"
  ],
  copyright: "Copyright © 2023 X-SiGMA Systems.\nAll rights reserved."
});
