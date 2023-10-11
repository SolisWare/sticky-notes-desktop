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

type NoteProps = {
  
};

const useStyles = makeStyles((theme: Theme) => ({
  note: {
    width: "275px",
    height: "250px",
    marginBottom: "20px",
  },
  noteInnerContainer: {
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: NoteColors.INDIGO
  },
  noteContentWrapper: {
    height: "100%",
    padding: "20px 15px",
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
    
  },
  noteFooter: {
    
  },
  noteFooterUtilBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "5px",
    padding: "0 2px 0 2px"
  }
}));

function Note(props: NoteProps) {
  const classes = useStyles();
  
  return (
    <Paper elevation={4} className={classes.note}>
      <div className={classes.noteInnerContainer}>
        <div className={classes.noteContentWrapper}>
          <div className={classes.noteBody}>
            <Typography variant="h6" fontWeight="bold" fontStyle="italic" className={classes.noteTitle}>Hello world!</Typography>
            <Typography variant="body1" className={classes.noteContent}>This is a test of an app X-NoTES. Over and out.</Typography>
          </div>
          <div className={classes.noteFooter}>
            <Divider />
            <div className={classes.noteFooterUtilBar}>
              <small>10/11/2023</small>
              <DeleteForeverOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
}

export default Note;
 