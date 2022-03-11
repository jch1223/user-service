import { FormEventHandler, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

import { changePassword } from '../../api';
import { ChangePasswordSuccess } from '../../api/types';
import { useSettingContext } from '../app/SettingContext';
import useFetchMutation from '../../hooks/useFetchMutation';

import Button from '../common/Button';
import Input from '../common/Input';

import { paths } from '../../pages/routes/path';

function ChangePassword() {
  const { email, confirmToken, setEmail, setConfirmToken } = useSettingContext();
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('');

  const { mutate, isLoading, isError, error, data } = useFetchMutation<ChangePasswordSuccess>(() =>
    changePassword({ email, confirmToken, newPassword, newPasswordConfirm })
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!email || !confirmToken) {
      navigate(paths.setting.path);
    }
  }, [navigate, email, confirmToken]);

  useEffect(() => {
    if (isError) {
      message.error(error);
    }
  }, [isError, error]);

  useEffect(() => {
    if (data) {
      alert('비밀번호가 변경되었습니다.');
      setEmail('');
      setConfirmToken('');
      navigate(paths.userInfo.path);
    }
  }, [navigate, setEmail, setConfirmToken, data]);

  const changePasswordSubmitHandler: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    mutate();
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={changePasswordSubmitHandler}>
      <div className="-space-y-px">
        <div>
          <Input type="email" autoComplete="username" className="hidden" defaultValue={email} />
          <Input
            id="new-password"
            type="password"
            required
            autoComplete="new-password"
            className="rounded-t-md"
            placeholder="New Password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
          />
        </div>
        <div>
          <Input
            id="new-password-confirm"
            type="password"
            required
            autoComplete="new-password"
            className="rounded-b-md"
            placeholder="New Password Confirm"
            value={newPasswordConfirm}
            onChange={e => setNewPasswordConfirm(e.target.value)}
          />
        </div>
      </div>

      <div>
        <Button isLoading={isLoading}>Change Password</Button>
      </div>
    </form>
  );
}

export default ChangePassword;
