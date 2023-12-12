import PropTypes from 'prop-types';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Checkbox, { checkboxClasses } from '@mui/material/Checkbox';

import { useResponsive } from 'src/hooks/use-responsive';

import { JOB_BENEFIT_OPTIONS } from 'src/_mock';

// ----------------------------------------------------------------------

export default function FilterBenefits({ filterBenefits, onChangeJobBenefits }) {
  const mdUp = useResponsive('up', 'md');

  return (
    <FormControl
      fullWidth
      hiddenLabel
      size={mdUp ? 'small' : 'medium'}
      sx={{ maxWidth: { md: 180 } }}
    >
      <Select
        multiple
        displayEmpty
        value={filterBenefits}
        onChange={onChangeJobBenefits}
        renderValue={(selected) => {
          if (!selected.length) {
            return (
              <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                Benefits
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
        {JOB_BENEFIT_OPTIONS.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            <Checkbox
              size="small"
              checked={filterBenefits.includes(option.value)}
              sx={{
                [`&.${checkboxClasses.root}`]: {
                  p: 0,
                  mr: 1,
                },
              }}
            />

            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

FilterBenefits.propTypes = {
  filterBenefits: PropTypes.arrayOf(PropTypes.string),
  onChangeJobBenefits: PropTypes.func,
};
