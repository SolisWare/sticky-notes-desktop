/**
 * Copyright (c) 2023 X-SiGMA Systems.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from '@mui/material/Toolbar';

type XToolbarProps = {
  title: string;
};

function XToolbar(props: XToolbarProps) {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        {/* TODO: Add app icon. */}
        <Typography fontWeight="bold">
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
  
}

export default XToolbar;
