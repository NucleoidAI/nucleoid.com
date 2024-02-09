import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { _products } from 'src/_mock';

import Iconify from 'src/components/iconify';

import EcommerceProductItemFeaturedByBrand from '../product/item/ecommerce-product-item-featured-by-brand';

// ----------------------------------------------------------------------

export default function EcommerceLandingFeaturedBrands() {
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
        Featured Brands
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} md={4}>
          <BrandInfo
            logo={<Iconify icon="ri:apple-fill" width={40} />}
            name="Apple"
            description=" While most people enjoy casino gambling, sports betting, lottery and bingo playing."
            path="#"
            sx={{ height: 1 }}
          />
        </Grid>

        <Grid xs={12} md={8}>
          <Box
            gap={3}
            display="grid"
            gridTemplateColumns={{
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
            }}
          >
            {_products.slice(4, 8).map((product) => (
              <EcommerceProductItemFeaturedByBrand key={product.id} product={product} />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

// ----------------------------------------------------------------------

function BrandInfo({ logo, name, description, path, sx, ...other }) {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        p: 5,
        borderRadius: 2,
        textAlign: 'center',
        border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
        ...sx,
      }}
      {...other}
    >
      {logo}

      <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
        {name}
      </Typography>

      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {description}
      </Typography>

      <Button
        component={RouterLink}
        href={path}
        color="inherit"
        endIcon={<Iconify icon="carbon:chevron-right" />}
        sx={{ mt: 5 }}
      >
        More Details
      </Button>
    </Stack>
  );
}

BrandInfo.propTypes = {
  logo: PropTypes.node,
  sx: PropTypes.object,
  name: PropTypes.string,
  path: PropTypes.string,
  description: PropTypes.string,
};
