/**
 * Copyright (c) 2024-2026 SolisWare.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { NoteType } from '../../src/models/NoteType';

interface IElectronAPI {
  storage: {
    getDataDir: () => Promise<string>;
    getNotes: () => Promise<NoteType[]>;
    setNote: (note: NoteType) => void;
    deleteNote: (noteId: string) => void;
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
