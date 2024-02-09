import { memo } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

// ----------------------------------------------------------------------

function Label({ icon, text, sx, ...other }) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        px: 2,
        py: 1.25,
        fontSize: 15,
        borderRadius: 2,
        letterSpacing: -0.5,
        color: 'common.black',
        bgcolor: 'common.white',
        fontWeight: 'fontWeightBold',
        boxShadow: (theme) =>
          `0px 24px 48px rgba(0, 0, 0, 0.8), inset 0px -4px 10px ${theme.palette.grey[600]}`,
        '& > div': { lineHeight: 0 },
        '& svg': { width: 44, height: 44 },
        ...sx,
      }}
      {...other}
    >
      {icon}
      <Box sx={{ ml: 1 }}>{text}</Box>
    </Stack>
  );
}

Label.propTypes = {
  icon: PropTypes.node,
  sx: PropTypes.object,
  text: PropTypes.string,
};

export default memo(Label);
