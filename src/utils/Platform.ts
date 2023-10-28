/**
 * Copyright (c) 2023 X-SiGMA Systems.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
export class Platform {
  
  private static userAgent = window.navigator.userAgent.toLowerCase();
  
  public static isElectron = Platform.userAgent.includes("electron");
  
  public static isMac = Platform.isElectron ?
        process.platform === "darwin"
        : (Platform.userAgent.includes("mac") || Platform.userAgent.includes("macintosh"));
}
