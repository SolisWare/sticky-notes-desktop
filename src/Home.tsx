/**
 * Copyright (c) 2023 X-SiGMA Systems.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import XToolbar from "./components/XToolbar";
import { AppColors } from "./theme/AppColors";

type HomeProps = {
  
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minWidth: "100%",
    minHeight: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1,
    backgroundColor: AppColors.ACCENT
  }
}));

function Home(props: HomeProps) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <XToolbar title="X-NoTES"/>
      <p>Home</p>
    </div>
  );
}

export default Home;
