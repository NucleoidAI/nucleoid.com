import { useEffect } from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';

import { _jobs, _mock, _socials } from 'src/_mock';

import Iconify from 'src/components/iconify';
import { SplashScreen } from 'src/components/loading-screen';

import Advertisement from '../../advertisement';
import CareerNewsletter from '../career-newsletter';
import CareerJobListSimilar from '../list/career-job-list-similar';
import CareerJobDetailsInfo from '../details/career-job-details-info';
import CareerJobDetailsHero from '../details/career-job-details-hero';
import CareerJobDetailsSummary from '../details/career-job-details-summary';
import CareerJobDetailsCompanyInfo from '../details/career-job-details-company-info';
import CareerJobDetailsCompanySimilar from '../details/career-job-details-company-similar';

// ----------------------------------------------------------------------

const _mockJob = _jobs[0];

export default function CareerJobView() {
  const mdUp = useResponsive('up', 'md');

  const loading = useBoolean(true);

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      loading.onFalse();
    };
    fakeLoading();
  }, [loading]);

  if (loading.value) {
    return <SplashScreen />;
  }

  return (
    <>
      <CareerJobDetailsHero job={_mockJob} />

      <Container
        sx={{
          overflow: 'hidden',
          pt: { xs: 5, md: 10 },
          pb: 10,
        }}
      >
        <Grid container spacing={{ xs: 5, md: 8 }}>
          {!mdUp && (
            <Grid xs={12} md={5} lg={4}>
              <CareerJobDetailsInfo job={_mockJob} />
            </Grid>
          )}

          <Grid xs={12} md={7} lg={8}>
            <CareerJobDetailsSummary job={_mockJob} />

            <Divider sx={{ my: 5 }} />

            <Stack direction="row" flexWrap="wrap" sx={{ mt: 5 }}>
              <Typography variant="subtitle2" sx={{ mt: 0.75, mr: 1.5 }}>
                Share:
              </Typography>

              <Stack direction="row" alignItems="center" flexWrap="wrap">
                {_socials.map((social) => (
                  <Button
                    key={social.value}
                    size="small"
                    variant="outlined"
                    startIcon={<Iconify icon={social.icon} />}
                    sx={{
                      m: 0.5,
                      flexShrink: 0,
                      color: social.color,
                      borderColor: social.color,
                      '&:hover': {
                        borderColor: social.color,
                        bgcolor: alpha(social.color, 0.08),
                      },
                    }}
                  >
                    {social.label}
                  </Button>
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid xs={12} md={5} lg={4}>
            <Stack spacing={5}>
              {mdUp && <CareerJobDetailsInfo job={_mockJob} />}

              <CareerJobDetailsCompanyInfo job={_mockJob} />

              <CareerJobDetailsCompanySimilar jobs={_jobs.slice(-3)} />

              <Advertisement
                advertisement={{
                  title: 'Advertisement',
                  description: 'Duis leo. Donec orci lectus, aliquam ut, faucibus non',
                  imageUrl: _mock.image.career(2),
                  path: '',
                }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <CareerJobListSimilar jobs={_jobs.slice(-3)} />

      <CareerNewsletter />
    </>
  );
}
