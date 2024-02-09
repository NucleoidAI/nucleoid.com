import { filledInputClasses } from '@mui/material/FilledInput';

import { countries } from 'src/assets/data';

import CountrySelect from 'src/components/country-select';

// ----------------------------------------------------------------------

export default function FilterLocation() {
  return (
    <CountrySelect
      fullWidth
      hiddenLabel
      popupIcon={null}
      placeholder="Where we go?"
      options={countries.map((option) => option.label)}
      getOptionLabel={(option) => option}
      sx={{
        [`& .${filledInputClasses.root}`]: {
          bgcolor: 'transparent',
          '&:hover': {
            bgcolor: 'transparent',
          },
          [`&.${filledInputClasses.focused}`]: {
            bgcolor: 'transparent',
          },
        },
        [`& .${filledInputClasses.input}`]: {
          typography: 'subtitle1',
        },
      }}
    />
  );
}
