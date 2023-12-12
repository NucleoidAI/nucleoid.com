import { Helmet } from 'react-helmet-async';

import MegaMenuView from 'src/sections/examples/mega-menu-view';

// ----------------------------------------------------------------------

export default function MegaMenuPage() {
  return (
    <>
      <Helmet>
        <title> Components: Mega Menu</title>
      </Helmet>

      <MegaMenuView />
    </>
  );
}
