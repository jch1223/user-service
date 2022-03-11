import { Outlet } from 'react-router-dom';

import Layout from '../layout';

function SettingPage() {
  return (
    <Layout title={'Change Password'}>
      <Outlet />
    </Layout>
  );
}

export default SettingPage;
