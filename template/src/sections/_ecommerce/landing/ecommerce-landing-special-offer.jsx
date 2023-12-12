import { add } from 'date-fns';
import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { _mock } from 'src/_mock';

import Image from 'src/components/image';

import ProductColorPicker from '../common/product-color-picker';
import ProductOptionPicker from '../common/product-option-picker';
import ProductCountdownBlock from '../common/product-countdown-block';

// ----------------------------------------------------------------------

const COLOR_OPTIONS = [
  { label: '#FA541C', value: 'red' },
  { label: '#754FFE', value: 'violet' },
  { label: '#00B8D9', value: 'cyan' },
  { label: '#36B37E', value: 'green' },
];

const MEMORY_OPTIONS = [
  { label: '128GB', value: '128gb' },
  { label: '256GB', value: '256gb' },
  { label: '512GB', value: '512gb' },
  { label: '1TB', value: '1tb' },
];

// ----------------------------------------------------------------------

export default function EcommerceLandingSpecialOffer() {
  const [color, setColor] = useState('red');

  const [memory, setMemory] = useState('128gb');

  const handleChangeColor = useCallback((event) => {
    setColor(event.target.value);
  }, []);

  const handleChangeMemory = useCallback((event) => {
    setMemory(event.target.value);
  }, []);

  return (
    <Container
      sx={{
        py: { xs: 5, md: 8 },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          mb: 8,
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        Special Offer
      </Typography>

      <Box
        gap={{ xs: 5, md: 8 }}
        display="grid"
        gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
      >
        <SpecialOfferCountdown
          label="New 2022"
          name="Apple iPhone 14"
          price="From $999"
          expired={add(new Date(), { days: 1, hours: 8 })}
        />

        <Box sx={{ borderRadius: 1.5, bgcolor: 'background.neutral' }}>
          <Image src={_mock.image.product(4)} />
        </Box>

        <SpecialOfferBuyNow
          color={color}
          memory={memory}
          onChangeColor={handleChangeColor}
          onChangeMemory={handleChangeMemory}
        />
      </Box>
    </Container>
  );
}

// ----------------------------------------------------------------------

function SpecialOfferCountdown({ expired, label, name, price, sx, ...other }) {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        p: 5,
        borderRadius: 2,
        textAlign: 'center',
        boxShadow: (theme) => theme.customShadows.z24,
        ...sx,
      }}
      {...other}
    >
      <Typography variant="overline" sx={{ color: 'primary.main' }}>
        {label}
      </Typography>

      <Typography variant="h5" sx={{ mt: 1, mb: 3 }}>
        {name}
      </Typography>

      <Typography
        variant="subtitle2"
        sx={{
          px: 2,
          py: 1,
          borderRadius: 1,
          border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
        }}
      >
        {price}
      </Typography>

      <Divider sx={{ borderStyle: 'dashed', my: 3, width: 1 }} />

      <Typography variant="body2" sx={{ mb: 2 }}>
        Deal ends in:
      </Typography>

      <ProductCountdownBlock
        expired={expired}
        sx={{
          '& .value': {
            color: 'text.primary',
            bgcolor: 'transparent',
            border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.32)}`,
          },
          '& .label': { color: 'text.secondary' },
          '& .separator': { color: 'inherit' },
        }}
      />
    </Stack>
  );
}

SpecialOfferCountdown.propTypes = {
  sx: PropTypes.object,
  name: PropTypes.string,
  label: PropTypes.string,
  price: PropTypes.string,
  expired: PropTypes.instanceOf(Date),
};

// ----------------------------------------------------------------------

function SpecialOfferBuyNow({ color, memory, onChangeColor, onChangeMemory, ...other }) {
  return (
    <Stack spacing={3} alignItems="flex-start" {...other}>
      <Stack spacing={1}>
        <Typography variant="h4">Apple iPhone 14</Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          While most people enjoy casino gambling, sports betting, lottery and bingo playing for the
          fun.
        </Typography>
      </Stack>

      <Stack spacing={2}>
        <Typography variant="subtitle2">Color</Typography>
        <ProductColorPicker value={color} onChange={onChangeColor} options={COLOR_OPTIONS} />
      </Stack>

      <Stack spacing={2}>
        <Typography variant="subtitle2">Memory</Typography>
        <ProductOptionPicker value={memory} onChange={onChangeMemory} options={MEMORY_OPTIONS} />
      </Stack>

      <Button size="large" color="inherit" variant="contained">
        Buy Now
      </Button>
    </Stack>
  );
}

SpecialOfferBuyNow.propTypes = {
  color: PropTypes.string,
  memory: PropTypes.string,
  onChangeColor: PropTypes.func,
  onChangeMemory: PropTypes.func,
};
