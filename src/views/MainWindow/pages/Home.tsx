/**
 * Copyright (c) 2023-2026 SolisWare.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import NoteList from "../../../components/NoteList";
import { NoteType } from "../../../models/NoteType";

type HomeProps = {
  notes: NoteType[];
  handleDeleteNoteButton: (noteId: string) => void;
}

function Home(props: HomeProps) {
  return (
    <div>
      <NoteList notes={props.notes} handleDeleteNoteButton={props.handleDeleteNoteButton} />
    </div>
  );
}

export default Home;
