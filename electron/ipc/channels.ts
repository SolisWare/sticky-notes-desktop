/**
 * Copyright (c) 2026 SolisWare.
 *
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
export const channels = {
  menu: {
    newNote: "menu.newNote",
    deleteAllNotes: "menu.deleteAllNotes",
    setDeleteAllNotesEnabled: "menu.setDeleteAllNotesEnabled"
  },
  settings: {
    getSettings: "settings.getSettings",
    setSettings: "settings.setSettings"
  },
  storage: {
    setNote: "storage.setNote",
    getNotes: "storage.getNotes",
    deleteNote: "storage.deleteNote",
    deleteAllNotes: "storage.deleteAllNotes"
  },
  systemTheme: {
    onThemeChange: "systemTheme.onThemeChange"
  }
} as const;
