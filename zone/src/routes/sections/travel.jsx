import { lazy } from 'react';
import { Outlet } from 'react-router-dom';

import MainLayout from 'src/layouts/main';

// ----------------------------------------------------------------------

const BlogPage = lazy(() => import('src/pages/travel/posts'));
const PostPage = lazy(() => import('src/pages/travel/post'));
const TourPage = lazy(() => import('src/pages/travel/tour'));
const AboutPage = lazy(() => import('src/pages/travel/about'));
const ToursPage = lazy(() => import('src/pages/travel/tours'));
const ContactPage = lazy(() => import('src/pages/travel/contact'));
const LandingPage = lazy(() => import('src/pages/travel/landing'));
const CheckoutPage = lazy(() => import('src/pages/travel/checkout'));
const OrderCompletedPage = lazy(() => import('src/pages/travel/order-completed'));

// ----------------------------------------------------------------------

export const travelRoutes = [
  {
    path: 'travel',
    children: [
      {
        element: (
          <MainLayout headerOnDark>
            <LandingPage />
          </MainLayout>
        ),
        index: true,
      },
      {
        element: (
          <MainLayout>
            <Outlet />
          </MainLayout>
        ),
        children: [
          { path: 'tours', element: <ToursPage /> },
          { path: 'tour', element: <TourPage /> },
          { path: 'checkout', element: <CheckoutPage /> },
          { path: 'order-completed', element: <OrderCompletedPage /> },
          { path: 'posts', element: <BlogPage /> },
          { path: 'post', element: <PostPage /> },
          { path: 'about', element: <AboutPage /> },
          { path: 'contact', element: <ContactPage /> },
        ],
      },
    ],
  },
];
