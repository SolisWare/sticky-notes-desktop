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
}

const useStyles = makeStyles((theme: Theme) => ({
  
}));

function Home(props: HomeProps) {
  const classes = useStyles();
  
  return (
    <div>
      <NoteList notes={props.notes} />
    </div>
  );
}

export default Home;
