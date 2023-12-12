import PropTypes from 'prop-types';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

// ----------------------------------------------------------------------

export default function FilterTag({ options, filterTag, onChangeTag, ...other }) {
  return (
    <Stack direction="row" flexWrap="wrap" spacing={1} {...other}>
      {options.map((option) => {
        const selected = filterTag.includes(option);

        return (
          <Chip
            key={option}
            size="small"
            label={option}
            variant="outlined"
            onClick={() => onChangeTag(option)}
            sx={{
              ...(selected && {
                bgcolor: 'action.selected',
                fontWeight: 'fontWeightBold',
              }),
            }}
          />
        );
      })}
    </Stack>
  );
}

FilterTag.propTypes = {
  filterTag: PropTypes.arrayOf(PropTypes.string),
  onChangeTag: PropTypes.func,
  options: PropTypes.array,
};
