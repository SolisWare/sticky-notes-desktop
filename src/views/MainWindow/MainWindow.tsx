/**
 * Copyright (c) 2023 X-SiGMA Systems.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { CssBaseline, Theme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import XToolbar from "../../components/XToolbar";
import { AppTheme } from "../../theme/AppTheme";
import { makeStyles } from "@mui/styles";
import { AppView } from "../../App";
import Home from "./pages/Home";
import { AppColors } from "../../theme/AppColors";
import { useState } from "react";
import { Notes } from "@mui/icons-material";
import Note from "../../components/Note";
import { NoteType } from "../../models/NoteType";
import { getRandomNoteColor, NoteColors } from "../../theme/NoteColors";
import { nanoid } from "nanoid";
import { Platform } from "../../utils/Platform";

const appTheme = AppTheme.Theme;

type MainWindowProps = {
  view: AppView;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minWidth: "100%",
    minHeight: "100%",
    width: "100%",
    height: "100%",
    zIndex: 1,
    backgroundColor: AppColors.ACCENT
  },
  app: {
    
  },
  menu: {
    
  }
}));

function MainWindow(props: MainWindowProps) {
  const classes = useStyles();
  const [notes, setNotes] = useState<NoteType[]>([]);
  
  function handleAddNote() {
    setNotes(
      [...notes,
        {
          id: nanoid(),
          bgcolor: getRandomNoteColor(),
          content: "",
          date: new Date()
        },
      ]
    )

  }
  
  let page = <></>;
  switch (props.view) {
    case AppView.home:
      page = <Home notes={notes} />
      break;
    default:
      page = <Home notes={notes} />
  }
  
  return (
    <ThemeProvider theme={appTheme}>
      <div className={classes.root}>
        <CssBaseline/>
        <nav className={classes.menu}>
          {/* In-app menu goes here. */}
        </nav>
        <div className={classes.app}>
          <XToolbar title="X-NoTES" handleAddNoteButton={handleAddNote} />
          <main>
            { page }
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MainWindow;
