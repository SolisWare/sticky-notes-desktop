/**
 * Copyright (c) 2024-2026 SolisWare.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import * as os from "os";

/**
 * Checks if Node.js runs on macOS.
 */
const isMac: boolean = os.platform() === "darwin";

/**
 * Checks if Node.js runs on Windows.
 */
const isWindows: boolean = os.platform() === "win32";

export { 
        isMac,
        isWindows
};
