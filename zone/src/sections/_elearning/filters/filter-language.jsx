import PropTypes from 'prop-types';

import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Checkbox, { checkboxClasses } from '@mui/material/Checkbox';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';

import { countries } from 'src/assets/data';

// ----------------------------------------------------------------------

export default function FilterLanguage({ filterLanguage, onChangeLanguage }) {
  return (
    <Autocomplete
      multiple
      limitTags={2}
      disableCloseOnSelect
      options={countries}
      getOptionLabel={(option) => option.label}
      value={filterLanguage}
      onChange={(event, value) => onChangeLanguage(value)}
      slotProps={{
        paper: {
          sx: {
            [`& .${autocompleteClasses.listbox}`]: {
              [`& .${autocompleteClasses.option}`]: {
                [`& .${checkboxClasses.root}`]: {
                  p: 0,
                  mr: 1,
                },
              },
            },
          },
        },
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          hiddenLabel={!filterLanguage.length}
          placeholder="All Language"
          InputProps={{
            ...params.InputProps,
            autoComplete: 'search',
            sx: { pb: 1 },
          }}
        />
      )}
      renderOption={(props, option, { selected }) => {
        if (!option.label) {
          return null;
        }

        return (
          <li {...props} key={option.label}>
            <Checkbox key={option.label} size="small" disableRipple checked={selected} />
            {option.label}
          </li>
        );
      }}
      renderTags={(selected, getTagProps) =>
        selected.map((option, index) => (
          <Chip
            {...getTagProps({ index })}
            key={option.label}
            label={option.label}
            size="small"
            color="info"
            variant="soft"
          />
        ))
      }
    />
  );
}

FilterLanguage.propTypes = {
  filterLanguage: PropTypes.array,
  onChangeLanguage: PropTypes.func,
};
