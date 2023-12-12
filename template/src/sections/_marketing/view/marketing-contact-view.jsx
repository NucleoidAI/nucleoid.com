import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import MarketingNewsletter from '../marketing-newsletter';
import MarketingContactInfo from '../contact/marketing-contact-info';
import MarketingContactForm from '../contact/marketing-contact-form';
import MarketingLandingFreeSEO from '../landing/marketing-landing-free-seo';

// ----------------------------------------------------------------------

export default function MarketingContactView() {
  return (
    <>
      <Container
        sx={{
          overflow: 'hidden',
          pt: { xs: 5, md: 10 },
          pb: { xs: 10, md: 15 },
        }}
      >
        <Grid
          container
          spacing={{ xs: 5, md: 3 }}
          justifyContent="space-between"
          direction={{ xs: 'column-reverse', md: 'row' }}
        >
          <Grid xs={12} md={6} lg={5}>
            <MarketingContactInfo />
          </Grid>

          <Grid xs={12} md={6} lg={6}>
            <Typography variant="h3" sx={{ mb: 5 }}>
              Ready To Get Started?
            </Typography>

            <MarketingContactForm />
          </Grid>
        </Grid>
      </Container>

      <MarketingLandingFreeSEO />

      <MarketingNewsletter />
    </>
  );
}
