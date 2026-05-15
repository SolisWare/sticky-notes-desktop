/**
 * Copyright (c) 2026 SolisWare.
 *
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { ipcMain, Menu } from "electron";
import { channels } from "./channels";

export function registerMenuIpc(): void {
  ipcMain.on(channels.menu.setDeleteAllNotesEnabled, (_, enabled: boolean) => {
    const deleteAllNotesMenuItem = Menu.getApplicationMenu()?.getMenuItemById("deleteAllNotes");

    if (deleteAllNotesMenuItem) {
      deleteAllNotesMenuItem.enabled = enabled;
    }
  });
}
