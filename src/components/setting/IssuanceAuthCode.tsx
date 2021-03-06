import { FormEventHandler, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

import { requestVerificationCode } from '../../api';
import { RequestVerificationCodeSuccess } from '../../api/types';
import { useSettingContext } from '../app/SettingContext';
import useFetchMutation from '../../hooks/useFetchMutation';

import Button from '../common/Button';
import Input from '../common/Input';

import { paths } from '../../pages/routes/path';

function IssuanceAuthCode() {
  const { email, setEmail, setIssueToken, setRemainMillisecond } = useSettingContext();
  const { mutate, isLoading, isError, error, data } = useFetchMutation<RequestVerificationCodeSuccess>(() =>
    requestVerificationCode(email)
  );
  const navigate = useNavigate();
  const emailInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isError) {
      message.error(error);
      (emailInput.current as HTMLInputElement).focus();
    }
  }, [isError, error]);

  useEffect(() => {
    if (data) {
      setIssueToken(data.issueToken);
      setRemainMillisecond(data.remainMillisecond);
      navigate(paths.setting.verificationAuthCode.path);
    }
  }, [navigate, setIssueToken, setRemainMillisecond, data, email]);

  const emailSubmitHandler: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    mutate();
  };

  return (
    <>
      <h2 className="text-center text-2xl font-extrabold">인증 코드 발급</h2>
      <form className="space-y-6" onSubmit={emailSubmitHandler}>
        <div className="-space-y-px">
          <div>
            <Input
              inputRef={emailInput}
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="rounded-md"
              placeholder="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div>
          <Button isLoading={isLoading}> 다음 </Button>
        </div>
      </form>
    </>
  );
}

export default IssuanceAuthCode;
