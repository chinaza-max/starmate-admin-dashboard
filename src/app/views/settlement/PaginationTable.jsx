import {
  Box,
  Button,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow
} from '@mui/material';
import { useState } from 'react';

const StyledTable = styled(Table)(() => ({
  whiteSpace: 'pre',
  '& thead': {
    '& tr': { '& th': { paddingLeft: 0, paddingRight: 0 } }
  },
  '& tbody': {
    '& tr': { '& td': { paddingLeft: 0, textTransform: 'capitalize' } }
  }
}));
const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1)
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

const PaginationTable = (prop) => {
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
          {subscribarList
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((subscriber, index) => (
              <TableRow key={index}>
                <TableCell align="left">{subscriber.name}</TableCell>
                <TableCell align="center">{subscriber.company}</TableCell>
                <TableCell align="center">{subscriber.date}</TableCell>
                <TableCell align="center">{subscriber.status}</TableCell>
                <TableCell align="center">₦{subscriber.amount}</TableCell>
                <TableCell align="right">
                  <>
                    <StyledButton
                      variant="outlined"
                      color="primary"
                      onClick={() => {
                        prop.setDataP(prop.dataP);
                        prop.handleClickOpenP();
                      }}
                    >
                      View/Settle
                    </StyledButton>
                  </>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </StyledTable>

      <TablePagination
        sx={{ px: 2 }}
        page={page}
        component="div"
        rowsPerPage={rowsPerPage}
        count={subscribarList.length}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[5, 10, 25]}
        onRowsPerPageChange={handleChangeRowsPerPage}
        nextIconButtonProps={{ 'aria-label': 'Next Page' }}
        backIconButtonProps={{ 'aria-label': 'Previous Page' }}
      />
    </Box>
  );
};

export default PaginationTable;
