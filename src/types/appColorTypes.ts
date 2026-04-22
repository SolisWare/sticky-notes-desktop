/**
 * Copyright (c) 2026 SolisWare.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { getAppColors } from "../theme/AppColors";

export type AppColorPalette = ReturnType<typeof getAppColors>;

export type AppColorStyleProps = {
  appColors: AppColorPalette;
};
