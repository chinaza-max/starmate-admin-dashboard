import { IconButton, Button, Box } from '@mui/material';
import Dialog2 from '../components/ResponsiveDialog';
import useSettlement from '../../app/hooks/useSettlement';
import CollapseT from '../../app/components/collapseableTable';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { forwardRef } from 'react';
import Slide from '@mui/material/Slide';
import PropTypes from 'prop-types';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx
      }}
      {...other}
    />
  );
}
Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object
  ])
};
const DialogFullScreen = (prop) => {
  const { handleSubmitOfSelectedValue, isSelectedShiftEmpty } = useSettlement();

  return (
    <Dialog
      fullScreen
      open={prop.openP}
      onClose={prop.handleCloseP}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar
          sx={{
            display: 'block'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <Item>
              <IconButton
                edge="start"
                color="inherit"
                onClick={prop.handleCloseP}
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>
            </Item>
            <Item>
              {prop.settlementTypeP === 'settle' ? (
                ''
              ) : (
                <Box sx={{ display: 'flex', flexGrow: 1 }}>
                  <Dialog2
                    textP="Settle Selected"
                    isSelectedShiftEmptyP={isSelectedShiftEmpty}
                    handleSubmitOfSelectedValueP={handleSubmitOfSelectedValue}
                  />
                  <Button
                    sx={{ marginLeft: '5px' }}
                    variant="contained"
                    color="error"
                    onClick={prop.handleCloseP}
                  >
                    Reject Selected
                  </Button>
                </Box>
              )}
            </Item>
          </Box>
        </Toolbar>
      </AppBar>

      <CollapseT settlementTypeP={prop.settlementTypeP} dataP={prop.dataP} />
    </Dialog>
  );
};

export default DialogFullScreen;
