import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

// ----------------------------------------------------------------------

export default function FilterShipping({ options, filterShipping, onChangeShipping, ...other }) {
  return (
    <Stack {...other}>
      {options.map((option) => (
        <FormControlLabel
          key={option}
          control={
            <Checkbox
              size="small"
              value={option}
              checked={filterShipping.includes(option)}
              onChange={() => onChangeShipping(option)}
            />
          }
          label={option}
        />
      ))}
    </Stack>
  );
}

FilterShipping.propTypes = {
  filterShipping: PropTypes.arrayOf(PropTypes.string),
  onChangeShipping: PropTypes.func,
  options: PropTypes.array,
};
