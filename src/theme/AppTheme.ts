/**
 * Copyright (c) 2023-2026 SolisWare.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { AppColors } from './AppColors';
import { createTheme } from "@mui/material/styles";

export class AppTheme {

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
      },
      background: {
        default: AppColors.ACCENT,
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

  public static DarkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        light: "#4AA3D1",
        main: "#2A7CA5",
        dark: "#1F5C79",
        contrastText: "#F5F7FA"
      },
      secondary: {
        light: "#4E8E76",
        main: "#2F6C57",
        dark: "#244F41",
        contrastText: "#F5F7FA"
      },
      background: {
        default: "#13181C",
        paper: "#1C2329"
      },
      text: {
        primary: "#F5F7FA",
        secondary: "#B7C0C9"
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
 
