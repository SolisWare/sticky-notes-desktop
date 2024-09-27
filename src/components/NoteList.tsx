/**
 * Copyright (c) 2023-2024 X-SiGMA Systems.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Note from "./Note";
import EmptyNoteList from "./EmptyNoteList";
import { NoteType } from "../models/NoteType";
import { Autosave } from "react-autosave";
import { useState } from "react";

type NoteListProps = {
  notes: NoteType[];
  handleDeleteNoteButton: (noteId: string) => void;
}
 
const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    padding: "30px 30px",
    display: "grid",
    gridGap: "25px",
    gridTemplateColumns: "repeat(auto-fit, minmax(275px, 275px))"
  }
}));

function NoteList (props: NoteListProps) {
  const classes = useStyles();
  
  const [userDataDir, setUserDataDir] = useState<string>('');
  
  const notes = props.notes;
  const isNoteListEmpty = notes.length <= 0;
  
  const handleSaveNote = (note: NoteType) => {
    if (window.api.storage) {
      window.api.storage.getDataDir().then((dataDirPath: string|undefined) => {
        if (dataDirPath !== undefined) {
          setUserDataDir(dataDirPath);
        }
        else {
          // TODO: Throw an exception - filesystem not available.
        }
      });
    }
    else {
      // TODO: Throw an exception:
      //  - for electron: that stograge is not available
      //  - for web: skip/use browser localStorage
      console.error("Storage object not available!")
    }
    
  };
  
  return (
    <div className={classes.wrapper}>
      {isNoteListEmpty ?
        <>
          <EmptyNoteList />
        </>
        :
        <>
          {notes.map((note) => (
            <Note key={note.id} note={note} handleNoteSave={handleSaveNote} handleDeleteNoteButton={props.handleDeleteNoteButton} />
            ))
          }
        </>
      }
    </div>
  );
}

export default NoteList;
