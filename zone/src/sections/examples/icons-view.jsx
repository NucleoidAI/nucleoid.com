import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import ComponentBlock from './component-block';

// ----------------------------------------------------------------------

export default function IconsView() {
  return (
    <>
      <Box
        sx={{
          py: 5,
          bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800'),
        }}
      >
        <Container>
          <CustomBreadcrumbs
            heading="Icons"
            links={[
              {
                name: 'Components',
                href: paths.components.root,
              },
              { name: 'Icons' },
            ]}
            moreLink={[
              'https://mui.com/components/material-icons',
              'https://iconify.design/icon-sets',
            ]}
          />
        </Container>
      </Box>

      <Container sx={{ my: 10 }}>
        <Stack spacing={3}>
          <ComponentBlock title="Material Icons">
            <Link
              href="https://mui.com/components/icons/#main-content"
              target="_blank"
              rel="noopener"
            >
              https://mui.com/components/icons/#main-content
            </Link>
          </ComponentBlock>

          <ComponentBlock title="Iconify Icons">
            <Iconify icon="carbon:color-palette" width={24} />
            <Iconify icon="carbon:color-palette" width={24} sx={{ color: 'action.active' }} />
            <Iconify icon="carbon:color-palette" width={24} sx={{ color: 'action.disabled' }} />
            <Iconify icon="carbon:color-palette" width={24} sx={{ color: 'primary.main' }} />
            <Iconify icon="carbon:color-palette" width={24} sx={{ color: 'secondary.main' }} />
            <Iconify icon="carbon:color-palette" width={24} sx={{ color: 'info.main' }} />
            <Iconify icon="carbon:color-palette" width={24} sx={{ color: 'success.main' }} />
            <Iconify icon="carbon:color-palette" width={24} sx={{ color: 'warning.main' }} />
            <Iconify icon="carbon:color-palette" width={24} sx={{ color: 'error.main' }} />
          </ComponentBlock>

          <ComponentBlock title="Local Icons">
            <Tooltip title="SvgColor">
              <SvgColor src="/assets/icons/platforms/ic_nextjs.svg" />
            </Tooltip>

            <SvgColor src="/assets/icons/platforms/ic_nextjs.svg" sx={{ color: 'action.active' }} />
            <SvgColor
              src="/assets/icons/platforms/ic_nextjs.svg"
              sx={{ color: 'action.disabled' }}
            />
            <SvgColor src="/assets/icons/platforms/ic_nextjs.svg" sx={{ color: 'primary.main' }} />
            <SvgColor
              src="/assets/icons/platforms/ic_nextjs.svg"
              sx={{ color: 'secondary.main' }}
            />
            <SvgColor src="/assets/icons/platforms/ic_nextjs.svg" sx={{ color: 'info.main' }} />
            <SvgColor src="/assets/icons/platforms/ic_nextjs.svg" sx={{ color: 'success.main' }} />
            <SvgColor src="/assets/icons/platforms/ic_nextjs.svg" sx={{ color: 'warning.main' }} />
            <SvgColor src="/assets/icons/platforms/ic_nextjs.svg" sx={{ color: 'error.main' }} />
          </ComponentBlock>
        </Stack>
      </Container>
    </>
  );
}
