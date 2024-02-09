import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { _products } from 'src/_mock';

import EcommerceProductItemTop from '../product/item/ecommerce-product-item-top';
import EcommerceProductItemHot from '../product/item/ecommerce-product-item-hot';

// ----------------------------------------------------------------------

export default function EcommerceLandingTopProducts() {
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
        Top Products
      </Typography>

      <Box
        gap={3}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
        sx={{ mb: { xs: 3, md: 8 } }}
      >
        {_products.slice(4, 8).map((product) => (
          <EcommerceProductItemHot key={product.id} product={product} />
        ))}
      </Box>

      <Box
        gap={3}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
      >
        <EcommerceProductItemTop variant="large" product={_products[6]} />

        <Box
          gap={3}
          display="grid"
          gridTemplateRows={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
        >
          <EcommerceProductItemTop product={_products[4]} />
          <EcommerceProductItemTop product={_products[10]} />
        </Box>
      </Box>
    </Container>
  );
}
