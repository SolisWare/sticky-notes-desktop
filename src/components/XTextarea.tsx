/**
 * Copyright (c) 2023-2026 SolisWare.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ChangeEventHandler, FocusEventHandler } from "react";
import { NoteType } from "../models/NoteType";
 
type XTextareaProps = {
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
  }
}));
 
function XTextarea(props: XTextareaProps) {
  const classes = useStyles();
   
  return (
    <textarea className={classes.xTextarea}
              placeholder={props.placeholder}
              defaultValue={props.content}
              onChange={props.onChange} />
  );
}
 
export default XTextarea;
 