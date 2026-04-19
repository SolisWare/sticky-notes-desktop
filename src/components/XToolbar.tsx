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
    backgroundColor: AppColors.TOOLBAR_BG + "!important",
    color: AppColors.TOOLBAR_TEXT + "!important",
    boxShadow: "none !important",
    borderTop: "1px solid " + AppColors.TOOLBAR_BORDER_LIGHTER,
    borderBottom: "1px solid " + AppColors.TOOLBAR_BORDER
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
    backgroundColor: "#FFFFFF !important",
    color: AppColors.TOOLBAR_TEXT + "!important",
    outline: "1px solid " + AppColors.TOOLBAR_BORDER + " !important",
    boxShadow: "none !important",
    '&:hover': {
      backgroundColor: "#EFF8F2 !important",
      color: "#14523B !important",
      outline: "1px solid #BCDCCB !important"
    }
  },
  toolbarBtnDelete: {
    '&:hover': {
      backgroundColor: AppColors.ERROR + "!important",
      outline: "1px solid " + AppColors.ERROR_LIGHT + "!important"
    }
  },
  windowsToolbarBtnDelete: {
    backgroundColor: "#FFFFFF !important",
    color: AppColors.TOOLBAR_TEXT + "!important",
    outline: "1px solid " + AppColors.TOOLBAR_BORDER + " !important",
    boxShadow: "none !important",
    '&:hover': {
      backgroundColor: "#FFF5F5 !important",
      color: "#B42318 !important",
      outline: "1px solid #F3C7C7 !important"
    },
    '&.Mui-disabled': {
      backgroundColor: "#FBFBFC !important",
      color: "#B7BEC7 !important",
      outline: "1px solid #E7EAEE !important"
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
  const addButtonClassName = isWindows ? `${classes.toolbarBtn} ${classes.windowsToolbarBtn}` : classes.toolbarBtn;
  const deleteButtonClassName = isWindows ? `${classes.toolbarBtn} ${classes.windowsToolbarBtnDelete}` : `${classes.toolbarBtn} ${classes.toolbarBtnDelete}`;
  
  return (
    <AppBar position="sticky" className={isWindows ? classes.windowsToolbar : undefined}>
      <Toolbar className={classes.toolbar}>
        {/* TODO: Add app icon. */}
        <Typography variant="h6" fontWeight="bold" className={isWindows ? classes.windowsToolbarTitle : undefined}>
          {props.title}
        </Typography>
        <Box className={classes.toolbarBtnsContainer}>
          <Button className={addButtonClassName} variant="toolbar" color="primary" onClick={props.handleAddNoteButton}>
            <div className={classes.toolbarIconBtnInnerContainer}>
              <AddCircleOutlineIcon fontSize="small" />
              <Typography className={isWindows ? classes.windowsToolbarBtnText : classes.toolbarBtnText} variant="body2">New Note</Typography>
            </div>
          </Button>
          <span className={classes.toolbarBtnSpacer}/>
          <Button className={deleteButtonClassName} variant="toolbar" disabled={props.isDeleteAllButtonDisabled} onClick={props.handleDeleteAllNotesButton}>
            <DeleteOutlineOutlinedIcon fontSize="small" />
            <Typography className={isWindows ? classes.windowsToolbarBtnText : classes.toolbarBtnText} variant="body2">Delete All</Typography>
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
