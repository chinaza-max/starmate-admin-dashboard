import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import { Call, Email, Restore, Send } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Grid, styled } from '@mui/material';
import { Fragment, useState } from 'react';
import Alert from '@mui/material/Alert';

import CancelIcon from '@mui/icons-material/Close';
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
import { Avatar, Tooltip } from '@mui/material';
const ContentBox = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' }
}));

const roles = ['Market', 'Finance', 'Development'];
const randomRole = () => {
  return randomArrayItem(roles);
};

const initialRows = [
  {
    id: 1,
    url: '/assets/images/face-6.jpg',
    firstName: randomTraderName(),
    lastName: randomTraderName(),
    email: 'mosesogbonna68@gmail.com',
    dateOfBirth: randomCreatedDate(),
    tel: 8183746528,
    status: 'Pending',
    quoteStatus: 'Valid',
    role: randomRole()
  },
  {
    id: 2,
    url: '/assets/images/face-6.jpg',
    firstName: randomTraderName(),
    lastName: randomTraderName(),
    email: 'mosesogbonna68@gmail.com',
    dateOfBirth: randomCreatedDate(),
    tel: 8183746118,
    status: 'Pending',
    quoteStatus: 'Valid',
    role: randomRole()
  },
  {
    id: 3,
    url: '/assets/images/face-6.jpg',
    firstName: randomTraderName(),
    lastName: randomTraderName(),
    email: 'mosesogbonna68@gmail.com',
    dateOfBirth: randomCreatedDate(),
    tel: 8183746500,
    status: 'Pending',
    quoteStatus: 'Expired',
    role: randomRole()
  },
  {
    id: 4,
    url: '/assets/images/face-6.jpg',
    firstName: randomTraderName(),
    lastName: randomTraderName(),
    email: 'mosesogbonna68@gmail.com',
    dateOfBirth: randomCreatedDate(),
    tel: 8123746528,
    status: 'Pending',
    quoteStatus: 'Expired',
    role: randomRole()
  },
  {
    id: 5,
    url: '/assets/images/face-6.jpg',
    firstName: randomTraderName(),
    lastName: randomTraderName(),
    email: 'mosesogbonna68@gmail.com',
    dateOfBirth: randomCreatedDate(),
    tel: 7183746528,
    status: 'Pending',
    quoteStatus: 'Expired',

    role: randomRole()
  },
  {
    id: 6,
    url: '/assets/images/face-6.jpg',
    firstName: randomTraderName(),
    lastName: randomTraderName(),
    email: 'mosesogbonna68@gmail.com',
    dateOfBirth: randomCreatedDate(),
    tel: 8183746528,
    status: 'Pending',
    quoteStatus: 'Expired',
    role: randomRole()
  }
];

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  return (
    <GridToolbarContainer>
      <Button color="primary">Pending qoute</Button>
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
function renderInvoiceStatus(params) {
  return (
    <Alert icon={false} severity={params.value == 'Valid' ? 'success' : 'warning'}>
      {params.value}
    </Alert>
  );
}
function renderEmail(params) {
  return (
    <Button variant="text" startIcon={<Email />}>
      {params.value}
    </Button>
  );
}
const renderAvatarEditInputCell = (params) => {
  return <AvatarEditInputCell {...params} />;
};
export default function FullFeaturedCrudGrid(props) {
  const [rows, setRows] = useState(initialRows);
  const [rowModesModel, setRowModesModel] = useState({});
  const navigate = useNavigate();

  const handleRowEditStop = (params, event) => {
    console.log(event);

    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };
  const handleRowRestoration = (id) => () => {
    // setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };
  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };
  const handleNavigationDetails = (id) => () => {
    navigate('/qoute');
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
    console.log(newRow);
    //if (false) {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
    //}
    /*
     else {
    const updatedRow = { ...oldRow, isNew: true };
    setRows(rows.map((row) => (row.id === oldRow.id ? updatedRow : row)));
    return updatedRow;
    }*/
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    {
      field: 'url',
      headerName: 'Avatar',
      renderCell: renderAvatar,
      sortable: false,
      filterable: false,
      renderEditCell: renderAvatarEditInputCell,
      type: 'file',
      width: 80
    },
    { field: 'id', headerName: 'Id', width: 20 },
    { field: 'firstName', headerName: 'First Name', width: 150 },
    { field: 'lastName', headerName: 'Last Name', width: 150 },
    {
      field: 'email',
      headerName: 'Email',
      width: 250,
      renderCell: renderEmail,
      align: 'left',
      headerAlign: 'left'
    },
    {
      field: 'tel',
      headerName: 'Contact',
      width: 120,
      renderCell: renderTel
    },
    {
      field: 'quoteStatus',
      headerName: 'Quote status',
      width: 120,
      renderCell: renderInvoiceStatus
    },
    {
      field: 'status',
      headerName: 'Status',
      editable: true,
      width: 150,
      type: 'singleSelect',
      valueOptions: [
        { value: 'Pending', label: 'Pending' },
        { value: 'Accepted', label: 'Accepted' },
        { value: 'Completed', label: 'Completed' }
      ]
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
        } else if (props.typeP === 'suspended') {
          return [
            <GridActionsCellItem
              icon={
                <Tooltip title="restore staff">
                  <Restore />
                </Tooltip>
              }
              label="Restore"
              className="textPrimary"
              onClick={handleRowRestoration(id)}
              color="inherit"
            />,
            <GridActionsCellItem
              icon={
                <Tooltip title="Deleted">
                  <DeleteIcon />
                </Tooltip>
              }
              label="Delete"
              onClick={handleDeleteClick(id)}
              color="inherit"
            />,
            <GridActionsCellItem
              icon={
                <Tooltip title="More Details">
                  <Send />
                </Tooltip>
              }
              label="more"
              onClick={handleNavigationDetails(id)}
              color="inherit"
            />
          ];
        } else if (props.typeP === 'deleted') {
          return [
            <GridActionsCellItem
              icon={<EditIcon color="disabled" />}
              label="Edit"
              className="textPrimary"
              color="inherit"
            />,
            <GridActionsCellItem
              icon={<DeleteIcon color="disabled" />}
              label="Delete"
              color="inherit"
            />,
            <GridActionsCellItem icon={<Send color="disabled" />} label="more" color="inherit" />
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
            />,
            <GridActionsCellItem
              icon={
                <Tooltip title="More Details">
                  <Send />
                </Tooltip>
              }
              label="more"
              onClick={handleNavigationDetails(id)}
              color="inherit"
            />
          ];
        }
      }
    }
  ];

  return (
    <Fragment>
      <ContentBox className="analytics">
        <Grid container spacing={3}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box
              sx={{
                height: 500,
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
                rowModesModel={rowModesModel}
                onRowModesModelChange={handleRowModesModelChange}
                onRowEditStop={handleRowEditStop}
                processRowUpdate={processRowUpdate}
                slots={{
                  toolbar: EditToolbar
                }}
                slotProps={{
                  toolbar: { setRows, setRowModesModel, typeP: props.typeP }
                }}
                // isCellEditable={() => false}
              />
            </Box>
          </Grid>
        </Grid>
      </ContentBox>
    </Fragment>
  );
}
/**
   
 */
