import { AppColors } from './AppColors';
/**
 * Copyright (c) 2023 X-SiGMA Systems.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { createTheme } from "@mui/material";

export class AppTheme {
  
  public static Theme = createTheme({
    palette: {
      primary: {
        light: AppColors.MAIN_LIGHT,
        main: AppColors.MAIN,
        dark: AppColors.MAIN_DARK
      },
      secondary: {
        light: AppColors.SECONDARY_LIGHT,
        main: AppColors.SECONDARY,
        dark: AppColors.SECONDARY_DARK
      }
    }
  });
  
}
 