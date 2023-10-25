/**
 * Copyright (c) 2023 X-SiGMA Systems.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { Button, Divider, Paper, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { NoteColors } from "../theme/NoteColors";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Formatter } from "../utils/dt-formatter/Formatter";
import XTextarea from "./XTextarea";
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
  noteFooterUtilBarDeleteBtn: {
    width: 30,
    height: 30,
    color: AppColors.MAIN,
    "&:hover": {
      color: AppColors.SECONDARY
    }
  }
}));

const handleDeleteNote = (noteId: string) => {
  console.log("Clicked Note with Note-ID: " + noteId)
}

function Note(props: NoteProps) {
  const classes = useStyles();
  
  return (
    <Paper elevation={4} className={classes.note}>
      <div className={classes.noteInnerContainer} style={{backgroundColor: props.note.bgcolor}}>
        <div className={classes.noteContentWrapper}>
          <div className={classes.noteBody}>
            <div className={classes.noteTitleWrapper}>
              {/* TODO: Add editable title section */}
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
              <Button className={classes.noteFooterUtilBarDeleteBtn} onClick={() => handleDeleteNote(props.note.id)}>
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
 