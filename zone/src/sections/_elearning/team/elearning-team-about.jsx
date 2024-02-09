import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import ElearningTeamItem from './elearning-team-item';

// ----------------------------------------------------------------------

export default function ElearningTeamAbout({ members }) {
  return (
    <Container sx={{ py: { xs: 8, md: 15 } }}>
      <Typography
        variant="h2"
        sx={{
          textAlign: 'center',
          mb: { xs: 8, md: 10 },
        }}
      >
        Our Teachers
      </Typography>

      <Box
        sx={{
          columnGap: 3,
          display: 'grid',
          rowGap: { xs: 4, md: 5 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {members.map((member) => (
          <ElearningTeamItem key={member.id} member={member} />
        ))}
      </Box>
    </Container>
  );
}

ElearningTeamAbout.propTypes = {
  members: PropTypes.array,
};
