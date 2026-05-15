/**
 * Copyright (c) 2026 SolisWare.
 *
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { SystemTheme } from "../../src/theme/SystemTheme";
import { off, on, receive } from "./ipcHelpers";

export const systemThemeApi = {
  
  onThemeChange: (callback: (theme: SystemTheme) => void) => {
    receive<SystemTheme>("systemTheme.onThemeChange")
      .then(callback)
      .catch((error: Error) => {
        console.error("Failed to load system theme:", error.message);
      });

    const listener = (_event: Electron.IpcRendererEvent, theme: SystemTheme) => {
      callback(theme);
    };

    on("systemTheme.onThemeChange", listener);

    return () => {
      off("systemTheme.onThemeChange", listener);
    };
  }
};
