import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

import { bgGradient } from 'src/theme/css';

// ----------------------------------------------------------------------

export default function CareerNewsletter() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...bgGradient({
          color: `${alpha(theme.palette.grey[900], 0.88)}`,
          imgUrl: '/assets/images/career/career_newsletter.jpg',
        }),
        py: 15,
      }}
    >
      <Container>
        <Stack spacing={3} alignItems="center" sx={{ color: 'common.white', textAlign: 'center' }}>
          <Typography variant="h2">Get The Right Job For You</Typography>

          <Typography>
            Subscribe to get updated on latest and relevant career opportunities
          </Typography>

          <InputBase
            placeholder="Enter your email"
            endAdornment={
              <InputAdornment position="end">
                <Button
                  size="large"
                  color="primary"
                  variant="contained"
                  sx={{
                    height: 54,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                  }}
                >
                  Subscribe
                </Button>
              </InputAdornment>
            }
            sx={{
              pl: 1.5,
              width: 1,
              height: 54,
              maxWidth: 560,
              borderRadius: 1,
              bgcolor: 'common.white',
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
}
