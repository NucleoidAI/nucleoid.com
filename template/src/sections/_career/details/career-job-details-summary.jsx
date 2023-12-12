import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import ContactMap from 'src/components/map';
import Iconify from 'src/components/iconify';
import Markdown from 'src/components/markdown';

// ----------------------------------------------------------------------

export default function CareerJobDetailsSummary({ job }) {
  const { skills, benefits, locationMap, content } = job;

  return (
    <Stack spacing={5}>
      <Markdown content={content} />

      <Stack spacing={3}>
        <Typography variant="h5">Job Skills</Typography>

        <Stack direction="row" flexWrap="wrap" spacing={1}>
          {skills.map((skill) => (
            <Chip key={skill} label={skill} size="small" variant="soft" onClick={() => {}} />
          ))}
        </Stack>
      </Stack>

      <Stack spacing={3}>
        <Typography variant="h5">Other Benefits</Typography>

        <Box
          sx={{
            rowGap: 2,
            columnGap: 3,
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {benefits.map((benefit) => (
            <Stack key={benefit} direction="row" alignItems="center" sx={{ typography: 'body2' }}>
              <Iconify
                icon={
                  (benefit === 'Free parking' && 'carbon:car-front') ||
                  (benefit === 'Bonus commission' && 'carbon:money') ||
                  (benefit === 'Travel' && 'carbon:airport-01') ||
                  (benefit === 'Training' && 'carbon:group-presentation') ||
                  (benefit === 'Device support' && 'carbon:devices') ||
                  (benefit === 'Health care' && 'carbon:person-favorite') ||
                  'carbon:direct-link'
                }
                width={24}
                sx={{ color: 'primary.main', mr: 1.5 }}
              />
              {benefit}
            </Stack>
          ))}
        </Box>
      </Stack>

      <Stack spacing={3}>
        <Typography variant="h5">Location</Typography>

        <ContactMap offices={locationMap} sx={{ borderRadius: 2 }} />
      </Stack>
    </Stack>
  );
}

CareerJobDetailsSummary.propTypes = {
  job: PropTypes.shape({
    benefits: PropTypes.array,
    content: PropTypes.string,
    locationMap: PropTypes.array,
    skills: PropTypes.array,
  }),
};
