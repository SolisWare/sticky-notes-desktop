/**
 * Copyright (c) 2024-2026 SolisWare.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { NoteType } from '../../src/models/NoteType';
import { SystemTheme } from '../utils/SystemTheme';

interface IElectronAPI {
  storage: {
    getDataDir: () => Promise<string>;
    getNotes: () => Promise<NoteType[]>;
    setNote: (note: NoteType) => void;
    deleteNote: (noteId: string) => void;
    deleteAllNotes: () => void;
  },
  menu: {
    onMenuNewNote: (callback: () => void) => void;
  },
  version: {
    getShortDisplayVersion: () => string;
  },
  systemTheme: {
    theme: SystemTheme;
  },
  os: {
    isMac: boolean;
    isWindows: boolean;
  }
}

declare global {
  interface Window {
    api: IElectronAPI;
  }
}
