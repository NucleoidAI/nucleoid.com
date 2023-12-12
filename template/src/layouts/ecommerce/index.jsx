import PropTypes from 'prop-types';

import Header from './header';

// ----------------------------------------------------------------------

export default function EcommerceLayout({ children }) {
  return (
    <>
      <Header />

      {children}
    </>
  );
}

EcommerceLayout.propTypes = {
  children: PropTypes.node,
};
