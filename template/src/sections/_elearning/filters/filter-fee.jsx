import PropTypes from 'prop-types';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Checkbox, { checkboxClasses } from '@mui/material/Checkbox';

// ----------------------------------------------------------------------

const FEES = ['Free', 'Paid'];

// ----------------------------------------------------------------------

export default function FilterFee({ filterFee, onChangeFee }) {
  return (
    <FormControl fullWidth hiddenLabel>
      <Select
        multiple
        displayEmpty
        value={filterFee}
        onChange={onChangeFee}
        renderValue={(selected) => {
          if (!selected.length) {
            return (
              <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                All Fee
              </Typography>
            );
          }
          return (
            <Typography variant="subtitle2" component="span">
              {selected.join(', ')}
            </Typography>
          );
        }}
      >
        {FEES.map((type) => (
          <MenuItem key={type} value={type}>
            <Checkbox
              size="small"
              checked={filterFee.includes(type)}
              sx={{
                [`&.${checkboxClasses.root}`]: {
                  p: 0,
                  mr: 1,
                },
              }}
            />
            {type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

FilterFee.propTypes = {
  filterFee: PropTypes.arrayOf(PropTypes.string),
  onChangeFee: PropTypes.func,
};
