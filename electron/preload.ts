/**
 * Copyright (c) 2023-2024 X-SiGMA Systems.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { contextBridge, ipcRenderer } from "electron";
import { join, resolve } from "path";
import { NoteType } from "../src/models/NoteType";
import { isMac, isWindows } from './utils/Platform';
import { rejects } from "assert";

// All Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

const send = (channel: string, ...data: any[]): void => {
  ipcRenderer.send(channel, data);
};

const receive = async (channel: string): Promise<any> => {
  return ipcRenderer.invoke(channel);
};

contextBridge.exposeInMainWorld('api', {
  storage: {
    getDataDir: () => {
      return new Promise<string>((resolve, reject) => {
        receive('storage.getDataDir')
          .then((path: string) => {
            resolve(path);
          })
          .catch(_ => {
            reject(undefined);
          });
      });
    },
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
    }
  },
  os: {
    isMac,
    isWindows
  }
});

// THIS is just to satify TypeScript error
export {}
