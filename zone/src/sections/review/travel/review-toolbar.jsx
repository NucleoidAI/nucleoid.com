import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Select, { selectClasses } from '@mui/material/Select';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'popular', label: 'Popular' },
];

// ----------------------------------------------------------------------

export default function ReviewToolbar({ sort, totalReviews, onOpenReview, onChangeSort }) {
  return (
    <Stack
      spacing={5}
      alignItems={{ md: 'center' }}
      direction={{ xs: 'column', md: 'row' }}
      sx={{ mb: 5 }}
    >
      <Typography variant="h4" sx={{ width: 1 }}>
        {totalReviews} Reviews
      </Typography>

      <Stack direction="row" spacing={2} flexShrink={0} alignItems="center">
        <FormControl
          hiddenLabel
          sx={{
            [`& .${selectClasses.select}`]: {
              py: 1.75,
            },
          }}
        >
          <Select value={sort} onChange={onChangeSort}>
            {SORT_OPTIONS.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button size="large" variant="contained" color="inherit" onClick={onOpenReview}>
          Write a Review
        </Button>
      </Stack>
    </Stack>
  );
}

ReviewToolbar.propTypes = {
  onChangeSort: PropTypes.func,
  onOpenReview: PropTypes.func,
  sort: PropTypes.string,
  totalReviews: PropTypes.number,
};
