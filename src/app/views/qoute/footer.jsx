import {
  Autocomplete,
  Box,
  Button,
  Card,
  Chip,
  Container,
  Divider,
  Grid,
  Icon,
  IconButton,
  Paper,
  Stack,
  TextField
} from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';

import { useState } from 'react';

const Footer = () => {
  const [value, setValue] = useState('1');

  return (
    <Box>
      <TextField
        fullWidth
        id="outlined-multiline-static"
        label="DISPLAYED AT THE TOP PART OF THE QOUTE"
        multiline
        rows={4}
        defaultValue="Default Value"
      />
      <TextField
        sx={{ marginTop: '50px' }}
        fullWidth
        id="outlined-multiline-static"
        label="DISPLAYED AT THE BOTTOM PART OF THE QOUTE"
        multiline
        rows={4}
        defaultValue="Default Value"
      />
      <TextField
        sx={{ marginTop: '50px', marginBottom: '50px' }}
        fullWidth
        id="outlined-multiline-static"
        label="DISPLAYED ONLY WHEN VIEW BY ADMIN"
        multiline
        rows={4}
        defaultValue="Default Value"
      />
    </Box>
  );
};

export default Footer;
//
