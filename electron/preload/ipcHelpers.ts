/**
 * Copyright (c) 2026 SolisWare.
 *
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { ipcRenderer } from "electron";

type IpcRendererListener<Args extends unknown[] = unknown[]> = (event: Electron.IpcRendererEvent, ...args: Args) => void;

export const send = (channel: string, ...data: unknown[]): void => {
  ipcRenderer.send(channel, ...data);
};

export const receive = async <Response>(channel: string): Promise<Response> => {
  return ipcRenderer.invoke(channel);
};

export const on = <Args extends unknown[]>(channel: string, callback: IpcRendererListener<Args>): void => {
  ipcRenderer.on(channel, callback);
};

export const off = <Args extends unknown[]>(channel: string, callback: IpcRendererListener<Args>): void => {
  ipcRenderer.removeListener(channel, callback);
};
