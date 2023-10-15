/**
 * Copyright (c) 2023 X-SiGMA Systems.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Note from "../../../components/Note";
import NoteList from "../../../components/NoteList";
import XToolbar from "../../../components/XToolbar";
import { AppColors } from "../../../theme/AppColors";
import { NoteColors } from "../../../theme/NoteColors";

type HomeProps = {
  
}

const useStyles = makeStyles((theme: Theme) => ({
  
}));

function Home(props: HomeProps) {
  const classes = useStyles();
  
  return (
    <div>
      <NoteList/>
    </div>
  );
}

export default Home;
