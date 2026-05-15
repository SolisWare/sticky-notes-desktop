/**
 * Copyright (c) 2026 SolisWare.
 *
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { SystemTheme } from "../../src/theme/SystemTheme";
import { channels } from "../ipc/channels";
import { off, on, receive } from "./ipcHelpers";

export const systemThemeApi = {
  
  onThemeChange: (callback: (theme: SystemTheme) => void) => {
    receive<SystemTheme>(channels.systemTheme.onThemeChange)
      .then(callback)
      .catch((error: Error) => {
        console.error("Failed to load system theme:", error.message);
      });

    const listener = (_event: Electron.IpcRendererEvent, theme: SystemTheme) => {
      callback(theme);
    };

    on(channels.systemTheme.onThemeChange, listener);

    return () => {
      off(channels.systemTheme.onThemeChange, listener);
    };
  }
};
