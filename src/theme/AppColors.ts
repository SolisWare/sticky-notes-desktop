import { DarkAppColors } from "./DarkAppColors";
import { LightAppColors } from "./LightAppColors";
import { SystemTheme } from "./SystemTheme";

/**
 * Copyright (c) 2023-2026 SolisWare.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
export const AppColors = {
  LIGHT: LightAppColors,
  DARK: DarkAppColors,

  // Add New note Tile
  NEW_NOTE_BG: "#F2F7FF",
  // MISC
  DISABLED_TEXT: "#B0B0B0"
}

export const getAppColors = (theme: SystemTheme) => {
  return theme === SystemTheme.DARK ? AppColors.DARK : AppColors.LIGHT;
}
