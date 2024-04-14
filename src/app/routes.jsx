import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import AuthGuard from './auth/AuthGuard';
import { authRoles } from './auth/authRoles';
import Loadable from './components/Loadable';
import MatxLayout from './components/MatxLayout/MatxLayout';
import materialRoutes from 'app/views/material-kit/MaterialRoutes';
import { Details } from '@mui/icons-material';

// session pages
const NotFound = Loadable(lazy(() => import('app/views/sessions/NotFound')));
const JwtLogin = Loadable(lazy(() => import('app/views/sessions/JwtLogin')));
const JwtRegister = Loadable(lazy(() => import('app/views/sessions/JwtRegister')));
const ForgotPassword = Loadable(lazy(() => import('app/views/sessions/ForgotPassword')));

// echart page
const AppEchart = Loadable(lazy(() => import('app/views/charts/echarts/AppEchart')));

// dashboard page
const Analytics = Loadable(lazy(() => import('app/views/dashboard/Analytics')));
const Settlement = Loadable(lazy(() => import('app/views/settlement/AppTable')));
const Staff = Loadable(lazy(() => import('app/views/staff/staff')));
const StaffDetails = Loadable(lazy(() => import('app/views/staffDetails/staffDetails')));
const Requests = Loadable(lazy(() => import('app/views/requests/requests')));
const Admin = Loadable(lazy(() => import('app/views/admin/admin')));
const Client = Loadable(lazy(() => import('app/views/client/client')));
const Quote = Loadable(lazy(() => import('app/views/qoute/qoute')));

const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [
      ...materialRoutes,
      // dashboard route
      {
        path: '/dashboard/default',
        element: <Analytics />,
        auth: authRoles.admin
      },
      {
        path: '/settlement',
        element: <Settlement />,
        auth: authRoles.editor
      },
      {
        path: '/staff',
        element: <Staff />,
        auth: authRoles.editor
      },
      {
        path: '/staff/Detail',
        element: <StaffDetails />,
        auth: authRoles.editor
      },
      {
        path: '/requests',
        element: <Requests />,
        auth: authRoles.editor
      },
      {
        path: '/requests/qoute/:id',
        element: <Quote />,
        auth: authRoles.editor
      },
      {
        path: '/client',
        element: <Client />,
        auth: authRoles.editor
      },
      {
        path: '/admin',
        element: <Admin />,
        auth: authRoles.editor
      },
      {
        path: '/charts/echarts',
        element: <AppEchart />,
        auth: authRoles.editor
      }
    ]
  },

  // session pages route
  { path: '/session/404', element: <NotFound /> },
  { path: '/session/signin', element: <JwtLogin /> },
  { path: '/session/signup', element: <JwtRegister /> },
  { path: '/session/forgot-password', element: <ForgotPassword /> },

  { path: '/', element: <Navigate to="dashboard/default" /> },
  { path: '*', element: <NotFound /> }
];

export default routes;
