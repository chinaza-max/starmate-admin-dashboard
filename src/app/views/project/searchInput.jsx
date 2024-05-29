import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox({ CustomersP, labelP }) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={CustomersP}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={labelP} />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
