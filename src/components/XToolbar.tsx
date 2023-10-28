/**
 * Copyright (c) 2023 X-SiGMA Systems.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from '@mui/material/Toolbar';
import { Box, Button, Theme } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { AppTheme } from "../theme/AppTheme";

const appTheme = AppTheme.Theme;

type XToolbarProps = {
  title: string;
  handleAddNoteButton: (event: React.MouseEvent<HTMLElement>) => void;
  handleDeleteAllNotesButton: (event: React.MouseEvent<HTMLElement>) => void;
};

const useStyles = makeStyles((theme: Theme) => ({
  toolbar: {
    height: 20
  },
  toolbarBtnsContainer: {
    padding: "5px",
    marginLeft: "25px",
  },
  toolbarBtn: {
    width: 130,
    height: 32,
    
  },
  toolbarBtnSpacer: {
    marginRight: 15
  },
  toolbarIconBtnInnerContainer: {
    display: "flex",
    alignItems: "center",
    verticalAlign: "center"
  },
  toolbarBtnText: {
    paddingTop: "3px",
    paddingLeft: "5px"
  }
}));

function XToolbar(props: XToolbarProps) {
  const classes = useStyles();
  
  return (
    <AppBar position="sticky">
      <Toolbar className={classes.toolbar}>
        {/* TODO: Add app icon. */}
        <Typography variant="h6" fontWeight="bold">
          {props.title}
        </Typography>
        <Box className={classes.toolbarBtnsContainer}>
          <Button className={classes.toolbarBtn} variant="toolbar" color="primary" onClick={props.handleAddNoteButton}>
            <div className={classes.toolbarIconBtnInnerContainer}>
              <AddCircleOutlineIcon fontSize="small" />
              <Typography className={classes.toolbarBtnText} variant="body2">New Note</Typography>
            </div>
          </Button>
          <span className={classes.toolbarBtnSpacer}/>
          <Button className={classes.toolbarBtn} variant="toolbar" color="primary" onClick={props.handleDeleteAllNotesButton}>
            <DeleteOutlineOutlinedIcon fontSize="small" />
            <Typography className={classes.toolbarBtnText} variant="body2">Delete All</Typography>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
  
}

export default XToolbar;
