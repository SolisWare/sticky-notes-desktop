/**
 * Copyright (c) 2026 SolisWare.
 *
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { on, send } from "./ipcHelpers";

export const menuApi = {

  onMenuNewNote: (callback: () => void) => {
    on('menu.newNote', callback);
  },

  onMenuDeleteAllNotes: (callback: () => void) => {
    on('menu.deleteAllNotes', callback);
  },
  
  setDeleteAllNotesEnabled: (enabled: boolean) => {
    send('menu.setDeleteAllNotesEnabled', enabled);
  }
};
