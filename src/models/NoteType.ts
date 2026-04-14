/**
 * Copyright (c) 2023-2026 SolisWare.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { NoteColors } from "../theme/NoteColors";

export type NoteType = {
  id: string;
  bgcolor: NoteColors;
  title?: string;
  content: string;
  date: Date;
};
