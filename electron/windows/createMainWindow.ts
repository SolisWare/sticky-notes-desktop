/**
 * Copyright (c) 2026 SolisWare.
 *
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { BrowserWindow, LoadFileOptions, screen } from "electron";
import * as fs from "node:fs";
import * as path from "path";
import { createFileRoute, createURLRoute } from "electron-router-dom";
import isDev from "electron-is-dev";
import { defaultMainWindowBounds } from "../../src/settings/defaultSettings";
import { AppWindowBounds } from "../../src/settings/AppWindowBounds";
import { AppWindowState } from "../../src/settings/AppWindowState";

type MainWindowOptions = {
  mainWindowStateFilePath: string;
};

export function createMainWindow(options: MainWindowOptions): BrowserWindow {
  const mainWindowState = readMainWindowState(options.mainWindowStateFilePath);
  const mainWindowBounds = getMainWindowLaunchBounds(mainWindowState);

  const win = new BrowserWindow({
    ...mainWindowBounds,
    minWidth: 335,
    minHeight: 250,
    show: false,
    webPreferences: {
      webSecurity: false,
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, "../preload.js")
    }
  });

  if (mainWindowState.isMaximized) {
    win.maximize();
  }

  win.once("ready-to-show", () => {
    win.show();
  });

  win.on("close", () => {
    saveMainWindowStateOnClose(win, options.mainWindowStateFilePath);
  });

  if (isDev) {
    win.loadURL(dev("main"));
    win.webContents.openDevTools({ mode: "detach" });
  } else {
    win.loadFile(...production("main"));
  }

  return win;
}

const dev = (handle: string): string => {
  return createURLRoute(
    "http://localhost:3000",
    handle
  ).toString();
};

const production = (handle: string): [string, LoadFileOptions] => {
  return createFileRoute(
    path.join(__dirname, "../../index.html"),
    handle
  );
};

function saveMainWindowStateOnClose(window: BrowserWindow, mainWindowStateFilePath: string): void {
  const currentWindowState: AppWindowState = {
    bounds: window.isMaximized() || window.isFullScreen() ? window.getNormalBounds() : window.getBounds(),
    isMaximized: window.isMaximized()
  };

  fs.writeFileSync(mainWindowStateFilePath, `${JSON.stringify(currentWindowState, null, 2)}\n`);
}

function readMainWindowState(mainWindowStateFilePath: string): AppWindowState {
  try {
    const content = fs.readFileSync(mainWindowStateFilePath, "utf-8");

    if (!content.trim()) {
      return getDefaultMainWindowState();
    }

    return JSON.parse(content) as AppWindowState;
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") {
      return getDefaultMainWindowState();
    }

    console.warn("Failed to read main window state:", err);
    return getDefaultMainWindowState();
  }
}

function getDefaultMainWindowState(): AppWindowState {
  return {
    bounds: defaultMainWindowBounds,
    isMaximized: false
  };
}

function getMainWindowLaunchBounds(windowState: AppWindowState): AppWindowBounds {
  return getVisibleMainWindowBounds(windowState.bounds);
}

function getVisibleMainWindowBounds(bounds: AppWindowBounds): AppWindowBounds {
  if (bounds.x === undefined || bounds.y === undefined || isWindowVisibleOnAnyDisplay(bounds)) {
    return bounds;
  }

  return {
    width: bounds.width,
    height: bounds.height
  };
}

function isWindowVisibleOnAnyDisplay(bounds: AppWindowBounds): boolean {
  return screen.getAllDisplays().some((display) => {
    const displayBounds = display.bounds;

    return bounds.x! < displayBounds.x + displayBounds.width
      && bounds.x! + bounds.width > displayBounds.x
      && bounds.y! < displayBounds.y + displayBounds.height
      && bounds.y! + bounds.height > displayBounds.y;
  });
}
