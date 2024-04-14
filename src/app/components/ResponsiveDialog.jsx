import { useState } from 'react';
import { Box, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function ResponsiveDialog(prop) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open responsive dialog
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          prop.handleSubmitOfSelectedValueP();
          if (prop.isSelectedShiftEmptyP()) {
            handleClickOpen();
          }
        }}
      >
        {prop.textP}
      </Button>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">You have not selected any shift</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Kindly click on the check box by the side of the shift to select if for settlement .
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Dismiss
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
