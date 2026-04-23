/**
 * Copyright (c) 2023-2026 SolisWare.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { SystemTheme } from "./SystemTheme";

export enum NoteColorKey {
  YELLOW = "yellow",
  GREEN = "green",
  INDIGO = "indigo",
  RED = "red",
  TEAL = "teal",
  LILAC = "lilac"
}

export const NoteColors = {
  light: {
    [NoteColorKey.YELLOW]: "#F7F0AD",
    [NoteColorKey.GREEN]: "#D0E6BB",
    [NoteColorKey.INDIGO]: "#D5DEFD",
    [NoteColorKey.RED]: "#FDE2E2",
    [NoteColorKey.TEAL]: "#C9EFE6",
    [NoteColorKey.LILAC]: "#E7CCF1"
  },
  dark: {
    [NoteColorKey.YELLOW]: "#5A5124",
    [NoteColorKey.GREEN]: "#334E2E",
    [NoteColorKey.INDIGO]: "#303A63",
    [NoteColorKey.RED]: "#5A3434",
    [NoteColorKey.TEAL]: "#254F49",
    [NoteColorKey.LILAC]: "#4E345B"
  }
}

export function getRandomNoteColor(): NoteColorKey {
  const values = Object.values(NoteColorKey);
  const index = Math.floor(Math.random() * values.length);

  return values[index];
}

export function getNoteColor(colorKey: NoteColorKey, theme: SystemTheme): string {
  return theme === SystemTheme.DARK ? NoteColors.dark[colorKey] : NoteColors.light[colorKey];
}
