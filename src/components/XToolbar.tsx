/**
 * Copyright (c) 2023-2026 SolisWare.
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
import clsx from "clsx";
import { AppColors } from "../theme/AppColors";

type XToolbarProps = {
  title: string;
  versionLabel: string;
  isDeleteAllButtonDisabled: boolean;
  handleAddNoteButton: (event: React.MouseEvent<HTMLElement>) => void;
  handleDeleteAllNotesButton: (event: React.MouseEvent<HTMLElement>) => void;
};

const useStyles = makeStyles((theme: Theme) => ({
  windowsToolbar: {
    backgroundColor: AppColors.TOOLBAR_BACKGROUND + "!important",
    color: AppColors.TOOLBAR_TEXT + "!important",
    boxShadow: "none !important",
    borderTop: "1px solid " + AppColors.TOOLBAR_TOP_BORDER,
    borderBottom: "1px solid " + AppColors.TOOLBAR_BOTTOM_BORDER
  },
  toolbar: {
    height: 20
  },
  toolbarBtnsContainer: {
    padding: "5px",
    marginLeft: "25px",
  },
  toolbarGrow: {
    flexGrow: 1
  },
  toolbarBtn: {
    width: 130,
    height: 32,
  },
  windowsToolbarBtn: {
    backgroundColor: AppColors.TOOLBAR_BUTTON_BACKGROUND + " !important",
    color: AppColors.TOOLBAR_TEXT + "!important",
    outline: "1px solid " + AppColors.TOOLBAR_BUTTON_BORDER + " !important",
    boxShadow: "none !important",
    '&:hover': {
      backgroundColor: AppColors.TOOLBAR_BUTTON_HOVER_BACKGROUND + " !important",
      color: AppColors.TOOLBAR_BUTTON_HOVER_TEXT + " !important",
      outline: "1px solid " + AppColors.TOOLBAR_BUTTON_HOVER_BORDER + " !important"
    }
  },
  toolbarBtnDelete: {
    '&:hover': {
      backgroundColor: AppColors.ERROR + "!important",
      outline: "1px solid " + AppColors.ERROR_LIGHT + "!important"
    }
  },
  windowsToolbarBtnDelete: {
    backgroundColor: AppColors.TOOLBAR_BUTTON_BACKGROUND + " !important",
    color: AppColors.TOOLBAR_TEXT + "!important",
    outline: "1px solid " + AppColors.TOOLBAR_BUTTON_BORDER + " !important",
    boxShadow: "none !important",
    '&:hover': {
      backgroundColor: AppColors.TOOLBAR_DELETE_BUTTON_HOVER_BACKGROUND + " !important",
      color: AppColors.TOOLBAR_DELETE_BUTTON_HOVER_TEXT + " !important",
      outline: "1px solid " + AppColors.TOOLBAR_DELETE_BUTTON_HOVER_BORDER + " !important"
    },
    '&.Mui-disabled': {
      backgroundColor: AppColors.TOOLBAR_BUTTON_DISABLED_BACKGROUND + " !important",
      color: AppColors.TOOLBAR_BUTTON_DISABLED_TEXT + " !important",
      outline: "1px solid " + AppColors.TOOLBAR_BUTTON_DISABLED_BORDER + " !important"
    }
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
  },
  windowsToolbarBtnText: {
    paddingTop: "3px",
    paddingLeft: "5px",
    color: "inherit"
  },
  windowsToolbarTitle: {
    color: AppColors.TOOLBAR_TEXT
  },
  toolbarVersionText: {
    color: AppColors.MAIN_TEXT,
    opacity: 0.95
  },
  windowsToolbarVersionText: {
    color: AppColors.TOOLBAR_TEXT,
    opacity: 0.72
  }
}));

function XToolbar(props: XToolbarProps) {
  const classes = useStyles();
  
  const isWindows = window.api.os.isWindows;
  
  return (
    <AppBar position="sticky" className={isWindows ? classes.windowsToolbar : undefined}>
      <Toolbar className={classes.toolbar}>
        {/* TODO: Add app icon. */}
        <Typography variant="h6" fontWeight="bold" className={isWindows ? classes.windowsToolbarTitle : undefined}>
          {props.title}
        </Typography>
        <Box className={classes.toolbarBtnsContainer}>
          <Button
            className={clsx(classes.toolbarBtn, isWindows && classes.windowsToolbarBtn)}
            variant="toolbar"
            color="primary"
            onClick={props.handleAddNoteButton}
          >
            <div className={classes.toolbarIconBtnInnerContainer}>
              <AddCircleOutlineIcon fontSize="small" />
              <Typography className={clsx(classes.toolbarBtnText, isWindows && classes.windowsToolbarBtnText)} variant="body2">New Note</Typography>
            </div>
          </Button>
          <span className={classes.toolbarBtnSpacer}/>
          <Button
            className={clsx(classes.toolbarBtn, isWindows ? classes.windowsToolbarBtnDelete : classes.toolbarBtnDelete)}
            variant="toolbar"
            disabled={props.isDeleteAllButtonDisabled}
            onClick={props.handleDeleteAllNotesButton}
          >
            <DeleteOutlineOutlinedIcon fontSize="small" />
            <Typography className={clsx(classes.toolbarBtnText, isWindows && classes.windowsToolbarBtnText)} variant="body2">Delete All</Typography>
          </Button>
        </Box>
        <div className={classes.toolbarGrow} />
        <Typography className={isWindows ? classes.windowsToolbarVersionText : classes.toolbarVersionText} variant="body1" fontWeight={500}>
          {props.versionLabel}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default XToolbar;
