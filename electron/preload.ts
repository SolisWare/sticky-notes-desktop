/**
 * Copyright (c) 2023-2024 X-SiGMA Systems.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { contextBridge, ipcRenderer } from "electron";
import { isMac, isWindows } from './utils/Platform';

// All Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

const send = (channel: string, data: any): void => {
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
    }
  },
  os: {
    isMac,
    isWindows
  }
});

// THIS is just to satify TypeScript error
export {}
