import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';

import NavList from './nav-list';

// ----------------------------------------------------------------------

export default function NavDesktop({ data, sx, ...other }) {
  return (
    <Stack
      component="nav"
      direction="row"
      spacing={5}
      sx={{
        height: 1,
        ...sx,
      }}
      {...other}
    >
      {data.map((list) => (
        <NavList key={list.title} data={list} />
      ))}
    </Stack>
  );
}

NavDesktop.propTypes = {
  data: PropTypes.array,
  sx: PropTypes.object,
};
