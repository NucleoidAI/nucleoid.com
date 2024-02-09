import PropTypes from 'prop-types';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Checkbox, { checkboxClasses } from '@mui/material/Checkbox';

// ----------------------------------------------------------------------

const DURATIONS = ['0 - 1 Hour', '1 - 3 Hours', '3 - 6 Hours', '6 - 18 Hours', '18+ Hours'];

// ----------------------------------------------------------------------

export default function FilterDuration({ filterDuration, onChangeDuration }) {
  return (
    <FormControl fullWidth hiddenLabel>
      <Select
        multiple
        displayEmpty
        value={filterDuration}
        onChange={onChangeDuration}
        renderValue={(selected) => {
          if (!selected.length) {
            return (
              <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                All Duration
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
        {DURATIONS.map((duration) => (
          <MenuItem key={duration} value={duration}>
            <Checkbox
              size="small"
              checked={filterDuration.includes(duration)}
              sx={{
                [`&.${checkboxClasses.root}`]: {
                  p: 0,
                  mr: 1,
                },
              }}
            />
            {duration}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

FilterDuration.propTypes = {
  filterDuration: PropTypes.arrayOf(PropTypes.string),
  onChangeDuration: PropTypes.func,
};
