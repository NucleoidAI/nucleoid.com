import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import Header from './header';
import Footer from './footer';
import { HEADER } from '../config-layout';

// ----------------------------------------------------------------------

export default function MainLayout({
  children,
  headerOnDark = false,
  disabledSpacing = false,
  sx,
  ...other
}) {
  return (
    <Box
      sx={{
        height: 1,
        display: 'flex',
        flexDirection: 'column',
        ...sx,
      }}
      {...other}
    >
      <Header headerOnDark={headerOnDark} />

      <Box component="main" sx={{ flexGrow: 1 }}>
        {!(disabledSpacing || headerOnDark) && (
          <Box
            sx={{
              height: { xs: HEADER.H_MOBILE, md: HEADER.H_DESKTOP },
            }}
          />
        )}

        {children}
      </Box>

      <Footer />
    </Box>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
  headerOnDark: PropTypes.bool,
  disabledSpacing: PropTypes.bool,
  sx: PropTypes.object,
};
