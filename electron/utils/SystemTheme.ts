/**
 * Copyright (c) 2026 SolisWare.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
enum SystemTheme {
  LIGHT = "light",
  DARK = "dark"
}

const resolveSystemTheme = (isDark: boolean): SystemTheme => {
  return isDark ? SystemTheme.DARK : SystemTheme.LIGHT;
};

export {
    SystemTheme,
    resolveSystemTheme
};
