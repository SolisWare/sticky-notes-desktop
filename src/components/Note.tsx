/**
 * Copyright (c) 2023-2026 SolisWare.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { Button, Divider, Paper, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Formatter } from "../utils/dt-formatter/Formatter";
import XTextarea from "./XTextarea";
import { getAppColors } from "../theme/AppColors";
import { NoteType } from "../models/NoteType";
import { Autosave } from "react-autosave";
import { SystemTheme } from "../theme/SystemTheme";
import { ChangeEvent, useRef, useState } from "react";
import { AppColorStyleProps } from "../types/appColorTypes";
import { getNoteColor } from "../theme/NoteColors";

type NoteProps = {
  theme: SystemTheme;
  note: NoteType;
  handleDeleteNoteButton: (noteId: string) => void;
  handleNoteSave: (note: NoteType) => void;
};

const useStyles = makeStyles<Theme, AppColorStyleProps>((theme: Theme) => ({
  note: {
    width: "275px",
    height: "250px",
    marginBottom: "10px",
  },
  noteInnerContainer: {
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  noteContentWrapper: {
    height: "100%",
    padding: "15px 10px 5px 10px",
    wordBreak: "keep-all",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  noteBody: {
    height: "192px",
  },
  noteTitleWrapper: {
    
  },
  noteContent: {
    paddingLeft: "2px",
    paddingRight: "2px"
  },
  noteFooter: {
    
  },
  noteFooterUtilBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "4px",
    padding: "0 3px"
  },
  noteFooterUtilBarDate: {
    paddingTop: "5px",
    fontStyle: "italic"
  },
  noteFooterUtilBarDateDark: {
    color: "#D2D8DE"
  },
  noteFooterUtilBarDeleteBtn: {
    width: 30,
    height: 30,
    color: ({ appColors }) => appColors.MAIN,
    "&.MuiButton-root:hover": {
      color: ({ appColors }) => appColors.ERROR,
      backgroundColor: ({ appColors }) => appColors.ERROR_LIGHT_BACKGROUND
    }
  },
  noteFooterUtilBarDeleteBtnDark: {
    color: "#DCE7EF",
    "&.MuiButton-root:hover": {
      color: "#FFDCE2",
      backgroundColor: "#5A303A"
    }
  }
}));

function Note(props: NoteProps) {
  const appColors = getAppColors(props.theme);
  const classes = useStyles({ appColors });
  
  const [note, setNote] = useState<NoteType>(props.note);

  const isDeleting = useRef(false);

  const isDarkTheme = props.theme === SystemTheme.DARK;
  const color = getNoteColor(note.bgcolor, props.theme);
  
  const handleNoteChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const updatedContent = event.target.value;
    const updatedNote: NoteType = {
      id: props.note.id,
      bgcolor: props.note.bgcolor,
      title: props.note.title,
      content: updatedContent,
      date: new Date()
    };
    
    setNote(updatedNote);
  };

  const handleDeleteNote = () => {
    isDeleting.current = true;
    props.handleDeleteNoteButton(note.id);
  };
  
  return (
    <Paper
      elevation={4}
      className={classes.note}
      style={isDarkTheme ? {
        boxShadow: [
          "0px 2px 4px -1px rgba(118, 137, 156, 0.2)",
          "0px 4px 5px 0px rgba(118, 137, 156, 0.14)",
          "0px 1px 10px 0px rgba(118, 137, 156, 0.12)"
        ].join(",")
      } : undefined}
    >
      <div className={classes.noteInnerContainer} style={{backgroundColor: color}}>
        <div className={classes.noteContentWrapper}>
          <div className={classes.noteBody}>
            <div className={classes.noteTitleWrapper}>
              {/* TODO: Add editable title section */}
            </div>
            <XTextarea theme={props.theme} placeholder="Type here..." content={note.content} onChange={handleNoteChange} />
            <Autosave data={note} onSave={(note) => {
              if (!isDeleting.current) {
                props.handleNoteSave(note);
              }
            }} />
          </div>
          <div className={classes.noteFooter}>
            <Divider />
            <div className={classes.noteFooterUtilBar}>
              <Typography className={isDarkTheme ? `${classes.noteFooterUtilBarDate} ${classes.noteFooterUtilBarDateDark}` : classes.noteFooterUtilBarDate} variant="body2">
                <span>Last modified:&#160;</span>
                <span>{Formatter.getFormattedDate(note.date)}</span>
                <span>&#160;at&#160;</span>
                <span>{Formatter.getFormattedTimestamp(note.date)}</span>
              </Typography>
              <Button className={isDarkTheme ? `${classes.noteFooterUtilBarDeleteBtn} ${classes.noteFooterUtilBarDeleteBtnDark}` : classes.noteFooterUtilBarDeleteBtn} onClick={handleDeleteNote}>
                <DeleteForeverOutlinedIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
}

export default Note;
