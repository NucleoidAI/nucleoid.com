import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

// ----------------------------------------------------------------------

export default function FilterBrand({ options, filterBrand, onChangeBrand, ...other }) {
  return (
    <Stack {...other}>
      {options.map((option) => (
        <FormControlLabel
          key={option}
          control={
            <Checkbox
              size="small"
              value={option}
              checked={filterBrand.includes(option)}
              onChange={() => onChangeBrand(option)}
            />
          }
          label={option}
        />
      ))}
    </Stack>
  );
}

FilterBrand.propTypes = {
  filterBrand: PropTypes.arrayOf(PropTypes.string),
  onChangeBrand: PropTypes.func,
  options: PropTypes.array,
};
