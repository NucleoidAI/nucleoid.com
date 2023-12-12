import { memo } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

// ----------------------------------------------------------------------

function Dot({ size = 24, color = 'primary', sx }) {
  return (
    <Box
      sx={{
        width: size,
        height: size,
        zIndex: 10,
        position: 'absolute',
        borderRadius: '50%',
        background: (theme) =>
          `linear-gradient(to bottom, ${theme.palette[color].light}, ${theme.palette[color].main})`,
        boxShadow: (theme) => `inset 0px -2px 4px ${theme.palette[color].darker}`,
        ...sx,
      }}
    />
  );
}

Dot.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  sx: PropTypes.object,
};
export default memo(Dot);
