import PropTypes from 'prop-types';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';

import { _tags } from 'src/_mock';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function FilterCategories({ filterCategories, onChangeCategory }) {
  return (
    <Autocomplete
      sx={{ width: 1 }}
      options={_tags}
      getOptionLabel={(option) => option}
      value={filterCategories}
      onChange={(event, value) => onChangeCategory(value)}
      renderInput={(params) => (
        <TextField
          {...params}
          hiddenLabel
          placeholder="Categories"
          InputProps={{
            ...params.InputProps,
            autoComplete: 'search',
            startAdornment: (
              <InputAdornment position="start">
                <Iconify
                  width={24}
                  icon="carbon:inventory-management"
                  sx={{ color: 'text.disabled', mr: 1 }}
                />
              </InputAdornment>
            ),
            sx: { pb: 1 },
          }}
        />
      )}
      renderOption={(props, option) => (
        <li {...props} key={option}>
          {option}
        </li>
      )}
    />
  );
}

FilterCategories.propTypes = {
  filterCategories: PropTypes.string,
  onChangeCategory: PropTypes.func,
};
