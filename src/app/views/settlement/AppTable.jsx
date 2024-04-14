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
const data1 = [
  {
    name: 'Unsettle shift  LCT S',
    number: 2,
    job: [
      {
        id: 1,
        site: 'gogo 1',
        startDate: '10/10/2023 12:00',
        endDate: '10/08/2023 12:00',
        location: 'Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678.',
        checkIn: '10/10/2023 12:00',
        checkOut: '10/10/2023 12:00',
        hours: '24hr',
        amount: ' ₦3000',
        hoursWork: '24hr'
      },
      {
        id: 2,
        site: 'ademola 2',
        startDate: '10/10/2023 12:00',
        endDate: '10/08/2023 12:00',
        location: 'Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678.',
        checkIn: '10/10/2023 12:00',
        checkOut: '10/10/2023 12:00',
        hours: '24hr',
        amount: ' ₦3000',
        hoursWork: '24hr'
      }
    ]
  },
  {
    name: 'delo LT S',
    number: 2,
    job: [
      {
        id: 3,
        site: 'rora 4',
        startDate: '10/10/2023 12:00',
        endDate: '10/08/2023 12:00',
        location: 'Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678.',
        checkIn: '10/10/2023 12:00',
        checkOut: '10/10/2023 12:00',
        hours: '24hr',
        amount: ' ₦3000',
        hoursWork: '24hr'
      },
      {
        id: 4,
        site: 'popo 5',
        startDate: '10/10/2023 12:00',
        endDate: '10/08/2023 12:00',
        location: 'Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678.',
        checkIn: '10/10/2023 12:00',
        checkOut: '10/10/2023 12:00',
        hours: '24hr',
        amount: ' ₦3000',
        hoursWork: '24hr'
      }
    ]
  }
];
const data2 = [
  {
    name: 'Settle shift  LCT S',
    number: 2,
    job: [
      {
        id: 1,
        site: 'gogo 1',
        startDate: '10/10/2023 12:00',
        endDate: '10/08/2023 12:00',
        location: 'Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678.',
        checkIn: '10/10/2023 12:00',
        checkOut: '10/10/2023 12:00',
        hours: '24hr',
        amount: ' ₦3000',
        hoursWork: '24hr'
      },
      {
        id: 2,
        site: 'ademola 2',
        startDate: '10/10/2023 12:00',
        endDate: '10/08/2023 12:00',
        location: 'Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678.',
        checkIn: '10/10/2023 12:00',
        checkOut: '10/10/2023 12:00',
        hours: '24hr',
        amount: ' ₦3000',
        hoursWork: '24hr'
      }
    ]
  },
  {
    name: 'delo LT S',
    number: 2,
    job: [
      {
        id: 3,
        site: 'rora 4',
        startDate: '10/10/2023 12:00',
        endDate: '10/08/2023 12:00',
        location: 'Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678.',
        checkIn: '10/10/2023 12:00',
        checkOut: '10/10/2023 12:00',
        hours: '24hr',
        amount: ' ₦3000',
        hoursWork: '24hr'
      },
      {
        id: 4,
        site: 'popo 5',
        startDate: '10/10/2023 12:00',
        endDate: '10/08/2023 12:00',
        location: 'Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678.',
        checkIn: '10/10/2023 12:00',
        checkOut: '10/10/2023 12:00',
        hours: '24hr',
        amount: ' ₦3000',
        hoursWork: '24hr'
      }
    ]
  }
];
const data3 = [
  {
    name: 'Rejected shift  LCT S',
    number: 2,
    job: [
      {
        id: 1,
        site: 'gogo 1',
        startDate: '10/10/2023 12:00',
        endDate: '10/08/2023 12:00',
        location: 'Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678.',
        checkIn: '10/10/2023 12:00',
        checkOut: '10/10/2023 12:00',
        hours: '24hr',
        amount: ' ₦3000',
        hoursWork: '24hr'
      },
      {
        id: 2,
        site: 'ademola 2',
        startDate: '10/10/2023 12:00',
        endDate: '10/08/2023 12:00',
        location: 'Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678.',
        checkIn: '10/10/2023 12:00',
        checkOut: '10/10/2023 12:00',
        hours: '24hr',
        amount: ' ₦3000',
        hoursWork: '24hr'
      }
    ]
  },
  {
    name: 'delo LT S',
    number: 2,
    job: [
      {
        id: 3,
        site: 'rora 4',
        startDate: '10/10/2023 12:00',
        endDate: '10/08/2023 12:00',
        location: 'Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678.',
        checkIn: '10/10/2023 12:00',
        checkOut: '10/10/2023 12:00',
        hours: '24hr',
        amount: ' ₦3000',
        hoursWork: '24hr'
      },
      {
        id: 4,
        site: 'popo 5',
        startDate: '10/10/2023 12:00',
        endDate: '10/08/2023 12:00',
        location: 'Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678.',
        checkIn: '10/10/2023 12:00',
        checkOut: '10/10/2023 12:00',
        hours: '24hr',
        amount: ' ₦3000',
        hoursWork: '24hr'
      }
    ]
  }
];
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

  const handleClickOpen = () => setOpen(true);
  const handleClickOpen2 = () => setOpen2(true);

  return (
    <>
      <Container>
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                <Tab label="Unsettle Shift" value="1" />
                <Tab label="Rejected Shift" value="2" />
                <Tab label=" Settled  Shift" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <PaginationTable
                setDataP={setData}
                handleClickOpenP={handleClickOpen}
                dataP={data1}
              />
            </TabPanel>
            <TabPanel value="2">
              <PaginationTable
                setDataP={setData}
                handleClickOpenP={handleClickOpen2}
                dataP={data2}
              />
            </TabPanel>
            <TabPanel value="3">
              <PaginationTable
                setDataP={setData}
                handleClickOpenP={handleClickOpen}
                dataP={data3}
              />
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
