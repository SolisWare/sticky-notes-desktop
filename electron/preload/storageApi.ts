/**
 * Copyright (c) 2026 SolisWare.
 *
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { NoteType } from "../../src/models/NoteType";
import { receive, send } from "./ipcHelpers";

export const storageApi = {

  setNote: (note: NoteType) => {
    send('storage.setNote', note);
  },

  getNotes: async (): Promise<NoteType[]> => {
    try {
      const notes = await receive<NoteType[]>('storage.getNotes');
      console.log(`Loaded ${notes.length} notes`);
      return notes;
    } catch (err) {
      console.error('Failed to load notes:', (err as Error).message);
      return [];
    }
  },

  deleteNote: (noteId: string) => {
    send('storage.deleteNote', noteId);
  },
  
  deleteAllNotes: () => {
    send('storage.deleteAllNotes');
  }
};
