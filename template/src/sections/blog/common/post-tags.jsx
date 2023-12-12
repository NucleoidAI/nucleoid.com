import PropTypes from 'prop-types';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export default function PostTags({ tags }) {
  return (
    <Stack direction="row" alignItems="center" flexWrap="wrap" sx={{ mt: 5 }}>
      <Typography variant="subtitle2" sx={{ mr: 1 }}>
        Tags:
      </Typography>

      <Stack direction="row" flexWrap="wrap" spacing={1}>
        {tags.map((tag) => (
          <Chip key={tag} size="small" variant="soft" label={tag} onClick={() => {}} />
        ))}
      </Stack>
    </Stack>
  );
}

PostTags.propTypes = {
  tags: PropTypes.array,
};
