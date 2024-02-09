import PropTypes from 'prop-types';

import Switch from '@mui/material/Switch';
import FormControlLabel, { formControlLabelClasses } from '@mui/material/FormControlLabel';

// ----------------------------------------------------------------------

export default function FilterStock({ filterStock, onChangeStock }) {
  return (
    <FormControlLabel
      control={<Switch color="success" checked={filterStock} onChange={onChangeStock} />}
      labelPlacement="start"
      label="Only in Stock"
      sx={{
        m: 0,
        [`& .${formControlLabelClasses.label}`]: {
          typography: 'h6',
        },
      }}
    />
  );
}

FilterStock.propTypes = {
  filterStock: PropTypes.bool,
  onChangeStock: PropTypes.func,
};
