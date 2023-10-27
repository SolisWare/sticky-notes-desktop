/**
 * Copyright (c) 2023 X-SiGMA Systems.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
export class Platform {
  
  public static isMac = process.platform === "darwin";
  
  public static isLinux = process.platform === "linux";  
  
  public static isWindows = process.platform === "win32";
}
