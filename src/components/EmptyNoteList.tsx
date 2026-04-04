/**
 * Copyright (c) 2023-2026 SolisWare.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from 'clsx';
import { AppColors } from "../theme/AppColors";
import { UserAgent } from "../utils/UserAgent";

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    position: "fixed",
    width: "95%"
  },
  text: {
    paddingBottom: 7,
    color: AppColors.DISABLED_TEXT
    
  },
  text2: {
    fontStyle: "italic"
  }
}));
 
function EmptyNoteList() {
  const classes = useStyles();
  const isMac = UserAgent.isElectron ? window.api.os.isMac : UserAgent.isMac;
  const platform = isMac ? "Cmd" : "Ctrl";
  
  return (
    <div className={classes.wrapper}>
      <Typography className={classes.text} fontSize="large">You don't have any notes yet!</Typography>
      <Typography className={clsx(classes.text, classes.text2)}>Press {platform}+N to add your first note</Typography>
    </div>
  );
}

export default EmptyNoteList;
