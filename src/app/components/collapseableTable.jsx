import React, { useState, useEffect } from 'react';
//import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Checkbox from '@mui/material/Checkbox';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Chip from '@mui/material/Chip';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { toNumber } from 'lodash';
import useSettlement from 'app/hooks/useSettlement';
import { Link } from 'react-router-dom';
import { TablePagination } from '@mui/material';

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  let checkBoxDe = false;
  const handleChangeCheck = (name) => (event) => {
    //console.log(name);
    //console.log(event.target.checked);
    props.handleChangeCheckP(name, event.target.checked);
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  //const [open, setOpen] = useState(false);
  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  console.log('name');

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.number}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                List of Site
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Select</TableCell>
                    <TableCell>Site</TableCell>
                    <TableCell>Start Date </TableCell>
                    <TableCell>End Date</TableCell>
                    <TableCell>Hours</TableCell>
                    <TableCell>Check In</TableCell>
                    <TableCell>Check Out</TableCell>
                    <TableCell>Hours Worked</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>More</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.job.map((historyRow) => (
                    <TableRow key={historyRow.site}>
                      <TableCell>
                        <Checkbox
                          checked={historyRow.checked || checkBoxDe}
                          onChange={handleChangeCheck(`${historyRow.id}`)}
                          inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                      </TableCell>
                      <TableCell>{historyRow.site}</TableCell>
                      <TableCell>{historyRow.startDate}</TableCell>
                      <TableCell>{historyRow.endDate}</TableCell>{' '}
                      <TableCell>{historyRow.hours}</TableCell>
                      <TableCell>{historyRow.checkIn}</TableCell>
                      <TableCell>{historyRow.checkOut}</TableCell>
                      <TableCell>{historyRow.hoursWork}</TableCell>
                      <TableCell>{historyRow.amount}</TableCell>
                      <TableCell>
                        <Link to={'#'}>
                          <Chip
                            sx={{ cursor: 'pointer' }}
                            color="info"
                            icon={<InfoOutlinedIcon />}
                            label="More"
                          />
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <TablePagination
                sx={{ px: 2 }}
                page={page}
                component="div"
                rowsPerPage={rowsPerPage}
                count={row.job.length}
                onPageChange={handleChangePage}
                rowsPerPageOptions={[5, 10, 25]}
                onRowsPerPageChange={handleChangeRowsPerPage}
                nextIconButtonProps={{ 'aria-label': 'Next Page' }}
                backIconButtonProps={{ 'aria-label': 'Previous Page' }}
              />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
/*
Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired
  }).isRequired
};
*/ /*
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5)
];
*/

export default function CollapsibleTable(props) {
  const [selectAll, setSelectAll] = useState(false);
  const [data, setData] = useState(props.dataP);
  const [selectedData, setSelectedData] = useState(new Set());

  const { handleSelectedValueUpdate } = useSettlement();
  const handleChange2 = (event) => {
    data.forEach((element) => {
      element.job.forEach((element2) => {
        element2[`checked`] = event.target.checked;
      });
    });
    if (event.target.checked) {
      data.forEach((element) => {
        element.job.forEach((element2) => {
          addSelectedShift(element2[`id`]);
        });
      });
    } else {
      data.forEach((element) => {
        element.job.forEach((element2) => {
          removeSelectedShift(element2[`id`]);
        });
      });
    }
    setSelectAll(event.target.checked);
  };

  const addSelectedShift = (num) => {
    setSelectedData((prevNumbers) => new Set([...prevNumbers, num]));
  };

  const removeSelectedShift = (num) => {
    setSelectedData((prevNumbers) => {
      const newNumbers = new Set(prevNumbers);
      newNumbers.delete(num);
      return newNumbers;
    });
  };
  const handleChangeCheck = (id, value) => {
    setData((prevData) =>
      prevData.map((element) => ({
        ...element,
        job: element.job.map((element2) => {
          if (element2.id + '' === id + '') {
            return { ...element2, checked: value };
          }
          return element2;
        })
      }))
    );
    if (value) {
      addSelectedShift(toNumber(id));
    } else {
      removeSelectedShift(toNumber(id));
    }
  };
  useEffect(() => {
    /*
      // Extract keys where the value is true
      const trueKeys = Object.keys(state).filter((key) => state[key]);
      // Extract numbers from the keys
      const numbersArray = trueKeys.map((key) => parseInt(key.replace('checkedA', ''), 10));
      console.log(numbersArray);
    */
    handleSelectedValueUpdate([...selectedData]);
  }, [selectAll, data, selectedData]);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell align="right">Number</TableCell>
            <TableCell align="center" colSpan={3}>
              Select-All
              <Switch
                checked={selectAll}
                onChange={handleChange2}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                disabled={props.settlementTypeP === 'settle' ? true : false}
              />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <Row
              key={row.name}
              row={row}
              selectAllP={selectAll}
              handleChangeCheckP={handleChangeCheck}
              removeSelectedShiftP={removeSelectedShift}
              addSelectedShiftP={addSelectedShift}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
