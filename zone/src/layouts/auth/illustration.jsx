import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import { useResponsive } from 'src/hooks/use-responsive';

import Image from 'src/components/image';

import Header from '../common/header-simple';

// ----------------------------------------------------------------------

export default function AuthIllustrationLayout({ children }) {
  const mdUp = useResponsive('up', 'md');

  return (
    <>
      <Header />

      <Container
        sx={{
          pb: 10,
          minHeight: 1,
          pt: { xs: 12, md: 21 },
        }}
      >
        <Grid container columnSpacing={{ md: 5 }} justifyContent="space-between">
          {mdUp && (
            <Grid xs={12} md={7}>
              <Image
                visibleByDefault
                disabledEffect
                alt="login"
                src="/assets/illustrations/illustration_login.svg"
              />
            </Grid>
          )}

          <Grid xs={12} md={5} lg={4}>
            <Stack
              spacing={4}
              sx={{
                p: 4,
                borderRadius: 2,
                textAlign: { xs: 'center', md: 'left' },
                boxShadow: (theme) => theme.customShadows.z24,
              }}
            >
              {children}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

AuthIllustrationLayout.propTypes = {
  children: PropTypes.node,
};
