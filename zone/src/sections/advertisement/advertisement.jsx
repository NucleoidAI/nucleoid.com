import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function Advertisement({ advertisement, sx, ...other }) {
  const theme = useTheme();

  return (
    <Box sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden', ...sx }} {...other}>
      <Stack
        alignItems="center"
        sx={{
          p: 5,
          width: 1,
          bottom: 0,
          zIndex: 9,
          textAlign: 'center',
          position: 'absolute',
        }}
      >
        <Typography variant="h4" sx={{ color: 'primary.main' }}>
          {advertisement.title}
        </Typography>

        <Typography variant="body2" sx={{ mt: 1, mb: 3, color: 'common.white' }}>
          {advertisement.description}
        </Typography>

        <Button href={advertisement.path} variant="contained" color="primary">
          Go Now
        </Button>
      </Stack>

      <Image
        alt="advertisement"
        src={advertisement.imageUrl}
        ratio="1/1"
        overlay={`linear-gradient(to bottom, ${alpha(theme.palette.common.black, 0)} 0%, ${
          theme.palette.common.black
        } 100%)`}
      />
    </Box>
  );
}

Advertisement.propTypes = {
  advertisement: PropTypes.shape({
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    path: PropTypes.string,
    title: PropTypes.string,
  }),
  sx: PropTypes.object,
};
