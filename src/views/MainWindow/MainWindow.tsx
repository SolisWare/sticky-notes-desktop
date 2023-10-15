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
import { AppView } from "../../App";
import Home from "./pages/Home";
import { AppColors } from "../../theme/AppColors";

const appTheme = AppTheme.Theme;

type MainWindowProps = {
  view: AppView;
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
  },
  app: {
    
  },
  menu: {
    
  }
}));

function MainWindow(props: MainWindowProps) {
  const classes = useStyles();
  
  let page = <></>;
  switch (props.view) {
    case AppView.home:
      page = <Home />
      break;
    default:
      page = <Home />
  }
  
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
            { page }
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MainWindow;
