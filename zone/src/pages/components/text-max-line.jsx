import { Helmet } from 'react-helmet-async';

import TextMaxLineView from 'src/sections/examples/text-max-line-view';

// ----------------------------------------------------------------------

export default function TextMaxLinePage() {
  return (
    <>
      <Helmet>
        <title> Components: Text Max Line</title>
      </Helmet>

      <TextMaxLineView />
    </>
  );
}
