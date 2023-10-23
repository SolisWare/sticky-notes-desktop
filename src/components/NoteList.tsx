/**
 * Copyright (c) 2023 X-SiGMA Systems.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Note from "./Note";
import { useState } from "react";
import { NoteColors } from "../theme/NoteColors";
import { nanoid } from "nanoid";
import EmptyNoteList from "./EmptyNoteList";

type NoteListProps = {
  
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
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      bgcolor: NoteColors.INDIGO,
      title: "Hello World #1",
      content: "This is a test of a new app called X-NoTES. This is the first note. Just some sample text here to check paddings and margins.",
      date: new Date()
    },
    {
      id: nanoid(),
      bgcolor: NoteColors.INDIGO,
      title: "Hello World #2",
      content: "This is a test of a new app called X-NoTES. This is the first note. Just some sample text here to check paddings and margins.",
      date: new Date()
    },
    {
      id: nanoid(),
      bgcolor: NoteColors.INDIGO,
      title: "Hello World #3",
      content: "This is a test of a new app called X-NoTES. This is the first note. Just some sample text here to check paddings and margins.",
      date: new Date()
    },
    {
      id: nanoid(),
      bgcolor: NoteColors.INDIGO,
      title: "Hello World #4",
      content: "This is a test of a new app called X-NoTES. This is the first note. Just some sample text here to check paddings and margins.",
      date: new Date()
    },
    {
      id: nanoid(),
      bgcolor: NoteColors.INDIGO,
      title: "Hello World #5",
      content: "This is a test of a new app called X-NoTES. This is the first note. Just some sample text here to check paddings and margins.",
      date: new Date()
    }
    ]);
  const isNoteListEmpty = notes.length <= 0;
  
  return (
    <div className={classes.wrapper}>
      {isNoteListEmpty ?
        <>
          <EmptyNoteList />
        </>
        :
        <>
          {notes.map((note) => (
              <Note note={note} />
            ))
          }
        </>
      }
    </div>
  );
}

export default NoteList;
