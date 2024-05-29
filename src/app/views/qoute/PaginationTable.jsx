import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import { Call, Email, Payment, Restore, Send } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import CancelIcon from '@mui/icons-material/Close';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
  useGridApiContext
} from '@mui/x-data-grid';
import {
  randomCreatedDate,
  randomTraderName,
  randomId,
  randomArrayItem
} from '@mui/x-data-grid-generator';
import MuiDialogTitle from '@mui/material/DialogTitle';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import {
  Avatar,
  Checkbox,
  Dialog,
  Divider,
  FormControl,
  Grid,
  InputAdornment,
  InputBase,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Tooltip,
  Typography
} from '@mui/material';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { Formik } from 'formik';
const StyledGridOverlay = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  '& .ant-empty-img-1': {
    fill: theme.palette.mode === 'light' ? '#aeb8c2' : '#262626'
  },
  '& .ant-empty-img-2': {
    fill: theme.palette.mode === 'light' ? '#f5f5f7' : '#595959'
  },
  '& .ant-empty-img-3': {
    fill: theme.palette.mode === 'light' ? '#dce0e6' : '#434343'
  },
  '& .ant-empty-img-4': {
    fill: theme.palette.mode === 'light' ? '#fff' : '#1c1c1c'
  },
  '& .ant-empty-img-5': {
    fillOpacity: theme.palette.mode === 'light' ? '0.8' : '0.08',
    fill: theme.palette.mode === 'light' ? '#f5f5f5' : '#fff'
  }
}));
const DialogTitleRoot = styled(MuiDialogTitle)(({ theme }) => ({
  margin: 0,
  padding: theme.spacing(2),
  '& .closeButton': {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
}));

const DialogTitle = (props) => {
  const { children, onClose } = props;
  return (
    <DialogTitleRoot disabletypography="true">
      <Typography>{children}</Typography>
      {onClose ? (
        <IconButton aria-label="Close" className="closeButton" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitleRoot>
  );
};

const DialogContent = styled(MuiDialogContent)(({ theme }) => ({
  '&.root': { padding: theme.spacing(2) }
}));

const DialogActions = styled(MuiDialogActions)(({ theme }) => ({
  '&.root': { margin: 0, padding: theme.spacing(1) }
}));
const roles = ['Market', 'Finance', 'Development'];
const randomRole = () => {
  return randomArrayItem(roles);
};

const initialRows = [
  /* {
    id: 1,
    Quantity: 1,
    Desciption: 'this is a description of the project given that it should be ',
    Unit: 1,
    Total: 3
  }*/
];

function EditToolbar(props) {
  const { setRows, setRowModesModel, setOpen, tableData } = props;
  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, Unit: 1, Total: 1, Quantity: 1, isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'Desciption' }
    }));
  };
  const handleClickOpen = () => setOpen(true);
  const generatePDF = () => console.log(tableData);

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
      <Button color="primary" startIcon={<PictureAsPdfIcon />} onClick={generatePDF}>
        View PDF
      </Button>
      <Button color="primary" startIcon={<Payment />} onClick={handleClickOpen}>
        Convert to invoice
      </Button>
    </GridToolbarContainer>
  );
}

function AvatarEditInputCell(props) {
  const { id, value, field, hasFocus } = props;
  const apiRef = useGridApiContext();

  const handleChange = (event, newValue) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const newValue = e.target.result;
        apiRef.current.setEditCellValue({ id, field, value: newValue });
      };

      reader.readAsDataURL(file);
    }
    console.log('newValue');
  };

  return (
    <>
      <input type="file" onChange={(e) => handleChange(e)} />
    </>
  );
}

function renderAvatar(params) {
  return <Avatar alt="avatar" src={params.value} />;
}
function renderTel(params) {
  return (
    <Button variant="text" startIcon={<Call />}>
      {params.value}
    </Button>
  );
}
/*
function renderCheck(params) {
  const [value, setValue] = useState('female');

  function handleChange(event) {
    setValue(event.target.value);
  }
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">labelPlacement</FormLabel>
      <FormGroup aria-label="position" name="position" value={value} onChange={handleChange} row>
        <FormControlLabel
          value="top"
          control={<Switch color="primary" />}
          label="Top"
          labelPlacement="top"
        />
        <FormControlLabel
          value="start"
          control={<Switch color="primary" />}
          label="Start"
          labelPlacement="start"
        />
        <FormControlLabel
          value="bottom"
          control={<Switch color="primary" />}
          label="Bottom"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="end"
          control={<Switch color="primary" />}
          label="End"
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>
  );
}*/
function renderEmail(params) {
  return (
    <Button variant="text" startIcon={<Email />}>
      {params.value}
    </Button>
  );
}
function renderQua(params) {
  return <>{params.value === undefined ? 1 : params.value}</>;
}
function CustomNoRowsOverlay() {
  return (
    <StyledGridOverlay>
      <svg
        style={{ flexShrink: 0 }}
        width="240"
        height="200"
        viewBox="0 0 184 152"
        aria-hidden
        focusable="false"
      >
        <g fill="none" fillRule="evenodd">
          <g transform="translate(24 31.67)">
            <ellipse className="ant-empty-img-5" cx="67.797" cy="106.89" rx="67.797" ry="12.668" />
            <path
              className="ant-empty-img-1"
              d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
            />
            <path
              className="ant-empty-img-2"
              d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
            />
            <path
              className="ant-empty-img-3"
              d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
            />
          </g>
          <path
            className="ant-empty-img-3"
            d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
          />
          <g className="ant-empty-img-4" transform="translate(149.65 15.383)">
            <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
            <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
          </g>
        </g>
      </svg>
      <Box sx={{ mt: 1 }}>No Rows</Box>
    </StyledGridOverlay>
  );
}
const renderAvatarEditInputCell = (params) => {
  return <AvatarEditInputCell {...params} />;
};
export default function FullFeaturedCrudGrid(props) {
  const [rows, setRows] = useState(initialRows);
  const [rowModesModel, setRowModesModel] = useState({});
  const [rowIdToAddVat, setRowIdToAddVat] = useState([]);
  const [open, setOpen] = useState(false);
  const [invoiceMode, setInvoiceMode] = useState('Once');
  const [numberInvoice, setnumberInvoice] = useState([]);
  const [tableData, setTableData] = useState({ array: [], summary: {} });

  const [state, setState] = useState({
    title: 'my title',
    valid: dayjs(new Date()),
    stage: 3,
    send: dayjs(new Date())
  });

  const [summaryCal, setSummaryCal] = useState({ SubTotal: 0, vat: 0, TotalDue: 0 });
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  const handleRowEditStop = (params, event) => {
    console.log('handleRowEditStop');
    console.log(event);
    console.log(rows);

    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    console.log('handleEditClick');

    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };
  const handleRowRestoration = (id) => () => {
    // setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };
  const handleSaveClick = (id) => () => {
    console.log('handleSaveClick');

    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };
  const handleNavigationDetails = (id) => () => {
    navigate('/staff/Detail');
  };
  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true }
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow, oldRow) => {
    console.log('processRowUpdate');

    console.log(newRow);
    console.log(oldRow);
    console.log(newRow.Unit);
    console.log(newRow.Total);
    newRow = { ...newRow, Total: newRow.Unit * newRow.Quantity };
    //console.log(oldRow);

    console.log(newRow);

    console.log(rows);

    // if (false) {
    const updatedRow = { ...newRow, isNew: false };

    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    // console.log(updatedRow);
    calculateSummary(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    //calculateSummary();

    return updatedRow;
    /*} else {
      const updatedRow = { ...oldRow, isNew: true };
      setRows(rows.map((row) => (row.id === oldRow.id ? updatedRow : row)));
      return updatedRow;
    //}*/
  };
  const calculateSummary = (rows) => {
    let SubTotal = 0;
    let TotalDue = 0;
    let vatCharge = 0;

    rows.forEach((data) => {
      console.log(data);
      if (rowIdToAddVat.includes(data.id)) {
        SubTotal += Number(data.Total);
        TotalDue += Number(data.Total);
        TotalDue += (7.5 / 100) * Number(data.Total);
        vatCharge += (7.5 / 100) * Number(data.Total);
      } else {
        TotalDue += Number(data.Total);
        SubTotal += Number(data.Total);
      }
    });

    setSummaryCal({
      SubTotal: SubTotal.toFixed(2),
      TotalDue: TotalDue.toFixed(2),
      vat: vatCharge.toFixed(2)
    });

    setTableData({
      array: rows,
      summary: {
        SubTotal: SubTotal.toFixed(2),
        TotalDue: TotalDue.toFixed(2),
        vat: vatCharge.toFixed(2)
      }
    });
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  function renderTax(params) {
    //console.log(params);

    const handleChange = (name) => (event) => {
      //console.log(event.target.checked);
      if (event.target.checked) {
        setRowIdToAddVat((obj) => {
          const updateobj = [...obj, params.id];
          return updateobj;
        });
      } else {
        setRowIdToAddVat((obj) => {
          return obj.filter((item) => {
            return item !== params.id;
          });
        });
      }
    };
    return (
      <>
        <Checkbox
          value="checkedA"
          onChange={handleChange('checkedA')}
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      </>
    );
  }
  function CustomFooterStatusComponent(props) {
    //  console.log(props);
    return (
      <Box sx={{ display: 'flex', justifyContent: 'end', marginTop: '20px', marginBottom: '20px' }}>
        <Grid container spacing={2} sx={{ maxWidth: '300px' }}>
          <Grid item xs={6}>
            Sub Total
          </Grid>
          <Grid item xs={6}>
            ₦{summaryCal.SubTotal}
          </Grid>
          <Grid item xs={6}>
            VAT @7.50%
          </Grid>
          <Grid item xs={6}>
            ₦{summaryCal.vat}
          </Grid>
          <Grid item xs={6}>
            Total Due
          </Grid>
          <Grid item xs={6}>
            ₦{summaryCal.TotalDue}
          </Grid>
        </Grid>
      </Box>
    );
  }

  const handleInputChange = (obj, index) => {
    const newInputValues = [...numberInvoice];
    console.log(index);
    console.log(obj);
    console.log(newInputValues[index]);
    newInputValues[index] = { ...newInputValues[index], [obj.key]: obj.value };
    console.log(newInputValues);
    setnumberInvoice(newInputValues);
  };

  const handleNumberInputChange = (event) => {
    const newNumber = Number(event.target.value);

    if (!isNaN(newNumber) && newNumber >= 0) {
      // Preserve existing values and add or remove entries as needed
      setnumberInvoice((prevInvoice) => {
        const updatedInvoice = [...prevInvoice];

        // Remove excess entries if decreasing the number
        while (updatedInvoice.length > newNumber) {
          updatedInvoice.pop();
        }

        // Add new entries with initial values if increasing the number
        while (updatedInvoice.length < newNumber) {
          updatedInvoice.push({ text: '', date: '' });
        }
        console.log(updatedInvoice);

        return updatedInvoice;
      });
    }
  };

  const renderInputs = (values, handleChange, handleSubmit) => {
    return values.numberInvoice.map((value, index) => (
      <Grid key={index} container spacing={2}>
        {values.numberInvoice.length - 1 === index ? (
          <>
            <Grid item xs={6}></Grid>
            <Grid item xs={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker', 'DatePicker']}>
                  <DatePicker
                    label="Select send date last"
                    name={`numberInvoice[${index}].date`}
                    required="true"
                    //onChange={(newValue) => handleChange(`numberInvoice[${index}].date`)(newValue)}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={6} sx={{ marginTop: '10px' }}>
              <TextField
                type="number"
                name={`numberInvoice[${index}].text`}
                id="standard-basic"
                label={`Enter Deposit Percentage  ₦${(value.text / 100) * summaryCal.TotalDue}]`}
                value={value.text}
                validators={['required']}
                onChange={(newValue) => handleChange(`numberInvoice[${index}].text`)(newValue)}
                InputProps={{
                  endAdornment: <InputAdornment position="end">%</InputAdornment>
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker', 'DatePicker']}>
                  <DatePicker
                    label="Select send date"
                    name={`numberInvoice[${index}].date`}
                    required="true"
                    onChange={(newValue) => {
                      console.log('value:', value);
                      console.log('newValue:', newValue);
                      // handleChange(`numberInvoice[${index}].date`)(newValue);
                    }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
          </>
        )}
      </Grid>
    ));
  };

  const columns = [
    {
      field: 'Quantity',
      headerName: 'Quantity',
      sortable: true,
      filterable: false,
      width: 80,
      renderCell: renderQua,
      editable: true
    },
    {
      field: 'Desciption',
      headerName: 'Desciption',
      width: 500,
      editable: true
    },

    {
      field: 'Unit',
      headerName: 'Unit',
      width: 100,
      editable: true
    },

    {
      field: 'Total',
      headerName: 'Total',
      width: 100,
      editable: false
    },

    {
      field: 'Taxed',
      headerName: 'Taxed',
      width: 100,
      renderCell: renderTax,
      editable: false
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 160,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main'
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />
          ];
        } else {
          return [
            <GridActionsCellItem
              icon={
                <Tooltip title="Edit">
                  <EditIcon />
                </Tooltip>
              }
              label="Edit"
              className="textPrimary"
              onClick={handleEditClick(id)}
              color="inherit"
            />,
            <GridActionsCellItem
              icon={
                <Tooltip title="Delete">
                  <DeleteIcon />
                </Tooltip>
              }
              label="Delete"
              onClick={handleDeleteClick(id)}
              color="inherit"
            />
          ];
        }
      }
    }
  ];
  useEffect(() => {
    calculateSummary(rows);

    //[summaryCal, rows, rowIdToAddVat, rowModesModel]
  }, [rows, rowIdToAddVat]);
  return (
    <Box
      sx={{
        height: 'autoHeight',
        marginTop: '10px',
        marginBottom: '20px',
        width: '100%',
        '& .actions': {
          color: 'text.secondary'
        },
        '& .textPrimary': {
          color: 'text.primary'
        }
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        autoHeight={true}
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        hideFooterPagination={true}
        onStateChange={(state) => {
          console.log('onchange');
        }}
        slots={{
          toolbar: EditToolbar,
          footer: CustomFooterStatusComponent,
          noRowsOverlay: CustomNoRowsOverlay
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel, setOpen, tableData },
          footer: { rowModesModel }
        }}
        isCellEditable={() => true}
      />
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Convert to invoice Total amount : ₦{summaryCal.TotalDue}
        </DialogTitle>

        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormControl>
                <InputLabel id="demo-simple-select-label">Select invoce mode</InputLabel>
                <Select
                  sx={{ m: 1, minWidth: 120 }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={invoiceMode}
                  label="invoiceMode"
                  onChange={(newValue) => setInvoiceMode(newValue.target.value)}
                >
                  <MenuItem value="Once">Once</MenuItem>
                  <MenuItem value="Multiple">Multiple</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              {invoiceMode === 'Multiple' ? (
                <>
                  <Paper
                    component="form"
                    sx={{ p: '10px 4px', display: 'flex', alignItems: 'center', width: 250 }}
                  >
                    <InputBase
                      sx={{ flex: 1 }}
                      type="number"
                      placeholder="Split invoce into (e.g 5)"
                      inputProps={{ 'aria-label': 'Split invoice into (e.g 5)' }}
                      onChange={(event) => {
                        // console.log(newValue.target.value);
                        // console.log(Array(Number(newValue.target.value)).fill(''));
                        handleNumberInputChange(event);
                      }}
                    />

                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    <Button size="medium">Load</Button>
                  </Paper>
                </>
              ) : (
                ''
              )}
            </Grid>
          </Grid>
          {invoiceMode === 'Multiple' ? (
            <>
              <Formik
                initialValues={{ numberInvoice: numberInvoice }}
                enableReinitialize={true}
                onSubmit={(values) => console.log('values', values)}
              >
                {({ values, errors, handleSubmit, handleChange }) => (
                  <>
                    {console.log(errors)}
                    <form onSubmit={handleSubmit}>
                      {renderInputs(values, handleChange, handleSubmit)}
                      <Box textAlign="center">
                        <Button variant="outlined" sx={{ mt: '20px', width: '100%' }}>
                          Send
                        </Button>
                      </Box>
                    </form>
                  </>
                )}
              </Formik>
            </>
          ) : (
            ''
          )}
          <Typography gutterBottom>
            The invoice will be sent based on the selected date, and a percentage will be applied to
            the total amount.
          </Typography>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
