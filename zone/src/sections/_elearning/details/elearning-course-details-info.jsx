import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { fCurrency } from 'src/utils/format-number';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function ElearningCourseDetailsInfo({ course }) {
  return (
    <Card sx={{ p: 3, borderRadius: 2 }}>
      <Stack spacing={3}>
        <Stack direction="row" sx={{ typography: 'h3' }}>
          {!!course.priceSale && (
            <Box
              component="span"
              sx={{
                mr: 1,
                typography: 'h4',
                color: 'text.disabled',
                textDecoration: 'line-through',
              }}
            >
              {fCurrency(course.priceSale)}
            </Box>
          )}
          {fCurrency(course.price)}
        </Stack>

        <Stack spacing={2}>
          <Typography>This course includes:</Typography>

          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="carbon:document" sx={{ mr: 1 }} />
            <Box component="strong" sx={{ mr: 0.5 }}>
              {course.lessons?.length}
            </Box>
            Lessons
          </Stack>

          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="carbon:document-download" sx={{ mr: 1 }} />
            <Box component="strong" sx={{ mr: 0.5 }}>
              {course.resources}
            </Box>
            Downloadable resources
          </Stack>

          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="carbon:data-accessor" sx={{ mr: 1 }} />
            Full lifetime access
          </Stack>

          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="carbon:devices" sx={{ mr: 1 }} />
            Access on desktops, tablets, mobile
          </Stack>

          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="carbon:certificate" sx={{ mr: 1 }} />
            Certificate of completion
          </Stack>
        </Stack>

        <Button variant="contained" size="large" color="inherit">
          Enrol Now
        </Button>
      </Stack>
    </Card>
  );
}

ElearningCourseDetailsInfo.propTypes = {
  course: PropTypes.shape({
    lessons: PropTypes.array,
    price: PropTypes.number,
    priceSale: PropTypes.number,
    resources: PropTypes.number,
  }),
};
