/**
 * Copyright (c) 2023 X-SiGMA Systems.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { Divider, Paper, TextField, Theme, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { NoteColors } from "../theme/NoteColors";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Formatter } from "../utils/dt-formatter/Formatter";
import XTextarea from "./XTextarea";
import { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import { AppColors } from "../theme/AppColors";

export type Note = {
  id: string;
  bgcolor: NoteColors;
  title: string;
  content: string;
  date: Date;
};

type NoteProps = {
  note: Note;
};

const useStyles = makeStyles((theme: Theme) => ({
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
    padding: "15px 10px 8px 10px",
    wordBreak: "keep-all",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  noteBody: {
    height: "159px"
  },
  noteTitleWrapper: {
    paddingBottom: "5px"
  },
  noteTitleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  noteTitleEditBtn: {
    width: "25px",
    height: "25px",
    marginRight: "2px",
    marginTop: 1,
    backgroundColor: "transparent",
    border: "none"
  },
  noteTitleEditIcon: {
    color: AppColors.MAIN_LIGHT,
    opacity: .4,
    cursor: "pointer",
    padding: 1,
    "&:hover": {
      color: AppColors.SECONDARY_LIGHT,
      opacity: .7
    }
  },
  noteTitle: {
    
  },
  noteTitleEditContainer: {
    paddingBottom: "12px"
  },
  noteTitleEdit: {
    width: "90%"
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
    marginTop: "5px",
    padding: "0 5px"
  },
  noteFooterUtilBarDate: {
    paddingTop: "5px",
    fontStyle: "italic"
  }
}));

function Note(props: NoteProps) {
  const classes = useStyles();
  const [isTitleEditable, setTitleEditable] = useState(false);
  
  const handleTitleFocus = () => {
    setTitleEditable(!isTitleEditable);
  }
  
  return (
    <Paper elevation={4} className={classes.note}>
      <div className={classes.noteInnerContainer} style={{backgroundColor: props.note.bgcolor}}>
        <div className={classes.noteContentWrapper}>
          <div className={classes.noteBody}>
            <div className={classes.noteTitleWrapper}>
              {isTitleEditable ?
                <div className={classes.noteTitleEditContainer}>
                  <TextField className={classes.noteTitleEdit} size="small" variant="standard" placeholder=" Add title..." onBlur={() => handleTitleFocus()} autoFocus />
                </div>
                :
                <div className={classes.noteTitleContainer}>
                  <Typography variant="h6" fontWeight="bold" fontStyle="italic" className={classes.noteTitle} onClick={() => handleTitleFocus()}>{props.note.title}</Typography>
                </div>
              }
            </div>
            <XTextarea placeholder="Type here..." content={props.note.content}/>
          </div>
          <div className={classes.noteFooter}>
            <Divider />
            <div className={classes.noteFooterUtilBar}>
              <Typography className={classes.noteFooterUtilBarDate} variant="body2">
                <span>Last modified:&#160;</span>
                <span>{Formatter.getFormattedDate(props.note.date)}</span>
                <span>&#160;&#160;</span>
                <span>{Formatter.getFormattedTimestamp(props.note.date)}</span>
              </Typography>
              <DeleteForeverOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
}

export default Note;
 