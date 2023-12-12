import { lazy } from 'react';
import { Outlet } from 'react-router-dom';

import SimpleLayout from 'src/layouts/simple';
import CompactLayout from 'src/layouts/compact';

// ----------------------------------------------------------------------

const ComingSoonPage = lazy(() => import('src/pages/coming-soon'));
const MaintenancePage = lazy(() => import('src/pages/maintenance'));
const PaymentPage = lazy(() => import('src/pages/payment'));
const Pricing01Page = lazy(() => import('src/pages/pricing-01'));
const Pricing02Page = lazy(() => import('src/pages/pricing-02'));

// ----------------------------------------------------------------------

export const commonRoutes = [
  {
    element: (
      <SimpleLayout>
        <Outlet />
      </SimpleLayout>
    ),
    children: [
      { path: 'payment', element: <PaymentPage /> },
      { path: 'pricing-01', element: <Pricing01Page /> },
      { path: 'pricing-02', element: <Pricing02Page /> },
    ],
  },
  {
    element: (
      <CompactLayout>
        <Outlet />
      </CompactLayout>
    ),
    children: [
      { path: 'coming-soon', element: <ComingSoonPage /> },
      { path: 'maintenance', element: <MaintenancePage /> },
    ],
  },
];
