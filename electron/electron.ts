/**
 * Copyright (c) 2023-2026 SolisWare.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { app, BrowserWindow, ipcMain, LoadFileOptions, Menu, webContents } from "electron";
import * as path from "path";
import { createFileRoute, createURLRoute } from 'electron-router-dom'
import menubar from "./menu";
import * as isDev from "electron-is-dev"
import * as dotenv from "dotenv";
import { isMac } from './utils/Platform';
import * as fs from 'node:fs';
import { NoteType } from "../src/models/NoteType";

const appDir = path.join(app.getPath("userData"));
const appDataDir = path.join(appDir, 'data');

// Load variables from ".env" file and merge with "process.env"
// FOR DEV MODE ONLY!
if (isDev) {
  dotenv.config();
}

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
  
  ipcMain.handle('storage.getDataDir', async () => {
    return app.getPath("userData");
  });
  
  ipcMain.on('storage.setNote', (_, ...args: any[]) => {
    const note = args[0][0] as NoteType;
    const filePath = path.join(appDataDir, `${note.id}.json`);
    const serializedNote = JSON.stringify(note);

    fs.writeFile(filePath, serializedNote, (err) => {
      if (err) {
        console.error(err);
        // TODO: Throw an exception and send callback to the renderer.
      }
    });
  });
  
  ipcMain.handle('storage.getNotes', async () => {
    const files = await fs.promises.readdir(appDataDir);
    const notes = await Promise.all(
      files.map(async (file): Promise<NoteType | null> => {
        try {
          const filePath = path.join(appDataDir, file);
          const content = await fs.promises.readFile(filePath, 'utf-8');
          const parsed = JSON.parse(content) as NoteType;

          return {
            ...parsed,
            date: new Date(parsed.date)
          };
        } catch (err) {
          console.warn(`Skipping corrupt note file: ${file}`);
          // TODO: We might want to consider an exception so a warning can be displayed.
          return null;
        }
      })
    );
    return notes
      .filter((note): note is NoteType => note !== null)
      .sort((oldestNote, latestNote) => new Date(oldestNote.date).getTime() - new Date(latestNote.date).getTime());
  });

  ipcMain.on('storage.deleteNote', (_, ...args: any[]) => {
    const noteId = args[0][0];
    const filePath = path.join(appDataDir, `${noteId}.json`);

    console.log('Deleting:', filePath);
    fs.unlink(filePath, (err) => {
      if (err) {
        console.log(err);
        // TODO: Error handling
      }
    });
  });

  ipcMain.on('storage.deleteAllNotes', (_, ...args: any[]) => {
    console.log('Deleting all files in :', appDataDir);
    fs.promises.readdir(appDataDir)
      .then((files) => Promise.all(
        files
          .map((file) => fs.promises.unlink(path.join(appDataDir, file)))
      ))
      .catch((err) => {
        console.log(err);
        // TODO: Error handling
      });
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (!isMac) {
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
