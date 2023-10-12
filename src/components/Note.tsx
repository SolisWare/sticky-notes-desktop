/**
 * Copyright (c) 2023 X-SiGMA Systems.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { Divider, Paper, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { NoteColors } from "../theme/NoteColors";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

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
    padding: "20px 10px 10px 10px",
    wordBreak: "keep-all",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  noteBody: {
    
  },
  noteTitle: {
    paddingBottom: "5px"
  },
  noteContent: {
    paddingLeft: "1px",
    paddingRight: "1px"
  },
  noteFooter: {
    
  },
  noteFooterUtilBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "5px",
    padding: "0 5px"
  }
}));

function Note(props: NoteProps) {
  const classes = useStyles();
  
  return (
    <Paper elevation={4} className={classes.note}>
      <div className={classes.noteInnerContainer} style={{backgroundColor: props.note.bgcolor}}>
        <div className={classes.noteContentWrapper}>
          <div className={classes.noteBody}>
            <Typography variant="h6" fontWeight="bold" fontStyle="italic" className={classes.noteTitle}>{props.note.title}</Typography>
            <Typography variant="body2" className={classes.noteContent}>{props.note.content}</Typography>
          </div>
          <div className={classes.noteFooter}>
            <Divider />
            <div className={classes.noteFooterUtilBar}>
              <small>{props.note.date.getTime()}</small>
              <DeleteForeverOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
}

export default Note;
 