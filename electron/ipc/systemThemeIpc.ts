/**
 * Copyright (c) 2026 SolisWare.
 *
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { BrowserWindow, ipcMain, nativeTheme } from "electron";
import { resolveSystemTheme } from "../../src/theme/SystemTheme";

const systemThemeSubscribers = new Set<number>();

export function registerSystemThemeIpc(): void {
  nativeTheme.on("updated", () => handleSystemTheme());
  ipcMain.handle("systemTheme.onThemeChange", handleSystemTheme);
}

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
