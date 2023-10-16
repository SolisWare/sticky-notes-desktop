/**
 * Copyright (c) 2023 X-SiGMA Systems.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { makeStyles } from "@mui/styles";
import { Paper, Theme, Typography } from "@mui/material";
import { AppColors } from "../../../theme/AppColors";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button } from "@mui/base";

type AddNoteProps = {
   
}
 
const useStyles = makeStyles((theme: Theme) => ({
  addNote: {
    width: "125px",
    height: "225px",
    marginLeft: "25px",
    marginTop: "12.5px",
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
  },
  addNoteBtn: {
    width: "100%",
    height: "50px"
  }
}));
 
function AddNote(props: AddNoteProps) {
  const classes = useStyles();
  
  return (
    <Paper elevation={3} className={classes.addNote}>
      <div className={classes.addNoteInnerContainer}>
        <div className={classes.addNoteActionContainer}>
          <Button className={classes.addNoteBtn} onClick={() => handleAddNote()}>
            <AddCircleOutlineIcon color="primary" fontSize="large" />
          </Button>         
          <Typography variant="overline">New Note</Typography>
        </div>
      </div>
    </Paper>
  );
}

export default AddNote;
 