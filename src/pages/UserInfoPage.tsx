import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getUserInfo } from '../api';
import { UserInfoSuccess } from '../api/types';
import useFetch from '../hooks/useFetch';

import Layout from './Layout';
import Info from '../components/user/Info';

function UserInfoPage() {
  const accessToken = localStorage.getItem('accessToken');

  const { isLoading, isError, data } = useFetch<UserInfoSuccess>(() => getUserInfo(accessToken as string));
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      navigate('/');
    }
  }, [navigate, isError]);

  return (
    <Layout title="User Info">
      <Info userInfo={data} isLoading={isLoading} />
    </Layout>
  );
}

export default UserInfoPage;
