/**
 * Copyright (c) 2023-2024 X-SiGMA Systems.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
// All Node.js APIs are available in the preload process.
import { contextBridge, ipcRenderer } from "electron";
import { isMac, isWindows } from './utils/Platform';

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
    os: {
      isMac: boolean;
      isWindows: boolean;
    };
  }
};

contextBridge.exposeInMainWorld('api', {
  send: (channel: string, data: any) => {
    ipcRenderer.send(channel, data);
  },
  receive: (channel: string, callback: any) => {
    ipcRenderer.on(channel, (_, ...args) => callback(...args));
  }
});

contextBridge.exposeInMainWorld('os', {
  isMac,
  isWindows
});

// THIS is just to satify TypeScript error
export {}
