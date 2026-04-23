/**
 * Copyright (c) 2023-2026 SolisWare.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ChangeEventHandler } from "react";
import clsx from "clsx";
import { SystemTheme } from "../theme/SystemTheme";
 
type XTextareaProps = {
  theme?: SystemTheme;
  placeholder: string;
  content: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}
 
const useStyles = makeStyles((theme: Theme) => ({
  xTextarea: {
    width: "100%",
    height: "100%",
    minHeight: "100%",
    background: "transparent",
    outline: "none",
    border: "none",
    resize: "none",
    fontSize: 14
  },
  xTextareaDark: {
    color: "#F7FAFC",
    '&::placeholder': {
      color: "#E8EEF3",
      opacity: 1
    }
  }
}));
 
function XTextarea(props: XTextareaProps) {
  const classes = useStyles();
  const isDarkTheme = props.theme === SystemTheme.DARK;
   
  return (
    <textarea className={clsx(classes.xTextarea, isDarkTheme && classes.xTextareaDark)}
              placeholder={props.placeholder}
              defaultValue={props.content}
              onChange={props.onChange} />
  );
}
 
export default XTextarea;
 