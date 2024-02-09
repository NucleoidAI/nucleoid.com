import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { _socials } from 'src/_mock';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function PostSocialsShare() {
  return (
    <Stack direction="row" sx={{ mt: 5 }}>
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
  );
}
