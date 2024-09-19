/**
 * Copyright (c) 2023 X-SiGMA Systems.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
// All Node.js APIs are available in the preload process.
import { contextBridge, ipcRenderer } from "electron";

// It has the same sandbox as a Chrome extension.
window.addEventListener("DOMContentLoader", () => {
  // We have some window and Node.js access here to do stuff on the initial load
});

interface window {
  api: {
    send: () => void;
    receive: () => void;
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

// THIS is just to satify TypeScript error
export {}
