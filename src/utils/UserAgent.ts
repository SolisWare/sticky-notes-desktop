/**
 * Copyright (c) 2023-2024 X-SiGMA Systems.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
export class UserAgent {
  
  private static userAgent = window.navigator.userAgent.toLowerCase();
  
  public static isElectron = UserAgent.userAgent.includes("electron");
}
