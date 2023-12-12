import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function ProductColorPicker({ value, options, onChange, sx }) {
  return (
    <RadioGroup row value={value} onChange={onChange}>
      {options.map((option) => (
        <Stack
          key={option.value}
          alignItems="center"
          justifyContent="center"
          sx={{
            m: 1,
            width: 32,
            height: 32,
            borderRadius: 1,
            position: 'relative',
            bgcolor: option.label,
            color: 'common.white',
            ...sx,
          }}
        >
          {value === option.value && <Iconify icon="carbon:checkmark" />}

          <FormControlLabel
            value={option.value}
            control={<Radio sx={{ display: 'none' }} />}
            label=""
            sx={{
              m: 0,
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              position: 'absolute',
            }}
          />
        </Stack>
      ))}
    </RadioGroup>
  );
}

ProductColorPicker.propTypes = {
  sx: PropTypes.object,
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
};
