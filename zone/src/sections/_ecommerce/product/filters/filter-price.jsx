import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

// ----------------------------------------------------------------------

export default function FilterPrice({
  filterPrice,
  onChangeStartPrice,
  onChangeEndPrice,
  ...other
}) {
  return (
    <Stack spacing={2} direction="row" alignItems="center" divider={<div> - </div>} {...other}>
      <TextField
        size="small"
        label="$ Min"
        type="number"
        value={filterPrice.start === 0 ? '' : filterPrice.start}
        onChange={onChangeStartPrice}
      />
      <TextField
        size="small"
        label="$ Max"
        type="number"
        value={filterPrice.end === 0 ? '' : filterPrice.end}
        onChange={onChangeEndPrice}
      />
    </Stack>
  );
}

FilterPrice.propTypes = {
  filterPrice: PropTypes.shape({
    end: PropTypes.number,
    start: PropTypes.number,
  }),
  onChangeEndPrice: PropTypes.func,
  onChangeStartPrice: PropTypes.func,
};
