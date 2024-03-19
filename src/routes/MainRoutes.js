import React, { lazy } from 'react';

// project import
import MainLayout from 'layout/MainLayout';
import Loadable from 'component/Loadable';

const DashboardDefault = Loadable(lazy(() => import('../views/Dashboard')));

const UtilsTypography = Loadable(lazy(() => import('../views/Utils/Typography')));

const ECA = Loadable(lazy(() => import('../views/Utils/Typography/eca.js')));

const LICA = Loadable(lazy(() => import('../views/Utils/Typography/lica.js')));

const SamplePage = Loadable(lazy(() => import('../views/SamplePage')));

const ContactPage = Loadable(lazy(() => import('../views/Contact')));

const ChatPage = Loadable(lazy(() => import('../views/ChatBot')));

// ==============================|| MAIN ROUTES ||============================== //

import { Navigate } from 'react-router-dom';

const isAuthenticated = localStorage.getItem('isAuthenticated');

    const MainRoutes = {
      path: '/',
      element: isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />,
      children: [
        {
          path: '/',
          element: <DashboardDefault />
        },
    { path: '/sample-page', element: <SamplePage /> },
    { path: '/contact-page', element: <ContactPage /> },
    { path: '/utils/util-typography', element: <UtilsTypography /> },
   { path: '/utils/util-typography/eca', element: <ECA /> },
    { path: '/utils/util-typography/lica', element: <LICA /> },
    { path: '/chat-page', element: <ChatPage /> }
  ]
};

export default MainRoutes;