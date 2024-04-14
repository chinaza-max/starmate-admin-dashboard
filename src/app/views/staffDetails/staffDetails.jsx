import { Box, Button, Divider, Paper, Stack, Typography, styled } from '@mui/material';
import { useState } from 'react';
import useSettlement from 'app/hooks/useSettlement';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Tab from '@mui/material/Tab';
import React from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import {
  Call,
  Email,
  LocalActivity,
  LocalActivityOutlined,
  LocalActivitySharp
} from '@mui/icons-material';
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

  const [settlementType, setSettlementType] = useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
    if (newValue === 1) {
      setSettlementType('unsettle');
    } else if (newValue === '' + 3) {
      setSettlementType('settle');
    }
  };

  return (
    <>
      <Container>
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                <Tab label="Personal information" value="1" />
                <Tab label="Personal Job" value="2" />
                <Tab label="Personal Memo" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Paper sx={{ borderRadius: '50%' }}>
                  <img style={{ borderRadius: '50%' }} src={'/assets/images/face-6.jpg'} />
                </Paper>
              </Box>
              <Stack
                sx={{ minWidth: '250px', maxWidth: '600px', margin: '0 auto', marginTop: '30px' }}
                spacing={1}
                divider={<Divider orientation="horizontal" flexItem />}
              >
                <Typography sx={{ display: 'flex', justifyContent: 'center' }}>
                  Denis macus
                </Typography>
                <Button variant="text" startIcon={<Email />}>
                  kolefeloee3@gmail
                </Button>
                <Button variant="text" startIcon={<Call />}>
                  93999999933
                </Button>
                <Button variant="text" startIcon={<LocationOnIcon />}>
                  the facility's street name and number; suite/unit number, as appropriate; city;
                  Province or State as appropriate; mail code as appropriate; and country.
                </Button>
              </Stack>
            </TabPanel>
            <TabPanel value="2">Job he has done </TabPanel>
            <TabPanel value="3">Memo</TabPanel>
          </TabContext>
        </Box>
      </Container>
    </>
  );
};

export default AppTable;
