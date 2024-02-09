import { Helmet } from 'react-helmet-async';

import IconsView from 'src/sections/examples/icons-view';

// ----------------------------------------------------------------------

export default function IconsPage() {
  return (
    <>
      <Helmet>
        <title> Components: Icons</title>
      </Helmet>

      <IconsView />
    </>
  );
}
