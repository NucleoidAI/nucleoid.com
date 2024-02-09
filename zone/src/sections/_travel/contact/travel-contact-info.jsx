import { m } from 'framer-motion';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { _offices } from 'src/_mock';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { varHover, varTranHover } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function TravelContactInfo() {
  return (
    <>
      <Container
        sx={{
          pt: 5,
          pb: 10,
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Typography variant="h2">
          We Work <br />
          Worldwide.
        </Typography>

        <Typography sx={{ color: 'text.secondary', mt: 3 }}>
          {`We'd love to talk about how we can help you.`}
        </Typography>
      </Container>

      <Box
        sx={{
          py: { xs: 10, md: 15 },
          bgcolor: 'background.neutral',
        }}
      >
        <Container>
          <Box
            sx={{
              gap: 4,
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              },
            }}
          >
            {_offices.map((office) => (
              <OfficeCard key={office.id} office={office} />
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}

// ----------------------------------------------------------------------

function OfficeCard({ office }) {
  const { country, address, photo, email, phoneNumber } = office;

  return (
    <Paper
      component={m.div}
      whileHover="hover"
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        '&:hover': {
          boxShadow: (theme) => theme.customShadows.z24,
        },
      }}
    >
      <Box sx={{ overflow: 'hidden' }}>
        <m.div variants={varHover()} transition={varTranHover()}>
          <Image src={photo} alt={country} ratio="4/3" />
        </m.div>
      </Box>

      <Stack spacing={1.5} sx={{ p: 3 }} component={m.div} variants={{ hover: { opacity: 0.8 } }}>
        <Typography variant="h5" sx={{ mb: 0.5 }}>
          {country}
        </Typography>

        <Stack spacing={0.5}>
          <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
            <Iconify icon="carbon:location" width={24} sx={{ mr: 1 }} /> Address
            <Link sx={{ lineHeight: 0 }}>
              <Iconify icon="carbon:launch" width={18} sx={{ ml: 1 }} />
            </Link>
          </Stack>
          <Typography variant="body2" sx={{ mt: 0.5 }}>
            {address}
          </Typography>
        </Stack>

        <Stack spacing={0.5}>
          <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
            <Iconify icon="carbon:mobile" width={24} sx={{ mr: 1 }} /> Phone
          </Stack>
          <Typography variant="body2" sx={{ mt: 0.5 }}>
            {phoneNumber}
          </Typography>
        </Stack>

        <Stack spacing={0.5}>
          <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
            <Iconify icon="carbon:email" width={24} sx={{ mr: 1 }} /> Email
          </Stack>
          <Typography variant="body2" sx={{ mt: 0.5 }}>
            {email}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}

OfficeCard.propTypes = {
  office: PropTypes.shape({
    address: PropTypes.string,
    country: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    photo: PropTypes.string,
  }),
};
