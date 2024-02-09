import { Helmet } from 'react-helmet-async';

import PlayerView from 'src/sections/examples/player-view';

// ----------------------------------------------------------------------

export default function PlayerPage() {
  return (
    <>
      <Helmet>
        <title> Components: Player</title>
      </Helmet>

      <PlayerView />
    </>
  );
}
