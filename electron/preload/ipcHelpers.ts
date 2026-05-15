/**
 * Copyright (c) 2026 SolisWare.
 *
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { ipcRenderer } from "electron";

export const send = (channel: string, ...data: any[]): void => {
  ipcRenderer.send(channel, data);
};

export const receive = async (channel: string): Promise<any> => {
  return ipcRenderer.invoke(channel);
};

export const on = (channel: string, callback: (...args: any[]) => void): void => {
  ipcRenderer.on(channel, callback);
};

export const off = (channel: string, callback: (...args: any[]) => void): void => {
  ipcRenderer.removeListener(channel, callback);
};
