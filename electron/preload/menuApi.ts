/**
 * Copyright (c) 2026 SolisWare.
 *
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { channels } from "../ipc/channels";
import { on, send } from "./ipcHelpers";

export const menuApi = {

  onMenuNewNote: (callback: () => void) => {
    on(channels.menu.newNote, callback);
  },

  onMenuShowWelcome: (callback: () => void) => {
    on(channels.menu.showWelcome, callback);
  },

  onMenuDeleteAllNotes: (callback: () => void) => {
    on(channels.menu.deleteAllNotes, callback);
  },
  
  setDeleteAllNotesEnabled: (enabled: boolean) => {
    send(channels.menu.setDeleteAllNotesEnabled, enabled);
  }
};
