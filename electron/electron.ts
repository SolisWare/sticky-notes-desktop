/**
 * Copyright (c) 2023-2026 SolisWare.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { app, BrowserWindow, ipcMain, Menu, nativeTheme } from "electron";
import * as path from "path";
import menubar from "./menu";
import isDev from "electron-is-dev";
import { isMac } from './utils/Platform';
import * as fs from 'node:fs';
import appVersionConfig from "../app-version-config.json";
import { AppVersionResolver } from "../scripts/app-version/AppVersionResolver";
import { resolveSystemTheme } from "../src/theme/SystemTheme";
import { createMainWindow } from "./windows/createMainWindow";
import { deleteAllNotes, deleteNote, getNotes, setNote } from "./storage/noteStorage";
import { getSettings, setSettings } from "./storage/appSettingsStorage";

const appDir = path.join(app.getPath("userData"));
const appDataDir = path.join(appDir, 'data');
const appSettingsDir = path.join(appDir, 'settings');
const appSettingsFilePath = path.join(appSettingsDir, 'app-settings.json');
const mainWindowStateFilePath = path.join(appSettingsDir, 'main-window-state.json');

const systemThemeSubscribers = new Set<number>();

// Create the 'data' directory if it doesn't exist.
if (!fs.existsSync(appDataDir)) {
  fs.mkdirSync(appDataDir, { recursive: true });
}
// Create the 'settings' directory if it doesn't exist.
if (!fs.existsSync(appSettingsDir)) {
  fs.mkdirSync(appSettingsDir, { recursive: true });
}

// Load variables from ".env" file and merge with "process.env"
// FOR DEV MODE ONLY!
if (isDev) {
  // Load dotenv only in development so production packages do not require it.
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require("dotenv").config();
}

// Load the menubar items
Menu.setApplicationMenu(menubar);

// This method is called when Electron has finished the initialization
// and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", () => {
  createMainWindow({ mainWindowStateFilePath });

  nativeTheme.on("updated", () => handleSystemTheme());
  ipcMain.handle("systemTheme.onThemeChange", handleSystemTheme);
  
  ipcMain.on('storage.setNote', (_, ...args: any[]) => {
    setNote(appDataDir, args[0][0]);
  });
  
  ipcMain.handle('storage.getNotes', async () => {
    return getNotes(appDataDir);
  });

  ipcMain.on('storage.deleteNote', (_, ...args: any[]) => {
    deleteNote(appDataDir, args[0][0]);
  });

  ipcMain.on('storage.deleteAllNotes', (_, ...args: any[]) => {
    deleteAllNotes(appDataDir);
  });

  ipcMain.on('menu.setDeleteAllNotesEnabled', (_, ...args: any[]) => {
    const enabled = args[0][0] as boolean;
    const deleteAllNotesMenuItem = Menu.getApplicationMenu()?.getMenuItemById('deleteAllNotes');

    if (deleteAllNotesMenuItem) {
      deleteAllNotesMenuItem.enabled = enabled;
    }
  });

  ipcMain.handle('settings.getSettings', async () => {
    return getSettings(appSettingsFilePath);
  });

  ipcMain.on('settings.setSettings', (_, ...args: any[]) => {
    setSettings(appSettingsFilePath, args[0][0]);
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
    createMainWindow({ mainWindowStateFilePath });
  }
});

// "About" dialog window customization
app.setAboutPanelOptions({
  applicationName: "X-NoTES",
  applicationVersion: AppVersionResolver.getCombinedVersion(appVersionConfig),
  ...(AppVersionResolver.getAboutVersion(appVersionConfig) ? { version: AppVersionResolver.getAboutVersion(appVersionConfig) } : {}),
  authors: [
    "SolisWare"
  ],
  copyright: "Copyright © 2023-2026 SolisWare.\nAll rights reserved."
});

function handleSystemTheme(event?: Electron.IpcMainInvokeEvent) {
  const systemTheme = resolveSystemTheme(nativeTheme.shouldUseDarkColors);

  if (event) {
    systemThemeSubscribers.add(event.sender.id);

    event.sender.once("destroyed", () => {
      systemThemeSubscribers.delete(event.sender.id);
    });

    return systemTheme;
  }

  BrowserWindow.getAllWindows().forEach((window) => {
    const webContents = window.webContents;

    if (systemThemeSubscribers.has(webContents.id) && !webContents.isDestroyed()) {
      webContents.send("systemTheme.onThemeChange", systemTheme);
    }
  });
}
