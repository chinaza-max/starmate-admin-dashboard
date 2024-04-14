import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Call, Email, Send } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import {
  DataGrid,
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

const roles = ['Market', 'Finance', 'Development'];
const randomRole = () => {
  return randomArrayItem(roles);
};

const initialRows = [
  {
    id: 1,
    url: '/assets/images/face-6.jpg',
    fullName: randomTraderName(),
    email: 'mosesogbonna68@gmail.com',
    type: 'New',
    serviceType: 'Cleaning',
    tel: 8183746528
  },
  {
    id: 2,
    url: '/assets/images/face-6.jpg',
    fullName: randomTraderName(),
    email: 'mosesogbonna68@gmail.com',
    type: 'New',
    serviceType: 'Cleaning',
    tel: 8183746118
  },
  {
    id: 3,
    url: '/assets/images/face-6.jpg',
    fullName: randomTraderName(),
    email: 'mosesogbonna68@gmail.com',
    type: 'Old',
    serviceType: 'Cleaning',

    tel: 8183746500
  },
  {
    id: 4,
    url: '/assets/images/face-6.jpg',
    fullName: randomTraderName(),
    email: 'mosesogbonna68@gmail.com',
    type: 'New',
    serviceType: 'Fumigation',
    tel: 8123746528
  },
  {
    id: 5,
    url: '/assets/images/face-6.jpg',
    fullName: randomTraderName(),
    email: 'mosesogbonna68@gmail.com',
    type: 'Old',
    serviceType: 'Fumigation',
    tel: 7183746528
  },
  {
    id: 6,
    url: '/assets/images/face-6.jpg',
    fullName: randomTraderName(),
    email: 'mosesogbonna68@gmail.com',
    type: 'New',
    serviceType: 'Fumigation',
    tel: 8183746528
  }
];

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
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});
  const navigate = useNavigate();

  const handleRowEditStop = (params, event) => {
    console.log(event);
    console.log('event');

    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleNavigationDetails = (id) => () => {
    navigate('/requests/qoute/2');
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
      width: 70
    },
    { field: 'id', headerName: 'Id', width: 60 },
    { field: 'fullName', headerName: 'Full Name', width: 160 },
    {
      field: 'email',
      headerName: 'Email',
      width: 240,
      renderCell: renderEmail,
      align: 'left',
      headerAlign: 'left'
    },

    {
      field: 'tel',
      headerName: 'Contact',
      width: 150,
      renderCell: renderTel
    },
    {
      field: 'type',
      headerName: 'Client',
      width: 100
    },
    {
      field: 'serviceType',
      headerName: 'Service type',
      width: 100
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 90,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        return [
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
  ];

  return (
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
        isCellEditable={() => false}
      />
    </Box>
  );
}
