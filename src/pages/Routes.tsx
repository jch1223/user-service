import { Routes as ReactRouterRoutes, Route } from 'react-router-dom';

import HomePage from './HomePage';
import UserInfoPage from './UserInfoPage';
import SettingPage from './SettingPage';
import NotFoundPage from './NotFoundPage';

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path={'/'} element={<HomePage />} />
      <Route path={'/user-info'} element={<UserInfoPage />} />
      <Route path={'/setting'} element={<SettingPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </ReactRouterRoutes>
  );
};
