import { Helmet } from 'react-helmet-async';

import MarkdownView from 'src/sections/examples/markdown-view';

// ----------------------------------------------------------------------

export default function MarkdownPage() {
  return (
    <>
      <Helmet>
        <title> Extra Components: Markdown</title>
      </Helmet>

      <MarkdownView />
    </>
  );
}
