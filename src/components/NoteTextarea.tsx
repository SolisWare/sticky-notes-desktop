/**
 * Copyright (c) 2023-2026 SolisWare.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ChangeEventHandler } from "react";
import { getAppColors } from "../theme/AppColors";
import { SystemTheme } from "../theme/SystemTheme";
import { AppColorStyleProps } from "../types/appColorTypes";
 
type NoteTextareaProps = {
  theme?: SystemTheme;
  placeholder: string;
  content: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}
 
const useStyles = makeStyles<Theme, AppColorStyleProps>((theme: Theme) => ({
  noteTextarea: {
    width: "100%",
    height: "100%",
    minHeight: "100%",
    background: "transparent",
    outline: "none",
    border: "none",
    resize: "none",
    fontSize: 14,
    color: ({ appColors }) => appColors.NOTE_TEXT + " !important",
    caretColor: ({ appColors }) => appColors.NOTE_TEXT,
    '&::placeholder': {
      color: ({ appColors }) => appColors.NOTE_PLACEHOLDER_TEXT,
      opacity: 1
    }
  }
}));
 
function NoteTextarea(props: NoteTextareaProps) {
  const appColors = getAppColors(props.theme ?? SystemTheme.LIGHT);
  const classes = useStyles({ appColors });
   
  return (
    <textarea className={classes.noteTextarea}
              placeholder={props.placeholder}
              defaultValue={props.content}
              onChange={props.onChange} />
  );
}
 
export default NoteTextarea;
 
