import { lazy } from 'react';

// ----------------------------------------------------------------------

const Page404 = lazy(() => import('src/pages/404'));
const Page500 = lazy(() => import('src/pages/500'));

// ----------------------------------------------------------------------

export const errorRoutes = [
  { path: 'error', element: <Page500 /> },
  { path: '404', element: <Page404 /> },
];
