import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLabels({ datePickerTypeP, labelP }) {
  const [dateSelectionType, setDateSelectionType] = React.useState('');

  const handleChange = (event) => {
    setDateSelectionType(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, Width: '120' }}>
        <InputLabel id="demo-simple-select-helper-label">{labelP}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={dateSelectionType}
          label={labelP}
          onChange={handleChange}
        >
          {datePickerTypeP.map((data) => {
            return <MenuItem value={data}>{data}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
}
