import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';

import { _pricing02 } from 'src/_mock';

import Iconify from 'src/components/iconify';

import PlanHeader from '../02/pricing-02-header';
import PlanContentMobile from '../02/pricing-02-content-mobile';
import PlanContentDesktop from '../02/pricing-02-content-desktop';

// ----------------------------------------------------------------------

export default function Pricing02View() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Container
      sx={{
        minHeight: 1,
        pt: { xs: 13, md: 16 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Typography variant="h3" align="center" paragraph>
        Flexible plans for your
        <br /> community&apos;s size and needs
      </Typography>

      <Typography align="center" sx={{ mb: { xs: 5, md: 8 }, color: 'text.secondary' }}>
        Choose your plan and make modern online conversation magic
      </Typography>

      <Grid container alignItems="flex-end">
        {mdUp && (
          <Grid xs={12} md={3} sx={{ pb: 5 }}>
            <Typography variant="overline" sx={{ color: 'primary.main' }}>
              Feature
            </Typography>
          </Grid>
        )}

        {_pricing02.map((plan) => (
          <Grid
            key={plan.license}
            xs={12}
            md={3}
            sx={{
              mb: { xs: 4, md: 0 },
              borderRadius: { xs: 2, md: 0 },
              boxShadow: (theme) => ({ xs: theme.customShadows.z16, md: 0 }),
            }}
          >
            <PlanHeader plan={plan} />
            {!mdUp && <PlanContentMobile plan={plan} />}
          </Grid>
        ))}
      </Grid>

      {mdUp && (
        <Grid container>
          <Grid
            xs={12}
            md={3}
            sx={{
              borderTop: (theme) => `solid 1px ${theme.palette.divider}`,
            }}
          >
            {_pricing02[0].options.map((option) => (
              <Stack
                key={option.title}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{
                  height: 72,
                  borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
                }}
              >
                <Typography variant="subtitle2">{option.title}</Typography>

                <Tooltip title={option.tootip} placement="right" arrow>
                  <div>
                    <Iconify icon="carbon:information" sx={{ color: 'text.secondary' }} />
                  </div>
                </Tooltip>
              </Stack>
            ))}
          </Grid>

          {_pricing02.map((plan) => (
            <Grid
              key={plan.license}
              xs={12}
              md={3}
              sx={{
                borderTop: (theme) => ({
                  md: `solid 1px ${theme.palette.divider}`,
                }),
              }}
            >
              <PlanContentDesktop plan={plan} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
