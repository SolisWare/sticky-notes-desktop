/**
 * Copyright (c) 2026 SolisWare.
 *
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { AppSettings } from "../../src/settings/AppSettings";
import { receive, send } from "./ipcHelpers";

export const settingsApi = {

  getSettings: async (): Promise<AppSettings | undefined> => {
    try {
      return await receive<AppSettings | undefined>('settings.getSettings');
    } catch (err) {
      console.error('Failed to load app settings:', (err as Error).message);
      return undefined;
    }
  },
  
  setSettings: (settings: AppSettings) => {
    send('settings.setSettings', settings);
  }
};
