import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

import { logout } from '../../api';
import { LogoutSuccess } from '../../api/types';
import useFetchMutation from '../../hooks/useFetchMutation';

import Button from '../common/Button';

import { paths } from '../../pages/routes/path';

function LogOut() {
  const accessToken = localStorage.getItem('accessToken');

  const { mutate, isLoading, isError, error, data } = useFetchMutation<LogoutSuccess>(() =>
    logout(accessToken as string)
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      message.error(error);
    }
  }, [isError, error]);

  useEffect(() => {
    if (data) {
      localStorage.setItem('accessToken', '');
      navigate(paths.home.path);
    }
  }, [navigate, data]);

  return (
    <Button className="bg-white text-red-500 py-0 hover:bg-white" isLoading={isLoading} onClick={() => mutate()}>
      LogOut
    </Button>
  );
}

export default LogOut;
