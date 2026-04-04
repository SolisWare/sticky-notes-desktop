/**
 * Copyright (c) 2023-2026 SolisWare.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
 export enum NoteColors {
   YELLOW   = "#F7F0AD",
   GREEN    = "#D0E6BB",
   INDIGO   = "#D5DEFD",
   RED      = "#FDE2E2",
   TEAL     = "#C9EFE6",
   LILAC    = "#E7CCF1"
 }
 
 export function getRandomNoteColor(): NoteColors {
   const values = Object.values(NoteColors);
   const index = Math.floor(Math.random() * values.length);
   
   return values[index];
 }
 