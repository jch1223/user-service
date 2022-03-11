import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getUserInfo } from '../api';
import { UserInfoSuccess } from '../api/types';
import useFetch from '../hooks/useFetch';

import Layout from './layout';
import Info from '../components/user/info';

import { paths } from './routes/path';

function UserInfoPage() {
  const accessToken = localStorage.getItem('accessToken');

  const { isLoading, isError, data } = useFetch<UserInfoSuccess>(() => getUserInfo(accessToken as string));
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      navigate(paths.home.path);
    }
  }, [navigate, isError]);

  return (
    <Layout title="User Info">
      <Info userInfo={data} isLoading={isLoading} />
    </Layout>
  );
}

export default UserInfoPage;
