import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';

import Select from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';

import { useResponsive } from 'src/hooks/use-responsive';

import { fCurrency } from 'src/utils/format-number';

// ----------------------------------------------------------------------

export default function FilterSalary({ filterSalary, onChangeSalary }) {
  const mdUp = useResponsive('up', 'md');

  const [open, setOpen] = useState(null);

  const handleOpen = useCallback((event) => {
    setOpen(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(null);
  }, []);

  const minSalary = filterSalary[0];

  const maxSalary = filterSalary[1];

  return (
    <>
      <FormControl
        fullWidth
        hiddenLabel
        onClick={handleOpen}
        size={mdUp ? 'small' : 'medium'}
        sx={{ maxWidth: { md: 180 } }}
      >
        <Select
          open={false}
          displayEmpty
          value=""
          renderValue={() => {
            if (minSalary === 0 && maxSalary === 20000) {
              return (
                <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                  All salary ranges
                </Typography>
              );
            }
            return (
              <Typography variant="subtitle2" component="span">{`${fCurrency(
                minSalary
              )} - ${fCurrency(maxSalary)}`}</Typography>
            );
          }}
        />
      </FormControl>

      <Popover
        open={!!open}
        onClose={handleClose}
        anchorEl={open}
        anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
        transformOrigin={{ vertical: 'center', horizontal: 'center' }}
        slotProps={{
          paper: {
            sx: {
              pt: 3,
              pb: 1,
              px: 5,
              width: 1,
              maxWidth: 360,
              overflow: 'unset',
            },
          },
        }}
      >
        <Typography variant="overline" sx={{ mb: 8, display: 'block', color: 'text.disabled' }}>
          Value based on 1 month
        </Typography>

        <Slider
          marks
          step={1000}
          min={0}
          max={20000}
          valueLabelDisplay="on"
          valueLabelFormat={(value) => `$${value}`}
          value={filterSalary}
          onChange={onChangeSalary}
        />
      </Popover>
    </>
  );
}

FilterSalary.propTypes = {
  filterSalary: PropTypes.array,
  onChangeSalary: PropTypes.func,
};
