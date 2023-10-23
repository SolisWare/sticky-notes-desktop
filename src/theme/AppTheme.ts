/**
 * Copyright (c) 2023 X-SiGMA Systems.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { AppColors } from './AppColors';
import { createTheme } from "@mui/material/styles";

export class AppTheme {
  
  // Overrides default MUI styles.
  public static Theme = createTheme({
    palette: {
      primary: {
        light: AppColors.MAIN_LIGHT,
        main: AppColors.MAIN,
        dark: AppColors.MAIN_DARK,
        contrastText: AppColors.MAIN_TEXT
      },
      secondary: {
        light: AppColors.SECONDARY_LIGHT,
        main: AppColors.SECONDARY,
        dark: AppColors.SECONDARY_DARK,
        contrastText: AppColors.SECONDARY_TEXT
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
        fontSize: 14
      },
      body2: {
        fontSize: 12
      }
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            minWidth: 0
          }
        },
        variants: [
          {
            props: {
              variant: "toolbar"
            },
            style: {
              backgroundColor: AppColors.MAIN,
              outline: "1px solid #FFFFFF",
              boxShadow: "none",
              '&:hover': {
                backgroundColor: AppColors.SECONDARY,
                outline: "1px solid " + AppColors.SECONDARY_LIGHT
              }
            }
          }
        ]
      }
    }
  });
  
}
 