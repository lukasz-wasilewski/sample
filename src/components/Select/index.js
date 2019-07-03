import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

function SelectComponent({ value, onChange, items, error, label }) {
  return (
    <FormControl error={error}>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{ minWidth: '285px' }}
      >
        {items.map(i => (
          <MenuItem key={i.id} value={i.id}>
            {i.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectComponent;
