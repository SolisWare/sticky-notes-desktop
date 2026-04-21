/**
 * Copyright (c) 2026 SolisWare.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { nativeTheme } from "electron";

enum SystemTheme {
  LIGHT = "light",
  DARK = "dark"
}

const getSystemTheme = (): SystemTheme => {
  return nativeTheme.shouldUseDarkColors ? SystemTheme.DARK : SystemTheme.LIGHT;
};

export {
    SystemTheme,
    getSystemTheme
};
