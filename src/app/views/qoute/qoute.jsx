import {
  Avatar,
  Box,
  Card,
  Chip,
  Container,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  Paper,
  Stack
} from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';

import { useState } from 'react';
import PaginationTable from './PaginationTable';
import React from 'react';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import HeadingInput from './HeadingInput';
import Footer from './footer';
import { useParams } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import {
  AccountCircle,
  EmailRounded,
  LocalActivityRounded,
  PhoneAndroid
} from '@mui/icons-material';
import { useEffect } from 'react';
const userDetails = {
  Name: 'deric felix',
  Email: 'mosesdururur@gmail.com',
  Tel: '09283459383',
  Logo: '09283459383',
  Address: '2B jaymola close moins street close r 1324444'
};

const Qoute = () => {
  const [value, setValue] = useState('1');
  const [disableInput, setDisableInput] = useState(false);
  const [userData, setUserData] = useState({
    Name: '',
    Email: '',
    Tel: '',
    Logo: '',
    Address: ''
  });
  const [selectUser, setSelectUser] = useState(true);
  const { id } = useParams();
  const handleChange = (value) => {
    setUserData((preValue) => {
      const update = { ...preValue, [value.target.name]: value.target.value };
      return update;
    });
  };
  //const [selectUser, setSelectUser] = useState(true);
  useEffect(() => {
    console.log(id);
    if (id) {
      setDisableInput(true);
      setUserData({
        Name: userDetails.Name,
        Email: userDetails.Email,
        Tel: userDetails.Tel,
        Logo: userDetails.Logo,
        Address: userDetails.Address
      });
    }
  }, [id]);
  return (
    <>
      <Container>
        <Paper sx={{ marginTop: '10px' }}>
          <Accordion>
            <AccordionSummary
              id="User-Details"
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
            >
              <Box>
                User Details
                <Chip
                  color="primary"
                  sx={{ marginLeft: '20px' }}
                  avatar={<Avatar alt="Natacha" src="/assets/images/face-6.jpg" />}
                  label="New user"
                  variant="outlined"
                />
              </Box>
            </AccordionSummary>

            <AccordionDetails>
              <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item md={4} sm={6} xs={12}>
                  <FormControl fullWidth={true} variant="standard">
                    <Input
                      id="input-with-icon-adornment"
                      placeholder="Full Name"
                      name="Name"
                      fullWidth={true}
                      onChange={handleChange}
                      disabled={disableInput}
                      value={userData.Name}
                      startAdornment={
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                  <FormControl fullWidth={true} variant="standard">
                    <Input
                      id="input-with-icon-adornment"
                      placeholder="Email Address"
                      name="Email"
                      fullWidth={true}
                      disabled={disableInput}
                      onChange={handleChange}
                      value={userData.Email}
                      startAdornment={
                        <InputAdornment position="start">
                          <EmailRounded />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                  <FormControl fullWidth={true} variant="standard">
                    <Input
                      id="input-with-icon-adornment"
                      placeholder="Tel"
                      name="Tel"
                      fullWidth={true}
                      value={userData.Tel}
                      disabled={disableInput}
                      onChange={handleChange}
                      startAdornment={
                        <InputAdornment position="start">
                          <PhoneAndroid />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                  <FormControl fullWidth={true} variant="standard">
                    <Input
                      id="input-with-icon-adornment"
                      placeholder="Address"
                      name="Address"
                      fullWidth={true}
                      multiline={true}
                      onChange={handleChange}
                      disabled={disableInput}
                      value={userData.Address}
                      startAdornment={
                        <InputAdornment position="start">
                          <LocalActivityRounded />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              id="User-Request"
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
            >
              <Typography className="heading">User Request</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Grid container spacing={2}>
                <Grid item xs={4} md={4}>
                  <Card variant="outlined" sx={{ maxWidth: 360 }}>
                    <Box sx={{ p: 2 }}>
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography gutterBottom variant="h6" component="div">
                          SELECTED SERVICE
                        </Typography>
                      </Stack>
                      <Chip label="Cleaning" onDelete={() => {}} deleteIcon={<DoneIcon />} />
                    </Box>
                  </Card>
                </Grid>
                <Grid item xs={4} md={4}>
                  <Card variant="outlined" sx={{ maxWidth: 360 }}>
                    <Box sx={{ p: 2 }}>
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography gutterBottom variant="h6" component="div">
                          SELECTED PLACE
                        </Typography>
                      </Stack>
                      <Chip label="Home" onDelete={() => {}} deleteIcon={<DoneIcon />} />
                    </Box>
                  </Card>
                </Grid>
                <Grid item xs={4} md={4}>
                  <Card variant="outlined" sx={{ maxWidth: 360 }}>
                    <Box sx={{ p: 2 }}>
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography gutterBottom variant="h6" component="div">
                          NO OF ROOMS
                        </Typography>
                      </Stack>
                      <Chip label="10" onDelete={() => {}} deleteIcon={<DoneIcon />} />
                    </Box>
                  </Card>
                </Grid>
                <Grid item xs={4} md={4}>
                  <Card variant="outlined" sx={{ maxWidth: 360 }}>
                    <Box sx={{ p: 2 }}>
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography gutterBottom variant="h6" component="div">
                          FREQUENCY
                        </Typography>
                      </Stack>
                      <Chip label="1" onDelete={() => {}} deleteIcon={<DoneIcon />} />
                    </Box>
                  </Card>
                </Grid>
                <Grid item xs={4} md={8}>
                  <Card variant="outlined" sx={{ maxWidth: 360 }}>
                    <Box sx={{ p: 2 }}>
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography gutterBottom variant="h6" component="div">
                          ADDITIONAL INFORMATION
                        </Typography>
                      </Stack>
                      <Typography color="text.secondary" variant="body2">
                        Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
                        just down the hall.
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Paper>
        <Paper>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              Header Section
            </AccordionSummary>
            <AccordionDetails>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <HeadingInput selectUserP={selectUser} />
              </Grid>
            </AccordionDetails>
          </Accordion>
          <PaginationTable />
          <Footer />
        </Paper>
      </Container>
    </>
  );
};

export default Qoute;
//
