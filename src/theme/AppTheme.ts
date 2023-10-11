/**
 * Copyright (c) 2023 X-SiGMA Systems.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { AppColors } from './AppColors';
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
    },
    typography: {
      h1: {
        fontSize: 86
      },
      h2: {
        fontSize: 52
      },
      h3: {
        fontSize: 42
      },
      h4: {
        fontSize: 30
      },
      h5: {
        fontSize: 22
      },
      h6: {
        fontSize: 18
      },
      body1: {
        fontSize: 13
      },
      body2: {
        fontSize: 11
      }
    }
  });
  
}
 