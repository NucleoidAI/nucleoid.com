import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { alpha, useTheme } from '@mui/material/styles';

import { fDate } from 'src/utils/format-time';

import { _socials } from 'src/_mock';
import { bgGradient } from 'src/theme/css';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function TravelPostHero({ post }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 20,
        position: 'relative',
        ...bgGradient({
          startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
          endColor: `${theme.palette.common.black} 75%`,
          imgUrl: post.heroUrl,
        }),
      }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid xs={12} md={6}>
            <Stack
              spacing={3}
              alignItems={{
                xs: 'center',
                md: 'flex-start',
              }}
              sx={{
                color: 'common.white',
                textAlign: {
                  xs: 'center',
                  md: 'left',
                },
              }}
            >
              <Typography variant="body2" sx={{ opacity: 0.72 }}>
                {post.duration}
              </Typography>

              <Typography variant="h2" component="h1">
                {post.title}
              </Typography>

              <Typography variant="caption" sx={{ opacity: 0.72 }}>
                {fDate(post.createdAt, 'dd/MM/yyyy p')}
              </Typography>

              <Stack direction="row">
                {_socials.map((social) => (
                  <IconButton key={social.value}>
                    <Iconify icon={social.icon} sx={{ color: social.color }} />
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

TravelPostHero.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    heroUrl: PropTypes.string,
    duration: PropTypes.string,
    createdAt: PropTypes.instanceOf(Date),
  }),
};
