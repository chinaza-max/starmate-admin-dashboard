import { Box, styled } from '@mui/material';
import { useState } from 'react';
import useSettlement from 'app/hooks/useSettlement';
import FullScreenDialog from '../../components/DialogFullScreen';
import FullScreenDialog2 from '../../components/ReverseShiftFromREjected';
import PaginationTable from './PaginationTable';
import Tab from '@mui/material/Tab';

//import Tabs from '@mui/material/Tabs';
import React from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));

const AppTable = () => {
  const [value, setValue] = useState('1');
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [settlementType, setSettlementType] = useState('');

  const { handleSubmitOfSelectedValue, isSelectedShiftEmpty } = useSettlement();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
    if (newValue === 1) {
      setSettlementType('unsettle');
    } else if (newValue === '' + 3) {
      setSettlementType('settle');
    }
  };
  const handleClose = () => setOpen(false);
  const handleClose2 = () => setOpen2(false);

  return (
    <>
      <Container>
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                <Tab label="Registered Admin" value="1" />
                <Tab label="Suspended Admin" value="2" />
                <Tab label="Deleted Admin" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <PaginationTable typeP="registered" />
            </TabPanel>
            <TabPanel value="2">
              <PaginationTable typeP="suspended" />
            </TabPanel>
            <TabPanel value="3">
              <PaginationTable typeP="deleted" />
            </TabPanel>
          </TabContext>
        </Box>
      </Container>
      <FullScreenDialog2
        openP={open2}
        handleCloseP={handleClose2}
        isSelectedShiftEmptyP={isSelectedShiftEmpty}
        handleSubmitOfSelectedValueP={handleSubmitOfSelectedValue}
        dataP={data}
      />
      <FullScreenDialog
        openP={open}
        handleCloseP={handleClose}
        isSelectedShiftEmptyP={isSelectedShiftEmpty}
        handleSubmitOfSelectedValueP={handleSubmitOfSelectedValue}
        dataP={data}
        settlementTypeP={settlementType}
      />
    </>
  );
};

export default AppTable;
