import { Routes as ReactRouterRoutes, Route } from 'react-router-dom';

import HomePage from '../HomePage';
import UserInfoPage from '../UserInfoPage';
import SettingPage from '../SettingPage';
import NotFoundPage from '../NotFoundPage';

import { paths } from './path';

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path={paths.home.path} element={<HomePage />} />
      <Route path={paths.userInfo.path} element={<UserInfoPage />} />
      <Route path={paths.setting.path} element={<SettingPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </ReactRouterRoutes>
  );
};
