/**
 * Copyright (c) 2023-2026 SolisWare.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { contextBridge, ipcRenderer } from "electron";
import { NoteType } from "../src/models/NoteType";
import { isMac, isWindows } from './utils/Platform';
import appVersionConfig from "../app-version-config.json";
import { AppVersionResolver } from "../scripts/app-version/AppVersionResolver";
import { SystemTheme } from "./utils/SystemTheme";

// All Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

const send = (channel: string, ...data: any[]): void => {
  ipcRenderer.send(channel, data);
};

const receive = async (channel: string): Promise<any> => {
  return ipcRenderer.invoke(channel);
};

const on = (channel: string, callback: (...args: any[]) => void): void => {
  ipcRenderer.on(channel, callback);
};

const off = (channel: string, callback: (...args: any[]) => void): void => {
  ipcRenderer.removeListener(channel, callback);
};

contextBridge.exposeInMainWorld('api', {
  storage: {
    setNote: (note: NoteType) => {
      send('storage.setNote', note);
    },
    getNotes: () => {
      return receive('storage.getNotes')
        .then((notes: NoteType[]) => {
          console.log(`Loaded ${notes.length} notes`);
          return notes;
        })
        .catch((err: Error) => {
          console.error('Failed to load notes:', err.message);
          return [] as NoteType[];
        });
    },
    deleteNote: (noteId: string) => {
      send('storage.deleteNote', noteId);
    },
    deleteAllNotes: () => {
      send('storage.deleteAllNotes');
    }
  },
  menu: {
    onMenuNewNote: (callback: () => void) => {
      on('menu.newNote', callback);
    }
  },
  version: {
    getShortDisplayVersion: () => {
      return AppVersionResolver.getShortDisplayVersion(appVersionConfig);
    }
  },
  systemTheme: {
    getTheme: (): Promise<SystemTheme> => {
      return receive("systemTheme.getTheme")
    }
  },
  os: {
    isMac,
    isWindows
  }
});

// THIS is just to satify TypeScript error
export {}
