/**
 * Copyright (c) 2023 X-SiGMA Systems.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import NoteList from "../../../components/NoteList";
import { NoteType } from "../../../models/NoteType";

type HomeProps = {
  notes: NoteType[];
  handleDeleteNoteButton: (noteId: string) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  
}));

function Home(props: HomeProps) {
  const classes = useStyles();
  
  return (
    <div>
      <NoteList notes={props.notes} handleDeleteNoteButton={props.handleDeleteNoteButton} />
    </div>
  );
}

export default Home;
