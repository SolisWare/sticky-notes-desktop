/**
 * Copyright (c) 2023 X-SiGMA Systems.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { makeStyles } from "@mui/styles";
import { Paper, Theme, Typography } from "@mui/material";
import { NoteColors } from "../../../theme/NoteColors";
import { AppColors } from "../../../theme/AppColors";
import { fontSize } from "@mui/system";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

type AddNoteProps = {
   
}
 
const useStyles = makeStyles((theme: Theme) => ({
  addNote: {
    width: "200px",
    height: "200px",
    marginLeft: "35px",
    marginTop: "25px",
    backgroundColor: "transparent"
  },
  addNoteInnerContainer: {
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: AppColors.NEW_NOTE_BG
  },
  addNoteActionContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "auto",
    marginBottom: "auto",
    verticalAlign: "center"
  }
}));
 
function AddNote(props: AddNoteProps) {
  const classes = useStyles();
  
  return (
    <Paper elevation={2} className={classes.addNote}>
      <div className={classes.addNoteInnerContainer}>
        <div className={classes.addNoteActionContainer}>
          <AddCircleOutlineIcon color="primary" fontSize="large" />
          <Typography variant="overline">New Note</Typography>
        </div>
      </div>
    </Paper>
  );
}

export default AddNote;
 