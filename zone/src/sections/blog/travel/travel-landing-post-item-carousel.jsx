import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function TravelLandingPostItemCarousel({ post }) {
  const theme = useTheme();

  return (
    <Stack sx={{ position: 'relative' }}>
      <Stack
        sx={{
          width: 1,
          height: 1,
          zIndex: 9,
          textAlign: 'center',
          position: 'absolute',
          color: 'common.white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ mx: 'auto', maxWidth: 400 }}>
          <Typography variant="body2" sx={{ color: 'primary.main' }}>
            {fDate(post.createdAt)}
          </Typography>

          <Typography variant="h3" sx={{ mt: 1, mb: 5 }}>
            {post.title}
          </Typography>

          <Typography sx={{ opacity: 0.72, mb: 10 }}>{post.description}</Typography>

          <Fab component={RouterLink} href={paths.travel.post}>
            <Iconify icon="carbon:chevron-right" />
          </Fab>
        </Box>
      </Stack>

      <Image
        src={post.coverUrl}
        alt={post.title}
        overlay={`linear-gradient(to bottom, ${alpha(theme.palette.common.black, 0)} 0%, ${
          theme.palette.common.black
        } 75%)`}
        sx={{
          width: 1,
          height: { xs: 720, md: 960 },
        }}
      />
    </Stack>
  );
}

TravelLandingPostItemCarousel.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    coverUrl: PropTypes.string,
    description: PropTypes.string,
    createdAt: PropTypes.instanceOf(Date),
  }),
};
