import { FormEventHandler, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

import { checkAuthCode } from '../../api';
import { CheckAuthCodeSuccess } from '../../api/types';
import { useSettingContext } from '../app/SettingContext';
import useFetchMutation from '../../hooks/useFetchMutation';

import { paths } from '../../pages/routes/path';
import Button from '../common/Button';
import Input from '../common/Input';
import TimeCounter from './common/TimeCounter';

function VerificationAuthCode() {
  const [authCode, setAuthCode] = useState('');
  const { email, issueToken, remainMillisecond, setIssueToken, setConfirmToken } = useSettingContext();
  const { mutate, isLoading, isError, error, data } = useFetchMutation<CheckAuthCodeSuccess>(() =>
    checkAuthCode({ email, authCode, issueToken })
  );
  const navigate = useNavigate();
  const authCodeInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!email || !issueToken) {
      navigate(paths.setting.path);
    }
  }, [navigate, email, issueToken]);

  useEffect(() => {
    if (isError) {
      message.error(error);
      (authCodeInput.current as HTMLInputElement).focus();
    }
  }, [isError, error]);

  useEffect(() => {
    if (data) {
      setConfirmToken(data.confirmToken);
      setIssueToken('');
      navigate(paths.setting.changePassword.path);
    }
  }, [navigate, setConfirmToken, setIssueToken, data]);

  const authCodeSubmitHandler: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    mutate();
  };

  return (
    <>
      <h2 className="text-center text-2xl font-extrabold">인증 코드 입력</h2>
      <form className="space-y-6" onSubmit={authCodeSubmitHandler}>
        <div className="-space-y-px">
          <div className="relative">
            <Input
              inputRef={authCodeInput}
              id="auth-code"
              name="authCode"
              required
              className="rounded-md"
              placeholder="Auth Code"
              value={authCode}
              onChange={e => setAuthCode(e.target.value)}
            />
            <span className="absolute right-0 text-red-500 px-3 py-2 z-50">
              <TimeCounter millisecond={remainMillisecond} />
            </span>
          </div>
        </div>

        <div>
          <Button isLoading={isLoading}> 다음 </Button>
        </div>
      </form>
    </>
  );
}

export default VerificationAuthCode;
