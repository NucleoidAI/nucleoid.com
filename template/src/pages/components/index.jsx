import { Helmet } from 'react-helmet-async';

import ComponentsView from 'src/sections/examples/view';

// ----------------------------------------------------------------------

export default function ComponentsPage() {
  return (
    <>
      <Helmet>
        <title> Components</title>
      </Helmet>

      <ComponentsView />
    </>
  );
}
