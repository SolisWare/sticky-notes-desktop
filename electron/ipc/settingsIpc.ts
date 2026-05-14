/**
 * Copyright (c) 2026 SolisWare.
 *
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { ipcMain } from "electron";
import { getSettings, setSettings } from "../storage/appSettingsStorage";

type SettingsIpcOptions = {
  appSettingsFilePath: string;
};

export function registerSettingsIpc(options: SettingsIpcOptions): void {
  ipcMain.handle("settings.getSettings", async () => {
    return getSettings(options.appSettingsFilePath);
  });

  ipcMain.on("settings.setSettings", (_, ...args: any[]) => {
    setSettings(options.appSettingsFilePath, args[0][0]);
  });
}
