import {
  Box,
  Button,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useSettlement from 'app/hooks/useSettlement';
import FullScreenDialog from '../../../components/DialogFullScreen';
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

const StyledTable = styled(Table)(({ theme }) => ({
  whiteSpace: 'pre',
  '& thead': {
    '& tr': { '& th': { paddingLeft: 0, paddingRight: 0 } }
  },
  '& tbody': {
    '& tr': { '& td': { paddingLeft: 0, textTransform: 'capitalize' } }
  }
}));

const subscribarList = [
  {
    name: 'john doe',
    date: 'First Bank - 9282828900',
    amount: 1000,
    status: 'Pending ',
    company: '3'
  },
  {
    name: 'kessy bryan',
    date: 'First Bank - 9282828828',
    amount: 9000,
    status: 'Pending ',
    company: '4'
  },
  {
    name: 'james cassegne',
    date: 'First Bank - 9282828828',
    amount: 5000,
    status: 'Pending ',
    company: '4'
  },
  {
    name: 'lucy brown',
    date: 'First Bank - 9282828828',
    amount: 89000,
    status: 'Pending ',
    company: '3'
  },
  {
    name: 'lucy brown',
    date: 'First Bank - 9282828828',
    amount: 89000,
    status: 'Pending ',
    company: '3'
  },
  {
    name: 'lucy brown',
    date: 'First Bank - 9282828828',
    amount: 89000,
    status: 'Pending ',
    company: '3'
  }
];
const data = [
  {
    name: 'frank LCT S',
    number: 2,
    job: [
      {
        id: 1,
        site: 'ademola 1',
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
    name: 'desss LT S',
    number: 2,
    job: [
      {
        id: 3,
        site: 'ademola 4',
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
        site: 'ademola 5',
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
const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1)
}));

const SimpleTable = () => {
  //const theme = useTheme();
  const [open, setOpen] = useState(false);
  // const [selectedValue, setSelectedValue] = useState([]);
  const handleClose = () => setOpen(false);
  const handleClickOpen = () => setOpen(true);
  const { handleSubmitOfSelectedValue, isSelectedShiftEmpty } = useSettlement();

  return (
    <Box width="100%" overflow="auto">
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="center">Number Job</TableCell>
            <TableCell align="center">Bank Details</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {subscribarList.map((subscriber, index) => (
            <TableRow key={index}>
              <TableCell align="left">{subscriber.name}</TableCell>
              <TableCell align="center">{subscriber.company}</TableCell>
              <TableCell align="center">{subscriber.date}</TableCell>
              <TableCell align="center">{subscriber.status}</TableCell>
              <TableCell align="center">₦{subscriber.amount}</TableCell>
              <TableCell align="right">
                <>
                  <StyledButton variant="outlined" color="primary" onClick={handleClickOpen}>
                    View/Settle
                  </StyledButton>
                </>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
      <Link style={{ textAlign: 'center', marginTop: '20px', display: 'block' }}>View All</Link>
      <FullScreenDialog
        openP={open}
        handleCloseP={handleClose}
        isSelectedShiftEmptyP={isSelectedShiftEmpty}
        handleSubmitOfSelectedValueP={handleSubmitOfSelectedValue}
        dataP={data}
      />
    </Box>
  );
};

export default SimpleTable;
