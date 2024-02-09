import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function ElearningAboutHero() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 20 },
        overflow: 'hidden',
        bgcolor: 'primary.lighter',
      }}
    >
      <Container>
        <Grid container spacing={{ xs: 8, md: 3 }} justifyContent="space-between">
          <Grid
            xs={12}
            md={6}
            lg={5}
            sx={{
              color: 'grey.800',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography variant="h1">Online Courses</Typography>

            <Typography sx={{ mt: 3, mb: 6 }}>
              Nunc nulla. Ut leo. Pellentesque commodo eros a enim. Nunc egestas, augue at
              pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede.
            </Typography>

            <Button variant="contained" size="large" color="primary">
              Browse Courses
            </Button>
          </Grid>

          <Grid xs={12} md={6} lg={6}>
            <Image alt="courses-online" src="/assets/illustrations/illustration_courses_hero.svg" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
