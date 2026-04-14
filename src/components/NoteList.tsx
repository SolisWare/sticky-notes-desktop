/**
 * Copyright (c) 2023-2026 SolisWare.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Note from "./Note";
import EmptyNoteList from "./EmptyNoteList";
import { NoteType } from "../models/NoteType";

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
  
  const notes = props.notes;
  const isNoteListEmpty = notes.length <= 0;
  
  const handleSaveNote = (note: NoteType) => {
    window.api.storage.setNote(note);
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
