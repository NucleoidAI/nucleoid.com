import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';

import { _productsCompare } from 'src/_mock';

import EcommerceCompareList from '../compare/ecommerce-compare-list';

// ----------------------------------------------------------------------

export default function EcommerceCompareView() {
  return (
    <Container
      sx={{
        overflow: 'hidden',
        pt: 5,
        pb: { xs: 5, md: 10 },
      }}
    >
      <Stack spacing={2} alignItems="flex-start" sx={{ mb: 5 }}>
        <Typography variant="h3">Compare</Typography>

        <FormControlLabel
          control={<Switch color="success" defaultChecked />}
          label="Only view the difference"
        />
      </Stack>

      <EcommerceCompareList products={_productsCompare} />
    </Container>
  );
}
