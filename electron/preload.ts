/**
 * Copyright (c) 2023-2024 X-SiGMA Systems.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { contextBridge, ipcRenderer } from "electron";
import { NoteType } from "../src/models/NoteType";
import { isMac, isWindows } from './utils/Platform';

// All Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener("DOMContentLoader", () => {
  // We have some window and Node.js access here to do stuff on the initial load
});

declare global {
  interface Window {
    // api: {
    //   send: (channel: string, data: any) => void;
    //   receive: (channel: string, callback: any) => any;
    // },
    storage: {
      getDataDir: () => Promise<string>;
      getNote: () => NoteType;
      getNotes: () => NoteType[];
      setNote: () => void;
    },
    os: {
      isMac: boolean;
      isWindows: boolean;
    };
  }
}

// contextBridge.exposeInMainWorld('api', {
//   send: (channel: string, data: any) => {
//     ipcRenderer.send(channel, data);
//   },
//   receive: (channel: string, callback: any) => {
//     ipcRenderer.on(channel, (_, ...args) => callback(...args));
//   }
// });

const send = (channel: string, data: any) => {
  ipcRenderer.send(channel, data);
};

const receive = async (channel: string) => {
  //ipcRenderer.on(channel, (_, ...args) => callback(...args));
  
  return ipcRenderer.invoke(channel);
};

contextBridge.exposeInMainWorld('storage', {
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
  }
});

contextBridge.exposeInMainWorld('os', {
  isMac,
  isWindows
});

// THIS is just to satify TypeScript error
export {}
