/**
 * Copyright (c) 2023-2026 SolisWare.
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
import { useEffect, useState } from "react";
import { NoteType } from "../../models/NoteType";
import { getRandomNoteColor } from "../../theme/NoteColors";
import { nanoid } from "nanoid";
import ConfirmationDialog from "../../components/ConfirmationDialog";

const appTheme = AppTheme.Theme;

type MainWindowProps = {
  view: AppView;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minWidth: "100%",
    minHeight: "100vh",
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
  const [isDeleteAllNotesDialogOpen, setDeleteAllNotesDialogOpen] = useState(false);
  
  const isDeleteAllButtonDisabled = notes.length === 0;

  useEffect(() => {
    window.api.storage.getNotes()
      .then((notes: NoteType[]) => {
        setNotes(notes);
      })
      .catch((err: Error) => {
        console.error('Unexpected error loading notes:', err.message);
      });
  }, []);
  
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
  
  function handleDeleteNote(noteId: string) {
    window.api.storage.deleteNote(noteId);
    setNotes(
      notes.filter(({ id }) => id !== noteId)
    );
  }
  
  function handleDeleteAllNotes() {
    setNotes([]);
    setDeleteAllNotesDialogOpen(false);
    setTimeout(() => {
      window.api.storage.deleteAllNotes();
    }, 500);
  }
  
  let page = <></>;
  switch (props.view) {
    case AppView.home:
      page = <Home notes={notes} handleDeleteNoteButton={handleDeleteNote} />
      break;
    default:
      page = <Home notes={notes} handleDeleteNoteButton={handleDeleteNote} />
  }
  
  return (
    <ThemeProvider theme={appTheme}>
      <div className={classes.root}>
        <CssBaseline/>
        <ConfirmationDialog open={isDeleteAllNotesDialogOpen}
                            title="Delete All Notes"
                            message="Are you sure you want to delete all notes? This action cannot be undone."
                            confirmLabel="Delete All"
                            onConfirm={handleDeleteAllNotes}
                            onCancel={() => setDeleteAllNotesDialogOpen(false)} />
        <nav className={classes.menu}>
          {/* In-app menu goes here. */}
        </nav>
        <div className={classes.app}>
          <XToolbar title="X-NoTES" handleAddNoteButton={handleAddNote} isDeleteAllButtonDisabled={isDeleteAllButtonDisabled}
                    handleDeleteAllNotesButton={() => setDeleteAllNotesDialogOpen(true)} />
          <main>
            { page }
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MainWindow;
