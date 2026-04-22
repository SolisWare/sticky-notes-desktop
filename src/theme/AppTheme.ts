/**
 * Copyright (c) 2023-2026 SolisWare.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { AppColors, getAppColors } from './AppColors';
import { createTheme } from "@mui/material/styles";
import { SystemTheme } from './SystemTheme';

export class AppTheme {

  private static readonly LightColors = getAppColors(SystemTheme.LIGHT);
  private static readonly DarkColors = getAppColors(SystemTheme.DARK);

  private static getSharedThemeConfig() {
    return {
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
                boxShadow: "none"
              }
            }
          ]
        }
      }
    };
  }
  
  // Overrides default MUI styles.
  public static LightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        light: this.LightColors.MAIN_LIGHT,
        main: this.LightColors.MAIN,
        dark: this.LightColors.MAIN_DARK,
        contrastText: this.LightColors.MAIN_TEXT
      },
      secondary: {
        light: this.LightColors.SECONDARY_LIGHT,
        main: this.LightColors.SECONDARY,
        dark: this.LightColors.SECONDARY_DARK,
        contrastText: this.LightColors.SECONDARY_TEXT
      },
      background: {
        default: this.LightColors.ACCENT,
        paper: AppColors.NEW_NOTE_BG
      }
    },
    ...AppTheme.getSharedThemeConfig(),
    components: {
      ...AppTheme.getSharedThemeConfig().components,
      MuiButton: {
        ...AppTheme.getSharedThemeConfig().components.MuiButton,
        styleOverrides: {
          root: {
            minWidth: 0,
            "&.MuiButton-toolbar.Mui-disabled": {
              color: AppColors.DISABLED_TEXT,
              outline: "1px solid " + AppColors.DISABLED_TEXT
            }
          }
        },
        variants: [
          {
            props: {
              variant: "toolbar"
            },
            style: {
              backgroundColor: this.LightColors.MAIN,
              outline: "1px solid #FFFFFF",
              boxShadow: "none",
              '&:hover': {
                backgroundColor: this.LightColors.SECONDARY,
                outline: "1px solid " + this.LightColors.SECONDARY_LIGHT
              }
            }
          }
        ]
      }
    }
  });

  public static DarkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        light: this.DarkColors.MAIN_LIGHT,
        main: this.DarkColors.MAIN,
        dark: this.DarkColors.MAIN_DARK,
        contrastText: this.DarkColors.MAIN_TEXT
      },
      secondary: {
        light: this.DarkColors.SECONDARY_LIGHT,
        main: this.DarkColors.SECONDARY,
        dark: this.DarkColors.SECONDARY_DARK,
        contrastText: this.DarkColors.SECONDARY_TEXT
      },
      background: {
        default: this.DarkColors.ACCENT,
        paper: AppColors.NEW_NOTE_BG
      },
      text: {
        primary: this.DarkColors.MAIN_TEXT,
        secondary: this.DarkColors.SECONDARY_TEXT
      }
    },
    ...AppTheme.getSharedThemeConfig(),
    components: {
      ...AppTheme.getSharedThemeConfig().components,
      MuiAppBar: {
        defaultProps: {
          enableColorOnDark: true
        },
        styleOverrides: {
          colorPrimary: {
            backgroundColor: "#1E4256",
            color: "#F5F7FA"
          }
        }
      },
      MuiButton: {
        ...AppTheme.getSharedThemeConfig().components.MuiButton,
        styleOverrides: {
          root: {
            minWidth: 0,
            "&.MuiButton-toolbar.Mui-disabled": {
              color: "#7E8892",
              outline: "1px solid #4A535C"
            }
          }
        },
        variants: [
          {
            props: {
              variant: "toolbar"
            },
            style: {
              backgroundColor: "transparent",
              color: "#F5F7FA",
              outline: "1px solid #44667A",
              boxShadow: "none",
              '&:hover': {
                backgroundColor: "#234F3F",
                outline: "1px solid #4D7B69"
              }
            }
          }
        ]
      }
    }
  });
  
}
 
