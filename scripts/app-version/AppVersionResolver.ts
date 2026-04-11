/**
 * Copyright (c) 2026 SolisWare.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { AppVersionConfig } from "./AppVersionConfig";

export class AppVersionResolver {

  public static getCombinedVersion(appVersionConfig: AppVersionConfig): string {
    const { majorVersion, minorVersion, patchVersion, preReleaseVersion, buildVersion } = appVersionConfig;

    if (![majorVersion, minorVersion, patchVersion].every((value) => Number.isInteger(value) && value >= 0)) {
      throw new Error("majorVersion, minorVersion, and patchVersion must be non-negative integers.");
    }

    if (preReleaseVersion !== undefined && (typeof preReleaseVersion !== "string" || preReleaseVersion.trim() === "")) {
      throw new Error("preReleaseVersion must be a non-empty string when provided.");
    }

    if (buildVersion !== undefined && (!Number.isInteger(buildVersion) || buildVersion < 0)) {
      throw new Error("buildVersion must be a non-negative integer when provided.");
    }

    const preReleaseSuffix = preReleaseVersion ? `-${preReleaseVersion}` : "";
    const buildSuffix = buildVersion !== undefined ? `-b${buildVersion}` : "";

    return `${majorVersion}.${minorVersion}.${patchVersion}${preReleaseSuffix}${buildSuffix}`;
  }

  public static getBuildVersion(appVersionConfig: AppVersionConfig): string | undefined {
    const { buildVersion } = appVersionConfig;

    if (buildVersion !== undefined && (!Number.isInteger(buildVersion) || buildVersion < 0)) {
      throw new Error("buildVersion must be a non-negative integer when provided.");
    }

    return buildVersion !== undefined ? `${buildVersion}` : undefined;
  }

  public static getAboutVersion(appVersionConfig: AppVersionConfig): string | undefined {
    const { aboutVersionLabel } = appVersionConfig;

    if (aboutVersionLabel !== undefined && (typeof aboutVersionLabel !== "string" || aboutVersionLabel.trim() === "")) {
      throw new Error("aboutVersionLabel must be a non-empty string when provided.");
    }

    return aboutVersionLabel;
  }

}
