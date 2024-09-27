/**
 * Copyright (c) 2024 X-SiGMA Systems.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { NoteType } from '../../src/models/NoteType';

interface IElectronAPI {
  storage: {
    getDataDir: () => Promise<string>;
    getNote: () => NoteType;
    getNotes: () => NoteType[];
    setNote: (note: NoteType) => void;
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
