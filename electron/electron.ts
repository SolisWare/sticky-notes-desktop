import { app, BrowserWindow, Menu } from "electron";
import * as path from "path";
import { createFileRoute, createURLRoute } from 'electron-router-dom'
import menubar from "./menu";

function createWindow() {
  
  // Create the browser window.
  const win = new BrowserWindow({
    width: 900,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, "preload.js")
      
    },
  });
  
  // and load the index.html of the app.
  // win.loadFile("index.html");
  win.loadFile(
    ...createFileRoute(
      path.join(__dirname, "index.html"),
      'main'
    )
  );
  
  // Open DevTools
  win.webContents.openDevTools({mode: "detach"});
  
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
