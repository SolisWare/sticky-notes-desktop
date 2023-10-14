/**
 * Copyright (c) 2023 X-SiGMA Systems.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { CssBaseline, Theme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import XToolbar from "../../components/XToolbar";
import { AppTheme } from "../../theme/AppTheme";
import { makeStyles } from "@mui/styles";

const appTheme = AppTheme.Theme;

type MainWindowProps = {
  //view: AppView;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    
  },
  app: {
    
  },
  menu: {
    
  }
}));

function MainWindow(props: MainWindowProps) {
  const classes = useStyles();
  
  return (
    <ThemeProvider theme={appTheme}>
      <div className={classes.root}>
        <CssBaseline/>
        <nav className={classes.menu}>
          {/* In-app menu goes here. */}
        </nav>
        <div className={classes.app}>
          <XToolbar title="X-NoTES" />
          <main>
            {/* Main content and views go here. */}
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MainWindow;
