/**
 * Copyright (c) 2026 SolisWare.
 * 
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AppColors } from "../theme/AppColors";

type ConfirmationDialogProps = {
  open: boolean;
  title: string;
  message: string;
  confirmLabel: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    color: AppColors.MAIN,
  },
}));

function ConfirmationDialog(props: ConfirmationDialogProps) {
  const classes = useStyles();

  return(
    <Dialog open={props.open} onClose={props.onCancel}>
      <DialogTitle className={classes.title}>{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{props.message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onCancel}>
          {props.cancelLabel ?? "Cancel"}
        </Button>
        <Button onClick={props.onConfirm} color="error" variant="contained">
          {props.confirmLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmationDialog;
