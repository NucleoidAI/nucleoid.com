import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';

import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function CareerAboutOurVision() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Container
      sx={{
        overflow: 'hidden',
        py: { xs: 5, md: 10 },
      }}
    >
      <Grid
        container
        spacing={{
          xs: 8,
          md: 3,
        }}
        justifyContent="space-between"
      >
        <Grid xs={12} md={3}>
          <Typography variant="h3" sx={{ pt: { md: 5 } }}>
            Fusce convallis metus id felis luctus
          </Typography>

          <Typography sx={{ color: 'text.secondary', mt: 3 }}>
            Fusce convallis metus id felis luctus adipiscing. Etiam imperdiet imperdiet orci.
            Vestibulum eu odio. Phasellus nec sem in justo pellentesque facilisis.
          </Typography>
        </Grid>

        {mdUp && (
          <Grid xs={12} md={4}>
            <Image
              alt="about introduce"
              src="/assets/images/career/career_3.jpg"
              ratio="3/4"
              sx={{ borderRadius: 2 }}
            />
          </Grid>
        )}

        <Grid xs={12} md={3}>
          <Typography variant="h3" sx={{ pt: { md: 5 } }}>
            Fusce convallis metus id felis luctus
          </Typography>

          <Typography sx={{ color: 'text.secondary', mt: 3 }}>
            Fusce convallis metus id felis luctus adipiscing. Etiam imperdiet imperdiet orci.
            Vestibulum eu odio. Phasellus nec sem in justo pellentesque facilisis.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
