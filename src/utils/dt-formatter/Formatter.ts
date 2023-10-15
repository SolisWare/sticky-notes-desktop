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
  
  public static getFormattedTimestamp(date: Date): string {
    let hours = date.getHours();
    let minutes = Formatter.leftpad(date.getMinutes());
    let period = (hours > 12) ? "PM" : "AM";
    
    if (hours > 12) {
      hours -= 12;
    } else if (hours === 0) {
      hours = 12;
    }
    
    return `${hours}:${minutes} ${period}`;
  }
  
  private static leftpad(number: number): number {
    return number < 10 ? parseInt(`0${number}`) : number;
  }
}
 