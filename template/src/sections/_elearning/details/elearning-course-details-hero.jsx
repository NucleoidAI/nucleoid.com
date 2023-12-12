import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';

import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';

import { fShortenNumber } from 'src/utils/format-number';

import { _mock } from 'src/_mock';

import Image from 'src/components/image';
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import { PlayerDialog } from 'src/components/player';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

// ----------------------------------------------------------------------

export default function ElearningCourseDetailsHero({ course }) {
  const {
    slug,
    level,
    lessons,
    category,
    coverUrl,
    languages,
    bestSeller,
    totalHours,
    description,
    ratingNumber,
    totalQuizzes,
    totalReviews,
    totalStudents,
    teachers = [],
  } = course;

  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const videoOpen = useBoolean();

  return (
    <>
      <Box
        sx={{
          bgcolor: 'background.neutral',
          pb: { xs: 5, md: 10 },
        }}
      >
        <Container sx={{ overflow: 'hidden' }}>
          <CustomBreadcrumbs
            links={[
              { name: 'Home', href: '/' },
              { name: 'Courses', href: paths.eLearning.courses },
              { name: course.slug || '' },
            ]}
            sx={{
              pt: 5,
              mb: { xs: 5, md: 10 },
            }}
          />

          <Grid container spacing={{ xs: 5, md: 10 }} direction="row-reverse">
            <Grid xs={12} md={5}>
              <Stack
                alignItems="center"
                justifyContent="center"
                sx={{
                  position: 'relative',
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              >
                <Fab
                  color="primary"
                  onClick={videoOpen.onTrue}
                  sx={{
                    zIndex: 9,
                    position: 'absolute',
                  }}
                >
                  <Iconify icon="carbon:play" width={24} />
                </Fab>

                <Image
                  alt="hero"
                  src={coverUrl}
                  ratio={mdUp ? '3/4' : '4/3'}
                  overlay={`linear-gradient(to bottom, ${alpha(
                    theme.palette.common.black,
                    0
                  )} 0%, ${theme.palette.common.black} 75%)`}
                />
              </Stack>
            </Grid>

            <Grid xs={12} md={7}>
              <Stack spacing={3}>
                <Stack spacing={2} alignItems="flex-start">
                  {bestSeller && (
                    <Label color="warning" variant="filled" sx={{ textTransform: 'uppercase' }}>
                      Best Seller
                    </Label>
                  )}

                  <Typography variant="overline" sx={{ color: 'secondary.main' }}>
                    {category}
                  </Typography>

                  <Typography variant="h3" component="h1">
                    {slug}
                  </Typography>

                  <Typography sx={{ color: 'text.secondary' }}>{description}</Typography>
                </Stack>

                <Stack
                  spacing={1.5}
                  direction="row"
                  alignItems="center"
                  divider={<Divider orientation="vertical" sx={{ height: 20 }} />}
                >
                  <Stack spacing={0.5} direction="row" alignItems="center">
                    <Iconify icon="carbon:star-filled" sx={{ color: 'warning.main' }} />
                    <Box sx={{ typography: 'h6' }}>
                      {Number.isInteger(ratingNumber) ? `${ratingNumber}.0` : ratingNumber}
                    </Box>

                    {totalReviews && (
                      <Link variant="body2" sx={{ color: 'text.secondary' }}>
                        ({fShortenNumber(totalReviews)} reviews)
                      </Link>
                    )}
                  </Stack>

                  <Stack direction="row" sx={{ typography: 'subtitle2' }}>
                    {fShortenNumber(totalStudents)}
                    <Box component="span" typography="body2" sx={{ ml: 0.5 }}>
                      students
                    </Box>
                  </Stack>
                </Stack>

                <Stack direction="row" alignItems="center">
                  <Avatar src={teachers[0]?.avatarUrl} />

                  <Typography variant="body2" sx={{ ml: 1, mr: 0.5 }}>
                    {teachers[0]?.name}
                  </Typography>

                  {!!teachers.length && (
                    <Link underline="always" color="text.secondary" variant="body2">
                      + {teachers.length} teachers
                    </Link>
                  )}
                </Stack>

                <Divider sx={{ borderStyle: 'dashed' }} />

                <Stack spacing={2}>
                  <Stack
                    direction="row"
                    flexWrap="wrap"
                    sx={{
                      '& > *': { my: 0.5, mr: 3 },
                    }}
                  >
                    <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
                      <Iconify icon="carbon:time" sx={{ mr: 1 }} /> {`${totalHours} hours`}
                    </Stack>

                    <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
                      <Iconify icon="carbon:document" sx={{ mr: 1 }} />
                      {`${lessons?.length} Lessons`}
                    </Stack>

                    <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
                      <Iconify
                        icon={
                          (level === 'Beginner' && 'carbon:skill-level-basic') ||
                          (level === 'Intermediate' && 'carbon:skill-level-intermediate') ||
                          'carbon:skill-level-advanced'
                        }
                        sx={{ mr: 1 }}
                      />
                      {level}
                    </Stack>
                  </Stack>

                  <Stack
                    direction="row"
                    flexWrap="wrap"
                    sx={{
                      '& > *': { my: 0.5, mr: 3 },
                    }}
                  >
                    <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
                      <Iconify icon="carbon:content-delivery-network" sx={{ mr: 1 }} />
                      {typeof languages === 'string' ? languages : languages?.join(', ')}
                    </Stack>

                    <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
                      <Iconify icon="carbon:help" sx={{ mr: 1 }} /> {`${totalQuizzes} Quizzes`}
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <PlayerDialog open={videoOpen.value} onClose={videoOpen.onFalse} videoPath={_mock.video(0)} />
    </>
  );
}

ElearningCourseDetailsHero.propTypes = {
  course: PropTypes.shape({
    slug: PropTypes.string,
    level: PropTypes.string,
    lessons: PropTypes.array,
    teachers: PropTypes.array,
    bestSeller: PropTypes.bool,
    category: PropTypes.string,
    coverUrl: PropTypes.string,
    totalHours: PropTypes.number,
    description: PropTypes.string,
    totalQuizzes: PropTypes.number,
    ratingNumber: PropTypes.number,
    totalReviews: PropTypes.number,
    totalStudents: PropTypes.number,
    languages: PropTypes.arrayOf(PropTypes.string),
  }),
};
