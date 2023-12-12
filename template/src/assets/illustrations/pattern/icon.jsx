import { memo } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import { alpha, styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

const StyledContent = styled('div')(({ theme }) => ({
  width: 56,
  height: 56,
  borderRadius: theme.shape.borderRadius * 1.5,
  position: 'relative',
  display: 'flex',
  overflow: 'hidden',
  alignItems: 'center',
  justifyContent: 'center',
  clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0 100%, 0 25%)',
  boxShadow: `inset 0px -4px 6px rgba(0, 0, 0, 0.48)`,
}));

const StyledShape01 = styled('div')(() => ({
  top: -2,
  left: -2,
  width: 16,
  zIndex: 9,
  height: 16,
  borderRadius: '5px',
  position: 'absolute',
  '&:before': {
    top: 0,
    left: 0,
    width: 16,
    height: 16,
    content: '" "',
    borderRadius: '5px',
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
}));

const StyledShape02 = styled('div')(({ theme }) => ({
  top: 2,
  left: -10,
  width: 18,
  zIndex: 8,
  height: 18,
  opacity: 0.24,
  position: 'absolute',
  transform: 'rotate(45deg)',
  backgroundColor: theme.palette.common.black,
}));

// ----------------------------------------------------------------------

function Icon({ content, color, sx, ...other }) {
  return (
    <Box
      sx={{
        p: 1.5,
        borderRadius: 2.5,
        background: `linear-gradient(to bottom, ${alpha(color, 0.24)} -8%, ${alpha(
          color,
          0
        )} 120%)`,
        ...sx,
      }}
      {...other}
    >
      <Box
        sx={{
          bgcolor: color,
          borderRadius: 3,
          boxShadow: (theme) => `0px 24px 48px ${alpha(theme.palette.common.black, 0.4)}`,
        }}
      >
        <StyledContent sx={{ bgcolor: color }}>
          <StyledShape01 sx={{ bgcolor: color }} />
          <StyledShape02 />
          {content}
        </StyledContent>
      </Box>
    </Box>
  );
}

Icon.propTypes = {
  color: PropTypes.string,
  content: PropTypes.node,
  sx: PropTypes.object,
};

export default memo(Icon);
