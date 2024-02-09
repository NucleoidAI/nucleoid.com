import { useEffect } from 'react';
import PropTypes from 'prop-types';

import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import { paths } from 'src/routes/paths';
import { usePathname } from 'src/routes/hooks';

import { useBoolean } from 'src/hooks/use-boolean';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';

import NavList from './nav-list';
import { NAV } from '../../../config-layout';

// ----------------------------------------------------------------------

export default function NavMobile({ data }) {
  const pathname = usePathname();

  const mobileOpen = useBoolean();

  useEffect(() => {
    if (mobileOpen.value) {
      mobileOpen.onFalse();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <IconButton onClick={mobileOpen.onTrue} sx={{ ml: 1, color: 'inherit' }}>
        <Iconify icon="carbon:menu" />
      </IconButton>

      <Drawer
        open={mobileOpen.value}
        onClose={mobileOpen.onFalse}
        PaperProps={{
          sx: {
            pb: 5,
            width: NAV.W_VERTICAL,
          },
        }}
      >
        <Scrollbar>
          <Logo sx={{ mx: 2.5, my: 3 }} />

          <List component="nav" disablePadding>
            {data.map((list) => (
              <NavList key={list.title} data={list} />
            ))}
          </List>

          <Stack spacing={1.5} sx={{ p: 3 }}>
            <Button
              fullWidth
              variant="contained"
              color="inherit"
              href={paths.zoneStore}
              target="_blank"
              rel="noopener"
            >
              Buy Now
            </Button>
          </Stack>
        </Scrollbar>
      </Drawer>
    </>
  );
}

NavMobile.propTypes = {
  data: PropTypes.array,
};
