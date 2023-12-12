import { Helmet } from 'react-helmet-async';

import ScrollView from 'src/sections/examples/scroll-view';

// ----------------------------------------------------------------------

export default function ScrollbarPage() {
  return (
    <>
      <Helmet>
        <title> Components: Scrollbar</title>
      </Helmet>

      <ScrollView />
    </>
  );
}
