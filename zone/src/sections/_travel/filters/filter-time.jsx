import PropTypes from 'prop-types';

import InputAdornment from '@mui/material/InputAdornment';
import { inputBaseClasses } from '@mui/material/InputBase';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function FilterTime({ departureDay, onChangeDepartureDay, sx }) {
  return (
    <MobileDatePicker
      value={departureDay}
      onChange={onChangeDepartureDay}
      slotProps={{
        textField: {
          fullWidth: true,
          variant: 'standard',
          InputProps: {
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="start">
                <Iconify width={24} icon="carbon:calendar" sx={{ color: 'text.disabled', mr: 1 }} />
              </InputAdornment>
            ),
          },
          sx: {
            [`& .${inputBaseClasses.input}`]: {
              py: 0,
              height: 52,
              typography: 'subtitle1',
            },
            ...sx,
          },
        },
      }}
    />
  );
}

FilterTime.propTypes = {
  departureDay: PropTypes.instanceOf(Date),
  onChangeDepartureDay: PropTypes.func,
  sx: PropTypes.object,
};
