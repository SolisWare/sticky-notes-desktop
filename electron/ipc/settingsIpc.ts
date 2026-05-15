/**
 * Copyright (c) 2026 SolisWare.
 *
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { ipcMain } from "electron";
import { AppSettings } from "../../src/settings/AppSettings";
import { channels } from "./channels";
import { getSettings, setSettings } from "../storage/appSettingsStorage";

type SettingsIpcOptions = {
  appSettingsFilePath: string;
};

export function registerSettingsIpc(options: SettingsIpcOptions): void {
  ipcMain.handle(channels.settings.getSettings, async () => {
    return getSettings(options.appSettingsFilePath);
  });

  ipcMain.on(channels.settings.setSettings, (_, settings: AppSettings) => {
    setSettings(options.appSettingsFilePath, settings);
  });
}
