/**
 * Copyright (c) 2023 X-SiGMA Systems.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
export class Formatter {
  
  public static getFormattedDate(date: Date): string {
    let month = date.getMonth() + 1; //January is 0; February is 1, etc
    let day = date.getDate();
    let year = date.getFullYear();
    
    return `${month}/${day}/${year}`;
  }
  
}
 