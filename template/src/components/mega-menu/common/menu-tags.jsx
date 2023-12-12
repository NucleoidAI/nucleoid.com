import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

export default function MenuTags({ tags, ...other }) {
  return (
    <Box {...other}>
      <Typography
        variant="caption"
        sx={{
          mr: 0.5,
          fontWeight: 'fontWeightBold',
        }}
      >
        Hot Products:
      </Typography>

      {tags.map((tag, index) => (
        <Link
          key={tag.title}
          component={RouterLink}
          href={tag.path}
          variant="caption"
          sx={{
            color: 'text.secondary',
            transition: (theme) => theme.transitions.create(['color']),
            '&:hover': {
              color: 'text.primary',
            },
          }}
        >
          {index === 0 ? tag.title : `, ${tag.title} `}
        </Link>
      ))}
    </Box>
  );
}

MenuTags.propTypes = {
  tags: PropTypes.array,
};
