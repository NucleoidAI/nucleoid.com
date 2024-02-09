import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import InputBase, { inputBaseClasses } from '@mui/material/InputBase';

import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function ElearningNewsletter() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 15 },
        overflow: 'hidden',
        bgcolor: 'primary.lighter',
      }}
    >
      <Container>
        <Grid
          container
          spacing={{ xs: 5, md: 3 }}
          alignItems={{ md: 'center' }}
          justifyContent={{ md: 'space-between' }}
          direction={{ xs: 'column-reverse', md: 'row' }}
        >
          <Grid xs={12} md={5} sx={{ textAlign: 'center', color: 'grey.800' }}>
            <Typography variant="h3">Register Now Forget 20% Discount Every Courses</Typography>

            <Typography sx={{ mt: 2.5, mb: 5 }}>
              Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed magna purus,
              fermentum eu
            </Typography>

            <InputBase
              fullWidth
              placeholder="Enter your email"
              endAdornment={
                <InputAdornment position="end">
                  <Button color="primary" size="large" variant="contained">
                    Register
                  </Button>
                </InputAdornment>
              }
              sx={{
                pr: 0.5,
                pl: 1.5,
                height: 56,
                maxWidth: 560,
                borderRadius: 1,
                bgcolor: 'common.white',
                transition: (theme) => theme.transitions.create(['box-shadow']),
                [`&.${inputBaseClasses.focused}`]: {
                  boxShadow: (theme) => theme.customShadows.z4,
                },
              }}
            />
          </Grid>

          <Grid xs={12} md={5}>
            <Image
              alt="newsletter"
              src="/assets/illustrations/illustration_newsletter.svg"
              sx={{ maxWidth: 366, mx: 'auto' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
