import { Routes as ReactRouterRoutes, Route } from 'react-router-dom';

import HomePage from './HomePage';
import UserInfoPage from './UserInfoPage';
import NotFoundPage from './NotFoundPage';

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path={'/'} element={<HomePage />} />
      <Route path={'/user-info'} element={<UserInfoPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </ReactRouterRoutes>
  );
};
